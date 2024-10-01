// src/components/Contact.js

import React from 'react';
import SocialIcons from './resized_icons';

const Contact = ({ addToRefs }) => {
  return (
    <section 
      id="contact" 
      className="border-4 border-arcade-pink p-6 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" 
      ref={addToRefs} 
      tabIndex="0" 
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">Contact Me</h2>
      <p className="text-lg pixel-art">Feel free to reach out via email:</p>
      <p className="text-lg text-arcade-yellow pixel-art">your-email@example.com</p>
      <SocialIcons />
    </section>
  );
};

export default Contact;
