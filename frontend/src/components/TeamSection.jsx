import React from 'react';
import './TeamSection.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// Images Import
import shapeLeft from '../assets/images/shape11.png';
import shapeRight from '../assets/images/shape12.png';
import team3 from '../assets/images/team3.png';
import team4 from '../assets/images/team4.png';
import team5 from '../assets/images/team5.png';
import team6 from '../assets/images/team6.png';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Michel Hasel", role: "Mr. Farmer", img: team3 },
    { id: 2, name: "Michel Hasel", role: "Mr. Farmer", img: team4 },
    { id: 3, name: "Michel Hasel", role: "Mr. Farmer", img: team5 },
    { id: 4, name: "Michel Hasel", role: "Mr. Farmer", img: team6 },
  ];

  return (
    <section className="team-container">
      {/* Background Shapes */}
      <img src={shapeLeft} alt="" className="bg-shape shape-left" />
      <img src={shapeRight} alt="" className="bg-shape shape-right" />

      <div className="team-header">
        <span className="sub-title">○○○ FRESH FROM OUR FARM ○○○</span>
        <h2 className="main-title">Good Organic Products</h2>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="member-img-wrap">
              <img src={member.img} alt={member.name} className="member-img" />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            
            <div className="m-socials">
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;