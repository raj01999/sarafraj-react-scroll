import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

// Showing component {which running the map function for every image arry element}
export default function Images({ images, setImages, page, setPage }) {
  // deleting the photo {Handle in Images/Image component}
  function deleting(idx) {
    setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
  }

  // return the main jsx
  return (
    <InfiniteScroll
      className="my-5 flex justify-around flex-wrap"
      dataLength={images.length}
      next={() => {
        setPage(page + 1);
      }}
      hasMore="true"
    >
      {images.map((img, idx) => {
        return (
          <Image key={idx.toString()} img={img} idx={idx} deleting={deleting} />
        );
      })}
    </InfiniteScroll>
  );
}
