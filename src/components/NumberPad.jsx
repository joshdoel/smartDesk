// NumberPad.js
import React from 'react';
import './NumberPad.css';

function NumberPad({ onNumberClick, onBackClick, onEnterClick }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="number-pad-overlay">
      <div className="number-pad">
        <div className="number-pad-buttons">
          {numbers.map((number) => (
            <button key={number} onClick={() => onNumberClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div className="number-pad-bottom">
          <button onClick={onBackClick} className="back-button">Back</button>
          <button onClick={onEnterClick} className="enter-button">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default NumberPad;
