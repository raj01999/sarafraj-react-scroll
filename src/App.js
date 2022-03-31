import "./assets/css/style.css";
import ImageContainer from "./components/ImageContainer";

export default function App() {
  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <ImageContainer searchKey={"anime"} />
      </div>
    </section>
  );
}
