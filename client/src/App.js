import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PriceTicker from './components/PriceTicker';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Earn from './pages/Earn';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <PriceTicker />
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;