import React from 'react';
import './OrganicProducts.css';

// Images Import
import bgPattern from '../assets/images/gallery1.png'; // Background lines
import mainProduct from '../assets/images/gallery4.png'; // Big card image
import item1 from '../assets/images/gallery5.png';
import item2 from '../assets/images/gallery6.png';
import item3 from '../assets/images/gallery7.png';
import item4 from '../assets/images/gallery5.png';
import item5 from '../assets/images/gallery6.png';


const OrganicProducts = () => {
  const sideProducts = [
    { id: 1, title: "All Natural Italian-Style Chicken Meatballs", author: "Jessica Doen", time: "6 hours ago", img: item1 },
    { id: 2, title: "All Natural Italian-Style Chicken Meatballs", author: "Jessica Doen", time: "6 hours ago", img: item2 },
    { id: 3, title: "All Natural Italian-Style Chicken Meatballs", author: "Jessica Doen", time: "6 hours ago", img: item3 },
    { id: 4, title: "All Natural Italian-Style Chicken Meatballs", author: "Jessica Doen", time: "6 hours ago", img: item4 },
    { id: 4, title: "All Natural Italian-Style Chicken Meatballs", author: "Jessica Doen", time: "6 hours ago", img: item5 },

  ];

  return (
    <div className="organic-wrapper" style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className="organic-container">
        
        {/* Left Side: Title & Description */}
        <div className="organic-text-side">
          <span className="farm-tag">○○○ FRESH FROM OUR FARM</span>
          <h2 className="main-title">Good Organic Products</h2>
          <p className="desc-text">
            Apparently we had reached a great height in the atmosphere, 
            for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
          <button className="view-more-btn">View More →</button>
        </div>

        {/* Center: Large Card (gallery4.png) */}
        <div className="featured-card">
          <img src={mainProduct} alt="Featured" className="featured-img" />
          <div className="card-content">
            <h3>All Natural Italian-Style Chicken Meatballs</h3>
            <div className="meta-info">
              <span>👤 Jessica Doen</span>
              <span>🕒 6 hours ago</span>
            </div>
            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum putamus parum claram legere.</p>
          </div>
        </div>

        {/* Right Side: Scrollable List (gallery5, 6, 7, 8) */}
        <div className="side-list-container">
          <div className="scrollable-list">
            {sideProducts.map((item) => (
              <div className="side-item" key={item.id}>
                <img src={item.img} alt="Product" className="side-thumb" />
                <div className="side-info">
                  <h4>{item.title}</h4>
                  <div className="meta-info small">
                    <span>👤 {item.author}</span>
                    <span>🕒 {item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrganicProducts;