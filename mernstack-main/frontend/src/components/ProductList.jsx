import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
import { ShoppingCart, Heart, Eye, Filter } from 'lucide-react';
import CartSidebar from './CartSidebar'; 
import toast, { Toaster } from 'react-hot-toast'; 

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- 1. Local Storage Logic ---
  // पेज लोड होते ही चेक करेगा कि पहले से कार्ट में कुछ है या नहीं
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('myOrganicCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // जब भी cartItems में बदलाव होगा, उसे Local Storage में सेव करेगा
  useEffect(() => {
    localStorage.setItem('myOrganicCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- 2. API Data Fetching ---
  const fetchProductsFromDB = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products/all');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Data Fetching Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsFromDB();
  }, []);

  // --- 3. Cart Logic Functions ---
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item._id === product._id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    // सुंदर Toast Notification दिखाएँ
    toast.success(`${product.name} added to basket! 🥬`, {
      duration: 2000,
      position: 'bottom-right',
      style: {
        background: '#1a2e1a',
        color: '#fff',
        borderRadius: '10px',
        fontSize: '14px'
      },
    });

    setIsCartOpen(true); 
  };

  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    const itemToRemove = cartItems.find(item => item._id === id);
    setCartItems(cartItems.filter(item => item._id !== id));
    toast.error(`${itemToRemove?.name} removed`, { position: 'bottom-right' });
  };

  // --- 4. Filter Logic ---
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  const categories = ['All', 'Vegetables', 'Spices', 'Tubers'];

  if (loading) return <div className="loader">Loading Fresh Products...</div>;

  return (
    <section className="shop-product-area">
      {/* Toast Notification Container */}
      <Toaster />

      <div className="container">
        
        {/* --- List Header with Cart Badge --- */}
        <div className="list-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px',
          padding: '0 10px' 
        }}>
          
          
          {/* Cart Icon Badge */}
          {/* <div className="cart-badge-wrapper" onClick={() => setIsCartOpen(true)} style={{ position: 'relative', cursor: 'pointer' }}>
            <ShoppingCart size={32} color="#4caf50" />
            {cartItems.length > 0 && (
              <span className="cart-count-badge">{cartItems.length}</span>
            )}
          </div> */}
        </div>

        {/* --- Filter Bar --- */}
        <div className="filter-bar">
          <div className="filter-title">
            <Filter size={20} />
            <span>Filter by Category:</span>
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Product Grid --- */}
        <div className="product-grid-layout">
          {filteredProducts.map((item) => (
            <div key={item._id} className={`single-product-item ${item.stock === false ? 'out-of-stock' : ''}`}>
              {item.discount > 0 && <div className="sale-badge">-{item.discount}%</div>}

              <div className="product-thumb">
                <img src={item.image} alt={item.name} />
                <div className="product-action-links">
                  <button className="wishlist-btn"><Heart size={18} /></button>
                  <button className="quick-view-btn"><Eye size={18} /></button>
                </div>
              </div>
              
              <div className="product-content">
                <span className={`category-tag cat-${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
                <h4 className="product-title">{item.name}</h4>
                <div className="product-footer">
                  <div className="price-wrapper">
                    <span className="price-tag">₹{item.price}.00</span>
                  </div>
                  
                  <button 
                    className="add-cart-gradient-btn" 
                    disabled={item.stock === false}
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingCart size={16} /> 
                    {item.stock === false ? 'SOLD' : 'ADD'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Sidebar Component --- */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        updateQty={updateQty}
        removeItem={removeItem}
      />
    </section>
  );
};

export default ProductList;