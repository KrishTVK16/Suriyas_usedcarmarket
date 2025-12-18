import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock car data - in real app, fetch by id
  const car = {
    id: 1,
    make: 'BMW',
    model: 'M3',
    year: 2020,
    price: 4500000,
    mileage: '25000',
    fuelType: 'Petrol',
    transmission: 'Manual',
    engine: '3.0L Twin Turbo V6',
    color: 'Alpine White',
    owner: 'Single Owner',
    location: 'Mumbai, Maharashtra',
    badges: ['Sport', 'Turbo'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'
    ],
    description: 'Premium BMW M3 in excellent condition. Well maintained with full service history. Perfect for enthusiasts seeking performance and luxury.',
    features: ['Leather Seats', 'Sunroof', 'Navigation System', 'Premium Sound System', 'Parking Sensors', 'Reverse Camera'],
    specifications: {
      'Engine': '3.0L Twin Turbo V6',
      'Power': '450 HP',
      'Torque': '550 Nm',
      'Top Speed': '250 km/h',
      '0-100 km/h': '4.2 seconds',
      'Fuel Economy': '10.5 km/l',
      'Seating Capacity': '5',
      'Boot Space': '480 L'
    }
  };

  return (
    <div className="car-details">
      <div className="car-details-container">
        <div className="car-images-section">
          <div className="main-image">
            <img src={car.images[0]} alt={car.make + ' ' + car.model} />
          </div>
          <div className="thumbnail-images">
            {car.images.map((img, index) => (
              <img key={index} src={img} alt={`${car.make} ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="car-info-section">
          <div className="car-header">
            <div className="car-title-section">
              <h1>{car.make} {car.model}</h1>
              <p className="car-year">{car.year}</p>
              <div className="car-badges">
                {car.badges.map((badge, index) => (
                  <span key={index} className={`car-badge badge-${badge.toLowerCase()}`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="car-price-section">
              <div className="price-display">
                <span className="price-currency">₹</span>
                <span className="price-amount">{car.price.toLocaleString('en-IN')}</span>
              </div>
              <p className="price-label">Negotiable</p>
            </div>
          </div>

          <div className="car-quick-info">
            <div className="info-item">
              <span className="info-label">Mileage</span>
              <span className="info-value">{car.mileage} km</span>
            </div>
            <div className="info-item">
              <span className="info-label">Fuel Type</span>
              <span className="info-value">{car.fuelType}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Transmission</span>
              <span className="info-value">{car.transmission}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Owner</span>
              <span className="info-value">{car.owner}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{car.location}</span>
            </div>
          </div>

          <div className="car-actions">
            <Button variant="primary" className="action-btn">
              Request Test Drive
            </Button>
            <Button variant="secondary" className="action-btn">
              Save Car
            </Button>
          </div>

          <div className="car-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>

          <div className="car-tab-content">
            {activeTab === 'overview' && (
              <div className="tab-panel">
                <h3>Description</h3>
                <p>{car.description}</p>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="tab-panel">
                <div className="specs-grid">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'features' && (
              <div className="tab-panel">
                <div className="features-grid">
                  {car.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

