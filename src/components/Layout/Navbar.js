import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'buyer' or 'seller'
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboard = () => {
    if (userType === 'buyer') {
      navigate('/buyer-dashboard');
    } else if (userType === 'seller') {
      navigate('/seller-dashboard');
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {isMenuOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
            <span className="logo-text">UsedCar</span>
            <span className="logo-accent">Market</span>
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} onClick={handleLinkClick}>Home</Link>
            <Link to="/browse-cars" className={`navbar-link ${isActive('/browse-cars') ? 'active' : ''}`} onClick={handleLinkClick}>Browse Cars</Link>
            <Link to="/sell-car" className={`navbar-link ${isActive('/sell-car') ? 'active' : ''}`} onClick={handleLinkClick}>Sell Your Car</Link>
            <Link to="/inspection" className={`navbar-link ${isActive('/inspection') ? 'active' : ''}`} onClick={handleLinkClick}>Inspection</Link>
            <Link to="/emi-calculator" className={`navbar-link ${isActive('/emi-calculator') ? 'active' : ''}`} onClick={handleLinkClick}>EMI Calculator</Link>
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>Contact</Link>
            <Link to="/faqs" className={`navbar-link ${isActive('/faqs') ? 'active' : ''}`} onClick={handleLinkClick}>FAQs</Link>
            
            {isLoggedIn ? (
              <button onClick={() => { handleDashboard(); handleLinkClick(); }} className="btn-dashboard">
                Dashboard
              </button>
            ) : (
              <button onClick={() => { handleLogin(); handleLinkClick(); }} className="btn-login">
                Login / Register
              </button>
            )}
          </div>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

