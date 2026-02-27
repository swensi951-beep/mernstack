import React from "react";
import Hero from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import PromoBannerSlider from "../components/PromoBannerSlider";
import ProductSection from "../components/ProductSection";
import DealSection from "../components/DealSection";
import CategorySection from "../components/CategorySection";

import OrganicFeatures from "../components/OrganicFeatures";


const Home = () => {
  return (
    <>
      <Hero />
      <CategorySlider/>
      <PromoBannerSlider />
      <ProductSection />
      <DealSection />
      <CategorySection />
      <OrganicFeatures />
    </>
  );
};

export default Home;