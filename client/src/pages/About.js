import React from 'react';
//import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>Om Industriell Revolution</h1>
      
      <section className="about-section">
        <h2>Projektet</h2>
        <p>
          Detta projekt är en modulär applikation byggd med Express.js på serversidan och React på klientsidan.
          Det är designat för att vara lätt att förstå, bygga vidare på och expandera.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Teknologier</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Cors</li>
              <li>Helmet</li>
              <li>Morgan</li>
            </ul>
          </div>
          
          <div className="tech-item">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;