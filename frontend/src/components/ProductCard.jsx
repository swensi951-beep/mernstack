import React from 'react';

const ProductCard = ({ image, name, price, oldPrice, rating }) => {
  return (
    <div className="product-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px' }}>
      <div className="img-wrapper" style={{ background: '#f7f7f7', borderRadius: '50%', padding: '10px' }}>
        <img src={image} alt={name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
      </div>
      <div>
        <span style={{ fontSize: '10px', color: 'green', fontWeight: 'bold', background: '#e6f2e6', padding: '2px 8px', borderRadius: '10px' }}>MEATS</span>
        <div style={{ color: '#ffc107', fontSize: '12px', margin: '5px 0' }}>
          ★★★★☆ <span style={{ color: '#999' }}>({rating})</span>
        </div>
        <h4 style={{ margin: '0', fontSize: '16px' }}>{name}</h4>
        <div style={{ marginTop: '5px' }}>
          <span style={{ color: '#78b81d', fontWeight: 'bold' }}>${price}</span>
          <span style={{ textDecoration: 'line-through', color: '#ccc', marginLeft: '10px', fontSize: '14px' }}>${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;