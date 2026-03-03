import React from 'react';
import './DeliveryBanner.css';
import offer5 from '../assets/images/offer5.png'; // Path check kar lein

const DeliveryBanner = () => {
  return (
    <div className="banner-wrapper">
      <div 
        className="delivery-banner" 
        style={{ backgroundImage: `url(${offer5})` }}
      >
        <div className="banner-content">
          <h2 className="banner-text">
            100% <strong>Secure Delivery</strong> Without Contacting the Courier
          </h2>
          <button className="shop-now-btn">
            Shop Now <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;