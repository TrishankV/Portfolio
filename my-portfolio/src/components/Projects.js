// src/components/Projects.js

import React from 'react';

const Projects = ({ addToRefs }) => {
  return (
    <section 
      id="projects" 
      className="border-4 border-arcade-green p-6 mb-8 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" 
      ref={addToRefs} 
      tabIndex="0" 
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">Projects</h2>
      <ul className="list-disc pl-6 space-y-2 pixel-art">
        <li className="text-lg">Retro Arcade Game: A nostalgic game experience with pixel-perfect graphics.</li>
        <li className="text-lg">Vintage Web Design: A website inspired by the look and feel of early internet days.</li>
      </ul>
    </section>
  );
};

export default Projects;
