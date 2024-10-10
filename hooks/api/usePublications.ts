import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectFeed } from "../../store/slices/feedSlice";
import { useGetPublicationsQuery } from "../../store/api/publicationsApi";
import { PostObject } from "../../@types/common/PostContent";

export default function usePublications() {
  const { sorting, searchTerm } = useAppSelector(selectFeed);
  const {data: publications} = useGetPublicationsQuery()


  const filteredPublications = publications?.filter((p: PostObject) => {
    return !!sorting.includes(p.postCategory);
  });

  const searchedPublications = searchTerm
    ? filteredPublications.filter((p: PostObject) => {
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
