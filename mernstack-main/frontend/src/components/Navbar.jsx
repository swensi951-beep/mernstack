import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.css";

// setIsCartOpen को props के रूप में पास करें ताकि Navbar से कार्ट खुल सके
function Navbar({ setIsCartOpen }) {
  const [count, setCount] = useState(0);

  // LocalStorage से काउंट अपडेट करने का फंक्शन
  useEffect(() => {
    const updateCount = () => {
      const savedCart = localStorage.getItem('myOrganicCart');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        // सभी items की quantity का जोड़ दिखाने के लिए:
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
        setCount(totalItems);
      } else {
        setCount(0);
      }
    };

    updateCount();

    // इवेंट लिसनर ताकि जब ProductList में 'ADD' दबे, तो यहाँ अपडेट हो जाए
    window.addEventListener('storage', updateCount);
    
    return () => window.removeEventListener('storage', updateCount);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        Farm<span>Market</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/farmer-register">Farmer</Link></li>
      </ul>

      <div className="nav-right">
        {/* Wishlist */}
        <Link to="/wishlist" className="wishlist-icon">
          <FaRegHeart />
        </Link>

        {/* --- Updated Cart Icon with Badge --- */}
        <div 
          className="cart-icon-wrapper" 
          onClick={() => setIsCartOpen(true)} 
          style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <HiOutlineShoppingCart size={24} />
          {count > 0 && (
            <span className="navbar-cart-badge">{count}</span>
          )}
        </div>

        {/* Login */}
        <Link to="/auth" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;