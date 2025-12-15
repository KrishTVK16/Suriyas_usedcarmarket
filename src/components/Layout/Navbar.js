import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const [userType] = useState(null); // 'buyer' or 'seller'
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

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
            <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
            <Link to="/browse-cars" className="navbar-link" onClick={handleLinkClick}>Browse Cars</Link>
            <Link to="/sell-car" className="navbar-link" onClick={handleLinkClick}>Sell Your Car</Link>
            <Link to="/inspection" className="navbar-link" onClick={handleLinkClick}>Inspection</Link>
            <Link to="/emi-calculator" className="navbar-link" onClick={handleLinkClick}>EMI Calculator</Link>
            <Link to="/about" className="navbar-link" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact</Link>
            <Link to="/faqs" className="navbar-link" onClick={handleLinkClick}>FAQs</Link>

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

