import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Headphones, Instagram } from 'lucide-react';
import './FeaturesAndInsta.css';

// Images Import
import img1 from '../assets/images/instagram1.png';
import img2 from '../assets/images/instagram2.jpg';

import img3 from '../assets/images/instagram3.png';
import img4 from '../assets/images/instagram4.png';
import img5 from '../assets/images/instagram5.png';
import img6 from '../assets/images/instagram6.jpg';


const FeaturesAndInsta = () => {
  const features = [
    { id: 1, icon: <Truck size={35} />, title: "FREE SHIPPING", desc: "Free on order over $100" },
    { id: 2, icon: <ShieldCheck size={35} />, title: "SECURITY PAYMENT", desc: "100% security payment" },
    { id: 3, icon: <RotateCcw size={35} />, title: "30 DAY RETURN", desc: "30 day money guarantee" },
    { id: 4, icon: <Headphones size={35} />, title: "24/7 SUPPORT", desc: "Support every time 24/7" },
  ];

  const instaImages = [img1, img3, img4, img5, img2, img6]; // Repeat images as needed

  return (
    <div className="main-wrapper">
      
      {/* --- TOP FEATURES SECTION --- */}
      <div className="features-container">
        {features.map((item) => (
          <div className="feature-card" key={item.id}>
            <div className="feature-icon-circle">
              {item.icon}
            </div>
            <div className="feature-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- INSTAGRAM SECTION --- */}
      <div className="insta-section">
        <h2 className="insta-title">Follow on Instagram</h2>
        <div className="insta-grid">
          {instaImages.map((img, index) => (
            <div className="insta-item" key={index}>
              <img src={img} alt="Instagram" />
              <div className="insta-overlay">
                <Instagram size={30} />
                <span>@_instagram</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeaturesAndInsta;