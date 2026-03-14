import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom'; // NavLink aur Routes import kiya
import { 
  LayoutDashboard, ShoppingBasket, PlusCircle, 
  Users, BarChart3, Settings, Bell, Search, UserCircle 
} from 'lucide-react';
import './AdminDashboard.css';

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
            {/* NavLink automatic 'active' class add karta hai */}
            <li>
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                <LayoutDashboard size={20} /> Dashboard
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
            <li>
              <NavLink to="/admin/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
                <BarChart3 size={20} /> Sales Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/customers" className={({ isActive }) => isActive ? 'active' : ''}>
                <Users size={20} /> Customers
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'active' : ''}>
                <Settings size={20} /> Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-small">
            <UserCircle size={35} color="rgb(8, 190, 8)" />
            <div>
              <p className="user-name">Svensi Narola</p>
              <p className="user-role">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main Section --- */}
      <main className="main-section">
        <header className="navbar">
          <div className="search-box">
            <Search size={18} color="#7C877F" />
            <input type="text" placeholder="Search orders, products..." />
          </div>

          <div className="nav-actions">
            <div className="icon-badge">
              <Bell size={20} />
              <span className="dot"></span>
            </div>
            <div className="divider"></div>
            <button className="profile-trigger">
              <span>Admin Panel</span>
              <UserCircle size={24} />
            </button>
          </div>
        </header>

        <div className="content-area">
          <div className="welcome-banner">
            <h1>Welcome back, <span className="gold-text">Swency!</span></h1>
            <p>Yahan se aap apne store ki activities manage kar sakte hain.</p>
          </div>
          
          <div className="placeholder-grid">
            {/* Yahan aapke components render honge based on URL */}
            <Routes>
              <Route path="dashboard" element={<div className="empty-card">Dashboard Content Area</div>} />
              <Route path="products" element={<div className="empty-card">Products Inventory List</div>} />
              <Route path="add" element={<div className="empty-card">Add New Product Form</div>} />
              <Route path="analytics" element={<div className="empty-card">Sales Reports</div>} />
              <Route path="customers" element={<div className="empty-card">Customer Database</div>} />
              <Route path="settings" element={<div className="empty-card">Admin Settings</div>} />
              <Route path="/" element={<div className="empty-card">Dashboard Home</div>} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;