import "./assets/css/style.css";
import ImageContainer from "./components/ImageContainer";

export default function App() {
  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">My Web</div>
        </div>
        <ImageContainer />
      </div>
    </section>
  );
}
