import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />} />
    </Routes>
  );
}
