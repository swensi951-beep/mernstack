import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBasket, PlusCircle, 
  Users, BarChart3, Bell, Search, UserCircle,
  ClipboardList // 👈 नया आइकॉन ऑर्डर्स के लिए
} from 'lucide-react';
import './AdminDashboard.css';

import AddProduct from './AddProduct'; 
import ProductList from './ProductList';
import AdminOrders from './AdminOrders'; // 👈 इसे इम्पोर्ट करें

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-circle"></div>
          <h1>Farm<span className="gold-text">Fresh</span></h1>
        </div>

        <nav className="sidebar-menu">
          <p className="menu-label">Main Dashboard</p>
          <ul>
            <li>
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                <LayoutDashboard size={20} /> Dashboard
              </NavLink>
            </li>
            
            {/* ⭐ नया Orders लिंक यहाँ जोड़ा गया है */}
            <li>
              <NavLink to="/admin/orders" className={({ isActive }) => isActive ? 'active' : ''}>
                <ClipboardList size={20} /> Manage Orders
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'active' : ''}>
                <ShoppingBasket size={20} /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/add" className={({ isActive }) => isActive ? 'active' : ''}>
                <PlusCircle size={20} /> Add Product
              </NavLink>
            </li>
          </ul>

          <p className="menu-label">Reports & Users</p>
          <ul>
            <li><NavLink to="/admin/analytics"><BarChart3 size={20} /> Analytics</NavLink></li>
            <li><NavLink to="/admin/customers"><Users size={20} /> Customers</NavLink></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-small">
            <UserCircle size={35} color="#82C132" />
            <div>
              <p className="user-name">Svensi Narola</p>
              <p className="user-role">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main Section --- */}
      <main className="main-section">
        <header className="navbar1">
          <div className="search-box">
            <Search size={18} color="#7C877F" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="nav-actions">
            <div className="icon-badge"><Bell size={20} /><span className="dot"></span></div>
            <div className="divider"></div>
            <div className="profile-trigger">
              <span>Admin Panel</span>
              <UserCircle size={24} />
            </div>
          </div>
        </header>

        <div className="content-area">
          <Routes>
            <Route path="add" element={<AddProduct />} />
            <Route path="products" element={<ProductList/>} />
            
            {/* ⭐ नया Orders Route यहाँ सेट किया गया है */}
            <Route path="orders" element={<AdminOrders />} />
            
            <Route path="dashboard" element={<div className="empty-card"><h2>Welcome to Stats Overview</h2></div>} />
            <Route path="/" element={<div className="empty-card"><h2>Admin Home</h2></div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;