import React, { useState } from 'react';
import './App.css';

const RevealImage = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={`reveal-container ${revealed ? 'revealed' : ''}`} onClick={() => setRevealed(!revealed)}>
      <div className="reveal-content" style={{ backgroundImage: 'url(/path/to/reveal-image.png)' }}></div>
      <div className="reveal-message">
        <p>{revealed ? 'Surprise!' : 'Click to Reveal'}</p>
      </div>
    </div>
  );
};

export default RevealImage;
