import React from "react";
import "./DealSection.css";

import deal1 from "../assets/images/deals1.png";
import deal2 from "../assets/images/deals2.png";
import deal3 from "../assets/images/deals3.png";

const deals = [
  {
    id: 1,
    title: "Get Every Vegetable You Need",
    img: deal1,
  },
  {
    id: 2,
    title: "Get Every 30% Vegetable You Need",
    img: deal2,
  },
  {
    id: 3,
    title: "First Deal Vegetable You Need",
    img: deal3,
  },
];

const DealSection = () => {
  return (
    <div className="deal-section">

      {deals.map((item) => (
        <div
          key={item.id}
          className="deal-card"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="deal-content">

            <h2>{item.title}</h2>

            <button>SHOP NOW <b> →</b></button>

          </div>
        </div>
      ))}

    </div>
  );
};

export default DealSection;