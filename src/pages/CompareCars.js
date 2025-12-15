import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './CompareCars.css';

const CompareCars = () => {
  const [selectedCars, setSelectedCars] = useState([
    {
      id: 1,
      make: 'BMW',
      model: 'M3',
      year: 2020,
      price: 4500000,
      mileage: '25000',
      fuelType: 'Petrol',
      transmission: 'Manual',
      engine: '3.0L Twin Turbo V6',
      power: '450 HP',
      torque: '550 Nm',
      topSpeed: '250 km/h',
      fuelEconomy: '10.5 km/l'
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
      engine: '4.0L V8',
      power: '523 HP',
      torque: '670 Nm',
      topSpeed: '304 km/h',
      fuelEconomy: '9.8 km/l'
    }
  ]);

  const comparisonFields = [
    { label: 'Make & Model', key: 'makeModel' },
    { label: 'Year', key: 'year' },
    { label: 'Price', key: 'price' },
    { label: 'Mileage', key: 'mileage' },
    { label: 'Fuel Type', key: 'fuelType' },
    { label: 'Transmission', key: 'transmission' },
    { label: 'Engine', key: 'engine' },
    { label: 'Power', key: 'power' },
    { label: 'Torque', key: 'torque' },
    { label: 'Top Speed', key: 'topSpeed' },
    { label: 'Fuel Economy', key: 'fuelEconomy' }
  ];

  const getFieldValue = (car, key) => {
    if (key === 'makeModel') {
      return `${car.make} ${car.model}`;
    }
    if (key === 'price') {
      return `₹${car.price.toLocaleString('en-IN')}`;
    }
    return car[key] || 'N/A';
  };

  return (
    <div className="compare-cars">
      <div className="compare-header">
        <h1>Compare Cars</h1>
        <p>Side-by-side comparison of your favorite vehicles</p>
      </div>

      <div className="compare-container">
        {selectedCars.length < 2 ? (
          <div className="compare-empty">
            <p>Add at least 2 cars to compare</p>
            <Link to="/browse-cars">
              <Button variant="primary">Browse Cars</Button>
            </Link>
          </div>
        ) : (
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell header-cell">Specification</div>
              {selectedCars.map((car, index) => (
                <div key={car.id} className="comparison-cell header-cell">
                  <div className="car-compare-header">
                    <h3>{car.make} {car.model}</h3>
                    <p className="car-year">{car.year}</p>
                    <Link to={`/car-details/${car.id}`} className="view-link">
                      View Details →
                    </Link>
                    <button 
                      className="remove-btn"
                      onClick={() => setSelectedCars(selectedCars.filter((_, i) => i !== index))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {comparisonFields.map((field) => (
              <div key={field.key} className="comparison-row">
                <div className="comparison-cell spec-label">
                  {field.label}
                </div>
                {selectedCars.map((car) => (
                  <div key={car.id} className="comparison-cell spec-value">
                    {getFieldValue(car, field.key)}
                  </div>
                ))}
              </div>
            ))}

            <div className="comparison-actions">
              {selectedCars.map((car) => (
                <div key={car.id} className="action-cell">
                  <Link to={`/car-details/${car.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                  <Button variant="secondary">Request Test Drive</Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="add-car-section">
          <h3>Add More Cars to Compare</h3>
          <Link to="/browse-cars">
            <Button variant="outline">Browse Cars</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompareCars;

