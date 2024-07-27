import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import { city, woman, mountain, forest } from "./assets/images/index";

const photoSource = [city, woman, mountain, forest, forest, mountain, woman, city]

function App() {
  return (
    <>
      <Navbar name="SKYLA RANGER" />
      <PhotoGallery photoSource={photoSource} />
    </>
  );
}

export default App;
