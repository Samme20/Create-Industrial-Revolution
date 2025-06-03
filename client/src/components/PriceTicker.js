import React, { useEffect, useState } from 'react';
import '../styles/PriceTicker.css';

const PriceTicker = () => {
  // Mock data for now - will be replaced with API data later
  const [commodities, setCommodities] = useState([
    { id: 1, name: 'IRON', price: 321.21, change: 'up' },
    { id: 2, name: 'COAL', price: 100.12, change: 'down' },
    { id: 3, name: 'SAND', price: 0.122, change: 'down' },
    { id: 4, name: 'COGWHEELS', price: 1002.31, change: 'up' },
    { id: 5, name: 'GOLD', price: 1520.45, change: 'up' },
    { id: 6, name: 'DIAMOND', price: 5231.78, change: 'down' },
    { id: 7, name: 'REDSTONE', price: 42.67, change: 'up' },
    { id: 8, name: 'WOOD', price: 15.33, change: 'down' },
  ]);

  return (
    <div className="price-ticker-container">
      <div className="price-ticker">
        {/* First set of items */}
        {commodities.map((commodity) => (
          <div key={commodity.id} className="ticker-item">
            ${commodity.name}: {commodity.price.toFixed(2)}
            <span className={`price-change ${commodity.change}`}>
              {commodity.change === 'up' ? '▲' : '▼'}
            </span>
          </div>
        ))}
        
        {/* Duplicate set of items to create seamless loop */}
        {commodities.map((commodity) => (
          <div key={`dup-${commodity.id}`} className="ticker-item">
            ${commodity.name}: {commodity.price.toFixed(2)}
            <span className={`price-change ${commodity.change}`}>
              {commodity.change === 'up' ? '▲' : '▼'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;