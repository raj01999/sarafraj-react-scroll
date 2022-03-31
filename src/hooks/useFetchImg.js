import { useState, useEffect } from "react";

const API = process.env.REACT_APP_ACCESS_API;
const KEY = process.env.REACT_APP_ACCESS_KEY;

export default function useFetchImg(page, searchKey) {
  // useState for image list - it will come from api
  const [images, setImages] = useState([]);

  // for loading moment on the page
  const [isLoading, setIsLoading] = useState(true);

  // Fetching Data from Api {componentDidMount}
  useEffect(() => {
    setIsLoading(true);

    fetch(
      `${API}search/photos?client_id=${KEY}&page=${page}&query=${searchKey}`
    )
      .then((resp) => {
        return resp.json();
      })

      .then((data) => {
        console.log(data); //remove
        try {
          const list = data.results.map((obj) => {
            return obj.urls.regular;
          });
          setImages([...images, ...list]);

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
  }, [page]);

  return [images, setImages, isLoading];
}
