import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <img src="/bannerRAW_noBG.png" alt="Incomatic Banner" className="hero-banner" />
          <h1>Welcome to Incomatic</h1>
          <p>A Minecraft server focused on industrial production and resource trading</p>
          <div className="hero-buttons">
            <Link to="/join" className="btn btn-primary">Join Server</Link>
            <Link to="/earn" className="btn btn-secondary">Learn How to Earn</Link>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Resource Trading</h3>
          <p>Buy and sell resources with fluctuating market prices based on supply and demand</p>
        </div>
        
        <div className="feature-card">
          <h3>Industrial Production</h3>
          <p>Build factories and automated systems to produce resources efficiently</p>
        </div>
        
        <div className="feature-card">
          <h3>Economy System</h3>
          <p>Earn money by selling resources and invest in your industrial empire</p>
        </div>
      </section>
      
      <section className="server-stats">
        <h2>Server Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">125</div>
            <div className="stat-label">Active Players</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1,250</div>
            <div className="stat-label">Factories Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$5.2M</div>
            <div className="stat-label">Daily Trading Volume</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Server Uptime</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;