import React, { useState } from 'react';
import Button from '../components/UI/Button';
import './EMICalculator.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [downPayment, setDownPayment] = useState(1000000);

  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfMonths;
    }
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure * 12;
  const totalInterest = totalAmount - (loanAmount - downPayment);

  return (
    <div className="emi-calculator">
      <div className="emi-header">
        <h1>EMI Calculator</h1>
        <p>Calculate your monthly EMI and plan your car purchase</p>
      </div>

      <div className="emi-container">
        <div className="calculator-section">
          <div className="calculator-card">
            <h2>Loan Details</h2>
            
            <div className="input-group">
              <label>
                Car Price (₹)
                <span className="input-value">₹{loanAmount.toLocaleString('en-IN')}</span>
              </label>
              <input
                type="range"
                min="100000"
                max="50000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="slider"
              />
              <div className="range-labels">
                <span>₹1 Lakh</span>
                <span>₹5 Crores</span>
              </div>
            </div>

            <div className="input-group">
              <label>
                Down Payment (₹)
                <span className="input-value">₹{downPayment.toLocaleString('en-IN')}</span>
              </label>
              <input
                type="range"
                min="0"
                max={loanAmount}
                step="50000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="slider"
              />
              <div className="range-labels">
                <span>₹0</span>
                <span>₹{(loanAmount / 100000).toFixed(0)} Lakhs</span>
              </div>
            </div>

            <div className="input-group">
              <label>
                Interest Rate (% per annum)
                <span className="input-value">{interestRate}%</span>
              </label>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="slider"
              />
              <div className="range-labels">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            <div className="input-group">
              <label>
                Loan Tenure (Years)
                <span className="input-value">{loanTenure} Years</span>
              </label>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="slider"
              />
              <div className="range-labels">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="results-section">
          <div className="results-card">
            <h2>EMI Breakdown</h2>
            
            <div className="result-item highlight">
              <div className="result-label">Monthly EMI</div>
              <div className="result-value">
                ₹{emi.toFixed(0).toLocaleString('en-IN')}
              </div>
            </div>

            <div className="result-item">
              <div className="result-label">Loan Amount</div>
              <div className="result-value">
                ₹{(loanAmount - downPayment).toLocaleString('en-IN')}
              </div>
            </div>

            <div className="result-item">
              <div className="result-label">Total Interest</div>
              <div className="result-value">
                ₹{totalInterest.toFixed(0).toLocaleString('en-IN')}
              </div>
            </div>

            <div className="result-item">
              <div className="result-label">Total Amount</div>
              <div className="result-value">
                ₹{totalAmount.toFixed(0).toLocaleString('en-IN')}
              </div>
            </div>

            <div className="result-item">
              <div className="result-label">Down Payment</div>
              <div className="result-value">
                ₹{downPayment.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="result-actions">
              <Button variant="primary">Apply for Loan</Button>
              <Button variant="secondary">Contact Bank</Button>
            </div>
          </div>

          <div className="info-card">
            <h3>Loan Tips</h3>
            <ul>
              <li>Higher down payment reduces EMI</li>
              <li>Shorter tenure means less interest</li>
              <li>Compare rates from multiple banks</li>
              <li>Check your credit score before applying</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;

