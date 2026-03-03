import React from "react";
import Hero from "../components/Hero";
import CategorySlider from "../components/CategorySlider";
import PromoBannerSlider from "../components/PromoBannerSlider";
import ProductSection from "../components/ProductSection";
import DealSection from "../components/DealSection";
import CategorySection from "../components/CategorySection";

import OrganicFeatures from "../components/OrganicFeatures";
import DiscountSection from "../components/DiscountSection";
import OrganicProtein from "../components/OrganicProtein";
import WeeklyDeals from "../components/WeeklyDeals";
import DeliveryBanner from "../components/DeliveryBanner";
import TestimonialSlider from "../components/TestimonialSlider";
import TeamSection from "../components/TeamSection";
import OrganicProducts from "../components/OrganicProducts";
import FeaturesAndInsta from "../components/FeaturesAndInsta";




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
      <DiscountSection />
      <OrganicProtein />
      <WeeklyDeals />
      <DeliveryBanner />
      <TestimonialSlider />
      <TeamSection />
      <OrganicProducts />
      <FeaturesAndInsta />
    </>
  );
};

export default Home;