import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />} />
    </Routes>
  );
}
