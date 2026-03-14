import React from 'react';
import './Hero.css'; // Make sure the path to your CSS file is correct
import shape5 from "../assets/images/Hero/shape5.png";

const HeroBanner = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
       <h1>Fresh Products Direct From <span className="gradient-text">Farmers</span></h1>
        <p>Buy fruits, vegetables and grains directly from farmers</p>
        <button type="button">Shop Now  <i className="fa-solid fa-arrow-right arrow-icon"></i></button>
        <button type="button" className='btn1' >View More <i className="fa-solid fa-arrow-right arrow-icon"></i></button>

      </div>

      <img 
        src={shape5} 
        alt="Fresh Produce" 
        className="hero-shape-img" 
      />
    </section>
  );
};

export default HeroBanner;