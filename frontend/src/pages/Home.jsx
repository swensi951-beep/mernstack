import React from "react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSlider";
import CategorySlider from "../components/CategorySlider";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <CategorySlider/>
    </>
  );
};

export default Home;