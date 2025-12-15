import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span>UsedCar</span>
            <span className="logo-accent">Market</span>
          </h3>
          <p>Your premium destination for quality used cars. Find your dream ride today.</p>
          <div className="social-links">
            <button onClick={() => { }} className="social-link">Facebook</button>
            <button onClick={() => { }} className="social-link">Twitter</button>
            <button onClick={() => { }} className="social-link">Instagram</button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/browse-cars">Browse Cars</Link></li>
            <li><Link to="/sell-car">Sell Your Car</Link></li>
            <li><Link to="/inspection">Inspection & Certification</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tools</h4>
          <ul>
            <li><Link to="/emi-calculator">EMI Calculator</Link></li>
            <li><Link to="/inspection">Car Inspection</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 UsedCarMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

