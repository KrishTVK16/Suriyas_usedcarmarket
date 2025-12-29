import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  const getPlaceholderImage = () => {
    // Generate a placeholder based on car make/model
    return `https://via.placeholder.com/800x500/2D2D2D/FF2B2B?text=${encodeURIComponent(car.make + ' ' + car.model)}`;
  };

  return (
    <div className="car-card">
      <div className="car-card-image-container">
        <img 
          src={imageError ? getPlaceholderImage() : (car.image || getPlaceholderImage())} 
          alt={car.make + ' ' + car.model} 
          className="car-card-image"
          onError={handleImageError}
        />
        <div className="car-badges">
          {car.badges && car.badges.map((badge, index) => (
            <span key={index} className={`car-badge badge-${badge.toLowerCase()}`}>
              {badge}
            </span>
          ))}
        </div>
        <div className="car-card-overlay">
          <Link to={`/car-details/${car.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
      <div className="car-card-content">
        <h3 className="car-card-title">{car.make} {car.model}</h3>
        <p className="car-card-year">{car.year}</p>
        <div className="car-card-specs">
          <span className="spec-item">
            <i className="icon">⚡</i> {car.mileage || 'N/A'} km
          </span>
          <span className="spec-item">
            <i className="icon">🔧</i> {car.fuelType || 'N/A'}
          </span>
          <span className="spec-item">
            <i className="icon">⚙️</i> {car.transmission || 'N/A'}
          </span>
        </div>
        <div className="car-card-footer">
          <div className="car-price">
            <span className="price-currency">₹</span>
            <span className="price-amount">{car.price?.toLocaleString('en-IN') || 'N/A'}</span>
          </div>
          <Link to={`/car-details/${car.id}`} className="car-card-link">
            View →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

