import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Architects from './pages/Architects';
import BookNow from './pages/BookNow';
import Callback from './pages/Callback';
import License from './pages/License';
import Locations from './pages/Locations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/architects" element={<Architects />} />
            <Route path="/license" element={<License />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
