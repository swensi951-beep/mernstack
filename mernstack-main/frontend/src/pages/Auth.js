import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // आपकी API URL (Backend endpoint)
    const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
    
    try {
      const res = await axios.post(url, formData);
      if (isLogin) {
        localStorage.setItem('user', JSON.stringify(res.data));
        toast.success(`Welcome back, ${res.data.name || 'User'}! 🌿`);
        setTimeout(() => {
          window.location.href = res.data.role === 'admin' ? "/admin" : "/";
        }, 1000);
      } else {
        toast.success("Account created successfully! Please login. 🥕");
        setIsLogin(true); // रजिस्टर के बाद लॉगिन फॉर्म पर स्विच करें
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong 😥");
    }
  };

  return (
    <div className="auth-ultra-wrapper">
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="auth-creative-container">
        
        {/* ⭐ Left Side: ONLY Image, No text overlay */}
        <div className="auth-pure-image-side">
          <img 
            src="assets/images/Login.jpg" // आपकी इमेज का पाथ
            alt="Organic Farm Life" 
            className="auth-bg-img"
          />
        </div>

        {/* ⭐ Right Side: Creative & Attractive Form */}
        <div className="auth-modern-form-side">
          <div className="form-content-box">
            
            {/* Minimalist Logo/Brand */}
            <div className="brand-minimal">
              
              {/* <h2>Farm<span><font color="green"><b>Mart</b></font></span></h2> */}
            </div>

            {/* Header with animation */}
            <div className="form-header-creative">
              <h1><span className="gradient-text">{isLogin ?'Welcome Back !': 'Get Started :~'}</span></h1>
              <p>{isLogin ? 'Sign in to access your fresh basket.' : 'Create an account for a fresh start.'}</p>
            </div>

            <form onSubmit={handleSubmit} className="creative-form">
              {!isLogin && (
                <div className="input-block">
                  <input 
                    type="text" placeholder="Full Name" required 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                  <i className="fa-regular fa-user input-icon"></i>
                </div>
              )}

              <div className="input-block">
                <input 
                  type="email" placeholder="Email Address" required 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
                <i className="fa-regular fa-envelope input-icon"></i>
              </div>

              <div className="input-block">
                <input 
                  type="password" placeholder="Password" required 
                  onChange={(e) => setFormData({...formData, password: e.target.value})} 
                />
                <i className="fa-solid fa-lock input-icon"></i>
              </div>

              {isLogin && (
                <div className="form-actions-minimal">
                  <label className="checkbox-wrap">
                    <input type="checkbox" /> 
                    <span>Remember me</span>
                  </label>
                  <a href="/forgot" className="forgot-p-link">Forgot Password?</a>
                </div>
              )}

              {/* ⭐ Creative Button with subtle pulse effect */}
              <button type="submit" className="creative-btn">
                <span>{isLogin ? 'Sign In' : 'Register'}</span>
                <div className="btn-icon-wrap">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </button>
            </form>

            <div className="form-switcher-footer">
              <p>
                {isLogin ? "New to FarmMarket?" : "Already have an account?"} 
                <span onClick={() => setIsLogin(!isLogin)} className="switch-link">
                  {isLogin ? ' Create Account' : ' Sign In Here'}
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;