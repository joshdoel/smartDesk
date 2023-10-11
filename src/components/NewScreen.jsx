import React, { useState, useEffect } from 'react';
import './NewScreen.css';
import { useNavigate } from 'react-router-dom';

function NewScreen() {
  const navigate = useNavigate();
  const [toggle1, setToggle1] = useState(() => {
    return JSON.parse(localStorage.getItem('toggle1')) || false;
  });
  const [toggle2, setToggle2] = useState(() => {
    return JSON.parse(localStorage.getItem('toggle2')) || false;
  });
  const [toggle3, setToggle3] = useState(() => {
    return JSON.parse(localStorage.getItem('toggle3')) || false;
  });
  const [toggle4, setToggle4] = useState(() => {
    return JSON.parse(localStorage.getItem('toggle4')) || false;
  });

  useEffect(() => {
    localStorage.setItem('toggle1', JSON.stringify(toggle1));
    localStorage.setItem('toggle2', JSON.stringify(toggle2));
    localStorage.setItem('toggle3', JSON.stringify(toggle3));
    localStorage.setItem('toggle4', JSON.stringify(toggle4));
  }, [toggle1, toggle2, toggle3, toggle4]);

  const goToHeightScreen = () => {
    navigate('/height');
  };

  const goToVolumeScreen = () => {
    navigate('/volume');
  }

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const openSettings = () => {
    navigate('/settings');
  };

  const shutDownDisplay = () => {
    const existingBlackOverlay = document.getElementById('black-overlay');
  
    if (existingBlackOverlay) {
      // If the black overlay already exists, remove it and return to Home screen.
      existingBlackOverlay.remove();
      navigate('/home'); // Use the navigate function to return to the Home screen.
    } else {
      // Create the black overlay to "turn off" the screen.
      const blackOverlay = document.createElement('div');
      blackOverlay.id = 'black-overlay';
      blackOverlay.style.position = 'fixed';
      blackOverlay.style.top = '0';
      blackOverlay.style.left = '0';
      blackOverlay.style.width = '100%';
      blackOverlay.style.height = '100%';
      blackOverlay.style.backgroundColor = 'black';
      blackOverlay.style.zIndex = '9999';
  
      // Handle click event on the black overlay.
      blackOverlay.addEventListener('click', () => {
        // Remove the black overlay and return to Home screen.
        blackOverlay.remove();
        navigate('/home'); // Use the navigate function to go back to Home.
      });
  
      // Append the black overlay to the body.
      document.body.appendChild(blackOverlay);
    }
  };

  return (
    <div className="border-container">
      <div className="top-center-buttons">
        <button className="button" onClick={goToHeightScreen}>Adjust Height</button>
        <button className="button" onClick={goToVolumeScreen}>Volume/Lights</button>
      </div>
      <div className="toggle-rows">
        <div className="toggle-row">
          <div className="toggle-label">
            <label className="switch-label">Lock Drawers</label>
          </div>
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={toggle1} onChange={handleToggle1} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="toggle-row">
          <div className="toggle-label">
            <label className="switch-label">Light On</label>
          </div>
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={toggle2} onChange={handleToggle2} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="toggle-rows">
        <div className="toggle-row">
          <div className="toggle-label">
            <label className="switch-label">Standing Height</label>
          </div>
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={toggle3} onChange={handleToggle3} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="toggle-row">
          <div className="toggle-label">
            <label className="switch-label">Connect Speakers</label>
          </div>
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={toggle4} onChange={handleToggle4} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      <button className="power-button" onClick={shutDownDisplay}>
          <i className="fas fa-power-off fa-2x"></i>
        </button>
      <div className="settings-button-container">
        <i className="fas fa-cog fa-2x" onClick={openSettings}></i>
      </div>
    </div>
  );
}

export default NewScreen;
