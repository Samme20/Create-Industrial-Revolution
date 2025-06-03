import React, { useState } from 'react';
import '../styles/Earn.css';

const Earn = () => {
  const [commodities, setCommodities] = useState([
    { id: 1, name: 'Iron', currentPrice: 321.21, change: '+5.2%', trend: 'up', description: 'Essential for tools and machinery' },
    { id: 2, name: 'Coal', currentPrice: 100.12, change: '-2.1%', trend: 'down', description: 'Primary fuel source for furnaces' },
    { id: 3, name: 'Sand', currentPrice: 0.122, change: '-0.5%', trend: 'down', description: 'Used in glass production' },
    { id: 4, name: 'Cogwheels', currentPrice: 1002.31, change: '+12.3%', trend: 'up', description: 'Critical component for advanced machinery' },
    { id: 5, name: 'Gold', currentPrice: 1520.45, change: '+3.7%', trend: 'up', description: 'Luxury material with electrical properties' },
    { id: 6, name: 'Diamond', currentPrice: 5231.78, change: '-1.8%', trend: 'down', description: 'Premium material for high-tier tools' },
    { id: 7, name: 'Redstone', currentPrice: 42.67, change: '+2.4%', trend: 'up', description: 'Powers automation systems' },
    { id: 8, name: 'Wood', currentPrice: 15.33, change: '-0.9%', trend: 'down', description: 'Basic building material' },
  ]);

  return (
    <div className="earn-page">
      <h1>Earn Resources</h1>
      
      <section className="earn-intro">
        <p>
          In Incomatic, your success depends on producing and selling valuable resources. 
          Prices fluctuate based on supply and demand, so keep an eye on market trends to maximize your profits!
        </p>
      </section>
      
      <section className="market-overview">
        <h2>Current Market Prices</h2>
        <div className="commodities-grid">
          {commodities.map((commodity) => (
            <div key={commodity.id} className={`commodity-card ${commodity.trend}`}>
              <h3>{commodity.name}</h3>
              <div className="price">${commodity.currentPrice.toFixed(2)}</div>
              <div className={`change ${commodity.trend}`}>
                {commodity.change} {commodity.trend === 'up' ? '▲' : '▼'}
              </div>
              <p className="description">{commodity.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="earning-strategies">
        <h2>Earning Strategies</h2>
        
        <div className="strategy">
          <h3>Resource Production</h3>
          <p>
            Set up efficient mining operations and farms to produce resources at scale. 
            Automation is key to maximizing your output and profits.
          </p>
        </div>
        
        <div className="strategy">
          <h3>Market Timing</h3>
          <p>
            Monitor price trends and sell your resources when prices are high. 
            Consider stockpiling during low-price periods to sell when the market recovers.
          </p>
        </div>
        
        <div className="strategy">
          <h3>Diversification</h3>
          <p>
            Don't rely on a single resource. Diversify your production to protect against market volatility 
            and take advantage of multiple profit opportunities.
          </p>
        </div>
        
        <div className="strategy">
          <h3>Value-Added Processing</h3>
          <p>
            Process raw materials into finished goods to increase their value. 
            Crafting and refining can significantly boost your profit margins.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Earn;