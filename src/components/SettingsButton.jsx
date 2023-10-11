// src/components/SettingsButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsButton.css'; // Import the CSS file

function SettingsButton() {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings'); // Navigate to the settings screen
  };

  return (
    <button className="settings-button" onClick={handleSettingsClick}>
      Settings
    </button>
  );
}

export default SettingsButton;
