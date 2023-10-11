// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Home from './components/Home';
import NewScreen from './components/NewScreen';
import HeightScreen from './components/HeightScreen';
import VolumeScreen from './components/volumeScreen';
import Settings from './components/Settings';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-screen" element={<NewScreen />} />
        <Route path="/height" element={<HeightScreen />} />
        <Route path="/volume" element={<VolumeScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
