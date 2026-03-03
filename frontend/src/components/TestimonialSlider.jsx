import React, { useState } from 'react';
import './TestimonialSlider.css';

// Images import karein
import bgImg from '../assets/images/testimonial1.png'; // Background vegetables wali
import userImg from '../assets/images/testimonial2.png'; // Center farmer image

const testimonials = [
  {
    id: 1,
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
    author: "Jessica Brown"
  },
  {
    id: 2,
    text: "The quality of organic vegetables is outstanding. Delivery is always on time and the packaging is eco-friendly.",
    author: "Kevin Martin"
  },
  {
    id: 3,
    text: "I've been a regular customer for months. Their secure delivery and fresh farm products are unmatched in the market.",
    author: "Sarah Jenkins"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="testimonial-container">
        
        {/* Left Side: Fixed Center Image */}
        <div className="testimonial-image-wrapper">
          <div className="image-circle-border">
            <img src={userImg} alt="User" className="center-user-img" />
          </div>
        </div>

        {/* Right Side: Changing Content */}
        <div className="testimonial-content">
          <h2 className="check-title">Check what our users are saying.</h2>
          
          <div className="slider-text-area">
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="author-name">{testimonials[currentIndex].author}</h4>
          </div>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialSlider;