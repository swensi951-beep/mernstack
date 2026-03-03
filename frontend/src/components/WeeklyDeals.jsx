import React from 'react';
import './WeeklyDeals.css';

// Product images (Aapke project ke folder ke hisaab se path change karein)
import Cauliflower from '../assets/images/product7.png';
import RedCabbage from '../assets/images/product3.png';
import Corn from '../assets/images/product15.png';
import Mushroom from '../assets/images/product17.png';

const WeeklyDeals = () => {
  const dealsData = [
    {
      id: 1,
      name: "Vegan Egg Replacer",
      price: 80.00,
      oldPrice: 90.00,
      img: Cauliflower,
      sold: 62,
      total: 100,
    },
    {
      id: 2,
      name: "Vegan Egg Replacer",
      price: 80.00,
      oldPrice: 90.00,
      img: RedCabbage,
      sold: 62,
      total: 100,
    },
    {
      id: 3,
      name: "Blue Diamond Almonds",
      price: 80.00,
      oldPrice: 90.00,
      img: Corn,
      sold: 62,
      total: 100,
    },
    {
      id: 4,
      name: "Vegan Egg Replacer",
      price: 80.00,
      oldPrice: 90.00,
      img: Mushroom,
      sold: 62,
      total: 100,
    }
  ];

  return (
    <div className="deals-container">
      <div className="deals-header">
        <span className="farm-tag">○○○ FRESH FROM OUR FARM ○○○</span>
        <h2 className="deals-title">Best Deals of the Week!</h2>
      </div>

      <div className="deals-grid">
        {dealsData.map((product) => (
          <div className="deal-horizontal-card" key={product.id}>
            {/* Left Side: Image */}
            <div className="deal-image-wrap">
              <div className="leaf-shape-bg"></div>
              <img src={product.img} alt={product.name} />
            </div>

            {/* Right Side: Content */}
            <div className="deal-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="price-section">
                <span className="new-price">${product.price.toFixed(2)}</span>
                <span className="old-price">${product.oldPrice.toFixed(2)}</span>
              </div>
              <p className="description">
                Apparently we had reached a great height in the atmosphere,
              </p>

              {/* Countdown Timer Badge */}
              <div className="timer-badge">
                <span className="clock-icon">🕒</span> EXPIRES IN: 00: 00: 00
              </div>

              {/* Progress Bar Section */}
              <div className="progress-section">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(product.sold / product.total) * 100}%` }}
                  ></div>
                </div>
                <div className="sold-status">
                  Sold: <strong>{product.sold}/{product.total}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyDeals;