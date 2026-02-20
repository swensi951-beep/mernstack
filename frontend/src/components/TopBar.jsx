import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* Left Section */}
        <div className="topbar-left">
          <span>
            <FaEnvelope /> info@webmail.com
          </span>

          <span>
            <FaMapMarkerAlt /> 15/A, Nest Tower, NYC
          </span>
        </div>

        {/* Right Section */}
        <div className="topbar-right">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;