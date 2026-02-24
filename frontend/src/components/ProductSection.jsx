import React, { useState } from "react";
import "./ProductSection.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import p1 from "../assets/images/product1.png";
import p2 from "../assets/images/product2.png";
import p3 from "../assets/images/product3.png";
import p4 from "../assets/images/product4.png";
import p5 from "../assets/images/product5.png";
import p6 from "../assets/images/product6.png";
import p7 from "../assets/images/product7.png";
import p8 from "../assets/images/product8.png";
import p10 from "../assets/images/product10.png";
import p11 from "../assets/images/product11.png";
import p12 from "../assets/images/product12.png";
import p13 from "../assets/images/product13.jpg";
import p14 from "../assets/images/product14.png";
import p15 from "../assets/images/product15.png";
import p16 from "../assets/images/product16.png";
import p17 from "../assets/images/product17.png";







const productsData = [
  { id: 1, name: "Organic Tomato", price: 50, old: 65, cat: "Vegetables", img1: p1, img2: p10 },
  { id: 2, name: "Avocado", price: 50, old: 65, cat: "Fruits", img1: p2, img2: p12 },
  { id: 3, name: "Red Cabbage", price: 50, old: 65, cat: "Vegetables", img1: p3, img2: p13 },
  { id: 4, name: "Potato", price: 50, old: 65, cat: "Vegetables", img1: p4, img2: p14 },
  { id: 5, name: "Capsicum", price: 50, old: 65, cat: "Vegetables", img1: p5, img2: p11 },
  { id: 6, name: "Corn", price: 50, old: 65, cat: "Vegetables", img1: p6, img2: p15 },
  { id: 7, name: "Mushroom", price: 50, old: 65, cat: "Vegetables", img1: p7, img2: p16 },
  { id: 8, name: "Mushroom", price: 50, old: 65, cat: "Vegetables", img1: p8, img2: p17 },
];

const ProductSection = () => {

  const [category, setCategory] = useState("All");

  const filterProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.cat === category);

  return (

    <div className="product-section">

      {/* Heading */}
      <div className="product-header">

        <div>
          <span>🌿 FRESH FROM OUR FARM</span>
          <h2>Our Organic Products</h2>
        </div>

        {/* Filter */}
        <div className="filter-btns">
          {["All", "Vegetables", "Fruits", "Bread", "Meat"].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Products */}
      <div className="product-grid">

        {filterProducts.map((item) => (

          <div className="product-card" key={item.id}>

            <span className="tag">MEATS</span>
            <span className="discount">-27%</span>

           <div className="img-box">

  <img src={item.img1} className="main-img" alt="" />
  <img src={item.img2} className="hover-img" alt="" />

  <div className="hover-layer">
    <button className="icon-btn"><FaSearch /></button>
    <button className="icon-btn"><FaShoppingCart /></button>
  </div>

</div>

            <div className="stars">⭐⭐⭐⭐☆ (4.0)</div>

            <h4>{item.name}</h4>

            <p>
              <span>${item.price}</span>
              <del>${item.old}</del>
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductSection;