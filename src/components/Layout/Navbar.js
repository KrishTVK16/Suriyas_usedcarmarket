import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'buyer' or 'seller'
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDashboardDropdown = () => {
    setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleDashboardClick = (type) => {
    setIsDashboardDropdownOpen(false);
    setIsMenuOpen(false);
    
    if (type === 'admin') {
      window.location.href = '/admin-dashboard.html';
    } else if (type === 'dealer' || type === 'seller') {
      window.location.href = '/dealer-dashboard.html';
    } else if (type === 'user' || type === 'buyer') {
      window.location.href = '/user-dashboard.html';
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDashboardDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDashboardDropdownOpen && !event.target.closest('.navbar-dropdown')) {
        setIsDashboardDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDashboardDropdownOpen]);

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
            <Link to="/home-2" className={`navbar-link ${isActive('/home-2') ? 'active' : ''}`} onClick={handleLinkClick}>Home 2</Link>
            <Link to="/browse-cars" className={`navbar-link ${isActive('/browse-cars') ? 'active' : ''}`} onClick={handleLinkClick}>Browse Cars</Link>
            <Link to="/sell-car" className={`navbar-link ${isActive('/sell-car') ? 'active' : ''}`} onClick={handleLinkClick}>Sell Your Car</Link>
            <Link to="/inspection" className={`navbar-link ${isActive('/inspection') ? 'active' : ''}`} onClick={handleLinkClick}>Inspection</Link>
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>Contact</Link>
            <Link to="/faqs" className={`navbar-link ${isActive('/faqs') ? 'active' : ''}`} onClick={handleLinkClick}>FAQs</Link>
            
            {/* Dashboard Dropdown */}
            <div className="navbar-dropdown">
              <button 
                onClick={toggleDashboardDropdown} 
                className="btn-dashboard"
                onMouseEnter={() => setIsDashboardDropdownOpen(true)}
              >
                Dashboard <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}></i>
              </button>
              <div 
                className={`dropdown-menu ${isDashboardDropdownOpen ? 'show' : ''}`}
                onMouseLeave={() => setIsDashboardDropdownOpen(false)}
              >
                <button onClick={() => handleDashboardClick('admin')} className="dropdown-item">
                  <i className="fas fa-user-shield"></i> Admin Dashboard
                </button>
                <button onClick={() => handleDashboardClick('dealer')} className="dropdown-item">
                  <i className="fas fa-store"></i> Dealer Dashboard
                </button>
                <button onClick={() => handleDashboardClick('user')} className="dropdown-item">
                  <i className="fas fa-user"></i> User Dashboard
                </button>
              </div>
            </div>

            {!isLoggedIn && (
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

