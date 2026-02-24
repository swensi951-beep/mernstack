import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import "./CategorySlider.css";

import leaf from "../assets/images/leaf.png";

import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import cat4 from "../assets/images/cat4.png";
import cat5 from "../assets/images/cat5.png";

const categories = [
  { name: "Package Foods", img: cat1 },
  { name: "Package Foods", img: cat2 },
  { name: "Awesome Broccoli", img: cat3 },
  { name: "Fruits & Vegetables", img: cat4 },
  { name: "Grocery & Staples", img: cat5 },
];

function CategorySlider() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="cat-section">

      <img src={leaf} className="cat-leaf" alt="leaf" />

      {/* Header */}
      <div className="cat-header">

        <div>
          <p className="cat-subtitle">● ● ● FRESH FROM OUR FARM</p>
          <h2>Popular Categories</h2>
        </div>

        {/* Arrows */}
        <div className="cat-arrows">
          <button ref={prevRef} className="custom-prev">❮</button>
          <button ref={nextRef} className="custom-next">❯</button>
        </div>

      </div>


      {/* Slider */}
      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          loop={true}

          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}

          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >

          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cat-card">
                <div className="img-main">
                  <img src={item.img} alt={item.name} />
                  <div className="img-overlay"></div>
                </div>
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      )}

    </div>
  );
}

export default CategorySlider;