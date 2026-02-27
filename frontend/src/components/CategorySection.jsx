import React, { useState } from 'react';
import './CategorySection.css';

// Import all your images
import ctgIcon1 from '../assets/images/ctg_icon1.png';
import ctgIcon2 from '../assets/images/ctg_icon2.png';
import ctgIcon3 from '../assets/images/ctg_icon3.png';
import ctgIcon4 from '../assets/images/ctg_icon4.png';
import ctgIcon5 from '../assets/images/ctg_icon5.png';

import cat6 from '../assets/images/cat6.png';
import cat7 from '../assets/images/cat7.png';
import cat8 from '../assets/images/cat8.png';
import cat9 from '../assets/images/cat9.png';
import cat10 from '../assets/images/cat10.png';
import cat11 from '../assets/images/cat11.png';

const CategorySection = () => {

  // Category List
  const categoryData = [
    { name: 'Vegetables', count: 30, icon: ctgIcon1 },
    { name: 'Fresh Fruits', count: 30, icon: ctgIcon2 },
    { name: 'Beverages', count: 30, icon: ctgIcon3 },
    { name: 'Babies & Kids', count: 30, icon: ctgIcon4 },
    { name: 'Frozen Foods', count: 30, icon: ctgIcon5 },
  ];

  // Products List (With Category)
  const productsData = [
    { id: 1, name: 'Organic Cabbage', category: 'Vegetables', img: cat6, price: '50.00', old: '65.00' },
    { id: 1, name: 'Organic Cabbage', category: 'Beverages', img: cat6, price: '50.00', old: '65.00' },

    { id: 2, name: 'Fresh Apple', category: 'Vegetables', img: cat7, price: '70.00', old: '90.00' },
    { id: 3, name: 'Cold Drink', category: 'Vegetables', img: cat8, price: '40.00', old: '55.00' },
    { id: 4, name: 'Baby Food', category: 'Vegetables', img: cat9, price: '120.00', old: '150.00' },
    { id: 5, name: 'Frozen Peas', category: 'Vegetables', img: cat10, price: '60.00', old: '80.00' },
    { id: 6, name: 'Tomato', category: 'Vegetables', img: cat11, price: '35.00', old: '45.00' },
  ];

  // Active Category State
  const [activeCategory, setActiveCategory] = useState('Vegetables');

  return (
    <div className="fresh-produce-section">

      {/* LEFT SIDEBAR */}
      <div className="sidebar-content">

        <div className="farm-tag">
          <span>○○○</span> FRESH FROM OUR FARM
        </div>

        <h1 className="title">
          Fresh produce <br /> Categories
        </h1>

        <p className="desc">
          Apparently we had reached a great height in the atmosphere, for the sky was a
        </p>

        {/* Categories */}
        <div className="categories-list">

          {categoryData.map((cat, i) => (
            <div
              key={i}
              className={`category-pill ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >

              <div className="cat-left">
                <div className="icon-bg">
                  <img src={cat.icon} alt="icon" />
                </div>
                <span>{cat.name}</span>
              </div>

              <div className="count-circle">{cat.count}</div>

            </div>
          ))}

        </div>
      </div>


      {/* RIGHT GRID */}
      <div className="product-showcase">

        {productsData
          .filter(item => item.category === activeCategory)
          .map(item => (

            <div className="product-item" key={item.id}>

              <div className="product-img-wrap">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="product-details">

                <span className="meats-tag">{activeCategory}</span>

                <div className="rating">
                  ★★★★☆ <span>(4.0)</span>
                </div>

                <h3 className="p-name">{item.name}</h3>

                <div className="price-container">
                  <span className="new-price">${item.price}</span>
                  <span className="old-price">${item.old}</span>
                </div>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
};

export default CategorySection;