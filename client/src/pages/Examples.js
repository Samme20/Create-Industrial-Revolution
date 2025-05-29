import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import '../styles/Examples.css';

const Examples = () => {
  const [examples, setExamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamples = async () => {
      try {
        const response = await axios.get('/api/examples');
        setExamples(response.data);
        setLoading(false);
      } catch (err) {
        setError('Kunde inte hämta exempel. Försök igen senare.');
        setLoading(false);
        console.error('Error fetching examples:', err);
      }
    };

    fetchExamples();
  }, []);

  if (loading) return <div className="loading">Laddar...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="examples-page">
      <h1>Exempel</h1>
      
      <div className="examples-list">
        {examples.length > 0 ? (
          examples.map(example => (
            <div key={example.id} className="example-card">
              <h3>{example.name}</h3>
              <p>{example.description}</p>
              <Link to={`/examples/${example.id}`} className="btn btn-secondary">
                Visa detaljer
              </Link>
            </div>
          ))
        ) : (
          <p>Inga exempel hittades.</p>
        )}
      </div>
    </div>
  );
};

export default Examples;