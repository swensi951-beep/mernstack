import React from 'react';
import './ShopHeader.css'; // CSS file import karo

const ShopHeader = () => {
  return (
    <section className="shop-header-container">
      {/* Dark Overlay */}
      <div className="shop-header-overlay"></div>

      {/* Main Content */}
      <div className="shop-header-content">
        <h1 className="shop-header-title">
          OUR <span className="text-gold">SHOP</span>
        </h1>

        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-link">HOME</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">SHOP PAGE</span>
        </nav>
      </div>

      {/* Bottom Accent Bar */}
      <div className="header-bottom-bar"></div>
    </section>
  );
};

export default ShopHeader;