import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
   
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;