import React, { useRef } from "react";
import { useState } from "react";

// Randering the images
export default function Image({ img, idx, deleting }) {
  // useState for on Hover over on picture {hiding the delete cross btn}
  const [isHover, setIsHover] = useState(false);

  // for taking the the pic div {boxShadow changing while hovering}
  const hoverRef = useRef(null);

  // return the main jsx
  return (
    <div
      className="relative m-1 p-1 border"
      style={{ width: "17rem" }}
      ref={hoverRef}
      onMouseOver={() => {
        setIsHover(true);
        hoverRef.current.style.boxShadow = "0 4px 16px 0 rgba(0,0,0,0.2)";
      }}
      onMouseLeave={() => {
        setIsHover(false);
        hoverRef.current.style.boxShadow = "";
      }}
    >
      <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-50 hover:opacity-100 ${
          isHover ? "" : "hidden"
        }`}
        style={{ right: "10px" }}
        onClick={() => {
          deleting(idx);
        }}
      ></i>
      <a
        href={img}
        target="_blank"
        rel="noreferrer"
        onMouseOver={(e) => {
          e.target.style.cursor = "zoom-in";
        }}
      >
        <img src={img} alt="img" style={{ width: "100%" }} />
      </a>
    </div>
  );
}
