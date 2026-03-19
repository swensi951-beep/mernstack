import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // Icons import kiye

import 'swiper/css';
import 'swiper/css/pagination';
import './ReviewSection.css';

import bannerImg from '../assets/images/Hero/banner5.png';
import userImg1 from '../assets/images/Testimonial/person1.jpg'; 
import userImg2 from '../assets/images/Testimonial/person2.jpg'; 

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      image: userImg1,
      text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
      name: "Jesscia Brown",
      rating: 5
    },
    {
      id: 2,
      image: userImg2,
      text: "The quality of organic vegetables is amazing. Highly recommended for direct farmer connect!",
      name: "Svensi Narola",
      rating: 5
    }
  ];

  return (
    <section 
      className="main-review-section" 
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="review-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="review-content">
                <div className="review-image-wrapper">
                  <img src={review.image} alt={review.name} className="review-img" />
                </div>
                
                <div className="review-text-box">
                  {/* Floating Quote Icon */}
                  <FaQuoteLeft className="quote-icon" />
                  
                  <h2 className="review-title">
                    Check what our <span className="gradient-text">users Saying :~</span>
                  </h2>

                  {/* Star Rating Section */}
                  <div className="star-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>

                  <p className="review-desc">{review.text}</p>
                  <h4 className="review-author">{review.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;