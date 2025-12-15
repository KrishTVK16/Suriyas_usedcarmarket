import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    userType: 'buyer'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(isLogin ? 'Login successful!' : 'Registration successful!');
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <Link to="/" className="login-logo">
            <span className="logo-text">UsedCar</span>
            <span className="logo-accent">Market</span>
          </Link>
          <div className="login-header">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <p>{isLogin ? 'Welcome back!' : 'Create your account'}</p>
          </div>

          <div className="user-type-toggle">
            <button
              className={`toggle-btn ${formData.userType === 'buyer' ? 'active' : ''}`}
              onClick={() => setFormData({ ...formData, userType: 'buyer' })}
            >
              Buyer
            </button>
            <button
              className={`toggle-btn ${formData.userType === 'seller' ? 'active' : ''}`}
              onClick={() => setFormData({ ...formData, userType: 'seller' })}
            >
              Seller
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="Your Name"
                />
              </div>
            )}

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="+91 123 456 7890"
                />
              </div>
            )}

            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="#" className="forgot-link">Forgot Password?</Link>
              </div>
            )}

            <Button type="submit" variant="primary" className="submit-btn">
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </form>

          <div className="login-footer">
            <p>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                className="switch-link"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

