import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import '../styles/ExampleDetail.css';

const ExampleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [example, setExample] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExample = async () => {
      try {
        const response = await axios.get(`/api/examples/${id}`);
        setExample(response.data);
        setLoading(false);
      } catch (err) {
        setError('Kunde inte hämta exempel. Försök igen senare.');
        setLoading(false);
        console.error('Error fetching example:', err);
      }
    };

    fetchExample();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Är du säker på att du vill ta bort detta exempel?')) {
      try {
        await axios.delete(`/api/examples/${id}`);
        navigate('/examples');
      } catch (err) {
        setError('Kunde inte ta bort exempel. Försök igen senare.');
        console.error('Error deleting example:', err);
      }
    }
  };

  if (loading) return <div className="loading">Laddar...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!example) return <div className="error">Exempel hittades inte.</div>;

  return (
    <div className="example-detail">
      <h1>{example.name}</h1>
      <p className="description">{example.description}</p>
      
      <div className="actions">
        <Link to="/examples" className="btn btn-secondary">Tillbaka till exempel</Link>
        <button onClick={handleDelete} className="btn btn-danger">Ta bort</button>
      </div>
    </div>
  );
};

export default ExampleDetail;