import { useRef, useState, useEffect } from "react";
import Images from "./Images";
import useFetchImg from "../hooks/useFetchImg";

export default function ImageContainer() {
  // using custom hook for api request
  const [images, setImages] = useFetchImg();

  // useState for taking new image {Handle input box in return part in this page}
  const [newImg, setNewImg] = useState("");

  // useRef for focusing on input box
  const inputRef = useRef(null);

  // componentDidMount on input box focusing
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // deleting the photo {Handle in Images/Image component}
  function deleting(idx) {
    setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
  }

  // adding new image {Hndle in return part in this page}
  function addImg() {
    setImages([newImg, ...images]);
    setNewImg("");
  }

  // Returning the main Jsx
  return (
    <section>
      <div className="flex  justify-around flex-wrap">
        <Images images={images} deleting={deleting} />
      </div>

      <div className="flex justify-around my-5">
        <input
          ref={inputRef}
          type="text"
          className="p-2 border border-gray-800 shadow rounded w-full"
          onChange={(event) => {
            setNewImg(event.target.value);
          }}
          value={newImg}
        />
        <button
          className={`p-2 ${
            newImg ? "bg-green-600" : "bg-gray-600"
          } text-white rounded mx-3`}
          onClick={addImg}
          disabled={!newImg}
        >
          Add
        </button>
      </div>
    </section>
  );
}
