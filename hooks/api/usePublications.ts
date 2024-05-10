import React, { useEffect, useState } from "react";
import { getPublications } from "../../api/feed";

export default function usePublications() {
  const [publications, setPublications] = useState([]);

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

  return { publications };
}
