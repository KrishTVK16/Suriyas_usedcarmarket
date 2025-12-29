import React, { useState } from 'react';
import CarCard from '../components/UI/CarCard';
import './BrowseCars.css';

const BrowseCars = () => {
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    fuelType: '',
    transmission: ''
  });

  const cars = [
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
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'
    },
    {
      id: 5,
      make: 'Ferrari',
      model: '488',
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
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'
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

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="browse-cars">
      <div className="browse-header">
        <h1>Browse Cars</h1>
        <p>Find your perfect ride from our premium collection</p>
      </div>

      <div className="browse-container">
        <aside className="filters-sidebar">
          <h2>Filters</h2>
          
          <div className="filter-group">
            <label>Make</label>
            <select name="make" value={filters.make} onChange={handleFilterChange}>
              <option value="">All Makes</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
              <option value="Porsche">Porsche</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Lamborghini">Lamborghini</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
              <option value="">All Prices</option>
              <option value="0-5000000">₹0 - ₹50 Lakhs</option>
              <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
              <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
              <option value="20000000+">Above ₹2 Crores</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Fuel Type</label>
            <select name="fuelType" value={filters.fuelType} onChange={handleFilterChange}>
              <option value="">All Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Transmission</label>
            <select name="transmission" value={filters.transmission} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          <button className="filter-reset-btn">Reset Filters</button>
        </aside>

        <main className="cars-results">
          <div className="results-header">
            <p className="results-count">{cars.length} cars found</p>
            <select className="sort-select">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest First</option>
              <option>Year: Oldest First</option>
            </select>
          </div>

          <div className="cars-grid">
            {cars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowseCars;

