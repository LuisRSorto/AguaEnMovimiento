import React from 'react';
import './backgroundWaves.css';

const BackgroundWave = () => {
  return (
    <div className="wave-container">
      <div className="wave-wrapper">
        <svg className="wave wave1" viewBox="0 0 2880 320" preserveAspectRatio="none">
          <path
            fill="#66ccff"
            d="M0,160 C360,80 720,240 1080,160 C1440,80 1800,240 2160,160 C2520,80 2880,160 2880,160 L2880,320 L0,320 Z"
          />
        </svg>
        <svg className="wave wave2" viewBox="0 0 2880 320" preserveAspectRatio="none">
          <path
            fill="#33bbff"
            d="M0,180 C360,100 720,260 1080,180 C1440,100 1800,260 2160,180 C2520,100 2880,180 2880,180 L2880,320 L0,320 Z"
          />
        </svg>
        <svg className="wave wave3" viewBox="0 0 2880 320" preserveAspectRatio="none">
          <path
            fill="#0099e6"
            d="M0,200 C360,120 720,280 1080,200 C1440,120 1800,280 2160,200 C2520,120 2880,200 2880,200 L2880,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundWave;
