// src/components/About.js

import React from 'react';

const About = ({ addToRefs }) => {
  return (
    <section 
      id="about" 
      className="border-4 border-arcade-blue p-6 mb-8 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" 
      ref={addToRefs} 
      tabIndex="0" 
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">About Me</h2>
      <p className="text-lg pixel-art">I’m a Fourth year college student for the University of Mumbai doing a bachelor's in AI and DS. I am an enthusiast about AI and development in AI and have tried to improve my skills in AI.</p>
    </section>
  );
};

export default About;
