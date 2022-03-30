import React from "react";
import { useState } from "react";

// Randering the images
export default function Image({ img, idx, deleting }) {
  // useState for on Hover over on picture {hiding the delete cross btn}
  const [isHover, setIsHover] = useState(false);

  // return the main jsx
  return (
    <div className="flex w-1/4 my-2 mx-2">
      <div
        className="relative"
        onMouseOver={() => {
          setIsHover(idx);
        }}
        onMouseLeave={() => {
          setIsHover(null);
        }}
      >
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-50 hover:opacity-100 ${
            isHover === idx ? "" : "hidden"
          }`}
          onClick={() => {
            deleting(idx);
          }}
        ></i>
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
