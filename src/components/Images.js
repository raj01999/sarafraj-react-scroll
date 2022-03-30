import React from "react";
import Image from "./Image";

// Showing component {which running the map function for every image arry element}
export default function Images({ images, deleting }) {
  // return the main jsx
  return images.map((img, idx) => {
    return (
      <Image key={img.toString()} img={img} idx={idx} deleting={deleting} />
    );
  });
}
