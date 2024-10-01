import React, { useState } from 'react';
import '../CSSes/FlipImage.css'; // Import CSS for styling and animation

// Import the images
import trish1 from '../assets/trish/trish1.png';
import trish2 from '../assets/trish/trish2.png';

const FlipImage = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Toggle the flipped state on click
  };

  return (
    <div className="flip-wrapper">
      <div className="flip-container" onClick={handleClick}>
        <div className={`flipper ${flipped ? 'flipped' : ''}`}>
          <div className="front">
            <img
              src={trish1}
              alt="Flipping Image"
              className="image"
              style={{ width: '200px', height: '200px' }} // Resize to 200x200 pixels
            />
          </div>
          <div className="back">
            <img
              src={trish2}
              alt="Flipped Image"
              className="image"
              style={{ width: '200px', height: '200px' }} // Resize to 200x200 pixels
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipImage;
