import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 ADD THIS

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Organi" />
          </Link>
        </div>

        {/* Menu */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          </li>

          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </li>

          <li>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          </li>

          <li>
            <Link to="/pages" onClick={() => setMenuOpen(false)}>Pages</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacts</Link>
          </li>

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