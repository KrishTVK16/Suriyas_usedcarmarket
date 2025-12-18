import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/UI/CarCard';
import Button from '../components/UI/Button';
import './Home.css';

const Home = () => {
  const featuredCars = [
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
    },
    {
      id: 4,
      make: 'Porsche',
      model: '911',
      year: 2022,
      price: 12000000,
      mileage: '5000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      badges: ['Sport', 'Turbo'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format&q=80'
    },
    {
      id: 5,
      make: 'Ferrari',
      model: '488 GTB',
      year: 2020,
      price: 25000000,
      mileage: '12000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      badges: ['Sport', 'V8'],
      image: 'https://th.bing.com/th/id/R.3bc07a82cb288ee4d574423e8d583680?rik=w130WEVES8Qicg&riu=http%3a%2f%2fwww.marinoperformancemotors.com%2fimagetag%2f13034%2f15%2fl%2fUsed-2018-Ferrari-488-GTB.jpg&ehk=mt%2fP7D2bvYHbHw0jnTLyjrc%2feLtEKESd7CRZEo0bLFs%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 6,
      make: 'Lamborghini',
      model: 'Huracan',
      year: 2021,
      price: 30000000,
      mileage: '8000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      badges: ['Sport', 'V8'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format&q=80'
    },
    {
      id: 7,
      make: 'Audi',
      model: 'R8',
      year: 2021,
      price: 18000000,
      mileage: '10000',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      badges: ['Sport', 'V10'],
      image: 'https://media.ed.edmunds-media.com/audi/r8/2020/oem/2020_audi_r8_coupe_performance_fq_oem_1_1280.jpg'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero racing-stripes">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your <span className="text-redline">Dream Car</span>
          </h1>
          <p className="hero-subtitle">
            Premium used cars with certification and inspection guarantee
          </p>
          <div className="hero-buttons">
            <Link to="/browse-cars">
              <Button variant="primary">Browse Cars</Button>
            </Link>
            <Link to="/sell-car">
              <Button variant="secondary">Sell Your Car</Button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-car-placeholder"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Certified Cars</h3>
              <p>All vehicles undergo thorough inspection and certification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden costs, clear pricing for all vehicles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>EMI Options</h3>
              <p>Flexible financing options available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Test Drive</h3>
              <p>Schedule test drives for your favorite cars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-cars-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Cars</h2>
            <Link to="/browse-cars" className="view-all-link">
              View All →
            </Link>
          </div>
          <div className="cars-grid">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Sell Your Car?</h2>
          <p>Get the best price for your vehicle with our premium marketplace</p>
          <Link to="/sell-car">
            <Button variant="primary" className="cta-button">
              List Your Car Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

