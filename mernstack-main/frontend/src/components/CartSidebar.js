import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ⭐ नेविगेशन के लिए इसे इम्पोर्ट करें
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cartItems, updateQty, removeItem }) => {
  const navigate = useNavigate(); // ⭐ नेविगेट फंक्शन को इनिशियलाइज़ करें

  // Total Calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingThreshold = 500; 
  const progress = Math.min((subtotal / shippingThreshold) * 100, 100);

  // ⭐ चेकआउट फंक्शन जो साइडबार बंद करेगा और पेज बदलेगा
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // नेविगेट करने से पहले पक्का करें कि डेटा 'cart' नाम की key में सेव है
      localStorage.setItem('cart', JSON.stringify(cartItems));
      
      onClose(); // साइडबार बंद करें
      navigate('/checkout'); // चेकआउट पेज पर भेजें
    } else {
      alert("Your cart is empty!");
    }
  };
  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        
        {/* Header */}
        <div className="cart-header">
          <div className="header-title">
            <ShoppingBag size={22} color="#4caf50" />
            <span>My Basket ({cartItems.length})</span>
          </div>
          <button className="close-cart-btn" onClick={onClose}><X size={24} /></button>
        </div>

        {/* Free Shipping Progress Bar */}
        {cartItems.length > 0 && (
          <div className="shipping-notice">
            <p>
              {subtotal >= shippingThreshold 
                ? "🎉 You've unlocked FREE Shipping!" 
                : `Add ₹${shippingThreshold - subtotal} more for FREE shipping`}
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        {/* Cart Body */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon">🛒</div>
              <h4>Your basket is empty</h4>
              <button onClick={onClose} className="return-shop-btn">Start Shopping</button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-card">
                  <div className="cart-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-info">
                    <h5>{item.name}</h5>
                    <span className="cart-item-price">₹{item.price}.00</span>
                    
                    <div className="cart-item-actions">
                      <div className="qty-selector">
                        <button onClick={() => updateQty(item._id, -1)}><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQty(item._id, 1)}><Plus size={14} /></button>
                      </div>
                      <button className="delete-item-btn" onClick={() => removeItem(item._id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Checkout Button */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>Subtotal</span>
              <span className="summary-total">₹{subtotal}.00</span>
            </div>
            <p className="tax-note">Shipping & taxes calculated at checkout</p>
            
            {/* ⭐ यहाँ handleCheckout फंक्शन को कॉल किया गया है */}
            <button className="main-checkout-btn" onClick={handleCheckout}>
              Checkout Now <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;