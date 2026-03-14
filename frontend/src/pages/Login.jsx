import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Home link ke liye
import { FaEnvelope, FaLock, FaUser, FaLeaf, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

// Aapki image import
import loginSideImg from '../assets/images/Login.jpg'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-wrapper">
      {/* Back to Home Floating Link */}
      <Link to="/" className="back-home-link">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="auth-inner">
        {/* Left Side: Dynamic Image Section */}
        <div 
          className="auth-info-section" 
          style={{ backgroundImage: `url(${loginSideImg})` }}
        >
        
        </div>

        {/* Right Side: Form Section */}
        <div className="auth-form-section">
          <div className="form-content">
            <div className="form-header">
              <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
              <p className="subtitle">
                {isLogin ? 'Please enter your login details' : 'Join our community of organic lovers'}
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="input-field">
                  <FaUser className="form-icon" />
                  <input type="text" placeholder="Full Name" required />
                </div>
              )}

              <div className="input-field">
                <FaEnvelope className="form-icon" />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="input-field">
                <FaLock className="form-icon" />
                <input type="password" placeholder="Password" required />
              </div>

              {isLogin && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-btn">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="main-auth-btn">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="switch-text">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span onClick={toggleForm}> 
                  {isLogin ? ' Register Now' : ' Login Here'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;