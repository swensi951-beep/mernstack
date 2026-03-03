import React from 'react';
import './DiscountSection.css';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

// Images Import (Aap apne hisaab se images assign karein)
import cat12 from '../assets/images/product8.png'; // Mushroom 1
import cat12_hover from '../assets/images/product17.png'; // Mushroom 2 (Hover image)
import cat13 from '../assets/images/product10.png'; // Tomato 1
import cat13_hover from '../assets/images/product1.png'; // Tomato 2 (Hover image)
import cat14 from '../assets/images/product11.png'; 
import cat15 from '../assets/images/product18.png';

const DiscountSection = () => {
    const products = [
        { id: 1, name: 'Organic Mushroom', img: cat12, hoverImg: cat12_hover, price: '50.00', old: '65.00', discount: '-27%' },
        { id: 2, name: 'Fresh Tomato', img: cat13, hoverImg: cat13_hover, price: '50.00', old: '65.00', discount: '-27%' },
        { id: 3, name: 'Green Capsicum', img: cat14, hoverImg: cat12, price: '50.00', old: '65.00', discount: '-27%' },
        { id: 4, name: 'Strawberry Jam', img: cat15, hoverImg: cat13, price: '50.00', old: '65.00', discount: '-27%' },
    ];

    return (
        <section className="discount-section">
            <div className="discount-header">
                <div className="header-text">
                    <span className="farm-tag">○○○ FRESH FROM OUR FARM</span>
                    <h2 className="section-title">Popular Organic Discount</h2>
                </div>
                
                <div className="countdown-wrapper">
                    {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label, i) => (
                        <div key={i} className="timer-circle-unit">
                            <div className="circle-num">00</div>
                            <span className="unit-label">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="discount-grid">
                {products.map((prod) => (
                    <div className="organic-card" key={prod.id}>
                        <div className="card-labels">
                            <span className="category-tag">MEATS</span>
                            <span className="discount-circle">{prod.discount}</span>
                        </div>
                        
                        <div className="img-holder">
                            {/* Primary Image */}
                            <img src={prod.img} alt={prod.name} className="prod-img main-img" />
                            {/* Hover Image */}
                            <img src={prod.hoverImg} alt={prod.name} className="prod-img hover-img" />
                            
                            {/* Hover Buttons */}
                            <div className="hover-actions">
                                <button className="action-btn"><FaSearch /></button>
                                <button className="action-btn"><FaShoppingBag /></button>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="stars">★★★★☆ <span className="rating-num">(4.0)</span></div>
                            <h4 className="prod-title">{prod.name}</h4>
                            <div className="price-group">
                                <span className="current-price">${prod.price}</span>
                                <span className="old-price">${prod.old}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DiscountSection;