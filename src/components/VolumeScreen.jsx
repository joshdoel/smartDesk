import React, { useState, useEffect } from "react";
import CircularSlider from "react-circular-slider-svg";
import "./VolumeScreen.css";
import { useNavigate } from 'react-router-dom';

const VolumeScreen = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState(() => {
    // Initialize volume from local storage, or use the default value (100)
    return parseInt(localStorage.getItem("volume")) || 100;
  });

  const [brightness, setBrightness] = useState(() => {
    // Initialize brightness from local storage, or use the default value (100)
    return parseInt(localStorage.getItem("brightness")) || 100;
  });

  const [temperature, setTemperature] = useState(() => {
    // Initialize temperature from local storage, or use the default value (25)
    return parseInt(localStorage.getItem("temperature")) || 25;
  });

  const handleVolumeChange = (newValue) => {
    setVolume(newValue);
    localStorage.setItem("volume", newValue.toString()); // Store the volume value
  };

  const handleBrightnessChange = (e) => {
    const newBrightness = parseInt(e.target.value);
    setBrightness(newBrightness);
    localStorage.setItem("brightness", newBrightness.toString()); // Store the brightness value
  };

  const handleTemperatureChange = (newValue) => {
    setTemperature(newValue);
    localStorage.setItem("temperature", newValue.toString()); // Store the temperature value
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Set the initial slider positions using local storage values
    setVolume(parseInt(localStorage.getItem("volume")) || 100);
    setBrightness(parseInt(localStorage.getItem("brightness")) || 100);
    setTemperature(parseInt(localStorage.getItem("temperature")) || 25);
  }, []);

  return (
    <div className="border-container">
      <div className="top-left-box"></div>
      <div className="back-arrow" onClick={goBack}></div>
      <div className="slider-container">
        <CircularSlider
          className="circular-slider"
          size={400}
          minValue={0}
          value={volume}
          maxValue={100}
          startAngle={60}
          step={1}
          steps={100}
          endAngle={300}
          angleType={{
            direction: "cw",
            axis: "-y"
          }}
          handle1={{
            value: volume,
            onChange: handleVolumeChange
          }}
          arcColor="orange"
          arcBackgroundColor="orange"
        />
        <div className="volume-icon-container">
          <i className="fas fa-volume-up fa-3x"></i>
          <div className="volume-percentage">{Math.floor(volume)}%</div>
        </div>
      </div>

      <div className="brightness-container">
        <input className="brightness-slider"
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
        />
        <div className="brightness-icon">
          <i className="fas fa-lightbulb fa-3x"></i>
        </div>
        <div className="brightness-percentage">
          {Math.floor(brightness)}%
        </div>
      </div>

      <div className="temperature-container">
        <input
          type="range"
          min="60"
          max="90"
          value={temperature}
          onChange={(e) => handleTemperatureChange(e.target.value)}
          className="temperature-slider"
          style={{ transform: "rotate(270deg)" }}
        />
        <div className="temperature-icon">
          <i className="fas fa-thermometer-half fa-3x"></i>
        </div>
        <div className="temperature-value">
          {temperature}°F
        </div>
      </div>
    </div>
  );
};

export default VolumeScreen;
