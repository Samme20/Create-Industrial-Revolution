import React from 'react';
import '../styles/Join.css';

const Join = () => {
  return (
    <div className="join-page">
      <div className="banner-container">
        <img src="/bannerRAW_noBG.png" alt="Incomatic Banner" className="banner-image" />
      </div>
      
      <h1>Join Our Minecraft Server</h1>
      
      <section className="join-section">
        <div className="server-info">
          <h2>Server Information</h2>
          <div className="server-address">
            <span className="label">Server Address:</span>
            <span className="value">play.incomatic.com</span>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText('play.incomatic.com')}>
              Copy
            </button>
          </div>
          <div className="server-version">
            <span className="label">Minecraft Version:</span>
            <span className="value">1.19.2</span>
          </div>
        </div>
      </section>
      
      <section className="join-section">
        <h2>How to Join</h2>
        <ol className="steps">
          <li>
            <h3>Launch Minecraft</h3>
            <p>Open your Minecraft launcher and make sure you're using version 1.19.2</p>
          </li>
          <li>
            <h3>Go to Multiplayer</h3>
            <p>From the main menu, click on "Multiplayer"</p>
          </li>
          <li>
            <h3>Add Server</h3>
            <p>Click "Add Server" and enter our server address: play.incomatic.com</p>
          </li>
          <li>
            <h3>Join the Game</h3>
            <p>Select our server from your server list and click "Join Server"</p>
          </li>
        </ol>
      </section>
      
      <section className="join-section">
        <h2>Server Rules</h2>
        <ul className="rules">
          <li>Be respectful to all players</li>
          <li>No griefing or stealing</li>
          <li>No cheating or using hacked clients</li>
          <li>No excessive profanity or inappropriate behavior</li>
          <li>Have fun and enjoy the industrial revolution!</li>
        </ul>
      </section>
    </div>
  );
};

export default Join;