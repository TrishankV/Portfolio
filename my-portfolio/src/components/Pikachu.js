// src/components/Pikachu.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import pikachuSprite from '../assets/pikachu.png'; // Ensure the path is correct

// Define animation keyframes for walking
const walkRightAnimation = keyframes`
  0% { background-position: -120px; }
  100% { background-position: -960px; }
`;

const PikachuContainer = styled.div`
  width: 100px; 
  height: 100px; 
  background-image: url(${pikachuSprite}); 
  background-size: 1200px 100px; 
  animation: ${walkRightAnimation} 0.5s steps(8) infinite; 
`;

const PikachuWalking = () => {
  return <PikachuContainer />;
};

export default PikachuWalking;
