import { useState } from "react";
import "./assets/css/style.css";
import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";

export default function App() {
  const [searchKey, setSearchKey] = useState("nature");
  const handleSearch = (val) => {
    setSearchKey(val);
    // console.log(searchKey);
  };
  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <section className="flex justify-center">
        <div className="w-10/12">
          <ImageContainer searchKey={searchKey} />
        </div>
      </section>
    </>
  );
}
