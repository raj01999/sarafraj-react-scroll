import { useState, useEffect } from "react";

export default function useFetchImg() {
  // useState for image list - it will come from api
  const [images, setImages] = useState([]);

  // Fetching Data from Api {componentDidMount}
  useEffect(() => {
    fetch(process.env.REACT_APP_ACCESS_URL + process.env.REACT_APP_ACCESS_KEY)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        try {
          const list = data.map((obj) => {
            return obj.urls.regular;
          });
          setImages(list);
        } catch {
          console.log("Some Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [images, setImages];
}
