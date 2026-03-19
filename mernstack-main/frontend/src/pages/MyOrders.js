import React, { useEffect, useState } from 'react';
import { Package, Clock, ChevronRight, ShoppingBag, User, Mail, Search, TrendingUp, AlertCircle, X, Printer } from 'lucide-react';
import toast from 'react-hot-toast';
import { Player } from '@lottiefiles/react-lottie-player'; // npm install @lottiefiles/react-lottie-player
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);
    
    const user = JSON.parse(localStorage.getItem('user'));

    const fetchOrders = async () => {
        if (!user?._id) return setLoading(false);
        try {
            const response = await fetch(`http://localhost:5000/api/orders/user/${user._id}`);
            const data = await response.json();
            if (data.success) {
                setOrders(data.orders);
                setFilteredOrders(data.orders);
            }
        } catch (error) {
            toast.error("Failed to load orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    // Search Logic
    useEffect(() => {
        const results = orders.filter(order => 
            order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredOrders(results);
    }, [searchTerm, orders]);

    // Handle Cancel Order
    const handleCancelOrder = async (orderId) => {
        if (!window.confirm("Are you sure you want to cancel this order?")) return;
        
        try {
            const response = await fetch(`http://localhost:5000/api/orders/status`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, status: 'Cancelled' })
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Order cancelled successfully");
                fetchOrders(); // Refresh list
            }
        } catch (error) {
            toast.error("Error cancelling order");
        }
    };

    const totalSpent = orders.reduce((sum, order) => sum + (order.status !== 'Cancelled' ? order.amount : 0), 0);
    const pendingOrders = orders.filter(o => o.status?.toLowerCase() === 'pending').length;

    if (loading) return <div className="loader-container"><div className="loader"></div><p>Fetching your fresh orders...</p></div>;

    return (
        <div className="orders-page">
            <div className="profile-section">
                <div className="profile-card">
                    <div className="profile-avatar"><User size={40} /></div>
                    <div className="profile-info">
                        <h2>{user?.username || "Farmer Guest"}</h2>
                        <div className="profile-meta">
                            <span><Mail size={14} /> {user?.email}</span>
                            <span><Package size={14} /> {orders.length} Orders</span>
                        </div>
                    </div>
                </div>
                
                <div className="stats-grid">
                    <div className="stat-mini-card">
                        <TrendingUp size={20} />
                        <div><p>Total Spent</p><h4>₹{totalSpent.toLocaleString()}</h4></div>
                    </div>
                    <div className="stat-mini-card">
                        <AlertCircle size={20} />
                        <div><p>Active Orders</p><h4>{pendingOrders}</h4></div>
                    </div>
                </div>
            </div>

            <div className="orders-container">
                <div className="search-wrapper">
                    <div className="search-box">
                        <Search size={18} />
                        <input 
                            type="text" 
                            placeholder="Search by Order ID or Item name..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="section-title">
                    <h3>Recent Purchases</h3>
                    <div className="title-line"></div>
                </div>

                {filteredOrders.length === 0 ? (
                    <div className="no-orders">
                        <Player
                            autoplay
                            loop
                            src="https://assets10.lottiefiles.com/packages/lf20_ygiu567p.json"
                            style={{ height: '200px', width: '200px' }}
                        />
                        <h3>No orders found!</h3>
                        <p>{searchTerm ? "No match for your search." : "Your basket is empty."}</p>
                        <button className="shop-now-btn" onClick={() => window.location.href = '/'}>Shop Now</button>
                    </div>
                ) : (
                    <div className="orders-list">
                        {filteredOrders.map((order) => (
                            <div key={order._id} className="order-card">
                                <div className="order-card-header">
                                    <div className="order-meta">
                                        <span className="order-date">
                                            <Clock size={14} /> {new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                        </span>
                                        <span className="order-id-badge">#{order._id.slice(-8).toUpperCase()}</span>
                                    </div>
                                    <div className={`status-pill ${order.status?.toLowerCase()}`}>
                                        {order.status || 'Processing'}
                                    </div>
                                </div>

                                <div className="progress-container">
                                    <div className={`progress-bar ${order.status?.toLowerCase()}`}></div>
                                </div>

                                <div className="order-items-preview">
                                    {order.items.map((item, i) => (
                                        <div key={i} className="mini-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="mini-info">
                                                <p>{item.name}</p>
                                                <span>Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                             <div className="order-card-footer">
    <div className="total-info">
        <p>Final Amount</p>
        <h4>₹{order.amount.toLocaleString()}</h4>
    </div>

    <div className="action-buttons">
        {/* 🔥 स्मार्ट लॉजिक: सिर्फ Pending होने पर ही Cancel बटन दिखेगा */}
        {order.status === 'Pending' ? (
            <button className="cancel-btn" onClick={() => handleCancelOrder(order._id)}>
                Cancel Order
            </button>
        ) : (
            // Shipped या Delivered होने पर Cancel बटन की जगह ये दिखेगा
            <span className="status-note">
                {order.status === 'Delivered' ? "Hope you liked it! 🌱" : "On the way... 🚚"}
            </span>
        )}

        <button className="details-link" onClick={() => setSelectedOrder(order)}>
            Track Order <ChevronRight size={16} />
        </button>
    </div>
</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ⭐ INVOICE MODAL */}
            {selectedOrder && (
                <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Order Details</h3>
                            <button className="close-btn" onClick={() => setSelectedOrder(null)}><X size={20}/></button>
                        </div>
                        
                        <div className="invoice-scroll">
                            <div className="invoice-section">
                                <h4>Delivery Address</h4>
                                <div className="address-box">
                                    <p><strong>{selectedOrder.address.firstName} {selectedOrder.address.lastName}</strong></p>
                                    <p>{selectedOrder.address.address}</p>
                                    <p>{selectedOrder.address.city}, {selectedOrder.address.state} - {selectedOrder.address.pincode}</p>
                                    <p>📞 {selectedOrder.address.phone}</p>
                                </div>
                            </div>

                            <div className="invoice-section">
                                <h4>Order Summary</h4>
                                {selectedOrder.items.map((item, idx) => (
                                    <div key={idx} className="invoice-item">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span>₹{item.price * item.quantity}</span>
                                    </div>
                                ))}
                                <div className="invoice-total">
                                    <span>Subtotal</span>
                                    <span>₹{selectedOrder.amount}</span>
                                </div>
                                <div className="invoice-total grand">
                                    <strong>Amount Paid</strong>
                                    <strong>₹{selectedOrder.amount}</strong>
                                </div>
                            </div>

                            <div className={`modal-status-banner ${selectedOrder.status?.toLowerCase()}`}>
                                Status: {selectedOrder.status}
                            </div>
                        </div>
                        
                        <button className="print-btn" onClick={() => window.print()}>
                            <Printer size={16} /> Print Invoice
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyOrders;