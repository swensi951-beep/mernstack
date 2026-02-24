import React from "react";
import "./Hero.css";

import leftImg from "../assets/images/banner4.png";
import rightImg from "../assets/images/banner3.png";

const Hero = () => {
  return (
    <section className="hero">

      {/* Floating Images */}
      <img src={leftImg} className="hero-left-img" alt="" />
      <img src={rightImg} className="hero-right-img" alt="" />

      <div className="hero-content">

        <span className="hero-tag">100% ORGANIC FOODS</span>

        <h1>
          Organic Veggies & Foods <br />
          You Cook <span class="healthy-text">Healthy</span>
        </h1>

        <div className="hero-search">

          <input type="text" placeholder="Search Product" />

          <select>
            <option>Cauliflower</option>
            <option>Tomato</option>
            <option>Apple</option>
            <option>Potato</option>
          </select>

          <button>Search</button>

        </div>

      </div>

    </section>
  );
};

export default Hero;