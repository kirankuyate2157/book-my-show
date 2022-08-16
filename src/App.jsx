import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/Home.my.layout";
import Movie from "./components/pages/Movie.page";
import PlayLayout from "./layouts/Plays.layout";
// HOC
// import MovieHOC from "./HOC/Movie.HOC";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeLayout />} />
      <Route exact path="/movie/:id" element={<Movie />} />
      <Route exact path="/plays/" element={<PlayLayout />} />
    </Routes>
  );
}
