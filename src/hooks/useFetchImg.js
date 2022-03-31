import { useState, useEffect, useLayoutEffect } from "react";

const API = process.env.REACT_APP_ACCESS_API;
const KEY = process.env.REACT_APP_ACCESS_KEY;

export default function useFetchImg(page, searchKey, setPage) {
  // useState for image list - it will come from api
  const [images, setImages] = useState([]);

  // for loading moment on the page
  const [isLoading, setIsLoading] = useState(true);

  // api request function
  const fetchApi = (checker) => {
    fetch(
      `${API}search/photos?client_id=${KEY}&page=${page}&query=${searchKey}`
    )
      .then((resp) => {
        // console.log(page, searchKey); // Remove
        return resp.json();
      })

      .then((data) => {
        // console.log(data); //Remove
        try {
          const list = data.results.map((obj) => {
            return obj.urls.regular;
          });

          if (!checker) {
            setImages([...images, ...list]);
          } else {
            setImages([...list]);
          }

          setIsLoading(false);
        } catch {
          console.log("Some Error");
          setImages([
            "https://uploads.toptal.io/blog/image/123907/toptal-blog-image-1503383072401-63f695772c7da29bae73732818252d7d.png",
          ]);

          setIsLoading(false);
        }
      })

      .catch((err) => {
        console.log(err);

        setImages([
          "https://uploads.toptal.io/blog/image/123907/toptal-blog-image-1503383072401-63f695772c7da29bae73732818252d7d.png",
        ]);

        setIsLoading(false);
      });
  };

  // Fetching Data from Api {on  page change}
  useEffect(() => {
    setIsLoading(true);
    fetchApi();
  }, [page]);

  // Fetching Data from Api {on search key change}
  useLayoutEffect(() => {
    if (page !== 1) {
      setPage(1);
      setImages([]);
    } else {
      if (searchKey !== "nature") {
        const checker = true;
        fetchApi(checker);
      }
    }
  }, [searchKey]);

  return [images, setImages, isLoading];
}
