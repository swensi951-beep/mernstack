import React, { useEffect, useState } from 'react';
import { 
  Package, CheckCircle, Truck, XCircle, User, 
  TrendingUp, ShoppingBag, Clock, Phone, MapPin, 
  X, Search, Filter, Download, ChevronRight, MoreVertical
} from 'lucide-react';
import toast from 'react-hot-toast';
import './AdminOrders.css';

const AdminOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    const fetchAllOrders = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/all`);
            const data = await response.json();
            if (data.success) {
                setAllOrders(data.orders);
            }
        } catch (error) {
            toast.error("Error fetching admin orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    const updateStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/status`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, status: newStatus })
            });
            const data = await response.json();
            if (data.success) {
                toast.success(`Order set to ${newStatus}`);
                fetchAllOrders();
                if(selectedOrder && selectedOrder._id === orderId) setSelectedOrder(null);
            }
        } catch (error) {
            toast.error("Update failed");
        }
    };

    // Advanced Filtering Logic
    const filteredOrders = allOrders.filter(order => {
        const matchesSearch = order.address.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              order._id.includes(searchTerm);
        const matchesFilter = filterStatus === "All" || order.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const stats = {
        total: allOrders.length,
        pending: allOrders.filter(o => o.status === 'Pending').length,
        delivered: allOrders.filter(o => o.status === 'Delivered').length,
        revenue: allOrders.filter(o => o.status === 'Delivered').reduce((a, b) => a + b.amount, 0)
    };

    if (loading) return <div className="admin-loading-screen">Preparing FarmFresh Dashboard...</div>;

    return (
        <div className="admin-orders-page">
            {/* Header Section */}
            <div className="admin-page-header">
                <div>
                    <h1>Order Management</h1>
                    <p>Manage, track and fulfill customer orders</p>
                </div>
                <button className="export-btn">
                    <Download size={18} /> Export CSV
                </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="admin-stats-grid">
                <div className="stat-box">
                    <div className="stat-icon-wrap blue"><ShoppingBag size={20}/></div>
                    <div className="stat-info"><span>Total Orders</span><h3>{stats.total}</h3></div>
                </div>
                <div className="stat-box">
                    <div className="stat-icon-wrap yellow"><Clock size={20}/></div>
                    <div className="stat-info"><span>Pending</span><h3>{stats.pending}</h3></div>
                </div>
                <div className="stat-box">
                    <div className="stat-icon-wrap green"><CheckCircle size={20}/></div>
                    <div className="stat-info"><span>Delivered</span><h3>{stats.delivered}</h3></div>
                </div>
                <div className="stat-box">
                    <div className="stat-icon-wrap gold"><TrendingUp size={20}/></div>
                    <div className="stat-info"><span>Total Revenue</span><h3>₹{stats.revenue.toLocaleString()}</h3></div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="admin-table-controls">
                <div className="search-wrapper">
                    <Search size={18} />
                    <input 
                        type="text" 
                        placeholder="Search by Customer or ID..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <Filter size={18} />
                    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Modern Table */}
            <div className="admin-table-container">
                <table className="pro-admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order._id} onClick={() => setSelectedOrder(order)}>
                                <td className="id-cell">#{order._id.slice(-6).toUpperCase()}</td>
                                <td>{new Date(order.createdAt).toLocaleDateString('en-GB', {day: '2-digit', month: 'short'})}</td>
                                <td>
                                    <div className="customer-cell">
                                        <div className="initial-avatar">{order.address.firstName[0]}</div>
                                        <span>{order.address.firstName} {order.address.lastName}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="stack-preview">
                                        {order.items.slice(0, 2).map((item, i) => (
                                            <img key={i} src={item.image} alt="" className="stack-img" />
                                        ))}
                                        {order.items.length > 2 && <span className="stack-count">+{order.items.length - 2}</span>}
                                    </div>
                                </td>
                                <td className="amount-cell">₹{order.amount}</td>
                                <td>
                                    <span className={`status-pill ${order.status?.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="action-cell" onClick={(e) => e.stopPropagation()}>
                                    <button className="view-details-btn"><ChevronRight size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SIDE SLIDE-OVER (Drawer) for Details */}
            {selectedOrder && (
                <div className="drawer-overlay" onClick={() => setSelectedOrder(null)}>
                    <div className="order-drawer" onClick={e => e.stopPropagation()}>
                        <div className="drawer-header">
                            <h2>Order Details</h2>
                            <button onClick={() => setSelectedOrder(null)}><X size={22}/></button>
                        </div>

                        <div className="drawer-content">
                            <div className="status-timeline">
                                <p>Current Status: <strong>{selectedOrder.status}</strong></p>
                                <div className="status-actions-row">
                                    {selectedOrder.status === 'Pending' && <button onClick={() => updateStatus(selectedOrder._id, 'Shipped')} className="btn-p ship">Mark Shipped</button>}
                                    {selectedOrder.status === 'Shipped' && <button onClick={() => updateStatus(selectedOrder._id, 'Delivered')} className="btn-p deliver">Mark Delivered</button>}
                                    {selectedOrder.status !== 'Cancelled' && selectedOrder.status !== 'Delivered' && <button onClick={() => updateStatus(selectedOrder._id, 'Cancelled')} className="btn-p cancel">Cancel Order</button>}
                                </div>
                            </div>

                            <div className="drawer-section">
                                <h4><User size={16}/> Customer Information</h4>
                                <div className="info-card">
                                    <p><strong>{selectedOrder.address.firstName} {selectedOrder.address.lastName}</strong></p>
                                    <p><Phone size={14}/> {selectedOrder.address.phone}</p>
                                    <p><MapPin size={14}/> {selectedOrder.address.street}, {selectedOrder.address.city}, {selectedOrder.address.zipcode}</p>
                                </div>
                            </div>

                            <div className="drawer-section">
                                <h4><Package size={16}/> Items Summary</h4>
                                <div className="item-list-mini">
                                    {selectedOrder.items.map((item, index) => (
                                        <div key={index} className="mini-item-card">
                                            <img src={item.image} alt="" />
                                            <div className="mi-info">
                                                <p>{item.name}</p>
                                                <span>Qty: {item.quantity} × ₹{item.price}</span>
                                            </div>
                                            <div className="mi-total">₹{item.quantity * item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="drawer-footer">
                                <div className="df-row"><span>Subtotal:</span><span>₹{selectedOrder.amount - 40}</span></div>
                                <div className="df-row"><span>Delivery Fee:</span><span>₹40</span></div>
                                <div className="df-row grand-total"><span>Total:</span><span>₹{selectedOrder.amount}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOrders;