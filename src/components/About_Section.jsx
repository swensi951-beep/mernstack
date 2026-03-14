import "../components/About_Section.css";
import About1 from "../assets/images/About/About4.jpg";
import About2 from "../assets/images/About/About2.jpg";

import About3 from "../assets/images/About/About3.jpg";
import About4 from "../assets/images/About/About5.jpg";

// ... Imports same rahenge

const About_Section = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        
        {/* Left Side: Modern Overlapping Grid */}
        <div className="about-grid-visual">
          <div className="grid-item item1"><img src={About1} alt="Farmer" /></div>
          <div className="grid-item item2"><img src={About2} alt="Crops" /></div>
          <div className="grid-item item3"><img src={About3} alt="Packing" /></div>
          <div className="grid-item item4"><img src={About4} alt="Delivery" /></div>
          <div className="grid-experience-badge">
            <h3>10+</h3>
            <p>Years of Trust</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content">
          <div className="badge-pill">Who We Are </div>
          <h2 className="about-title"> 
          Direct From Farm,<br />
            <span className="gradient-text">Purely For You.</span>
          </h2>
          <p className="about-description">
          "Zero Middlemen, 100% Integrity: Mitti Ki Khushbu Se Judi Kisanon Ki Mehnat, Jo Seedha Pahunchti Hai Aapke Ghar Bina Kisi Milaawat Ke."
          </p>
          
          {/* 4 Features Grid */}
          <div className="about-features-grid">
            <div className="feature-card">
              <div className="icon-box"><i className="fas fa-leaf"></i></div>
              <div className="feature-info">
                <h4>100% Organic</h4>
                <p>Pure nature, no pesticides.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="icon-box"><i className="fas fa-truck-fast"></i></div>
              <div className="feature-info">
                <h4>Farm-to-Door</h4>
                <p>Delivery within 24 hours.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-box"><i className="fas fa-users"></i></div>
              <div className="feature-info">
                <h4>Expert Farmers</h4>
                <p>Traditional & safe methods.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="icon-box"><i className="fas fa-recycle"></i></div>
              <div className="feature-info">
                <h4>Eco-Friendly</h4>
                <p>Sustainable green packing.</p>
              </div>
            </div>
          </div>

          <button className="btn-modern">
            Explore Our Story <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About_Section;