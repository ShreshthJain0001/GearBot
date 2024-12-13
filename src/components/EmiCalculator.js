import React, { useState } from 'react';
import './CSS/EmiCalculator.css'; 

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12; // Monthly interest
    const numberOfPayments = parseFloat(loanTerm) * 12; // Convert years to months

    if (principal && rateOfInterest && numberOfPayments) {
      const emiAmount =
        (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
        (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);
      setEmi(emiAmount.toFixed(2));
    }
  };

  return (
    <div className="emi-container">
      <div className="emi-card">
        <h2 className="emi-title">EMI Calculator</h2>
        <div className="input-group">
          <label>Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="₹ Enter Loan Amount"
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (annual %)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Interest Rate"
          />
        </div>
        <div className="input-group">
          <label>Loan Term (in years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Loan Term (years)"
          />
        </div>
        <button className="emi-button" onClick={calculateEmi}>
          Calculate EMI
        </button>

        {emi && (
          <div className="emi-result">
            <h3>Monthly EMI: ₹{emi}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator;
