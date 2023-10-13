import React, { useState, useEffect } from 'react';
import './Settings.css';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();

  // Retrieve saved values from local storage or set default values
  const [option1, setOption1] = useState(() => {
    const savedValue = localStorage.getItem('option1');
    return savedValue ? savedValue : 'Option 5';
  });
  const [option2, setOption2] = useState(() => {
    const savedValue = localStorage.getItem('option2');
    return savedValue ? savedValue : 'Option 1';
  });
  const [option3, setOption3] = useState(() => {
    const savedValue = localStorage.getItem('option3');
    return savedValue ? savedValue : 'Option 3';
  });
  const [option4, setOption4] = useState(() => {
    const savedValue = localStorage.getItem('option4');
    return savedValue ? savedValue : 'Option 4';
  });
  const [option5, setOption5] = useState(() => {
    const savedValue = localStorage.getItem('option5');
    return savedValue ? savedValue : 'Option 5';
  });

  // Function to update the local storage and the state
  const handleOption1Change = (event) => {
    const selectedValue = event.target.value;
    setOption1(selectedValue);
    localStorage.setItem('option1', selectedValue);
  };

  const handleOption2Change = (event) => {
    const selectedValue = event.target.value;
    setOption2(selectedValue);
    localStorage.setItem('option2', selectedValue);
  };

  const handleOption3Change = (event) => {
    const selectedValue = event.target.value;
    setOption3(selectedValue);
    localStorage.setItem('option3', selectedValue);
  };

  const handleOption4Change = (event) => {
    const selectedValue = event.target.value;
    setOption4(selectedValue);
    localStorage.setItem('option4', selectedValue);
  };

  const handleOption5Change = (event) => {
    const selectedValue = event.target.value;
    setOption5(selectedValue);
    localStorage.setItem('option5', selectedValue);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Load the saved values from local storage on component mount
    const savedOption1 = localStorage.getItem('option1');
    if (savedOption1) setOption1(savedOption1);
    const savedOption2 = localStorage.getItem('option2');
    if (savedOption2) setOption2(savedOption2);
    const savedOption3 = localStorage.getItem('option3');
    if (savedOption3) setOption3(savedOption3);
    const savedOption4 = localStorage.getItem('option4');
    if (savedOption4) setOption4(savedOption4);
    const savedOption5 = localStorage.getItem('option5');
    if (savedOption5) setOption5(savedOption5);
  }, []); // The empty dependency array ensures it runs once on mount

  return (
    <div className="border-container">
      <h1 className="setting">Settings</h1>
      <div className="top-left-box"></div>
      <div className="back-arrow" onClick={goBack}></div>
      <div className="settings-item">
        <div className='label-item'>
            <label>Raise Speakers On Startup:</label>
        </div>
        <div className='dropdown'>
        <select value={option1} onChange={handleOption1Change}>
          <option value="Option 5">Yes</option>
          <option value="Option 10">No</option>
        </select>
        </div>
      </div>

      <div className="settings-item">
        <label>Lock Drawers on Shutdown:</label>
        <select value={option2} onChange={handleOption2Change}>
          <option value="Option 1">Yes</option>
          <option value="Option 2">No</option>
        </select>
      </div>

      <div className="settings-item">
        <label>Desk Light on Startup:</label>
        <select value={option3} onChange={handleOption3Change}>
          <option value="Option 2">Yes</option>
          <option value="Option 4">No</option>
        </select>
      </div>

      <div className="settings-item">
        <label>Default Desk Height:</label>
        <select value={option4} onChange={handleOption4Change}>
          <option value="Option 3">Sitting</option>
          <option value="Option 6">Standing</option>
        </select>
      </div>

      <div className="settings-item">
        <label>Sleep After:</label>
        <select value={option5} onChange={handleOption5Change}>
          <option value="Option 4">2 Minutes</option>
          <option value="Option 8">5 Minutes</option>
          <option value="Option 11">10 Minutes</option>
          <option value="Option 11">20 Minutes</option>
          <option value="Option 11">Never</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
