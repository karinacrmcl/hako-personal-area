import React, { useEffect, useState } from "react";
import { getCommentsByPostId, getPublications } from "../../api/publications";
import { useAppSelector } from "../../store/hooks";
import { selectFeed } from "../../store/slices/feedSlice";
import { PostObject } from "../../@types/common/PostContent";

export default function usePublications() {
  const [publications, setPublications] = useState<PostObject[]>([]);
  const { sorting, searchTerm } = useAppSelector(selectFeed);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const publicationsData = await getPublications();
        setPublications(publicationsData);
      } catch (error) {
        console.error("Error fetching publications: ", error);
      }
    };

    fetchPublications();
  }, []);

  const filteredPublications = publications.filter((p) => {
    return !!sorting.includes(p.postCategory);
  });

  const searchedPublications = searchTerm
    ? filteredPublications.filter((p) => {
        const combinedString = [
          p.content,
          p.files.filter((file) => file).join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return combinedString.includes(searchTerm.toLowerCase());
      })
    : filteredPublications;

  return { publications: searchedPublications };
}
