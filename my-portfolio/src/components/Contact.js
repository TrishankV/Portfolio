import React from 'react';
import SocialIcons from './resized_icons';

const Contact = ({ addToRefs }) => {
  return (
    <section 
      id="contact" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent background
        padding: '24px', // Padding for the whole section
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Slight shadow for depth
        maxWidth: '1200px', 
        margin: '0 auto', 
        transform: 'scale(1.05)', 
        border: '4px solid #FF69B4', // Arcade pink border
        transition: 'transform 0.3s ease, background-color 0.3s ease',
      }} 
      ref={addToRefs} 
      tabIndex="0" 
      aria-labelledby="contact-heading"
    >
      <h2 
        id="contact-heading" 
        style={{ fontSize: '25px', color: '#FFD700', marginBottom: '24px' }} // Font size and styling for heading
        className="pixel-art"
      >
        Contact Me
      </h2>
      <p 
        style={{ fontSize: '25px', paddingBottom: '16px', color: '#FFFFFF' }} // Font size and padding for text
        className="pixel-art"
      >
        Feel free to reach out via email:
      </p>
      <p 
        style={{ fontSize: '25px', paddingBottom: '24px', color: '#FFD700' }} // Font size and padding for email
        className="pixel-art"
      >
        tvashikar@gmail.com
      </p>
      <div style={{ padding: '20px 0' }}> {/* Padding around social icons */}
        <SocialIcons />
      </div>
    </section>
  );
};

export default Contact;

