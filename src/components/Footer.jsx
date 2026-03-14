import React from 'react';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaChevronRight 
} from 'react-icons/fa'; // FaChevronRight add kiya
import './Footer.css';

// Instagram images import
import insta1 from '../assets/images/Footer/instagram1.png';
import insta2 from '../assets/images/Footer/instagram2.jpg';
import insta3 from '../assets/images/Footer/instagram3.png';
import insta4 from '../assets/images/Footer/instagram4.png';
import insta5 from '../assets/images/Footer/instagram5.png';
import insta6 from '../assets/images/Footer/instagram6.jpg';

const Footer = () => {
  const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* 1. About Section */}
        <div className="footer-box about-box">
          <h2 className="footer-logo">Farm<span className="gold-text">Market</span></h2>
          <p className="footer-desc">
            Directly from farmers to your doorstep. We provide 100% organic and fresh products to keep your family healthy.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* 2. Quick Links Section - Icons Added */}
        <div className="footer-box links-box">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>
              <a href="/"><FaChevronRight className="link-icon" /> Home</a>
            </li>
            <li>
              <a href="/shop"><FaChevronRight className="link-icon" /> Shop</a>
            </li>
            <li>
              <a href="/about"><FaChevronRight className="link-icon" /> About Us</a>
            </li>
            <li>
              <a href="/contact"><FaChevronRight className="link-icon" /> Contact</a>
            </li>
          </ul>
        </div>

        {/* 3. Instagram Gallery Section */}
        <div className="footer-box gallery-box">
          <h3 className="footer-title">Instagram Gallery</h3>
          <div className="insta-grid">
            {instaImages.map((img, index) => (
              <div key={index} className="insta-item">
                <img src={img} alt={`Insta ${index + 1}`} />
                <div className="insta-overlay">
                  <FaInstagram />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Contact Section */}
        <div className="footer-box contact-box">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-item">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <span>Ankleshwar, Gujarat, India</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><FaPhoneAlt /></div>
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <div className="icon-circle"><FaEnvelope /></div>
            <span>support@farmmarket.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Developed by <span className="gold-text">Svensi Narola</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;