import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import { city, woman, mountain, forest } from "./assets/images/index";
import Footer from "./components/Footer";

const photoSource = [city, woman, mountain, forest, forest, mountain, woman, city]

function App() {
  return (
    <>
      <Navbar name="SKYLA RANGER" />
      <PhotoGallery photoSource={photoSource} />
      <Footer />
    </>
  );
}

export default App;
