import React, { useState, useEffect } from 'react';
import './HeightScreen.css';
import { useNavigate } from 'react-router-dom';
import NumberPad from './NumberPad';

function HeightScreen() {
  const navigate = useNavigate();
  const [sittingHeight, setSittingHeight] = useState(
    localStorage.getItem('sittingHeight') || ''
  );
  const [standingHeight, setStandingHeight] = useState(
    localStorage.getItem('standingHeight') || ''
  );
  const [currentHeight, setCurrentHeight] = useState(
    localStorage.getItem('currentHeight') || ''
  );
  const [activeInput, setActiveInput] = useState(null);
  const [showNumberPad, setShowNumberPad] = useState(false);

  useEffect(() => {
    // Save sittingHeight, standingHeight, and currentHeight to localStorage whenever they change
    localStorage.setItem('sittingHeight', sittingHeight);
    localStorage.setItem('standingHeight', standingHeight);
    localStorage.setItem('currentHeight', currentHeight);
  }, [sittingHeight, standingHeight, currentHeight]);

  const goBack = () => {
    navigate(-1);
  };

  const handleSittingClick = () => {
    setCurrentHeight(sittingHeight);
    setActiveInput(null); // Clear the active input
  };

  const handleStandingClick = () => {
    setCurrentHeight(standingHeight);
    setActiveInput(null); // Clear the active input
  };

  const handleInputFocus = (inputType) => {
    setActiveInput(inputType);
    setShowNumberPad(true);
  };

  const handleNumberClick = (number) => {
    if (activeInput) {
      if (activeInput === 'sittingHeight') {
        setSittingHeight(sittingHeight + number);
      } else if (activeInput === 'standingHeight') {
        setStandingHeight(standingHeight + number);
      }
    }
  };

  const handleBackClick = () => {
    if (activeInput) {
      if (activeInput === 'sittingHeight') {
        setSittingHeight(sittingHeight.slice(0, -1));
      } else if (activeInput === 'standingHeight') {
        setStandingHeight(standingHeight.slice(0, -1));
      }
    }
  };

  const handleEnterClick = () => {
    setActiveInput(null);
    setShowNumberPad(false); // Close the number pad after pressing Enter
  };

  const increaseHeight = () => {
    setCurrentHeight((prevHeight) => (prevHeight ? parseInt(prevHeight) + 1 : 1));
  };

  const decreaseHeight = () => {
    setCurrentHeight((prevHeight) =>
      prevHeight ? Math.max(parseInt(prevHeight) - 1, 0) : 0
    );
  };

  return (
    <div className="border-container">
      <div className="top-left-box"></div>
      <div className="back-arrow" onClick={goBack}></div>
      <div className="current-height">
      Current Height: <span className="current-height-text">{currentHeight}</span> inches
      </div>
      <div className="input-container">
        <label htmlFor="standingHeight">Set Standing Height (inches)</label>
        <input
          type="text"
          id="standingHeight"
          placeholder="Enter standing height"
          onFocus={() => handleInputFocus('standingHeight')}
          value={standingHeight}
          onChange={(e) => setStandingHeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="sittingHeight">Set Sitting Height (inches)</label>
        <input
          type="text"
          id="sittingHeight"
          placeholder="Enter sitting height"
          onFocus={() => handleInputFocus('sittingHeight')}
          value={sittingHeight}
          onChange={(e) => setSittingHeight(e.target.value)}
        />
      </div>
      <div className="adjustment-buttons">
        <button className="adjustment-button" onClick={increaseHeight}>
          <span role="img" aria-label="Up Arrow">
            ⬆️
          </span>
        </button>
        <button className="adjustment-button" onClick={decreaseHeight}>
          <span role="img" aria-label="Down Arrow">
            ⬇️
          </span>
        </button>
      </div>
      <div className="bottom-buttons">
        <button className="button" onClick={handleSittingClick}>
          Sitting
        </button>
        <button className="button" onClick={handleStandingClick}>
          Standing
        </button>
      </div>
      {showNumberPad && (
        <NumberPad
          onNumberClick={handleNumberClick}
          onBackClick={handleBackClick}
          onEnterClick={handleEnterClick}
        />
      )}
    </div>
  );
}

export default HeightScreen;
