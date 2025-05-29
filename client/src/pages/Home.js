import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Välkommen till Industriell Revolution</h1>
        <p>Ett modulärt projekt med Express-server och React-frontend</p>
        <Link to="/examples" className="btn btn-primary">Utforska exempel</Link>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Express Server</h3>
          <p>En robust och modulär backend byggd med Express.js</p>
        </div>
        
        <div className="feature-card">
          <h3>React Frontend</h3>
          <p>En modern och responsiv frontend byggd med React</p>
        </div>
        
        <div className="feature-card">
          <h3>Modulär Design</h3>
          <p>Lätt att bygga vidare på och expandera</p>
        </div>
      </section>
    </div>
  );
};

export default Home;