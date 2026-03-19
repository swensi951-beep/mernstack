import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, ShoppingBag, ChevronRight, Truck, ShieldCheck } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './CheckoutSection.css';

const CheckoutSection = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', city: '', pincode: '', state: ''
  });

  useEffect(() => {
    // LocalStorage से कार्ट डेटा लाना
    const savedData = localStorage.getItem('cart');
    
    if (savedData) {
      const parsedCart = JSON.parse(savedData);
      if (parsedCart.length > 0) {
        setCartItems(parsedCart);
      } else {
        handleEmptyCart();
      }
    } else {
      handleEmptyCart();
    }
  }, []);

  const handleEmptyCart = () => {
    toast.error("आपका कार्ट खाली है! कृपया कुछ सामान जोड़ें।");
    setTimeout(() => navigate('/'), 2000);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  // ⭐ API Call और Order Place करने का फंक्शन
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // 1. लॉगिन चेक करें
    const user = JSON.parse(localStorage.getItem('user')); 

    if (!user) {
      toast.error("Please login to place order!");
      return navigate('/login');
    }

    // 2. कार्ट चेक करें
    if (cartItems.length === 0) {
      return toast.error("Your cart is empty!");
    }

    const loadingToast = toast.loading("Processing your order...");

    // 3. डेटा तैयार करें (Payload)
    const orderPayload = {
      userId: user._id,
      items: cartItems,
      amount: total,
      address: formData 
    };

    try {
      // 4. बैकेंड API को कॉल करें
      const response = await fetch('http://localhost:5000/api/orders/place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Order Placed Successfully! 🌿", { id: loadingToast });
        
        // कार्ट साफ़ करें
        localStorage.removeItem('cart'); 
        
        // 5. Success Page पर डेटा के साथ भेजें
        navigate('/order-success', { 
          state: { 
            orderInfo: data.order, 
            userName: user.username || user.name, // आपके schema के हिसाब से
            userEmail: user.email 
          } 
        });
      } else {
        toast.error(data.message || "Order failed!", { id: loadingToast });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Server error! Please try again later.", { id: loadingToast });
    }
  };

  return (
    <div className="checkout-page">
      <Toaster position="top-right" />
      
      <nav className="checkout-nav">
        <div className="nav-content">
          <span onClick={() => navigate('/')} style={{cursor: 'pointer'}}>Home</span>
          <ChevronRight size={16} />
          <span className="current">Checkout</span>
        </div>
      </nav>

      <div className="checkout-grid">
        <div className="checkout-left">
          <form onSubmit={handlePlaceOrder}>
            <div className="checkout-card">
              <div className="card-header">
                <MapPin size={22} className="text-green" />
                <h3>Delivery Address</h3>
              </div>
              
              <div className="input-grid">
                <input type="text" placeholder="First Name" required onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                <input type="text" placeholder="Last Name" required onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                <input type="email" placeholder="Email Address" required className="col-span-2" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input type="text" placeholder="Phone Number" required className="col-span-2" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input type="text" placeholder="House No, Street, Area" required className="col-span-2" onChange={(e) => setFormData({...formData, address: e.target.value})} />
                <input type="text" placeholder="City" required onChange={(e) => setFormData({...formData, city: e.target.value})} />
                <input type="text" placeholder="Pincode" required onChange={(e) => setFormData({...formData, pincode: e.target.value})} />
              </div>
            </div>

            <div className="checkout-card">
              <div className="card-header">
                <CreditCard size={22} className="text-green" />
                <h3>Payment Method</h3>
              </div>
              <div className="payment-options">
                <div className="payment-box active">
                  <div className="payment-info">
                    <Truck size={24} />
                    <div>
                      <strong>Cash on Delivery</strong>
                      <p>Pay upon receiving fresh produce</p>
                    </div>
                  </div>
                  <div className="radio-circle active"></div>
                </div>
              </div>
            </div>

            <button type="submit" className="place-order-button" disabled={cartItems.length === 0}>
              Complete Order • ₹{total.toLocaleString()}
            </button>
          </form>
        </div>

        <div className="checkout-right">
          <div className="summary-sticky">
            <div className="summary-header">
              <ShoppingBag size={20} />
              <h3>Your Basket</h3>
            </div>

            <div className="summary-items">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item._id || item.id} className="summary-product">
                    <div className="product-img">
                      <img src={item.image} alt={item.name} />
                      <span className="qty-badge">{item.quantity}</span>
                    </div>
                    <div className="product-details">
                      <p className="p-name">{item.name}</p>
                      <p className="p-price">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{textAlign: 'center', color: '#64748b'}}>No items found</p>
              )}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span className={shipping === 0 ? "free-text" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="total-row grand-total">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="secure-footer">
              <ShieldCheck size={18} />
              <span>100% Safe & Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;