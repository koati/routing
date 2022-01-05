import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Company from './components/Company';
import Goal from './components/Goal';

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="company" element={<Company />} />
            <Route path="goal" element={<Goal />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </main>
    <footer>
      <p>This is an example project for training the react routing</p>
    </footer>
    </div>
  );
}

export default App;
