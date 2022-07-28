import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import Movie from "./components/pages/Movie.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />} />
      <Route exact path="/movie" element={<Movie />} />
    </Routes>
  );
}
