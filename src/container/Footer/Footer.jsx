import React from "react";
import { Link } from "react-router-dom";  // If you're using React Router
import "./Footer.scss";  // Import the dedicated SCSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2025 Healing Hearts Widows’ Support Foundation Inc. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
        <div className="social-links">
          <a href="https://twitter.com/yourorg" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/yourorg" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/yourorg" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p className="contact-info">Email: info@yourorg.com | Phone: +234 123-456-7890</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;