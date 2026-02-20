import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/images/logo.png"; // apna logo yaha rakho

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Organi" />
        </div>

        {/* Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/pages">Pages</a></li>
          <li><a href="/contact">Contacts</a></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">

          <button className="icon-btn">
            <FaSearch />
          </button>

          <button className="icon-btn">
            <FaUser />
          </button>

          <button className="icon-btn">
            <FaHeart />
          </button>

          <button className="icon-btn cart-btn">
            <FaShoppingBag />
            <span className="cart-count">2</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;