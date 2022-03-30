import { useState } from "react";
import Images from "./Images";

export default function ImageContainer() {
  // useState for image list - it will come from api
  const [images, setImages] = useState([
    "https://media.istockphoto.com/photos/cityscape-of-shinbashi-area-viewing-street-picture-id1302070873?b=1&k=20&m=1302070873&s=170667a&w=0&h=bYZAmbBvY1Bs7FOBwM60JbXFRfHTa5oE7JynMWY-hZE=",

    "https://media.istockphoto.com/photos/yellow-with-orange-sunburst-background-picture-id1169942971?b=1&k=20&m=1169942971&s=170667a&w=0&h=q7NrkNRDCf9wtugfqrmTXN4o4HzNeuI3yVFSEzB66j0=",

    "https://media.istockphoto.com/photos/manga-painter-picture-id157569595?b=1&k=20&m=157569595&s=170667a&w=0&h=XFiLySfAbYMbZYtIwjWEh7v-w1UPd9rkYGiSPscZ3_A=",

    "https://media.istockphoto.com/photos/japanese-couple-as-manga-style-picture-id1153556065?b=1&k=20&m=1153556065&s=170667a&w=0&h=xmabnBKPpnWPmWXj9xErZmD-38kn6GzyNO07aJpFhWU=",
  ]);

  // useState for taking new image {Handle input box in return part in this page}
  const [newImg, setNewImg] = useState("");

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
