import React from 'react';
import './OrganicFeatures.css';

// Images Import
import bgPattern from '../assets/images/qlty1.png';
import centerImg from '../assets/images/qlty2.png';
import qlty5 from '../assets/images/qlty5.png';
import qlty6 from '../assets/images/qlty6.png';
import qlty7 from '../assets/images/qlty7.png';
import qlty8 from '../assets/images/qlty8.png';
import qlty9 from '../assets/images/qlty9.png';
import qlty10 from '../assets/images/qlty10.png';

const OrganicFeatures = () => {
  const leftFeatures = [
    { title: 'Top Premium Quality', icon: qlty5 },
    { title: 'Always Fresh Items', icon: qlty6 },
    { title: '100% Natural Product', icon: qlty7 },
  ];

  const rightFeatures = [
    { title: '100% Organic Product', icon: qlty8 },
    { title: 'Super Healthy Food', icon: qlty9 },
    { title: 'Top Best Quality', icon: qlty10 },
  ];

  const lorem = "Lorem ipsum dolor sit amet, consectuer adipiscing elit, sed diam nonummy.";

  return (
    <section 
      className="organic-feature-section" 
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="feature-header">
          <p className="top-tag">○○○ FRESH FROM OUR FARM ○○○</p>
          <h2 className="feature-main-title">Top Organic Quality</h2>
      </div>

      <div className="feature-container">
        {/* Left Side */}
        <div className="feature-column text-right">
          {leftFeatures.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-content">
                <h4>{f.title}</h4>
                <p>{lorem}</p>
              </div>
              <div className="feature-icon-circle">
                <img src={f.icon} alt="icon" />
              </div>
            </div>
          ))}
        </div>

        {/* Center Main Image (qlty2) */}
        <div className="feature-image-main">
          <img src={centerImg} alt="Center Quality" className="floating-img" />
        </div>

        {/* Right Side */}
        <div className="feature-column text-left">
          {rightFeatures.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon-circle">
                <img src={f.icon} alt="icon" />
              </div>
              <div className="feature-content">
                <h4>{f.title}</h4>
                <p>{lorem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganicFeatures;