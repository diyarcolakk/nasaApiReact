import NasaApi from "./components/nasaApi/nasaApi.component";
import { Routes, Router, Outer } from "react-router-dom";
import Navbar from "./components/navbar/navbar-component";

const App = () => {
  return (
    <>
      <Navbar />
      <NasaApi />
    </>
  );
};

export default App;
