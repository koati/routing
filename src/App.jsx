import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/" className="active">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/about">About</Link>
        </nav> 
        <p>My supercool header</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    <footer>
      <p>This is an example project for training the react routing</p>
    </footer>
    </div>
  );
}

export default App;
