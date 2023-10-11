// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Clock from './Clock';
import SettingsButton from './SettingsButton';

function Home() {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    navigate('/new-screen');
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="border-container" onClick={handleContainerClick}>
      <div className="title">Welcome!</div>
      <div className='clock'>
      <Clock />
      </div>
      <div className="date">{currentDate}</div>
    </div>
  );
}

export default Home;
