import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Incomatic</h1>
      
      <section className="about-section">
        <h2>Our Server</h2>
        <p>
          Incomatic is a Minecraft server focused on industrial production and resource trading. 
          Our goal is to create an immersive economic experience where players can build factories, 
          produce resources, and trade them in a dynamic market economy.
        </p>
      </section>
      
      <section className="about-section">
        <h2>How It Works</h2>
        <p>
          In Incomatic, resource prices fluctuate based on supply and demand. When many players sell a particular resource, 
          its price decreases. Conversely, when demand is high and supply is low, prices increase. This creates opportunities 
          for players to strategize their production and trading activities to maximize profits.
        </p>
        <p>
          The market prices displayed on this website are updated in real-time, allowing players to make informed decisions 
          about what resources to produce and when to sell them.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our Community</h2>
        <p>
          We have a friendly and active community of players who enjoy building industrial complexes, 
          collaborating on large projects, and engaging in friendly competition in the marketplace. 
          Whether you're a seasoned industrialist or new to the concept, you'll find a welcoming environment 
          to explore and grow your industrial empire.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Server Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Dynamic Economy</h3>
            <p>Real supply and demand mechanics affecting resource prices</p>
          </div>
          <div className="feature-item">
            <h3>Industrial Machinery</h3>
            <p>Custom plugins for creating advanced production systems</p>
          </div>
          <div className="feature-item">
            <h3>Trading System</h3>
            <p>Secure player-to-player trading and marketplace</p>
          </div>
          <div className="feature-item">
            <h3>Land Protection</h3>
            <p>Claim and protect your industrial complexes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;