import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import Confetti from 'react-confetti'; // npm install react-confetti
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.orderInfo;

  // अगर कोई सीधी इस पेज पर आ जाए, तो उसे वापस भेज दें या मैसेज दिखाएँ
  if (!order) return <div className="p-10 text-center success-container"><h3>No Order Details Found</h3></div>;

  return (
    <div className="success-container">
      {/* 🎊 पार्टी वाले रंगीन कागज़ गिरने वाला इफेक्ट */}
      <Confetti numberOfPieces={200} recycle={false} />
      
      <div className="success-card">
        <div className="success-icon">
          <CheckCircle size={80} color="#22c55e" />
        </div>
        
        {/* 1. यूजर का नाम और थैंक यू मैसेज (लॉगिन डेटा से) */}
        <h1>Thank You, {state.userName}!</h1>
        <p className="order-confirm-text">Your fresh harvest is booked. Your order has been placed successfully.</p>
        
        {/* डेटाबेस से मिली असली आर्डर ID (आखिरी 8 अक्षर) */}
        <span className="order-id">Order ID: #{order._id.slice(-8).toUpperCase()}</span>

        <div className="order-details-grid">
          
          {/* ⭐ Right Side: Order Summary (with dynamic items) */}
          <div className="detail-box order-summary-box">
            <div className="box-header">
                <Package size={20} />
                <h4>Order Summary</h4>
            </div>
            
            {/* --- ⭐ New: Items List with Images --- */}
            <div className="success-items-list">
              {order.items.map((item, index) => (
                <div key={index} className="success-item-card">
                  <div className="item-img-container">
                    {/* पक्का करें कि item.image में सही URL आ रहा है */}
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-meta">
                        ₹{item.price.toLocaleString()} × {item.quantity}
                    </p>
                  </div>
                  <p className="item-total">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            {/* -------------------------------------- */}

            <div className="final-totals">
              <p>Total Items: {order.items.length}</p>
              <p className="total-paid">Total Paid: ₹{order.amount.toLocaleString()}</p>
            </div>
          </div>

          {/* ⭐ Left Side: Shipping Address (from Checkout Form) */}
          <div className="detail-box">
            <div className="box-header">
                <Truck size={20} />
                <h4>Shipping Address</h4>
            </div>
            <p className="addr-name">{order.address.firstName} {order.address.lastName}</p>
            <p>{order.address.address}</p>
            <p>{order.address.city}, {order.address.pincode}</p>
            <p>Phone: {order.address.phone}</p>
          </div>
        </div>

        <div className="email-notify">
          <p>A confirmation email has been sent to: <strong>{state.userEmail}</strong></p>
        </div>

        {/* वापस होम पेज पर जाने का बटन */}
        <button className="back-home-btn" onClick={() => navigate('/')}>
          <Home size={18} /> Back to Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;