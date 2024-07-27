import "./App.css";
import Navbar from "./components/Navbar";
import PhotoCard from "./components/PhotoCard";

import { city, woman, mountain, forest } from "./assets/images/index";

function App() {
  return (
    <>
      <Navbar name="SKYLA RANGER" />
      <PhotoCard source={city} />
      <PhotoCard source={woman} />
      <PhotoCard source={mountain} />
      <PhotoCard source={forest} />
    </>
  );
}

export default App;
