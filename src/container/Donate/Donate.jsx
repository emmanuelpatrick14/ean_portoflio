import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiHeart, 
  HiCreditCard, 
  HiShieldCheck, 
  HiCheckCircle,
  HiX,
  HiRefresh
} from "react-icons/hi";
import "./Donate.scss";

const donationAmounts = [5, 10, 25, 50, 100, 250]; // Base amounts, will be scaled/formatted by currency

const Donate = () => {
  const [currency, setCurrency] = useState('NGN'); // Default to NGN
  const [selectedAmount, setSelectedAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState("10000");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringFrequency, setRecurringFrequency] = useState("monthly");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Nigeria"
  });

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    // Reset amounts when currency changes
    setSelectedAmount(newCurrency === 'NGN' ? 10000 : 10);
    setCustomAmount(newCurrency === 'NGN' ? "10000" : "10");
  };

  const handleAmountSelect = (amount) => {
    const adjustedAmount = currency === 'NGN' ? amount * 1000 : amount; // Example scaling for NGN (assuming base is USD-like)
    setCustomAmount(adjustedAmount.toString()); // Auto-fill the custom amount field
    setSelectedAmount(adjustedAmount);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(value ? parseFloat(value) : 0); // Update selectedAmount based on custom
    }
  };

  const handleInputChange = (field, value) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentForm(false);
      setShowSuccess(true);
    }, 3000);
  };

  const resetForm = () => {
    setShowSuccess(false);
    setShowPaymentForm(false);
    setSelectedAmount(currency === 'NGN' ? 10000 : 10);
    setCustomAmount(currency === 'NGN' ? "10000" : "10");
    setPaymentData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "Nigeria"
    });
  };

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  // Format amount based on currency
  const formatAmount = (amount) => {
    if (currency === 'NGN') {
      return `₦${amount.toLocaleString('en-NG')}`;
    } else {
      return `$${amount.toLocaleString('en-US')}`;
    }
  };

  // Adjusted donation amounts for display
  const adjustedDonationAmounts = donationAmounts.map(amount => currency === 'NGN' ? amount * 1000 : amount);

  // Currency symbol for input
  const currencySymbol = currency === 'NGN' ? '₦' : '$';

  // Impact thresholds adjusted for currency (simplified, assuming NGN is ~1000x USD for example)
  const impactThresholds = {
    low: currency === 'NGN' ? 5000 : 5,
    medium: currency === 'NGN' ? 10000 : 10,
    high: currency === 'NGN' ? 25000 : 25,
    higher: currency === 'NGN' ? 50000 : 50
  };

  return (
    <div className="donate-page">
      <div className="background-pattern" />
      
      {/* Header Section */}
      <section className="donate-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HiHeart className="hero-icon" />
            <h1>Make a Difference Today</h1>
            <p>Your generous donation helps us support widows and strengthen communities in Nigeria and beyond.</p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            // Success Message
            <motion.div
              key="success"
              className="success-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-card">
                <HiCheckCircle className="success-icon" />
                <h2>Thank You for Your Generosity!</h2>
                <p>
                  Your donation of <strong>{formatAmount(finalAmount)}</strong> 
                  {isRecurring && ` (${recurringFrequency})`} has been successfully processed.
                </p>
                <div className="success-details">
                  <p>You will receive a confirmation email at <strong>{paymentData.email}</strong></p>
                  <p>Your support makes a real difference in the lives of widows and their communities.</p>
                </div>
                <div className="success-actions">
                  <button 
                    className="btn-secondary"
                    onClick={resetForm}
                  >
                    Make Another Donation
                  </button>
                  <button 
                    className="btn-primary"
                    onClick={() => window.location.href = '/'}
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            </motion.div>
          ) : showPaymentForm ? (
            // Payment Form
            <motion.div
              key="payment"
              className="payment-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="payment-form-wrapper">
                <div className="payment-header">
                  <button 
                    className="back-button"
                    onClick={() => setShowPaymentForm(false)}
                  >
                    <HiX />
                  </button>
                  <h2>Complete Your Donation</h2>
                  <div className="donation-summary">
                    <span>{formatAmount(finalAmount)}</span>
                    {isRecurring && <span className="recurring-badge">{recurringFrequency}</span>}
                  </div>
                </div>

                <form onSubmit={handlePaymentSubmit} className="payment-form">
                  {/* Personal Information */}
                  <div className="form-section">
                    <h3>Personal Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          required
                          value={paymentData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          required
                          value={paymentData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={paymentData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="form-section">
                    <h3>
                      <HiCreditCard /> Payment Information
                    </h3>
                    <div className="form-group">
                      <label>Cardholder Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Name as it appears on card"
                        value={paymentData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        required
                        maxLength="19"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          maxLength="5"
                          value={paymentData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          required
                          maxLength="4"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address - Only for USD */}
                  {currency === 'USD' && (
                    <div className="form-section">
                      <h3>Billing Address</h3>
                      <div className="form-group">
                        <label>Street Address</label>
                        <input
                          type="text"
                          required
                          placeholder="House number and street name"
                          value={paymentData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            required
                            value={paymentData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>State/Province</label>
                          <input
                            type="text"
                            required
                            value={paymentData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>ZIP/Postal Code</label>
                          <input
                            type="text"
                            required
                            value={paymentData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <select
                          required
                          value={paymentData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                        >
                          <option value="Nigeria">Nigeria</option>
                          <option value="United States">United States</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="security-notice">
                    <HiShieldCheck />
                    <span>Your payment information is secure and encrypted. We accept Verve, Mastercard & Visa debit cards.</span>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-payment-btn"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <HiRefresh className="spinning" />
                        Processing...
                      </>
                    ) : (
                      `Donate ${formatAmount(finalAmount)}`
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            // Donation Selection
            <motion.div
              key="selection"
              className="donation-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="donation-card">
                <h2>Choose Your Donation Amount</h2>
                
                {/* Currency Selection */}
                <div className="currency-selection">
                  <button 
                    className={currency === 'NGN' ? 'active' : ''}
                    onClick={() => handleCurrencyChange('NGN')}
                  >
                    Naira (₦)
                  </button>
                  <button 
                    className={currency === 'USD' ? 'active' : ''}
                    onClick={() => handleCurrencyChange('USD')}
                  >
                    Dollars ($)
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="amount-selection">
                  <div className="preset-amounts">
                    {adjustedDonationAmounts.map((amount, index) => (
                      <button
                        key={index}
                        className={`amount-btn ${parseFloat(customAmount) === amount ? 'active' : ''}`}
                        onClick={() => handleAmountSelect(donationAmounts[index])}
                      >
                        {formatAmount(amount)}
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-amount">
                    <label>Or enter custom amount:</label>
                    <div className="custom-input-wrapper">
                      <span className="currency-symbol">{currencySymbol}</span>
                      <input
                        type="text"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Recurring Options */}
                <div className="recurring-section">
                  <div className="recurring-toggle">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                      Make this a recurring donation
                    </label>
                  </div>
                  
                  {isRecurring && (
                    <motion.div
                      className="frequency-options"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <label>Frequency:</label>
                      <select
                        value={recurringFrequency}
                        onChange={(e) => setRecurringFrequency(e.target.value)}
                      >
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </motion.div>
                  )}
                </div>

                {/* Impact Information */}
                <div className="impact-info">
                  <h3>Your Impact</h3>
                  <div className="impact-items">
                    {finalAmount >= impactThresholds.low && (
                      <div className="impact-item">
                        <HiCheckCircle />
                        <span>Provides a week of meals for a widow in need</span>
                      </div>
                    )}
                    {finalAmount >= impactThresholds.medium && (
                      <div className="impact-item">
                        <HiCheckCircle />
                        <span>Supports educational materials for children</span>
                      </div>
                    )}
                    {finalAmount >= impactThresholds.high && (
                      <div className="impact-item">
                        <HiCheckCircle />
                        <span>Helps fund medical care and health services</span>
                      </div>
                    )}
                    {finalAmount >= impactThresholds.higher && (
                      <div className="impact-item">
                        <HiCheckCircle />
                        <span>Contributes to community development programs</span>
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  className="proceed-btn"
                  onClick={() => setShowPaymentForm(true)}
                  disabled={(!finalAmount) || (finalAmount <= 0)} // Added parentheses to clarify operator precedence
                >
                  Proceed to Payment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Donate;