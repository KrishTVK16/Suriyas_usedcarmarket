import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/UI/CarCard';
import Button from '../components/UI/Button';
import './Dashboard.css';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('listings');

  const myListings = [
    {
      id: 1,
      make: 'BMW',
      model: 'M3',
      year: 2020,
      price: 4500000,
      mileage: '25000',
      fuelType: 'Petrol',
      transmission: 'Manual',
      badges: ['Sport', 'Turbo'],
      status: 'Active',
      views: 245,
      inquiries: 12,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'
    },
    {
      id: 2,
      make: 'Mercedes',
      model: 'AMG GT',
      year: 2021,
      price: 8500000,
      mileage: '15000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      badges: ['Sport', 'V8'],
      status: 'Pending',
      views: 0,
      inquiries: 0,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
    }
  ];

  const analytics = {
    totalListings: 2,
    activeListings: 1,
    totalViews: 245,
    totalInquiries: 12,
    avgPrice: 6500000
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Seller Dashboard</h1>
        <p>Manage your listings and track your performance</p>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <nav className="dashboard-nav">
            <button
              className={`nav-item ${activeTab === 'listings' ? 'active' : ''}`}
              onClick={() => setActiveTab('listings')}
            >
              My Listings
            </button>
            <button
              className={`nav-item ${activeTab === 'add' ? 'active' : ''}`}
              onClick={() => setActiveTab('add')}
            >
              Add New Car
            </button>
            <button
              className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </nav>
        </div>

        <div className="dashboard-content">
          {activeTab === 'listings' && (
            <div className="dashboard-section">
              <div className="section-header">
                <h2>My Listings</h2>
                <Link to="/sell-car">
                  <Button variant="primary">Add New Listing</Button>
                </Link>
              </div>
              {myListings.length > 0 ? (
                <div className="listings-grid">
                  {myListings.map(car => (
                    <div key={car.id} className="listing-card-wrapper">
                      <CarCard car={car} />
                      <div className="listing-stats">
                        <div className="stat-item">
                          <span className="stat-label">Status:</span>
                          <span className={`status-badge status-${car.status.toLowerCase()}`}>
                            {car.status}
                          </span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Views:</span>
                          <span className="stat-value">{car.views}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Inquiries:</span>
                          <span className="stat-value">{car.inquiries}</span>
                        </div>
                      </div>
                      <div className="listing-actions">
                        <Button variant="secondary">Edit</Button>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No listings yet</p>
                  <Link to="/sell-car">
                    <Button variant="primary">Add Your First Car</Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'add' && (
            <div className="dashboard-section">
              <h2>Add New Car</h2>
              <div className="add-car-info">
                <p>Fill out the form to list your car for sale.</p>
                <Link to="/sell-car">
                  <Button variant="primary">Go to Listing Form</Button>
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="dashboard-section">
              <h2>Seller Analytics</h2>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <div className="analytics-icon">📊</div>
                  <div className="analytics-value">{analytics.totalListings}</div>
                  <div className="analytics-label">Total Listings</div>
                </div>
                <div className="analytics-card">
                  <div className="analytics-icon">✅</div>
                  <div className="analytics-value">{analytics.activeListings}</div>
                  <div className="analytics-label">Active Listings</div>
                </div>
                <div className="analytics-card">
                  <div className="analytics-icon">👁️</div>
                  <div className="analytics-value">{analytics.totalViews}</div>
                  <div className="analytics-label">Total Views</div>
                </div>
                <div className="analytics-card">
                  <div className="analytics-icon">💬</div>
                  <div className="analytics-value">{analytics.totalInquiries}</div>
                  <div className="analytics-label">Total Inquiries</div>
                </div>
                <div className="analytics-card">
                  <div className="analytics-icon">💰</div>
                  <div className="analytics-value">₹{(analytics.avgPrice / 100000).toFixed(1)}L</div>
                  <div className="analytics-label">Average Price</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

