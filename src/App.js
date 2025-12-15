import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import BrowseCars from './pages/BrowseCars';
import CarDetails from './pages/CarDetails';
import SellCar from './pages/SellCar';
import Inspection from './pages/Inspection';
import EMICalculator from './pages/EMICalculator';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Login from './pages/Login';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';

import './App.css';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      {!isLoginPage && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
