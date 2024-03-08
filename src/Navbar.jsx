// Importa los componentes necesarios
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import FM from './FM';
import Footer from './footer';

// Define tu componente Navbar
function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="./App">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/About">About AMSOFTWARELAB</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FM">More Info Film Hub</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <div className="bg-dark text-white">
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          {/* <Route path="/App" element={<App />} /> */} 
          <Route path="/FM" element={<FM />} />
        </Routes>
      </div>
    </Router>
  );
}


export default AppWithRouter;