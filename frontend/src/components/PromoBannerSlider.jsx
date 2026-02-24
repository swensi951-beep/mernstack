import React, { useState, useEffect } from "react";
import "./PromoBannerSlider.css";

import sale1 from "../assets/images/sale1.png";
import sale2 from "../assets/images/sale2.png";
import sale3 from "../assets/images/sale3.png";
import sale4 from "../assets/images/farmer.jpg";
import sale5 from "../assets/images/farmer2.jpg";
import shape4 from "../assets/images/shape4.png";

const PromoBannerSlider = () => {

  const images = [sale1, sale4, sale5];
  const [index, setIndex] = useState(0);

  /* Previous */
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* Next */
  const nextSlide = () => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };


  /* AUTO SLIDER */
  useEffect(() => {

  const timer = setInterval(() => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(timer);

}, [images.length]);

  return (
    <div className="promo-wrapper">

      {/* Background Shape */}
      <img src={shape4} className="promo-shape" alt="" />

      <div className="promo-row">

        {/* MAIN SLIDER CARD */}
        <div className="promo-card slider-card">

          <img src={images[index]} alt="slide" />

          <div className="promo-text">
            <h3>100% Pure Natural Vegetable</h3>
            <p>Fresh Vegetables Sale 30% Off</p>
          </div>

          <div className="promo-arrows">
            <button onClick={prevSlide}>❮</button>
            <button onClick={nextSlide}>❯</button>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="promo-card">

          <img src={sale2} alt="sale" />

          <div className="promo-text">
            <h3>Fresh Vegetables</h3>
            <p>Up to 25% Off</p>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="promo-card">

          <img src={sale3} alt="sale" />

          <div className="promo-text">
            <h3>Organic Fruits</h3>
            <p>Special Offer</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PromoBannerSlider;