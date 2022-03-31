import { useState } from "react";
import Images from "./Images";
import useFetchImg from "../hooks/useFetchImg";
import Loading from "./Loading";

export default function ImageContainer({ searchKey }) {
  // page no for fetch api
  const [page, setPage] = useState(1);

  // using custom hook for api request
  const [images, setImages, isLoading] = useFetchImg(page, searchKey);

  // Returning the main Jsx
  return (
    <section>
      <Images
        images={images}
        setImages={setImages}
        page={page}
        setPage={setPage}
      />

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "end",
        }}
      ></div>
      {isLoading && <Loading />}
    </section>
  );
}
