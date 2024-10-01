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
      <p style={{ fontSize: '23px', lineHeight: '1.25' }}>
        Not that highly motivated, B Tech AIDS Final Year student with ample hands-on experience in Python and SQL (from jr college). Passionate about the studies and recent developments in Artificial Intelligence. Seeking opportunities to contribute to innovative projects and further develop skills in software (AI) development and Data Analysis.
      </p>
      
      {/* Download Resume Link */}
      <div className="mt-4">
        <a 
          href="../assets/Trushank R Vashikar CV.pdf" 
          download 
          className="text-arcade-green hover:text-arcade-yellow border-2 border-arcade-green px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 pixel-art"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
