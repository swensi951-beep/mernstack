import CategorySlider from "./components/CategorySlider";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import PromoBannerSlider from "./components/PromoBannerSlider";
import TopBar from "./components/TopBar";


function App() {
  return (
    <>
      <TopBar />
      <Navbar/>
     <Hero/>
     <CategorySlider />
    <PromoBannerSlider />
    <ProductSection />
   
      {/* Baaki components niche */}
    </>
  );
}

export default App;