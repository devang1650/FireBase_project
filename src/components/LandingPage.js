import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1 className="landing-title">Welcome to Awesome Notes App</h1>
        <p className="landing-subtitle">Organize your thoughts. Simplify your life.</p>
        <Link to="/register" className="cta-button">Get Started</Link> {/* Use Link for navigation */}
      </div>
      <div className="features-section">
        <div className="feature">
          <h3 className="feature-title">Easy to Use</h3>
          <p className="feature-description">Intuitive interface for effortless note-taking.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Sync Across Devices</h3>
          <p className="feature-description">Access your notes anytime, anywhere.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Secure & Private</h3>
          <p className="feature-description">Your data is encrypted and safe with us.</p>
        </div>
      </div>
      <div className="testimonial-section">
        <blockquote className="testimonial">
          "Awesome Notes App has completely transformed how I organize my thoughts. I can't imagine life without it!"
          <cite className="testimonial-author">- John Doe</cite>
        </blockquote>
      </div>
      <div className="newsletter-section">
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">Get the latest updates and news straight to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
      <footer className="footer">
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="social-icons">
            <a href="#"><img src="/images/facebook-icon.svg" alt="Facebook" /></a>
            <a href="#"><img src="/images/twitter-icon.svg" alt="Twitter" /></a>
            <a href="#"><img src="/images/instagram-icon.svg" alt="Instagram" /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
