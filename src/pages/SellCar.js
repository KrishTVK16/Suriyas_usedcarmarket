import React, { useState } from 'react';
import Button from '../components/UI/Button';
import './SellCar.css';

const SellCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    color: '',
    owner: '',
    location: '',
    description: '',
    images: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Car listing submitted successfully!');
  };

  return (
    <div className="sell-car">
      <div className="sell-header">
        <h1>Sell Your Car</h1>
        <p>List your vehicle and reach thousands of potential buyers</p>
      </div>

      <div className="sell-container">
        <form className="sell-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Basic Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Make *</label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                  placeholder="e.g., BMW"
                />
              </div>
              <div className="form-group">
                <label>Model *</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  placeholder="e.g., M3"
                />
              </div>
              <div className="form-group">
                <label>Year *</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  min="1990"
                  max={new Date().getFullYear() + 1}
                />
              </div>
              <div className="form-group">
                <label>Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 4500000"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Car Specifications</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Mileage (km) *</label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 25000"
                />
              </div>
              <div className="form-group">
                <label>Fuel Type *</label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="form-group">
                <label>Transmission *</label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Transmission</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div className="form-group">
                <label>Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g., Alpine White"
                />
              </div>
              <div className="form-group">
                <label>Owner</label>
                <select
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                >
                  <option value="">Select Owner</option>
                  <option value="First Owner">First Owner</option>
                  <option value="Second Owner">Second Owner</option>
                  <option value="Third Owner">Third Owner</option>
                </select>
              </div>
              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Mumbai, Maharashtra"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Description</h2>
            <div className="form-group">
              <label>Car Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Describe your car, its condition, features, and any additional information..."
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Upload Images</h2>
            <div className="image-upload-area">
              <p>Click or drag images here to upload</p>
              <p className="upload-hint">Upload at least 3 images (Max 10 images)</p>
            </div>
          </div>

          <div className="form-actions">
            <Button type="submit" variant="primary">
              Submit Listing
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>

        <div className="sell-info">
          <div className="info-card">
            <h3>Why Sell With Us?</h3>
            <ul>
              <li>✓ Reach thousands of verified buyers</li>
              <li>✓ Free listing with premium visibility</li>
              <li>✓ Professional photography assistance</li>
              <li>✓ Secure transaction process</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Need Help?</h3>
            <p>Our team is here to assist you with listing your car. Contact us for support.</p>
            <Button variant="secondary">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;

