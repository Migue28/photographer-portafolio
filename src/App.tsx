import "./App.css";
import Navbar from "./components/Navbar";
import PhotoCard from "./components/PhotoCard";

import city from './assets/images/city.jpg'

function App() {
  return (
    <>
      <Navbar name="SKYLA RANGER" />
      <PhotoCard source={city} />
    </>
  );
}

export default App;
