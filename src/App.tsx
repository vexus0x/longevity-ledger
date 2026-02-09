import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Dna, Users, FlaskConical, FileText, Activity } from 'lucide-react';
import Home from './pages/Home';
import Influencers from './pages/Influencers';
import Protocols from './pages/Protocols';
import Research from './pages/Research';
import './styles/main.css';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Dna className="logo-icon" size={28} />
          <span>Longevity Ledger</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            <Activity size={16} />
            Overview
          </Link>
          <Link to="/influencers" className={`nav-link ${isActive('/influencers') ? 'active' : ''}`}>
            <Users size={16} />
            People
          </Link>
          <Link to="/protocols" className={`nav-link ${isActive('/protocols') ? 'active' : ''}`}>
            <FlaskConical size={16} />
            Protocols
          </Link>
          <Link to="/research" className={`nav-link ${isActive('/research') ? 'active' : ''}`}>
            <FileText size={16} />
            Research
          </Link>
        </nav>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/protocols" element={<Protocols />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
          <p>© 2025 Longevity Ledger — Evidence-based longevity intelligence</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
