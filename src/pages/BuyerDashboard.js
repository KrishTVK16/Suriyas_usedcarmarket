import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/UI/CarCard';
import Button from '../components/UI/Button';
import './Dashboard.css';

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('saved');

  const savedCars = [
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
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
    }
  ];

  const alerts = [
    { id: 1, message: 'BMW M3 price dropped by ₹50,000', time: '2 hours ago', type: 'price' },
    { id: 2, message: 'New Mercedes AMG GT listed', time: '5 hours ago', type: 'new' },
    { id: 3, message: 'Audi RS5 matches your search criteria', time: '1 day ago', type: 'match' }
  ];

  const testDriveRequests = [
    { id: 1, car: 'BMW M3', date: '2024-01-15', status: 'Pending' },
    { id: 2, car: 'Mercedes AMG GT', date: '2024-01-20', status: 'Confirmed' }
  ];

  const compareHistory = [
    { id: 1, cars: ['BMW M3', 'Mercedes AMG GT'], date: '2024-01-10' },
    { id: 2, cars: ['Audi RS5', 'Porsche 911'], date: '2024-01-08' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Buyer Dashboard</h1>
        <p>Manage your saved cars, alerts, and test drive requests</p>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <nav className="dashboard-nav">
            <button
              className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
              onClick={() => setActiveTab('saved')}
            >
              Saved Cars
            </button>
            <button
              className={`nav-item ${activeTab === 'alerts' ? 'active' : ''}`}
              onClick={() => setActiveTab('alerts')}
            >
              Alerts & Notifications
            </button>
            <button
              className={`nav-item ${activeTab === 'compare' ? 'active' : ''}`}
              onClick={() => setActiveTab('compare')}
            >
              Compare History
            </button>
            <button
              className={`nav-item ${activeTab === 'testdrive' ? 'active' : ''}`}
              onClick={() => setActiveTab('testdrive')}
            >
              Test Drive Requests
            </button>
          </nav>
        </div>

        <div className="dashboard-content">
          {activeTab === 'saved' && (
            <div className="dashboard-section">
              <div className="section-header">
                <h2>Saved Cars</h2>
                <Link to="/browse-cars">
                  <Button variant="secondary">Browse More Cars</Button>
                </Link>
              </div>
              {savedCars.length > 0 ? (
                <div className="cars-grid">
                  {savedCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No saved cars yet</p>
                  <Link to="/browse-cars">
                    <Button variant="primary">Browse Cars</Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="dashboard-section">
              <h2>Alerts & Notifications</h2>
              <div className="alerts-list">
                {alerts.map(alert => (
                  <div key={alert.id} className="alert-item">
                    <div className="alert-icon">{alert.type === 'price' ? '💰' : alert.type === 'new' ? '🆕' : '🔔'}</div>
                    <div className="alert-content">
                      <p className="alert-message">{alert.message}</p>
                      <span className="alert-time">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'compare' && (
            <div className="dashboard-section">
              <h2>Compare History</h2>
              <div className="compare-history-list">
                {compareHistory.map(item => (
                  <div key={item.id} className="compare-history-item">
                    <div className="compare-cars-list">
                      {item.cars.map((car, index) => (
                        <span key={index} className="compare-car-name">{car}</span>
                      ))}
                    </div>
                    <div className="compare-date">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testdrive' && (
            <div className="dashboard-section">
              <h2>Test Drive Requests</h2>
              <div className="testdrive-list">
                {testDriveRequests.map(request => (
                  <div key={request.id} className="testdrive-item">
                    <div className="testdrive-info">
                      <h3>{request.car}</h3>
                      <p>Requested Date: {request.date}</p>
                      <span className={`status-badge status-${request.status.toLowerCase()}`}>
                        {request.status}
                      </span>
                    </div>
                    <div className="testdrive-actions">
                      {request.status === 'Pending' && (
                        <Button variant="secondary">Cancel Request</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;

