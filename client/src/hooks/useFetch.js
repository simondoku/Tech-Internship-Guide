import { useState, useEffect } from "react";

export const useFetch = (path) => {
  const [data, setData] = useState([{}]);
  const fetchPath = "http://localhost:4000/" + path
  console.log(fetchPath);

  useEffect(() => {
      fetch(fetchPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
  }, [fetchPath]);

  return(data);
};