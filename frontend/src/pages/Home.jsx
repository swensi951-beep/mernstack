import React from "react";

import Hero from "../components/Hero";
import About_Section from "../components/About_Section";
import ProductList from "../components/ProductList";
import BlogSection from "../components/BlogSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";



const Home = () => {
  return (
    <>
    <Navbar />
     <Hero />
     <About_Section/>
     <ProductList />
     <BlogSection />
      <ReviewSection />
      <ContactSection />
     <Footer />
    </>
  );
};

export default Home;