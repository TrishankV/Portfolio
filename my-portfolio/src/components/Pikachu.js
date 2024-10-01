// src/components/PikachuRunning.js
import React from 'react';
import { AnimatedSpriteSheet } from 'react-spritesheet';
import pikachuSprite from '../assets/pikachu.png';
import pikachuSound from '../assets/pikachu.mp3';
import '../CSSes/Pikachu.css';

// Function to handle the click event (outside the component)
const handleClick = () => {
    const audio = new Audio(pikachuSound);
    audio.play(); // Play the sound
};

const PikachuRunning = () => {
    return (
        <div className="pikachu-container" onClick={handleClick}>
            <AnimatedSpriteSheet
                filename={pikachuSprite}
                initialFrame={0} // Start with the first frame
                frame={{ width: 12000, height: 40 }} // Size of each frame (adjust based on your sprite sheet)
                bounds={{ x: 0, y: 0., width: 1200, height: 100 }} // Total width for the running frames
                isPlaying // Start the animation automatically
                loop // Loop the animation
                speed={150} // Adjust the speed of the animation
            />
        </div>
    );
};

export default PikachuRunning;