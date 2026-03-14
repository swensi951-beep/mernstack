import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
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
        <li><Link to="/DeliveryLogin">Delivery</Link></li>
      </ul>

      <div className="nav-right">

        {/* Wishlist */}
        <Link to="/wishlist" className="wishlist-icon">
          <FaRegHeart />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="cart-icon">
          <HiOutlineShoppingCart />
        </Link>

        {/* Login */}
        <Link to="/login" className="login-btn">
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;