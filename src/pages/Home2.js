import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Home2.css';

const Home2 = () => {
  const featuredCars = [
    {
      id: 1,
      make: 'BMW',
      model: 'M3',
      year: 2020,
      price: 4500000,
      mileage: '25,000',
      fuelType: 'Petrol',
      transmission: 'Manual',
      location: 'Mumbai',
      condition: 'Excellent'
    },
    {
      id: 2,
      make: 'Mercedes',
      model: 'AMG GT',
      year: 2021,
      price: 8500000,
      mileage: '15,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Delhi',
      condition: 'Like New'
    },
    {
      id: 3,
      make: 'Audi',
      model: 'RS5',
      year: 2019,
      price: 5200000,
      mileage: '35,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Bangalore',
      condition: 'Very Good'
    },
    {
      id: 4,
      make: 'Porsche',
      model: '911',
      year: 2022,
      price: 12500000,
      mileage: '8,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Pune',
      condition: 'Excellent'
    },
    {
      id: 5,
      make: 'Ferrari',
      model: '488 GTB',
      year: 2020,
      price: 25000000,
      mileage: '12,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Mumbai',
      condition: 'Excellent'
    },
    {
      id: 6,
      make: 'Lamborghini',
      model: 'Huracán',
      year: 2021,
      price: 28000000,
      mileage: '10,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Delhi',
      condition: 'Like New'
    },
    {
      id: 7,
      make: 'Tesla',
      model: 'Model 3',
      year: 2021,
      price: 4200000,
      mileage: '20,000',
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'Bangalore',
      condition: 'Very Good'
    },
    {
      id: 8,
      make: 'Jaguar',
      model: 'F-Type',
      year: 2020,
      price: 6800000,
      mileage: '22,000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'Hyderabad',
      condition: 'Very Good'
    }
  ];

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="home2">
      <div className="home2-header">
        <h1>Premium Used Cars</h1>
        <p>Discover your perfect ride from our curated collection</p>
      </div>

      <div className="home2-container">
        <div className="home2-cards-grid">
          {featuredCars.map(car => (
            <div key={car.id} className="home2-card">
              <div className="home2-card-header">
                <div className="home2-card-title">
                  <h3>{car.make} {car.model}</h3>
                  <span className="home2-card-year">{car.year}</span>
                </div>
                <div className="home2-card-price">{formatPrice(car.price)}</div>
              </div>

              <div className="home2-card-body">
                <div className="home2-card-details">
                  <div className="home2-detail-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>{car.mileage} km</span>
                  </div>
                  <div className="home2-detail-item">
                    <i className="fas fa-gas-pump"></i>
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="home2-detail-item">
                    <i className="fas fa-cog"></i>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="home2-detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{car.location}</span>
                  </div>
                </div>

                <div className="home2-card-condition">
                  <span className="home2-condition-badge">{car.condition}</span>
                </div>
              </div>

              <div className="home2-card-footer">
                <Link to={`/car-details/${car.id}`}>
                  <Button variant="primary" className="home2-card-btn">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home2;

