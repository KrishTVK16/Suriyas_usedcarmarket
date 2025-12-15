import React from 'react';
import Button from '../components/UI/Button';
import './Inspection.css';

const Inspection = () => {
  const inspectionPoints = [
    { category: 'Exterior', items: ['Body Condition', 'Paint Quality', 'Tires & Wheels', 'Lights & Indicators'] },
    { category: 'Interior', items: ['Seats & Upholstery', 'Dashboard & Controls', 'AC & Heating', 'Infotainment System'] },
    { category: 'Engine', items: ['Engine Performance', 'Oil & Fluids', 'Battery Condition', 'Cooling System'] },
    { category: 'Safety', items: ['Brakes', 'Airbags', 'Seatbelts', 'Safety Features'] },
    { category: 'Documentation', items: ['RC & Insurance', 'Service History', 'Ownership Transfer', 'Legal Clearance'] },
    { category: 'Underbody & Chassis', items: ['Frame Inspection', 'Suspension System', 'Exhaust System', 'Rust & Corrosion'] }
  ];

  return (
    <div className="inspection">
      <div className="inspection-header">
        <h1>Inspection & Certification</h1>
        <p>Comprehensive vehicle inspection for your peace of mind</p>
      </div>

      <div className="inspection-container">
        <div className="inspection-content">
          <section className="inspection-intro">
            <h2>Why Get Your Car Inspected?</h2>
            <p>
              Our certified inspection service ensures that every vehicle meets the highest quality standards. 
              We thoroughly examine all aspects of your car to provide you with a detailed report and certification.
            </p>
          </section>

          <section className="inspection-process">
            <h2>Inspection Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Schedule Inspection</h3>
                <p>Book an appointment at your convenience</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Vehicle Assessment</h3>
                <p>Comprehensive 150+ point inspection</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Detailed Report</h3>
                <p>Receive a complete inspection report</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Certification</h3>
                <p>Get certified if vehicle meets standards</p>
              </div>
            </div>
          </section>

          <section className="inspection-checklist">
            <h2>Inspection Checklist</h2>
            <div className="checklist-grid">
              {inspectionPoints.map((point, index) => (
                <div key={index} className="checklist-category">
                  <h3>{point.category}</h3>
                  <ul>
                    {point.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="certification-benefits">
            <h2>Certification Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🛡️</div>
                <h3>Buyer Confidence</h3>
                <p>Certified cars sell faster and at better prices</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📋</div>
                <h3>Detailed Report</h3>
                <p>Comprehensive documentation of vehicle condition</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✅</div>
                <h3>Quality Assurance</h3>
                <p>Verified by certified automotive experts</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Better Pricing</h3>
                <p>Certified vehicles command premium prices</p>
              </div>
            </div>
          </section>

          <section className="book-inspection">
            <h2>Book Your Inspection</h2>
            <p>Schedule an inspection appointment today</p>
            <Button variant="primary" className="book-btn">
              Schedule Inspection
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Inspection;

