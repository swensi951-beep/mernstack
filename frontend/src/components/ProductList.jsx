import React, { useState } from 'react';
import './ProductList.css';
import { ShoppingCart, Heart, Eye, Filter } from 'lucide-react';

const ProductList = () => {
  // 1. Full Data
  const allProducts = [
    { id: 2, name: 'Organic Cabbage', price: '45', category: 'Vegetables', discount: 10, stock: 15 },
    { id: 3, name: 'Fresh Red Chilies', price: '30', category: 'Spices', discount: 0, stock: 5 },
    { id: 4, name: 'Natural Carrots', price: '60', category: 'Vegetables', discount: 15, stock: 20 },
    { id: 5, name: 'Farm Potatoes', price: '25', category: 'Tubers', discount: 0, stock: 0 },
    { id: 6, name: 'Green Broccoli', price: '120', category: 'Vegetables', discount: 5, stock: 12 },
    { id: 7, name: 'Fresh Tomatoes', price: '40', category: 'Vegetables', discount: 20, stock: 8 },
    { id: 8, name: 'Garden Peas', price: '55', category: 'Vegetables', discount: 0, stock: 25 },
  ];

  // 2. State for Filter
  const [activeCategory, setActiveCategory] = useState('All');

  // 3. Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(item => item.category === activeCategory);

  const categories = ['All', 'Vegetables', 'Spices', 'Tubers'];

  return (
    <section className="shop-product-area">
      <div className="container">
        
        {/* --- Feature: Filter Bar --- */}
        <div className="filter-bar">
          <div className="filter-title">
            <Filter size={20} />
            <span>Filter by Category:</span>
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Product Grid --- */}
        <div className="product-grid-layout">
          {filteredProducts.map((item) => (
            <div key={item.id} className={`single-product-item ${item.stock === 0 ? 'out-of-stock' : ''}`}>
              
              {item.discount > 0 && <div className="sale-badge">-{item.discount}%</div>}

              <div className="product-thumb">
                <img src={`/assets/images/Shop/product${item.id}.png`} alt={item.name} />
                <div className="product-action-links">
                  <button className="wishlist-btn"><Heart size={18} /></button>
                  <button className="quick-view-btn"><Eye size={18} /></button>
                </div>
              </div>
              
              <div className="product-content">
                <span className={`category-tag cat-${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
                <h4 className="product-title">{item.name}</h4>
                <div className="product-footer">
                  <div className="price-wrapper">
                    <span className="price-tag">₹{item.price}.00</span>
                  </div>
                  <button className="add-cart-gradient-btn" disabled={item.stock === 0}>
                    <ShoppingCart size={16} /> {item.stock === 0 ? 'SOLD' : 'ADD'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;