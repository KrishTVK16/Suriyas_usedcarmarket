import React from 'react';
import Button from '../components/UI/Button';
import './Dealerships.css';

const Dealerships = () => {
  const dealerships = [
    {
      id: 1,
      name: 'Premium Motors',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      cars: 150,
      specialties: ['Luxury Cars', 'Sports Cars'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 2,
      name: 'Elite Auto Gallery',
      location: 'Delhi, NCR',
      rating: 4.9,
      cars: 200,
      specialties: ['Premium SUVs', 'Electric Vehicles'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 3,
      name: 'Speedway Dealers',
      location: 'Bangalore, Karnataka',
      rating: 4.7,
      cars: 120,
      specialties: ['Performance Cars', 'Classic Cars'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 4,
      name: 'Royal Wheels',
      location: 'Chennai, Tamil Nadu',
      rating: 4.6,
      cars: 180,
      specialties: ['Sedans', 'Luxury Cars'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    }
  ];

  return (
    <div className="dealerships">
      <div className="dealerships-header">
        <h1>Dealership Partners</h1>
        <p>Trusted dealerships offering premium certified vehicles</p>
      </div>

      <div className="dealerships-container">
        <section className="partners-intro">
          <h2>Why Partner With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🚗</div>
              <h3>Wide Reach</h3>
              <p>Access thousands of potential buyers</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Analytics</h3>
              <p>Track your listings and performance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <h3>Certification</h3>
              <p>Get your inventory certified</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Better Sales</h3>
              <p>Increase your sales with our platform</p>
            </div>
          </div>
        </section>

        <section className="dealerships-list">
          <h2>Our Partner Dealerships</h2>
          <div className="dealerships-grid">
            {dealerships.map(dealership => (
              <div key={dealership.id} className="dealership-card">
                <div className="dealership-image">
                  <img src={dealership.image} alt={dealership.name} />
                </div>
                <div className="dealership-info">
                  <h3>{dealership.name}</h3>
                  <p className="dealership-location">{dealership.location}</p>
                  <div className="dealership-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">{dealership.rating}</span>
                  </div>
                  <div className="dealership-stats">
                    <span className="stat-item">
                      <strong>{dealership.cars}</strong> Cars Available
                    </span>
                  </div>
                  <div className="dealership-specialties">
                    {dealership.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-badge">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="dealership-actions">
                    <Button variant="primary">View Inventory</Button>
                    <Button variant="outline">Contact</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="become-partner">
          <h2>Become a Partner</h2>
          <p>Join our network of trusted dealerships and grow your business</p>
          <Button variant="primary" className="partner-btn">
            Apply Now
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Dealerships;

