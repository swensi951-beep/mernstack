import React from 'react';
import './OrganicProtein.css';

// Images according to your naming
import bg3 from '../assets/images/bg3.png'; // Subtle topo pattern
import product19 from '../assets/images/product19.png'; // Mint leaves
import product20 from '../assets/images/product20.png'; // Icon 1
import product21 from '../assets/images/product21.png'; // Icon 2
import MintLeaf from '../assets/images/product22(1).png'; // The blueberries/cherries bowl

const OrganicProtein = () => {
  return (
    <div className="protein-section-wrapper">
      <section className="protein-main-card" style={{ backgroundImage: `url(${bg3})` }}>
        
        {/* Floating Leaves - Overflowing the container like in image */}
        <img src={product19} alt="leaf" className="leaf-top-left" />
        <img src={product19} alt="leaf" className="leaf-bottom-right" />

        <div className="protein-flex-container">
          
          {/* Left Content */}
          <div className="protein-left-text">
            <span className="offer-tag">○○○ 30% OF ALL ORDER</span>
            <h1 className="main-title">
              Natural, Raw & <span className="green-highlight">Organic</span> <br />
              Protein Powders
            </h1>
            <p className="sub-text">
              Apparently we had reached a great height in the atmosphere, for the sky 
              was a dead black, and the stars had ceased to twinkle.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrap">
                  <img src={product20} alt="natural" />
                </div>
                <div className="info-content">
                  <h4>Only Natural Ingredients</h4>
                  <p>Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrap">
                  <img src={product21} alt="natural" />
                </div>
                <div className="info-content">
                  <h4>Only Natural Ingredients</h4>
                  <p>Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur</p>
                </div>
              </div>
            </div>

            <button className="green-btn">View More →</button>
          </div>

          {/* Right Content - Full Width Image layout */}
          <div className="protein-right-visual">
            <img src={MintLeaf} alt="Bowl" className="main-bowl-img" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default OrganicProtein;