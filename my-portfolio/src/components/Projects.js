import React, { useState } from 'react';

const projectsData = [
  {
    title: "Music Genre Recognition",
    description: "A Streamlit app which is capable of classifying over 10 genres using the GZNAT dataset.",
    imgSrc: require('../assets/mgc.png'), // Correctly require the image
    link: "https://github.com/TrishankV/Music-Genre-Classifier",
  },
  {
    title: "Deepfake Detector",
    description: "A Flask app to tackle the problem of AI-generated deepfakes by classifying which images are real and which are deepfakes.",
    imgSrc: require('../assets/dd.jpg'), // Correctly require the image
    link: "https://github.com/TrishankV/DeepFake",
  },
  {
    title: "AISNFPA",
    description: "This project focuses on simulating AI-based navigation for pathfinding and avoidance, comparing different algorithms using Unreal and Unity simulations.",
    imgSrc: require('../assets/ainspa.jpg'), // Correctly require the image
    link: "https://github.com/TrishankV/AISNPFA",
  },
  {
    title: "EduBoost",
    description: "EduBoost is an AI-powered educational platform comprising Illustration Summarizer, Illustration Colorizer, Touch-based Calculator, and Generative Illustrative. It's our Final Year Project.",
    imgSrc: require('../assets/eduboost-image.png'), // Correctly require the image
    link: "https://github.com/TrishankV/EduBoost",
  },
];

const Projects = ({ addToRefs }) => {
  const [pixelatedIndex, setPixelatedIndex] = useState(null);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
    gap: '16px',
  };

  const cardStyle = {
    border: '2px solid #00FF00', // Arcade green
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    position: 'relative',
  };

  const pixelationStyle = (isPixelated) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.5)',
    filter: 'url(#pixelate)',
    transition: 'opacity 0.5s',
    opacity: isPixelated ? 1 : 0,
  });

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleClick = (link, index) => {
    setPixelatedIndex(index);
    setTimeout(() => {
      window.open(link, 'popup', 'width=800,height=600');
      setPixelatedIndex(null);
    }, 500);
  };

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '24px', 
        marginBottom: '32px', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      }} 
      ref={addToRefs} 
      tabIndex="0" 
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" style={{ fontSize: '2.5rem', marginBottom: '24px', color: '#FFD700' }}>Projects</h2>
      <div style={gridStyle}>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            style={cardStyle} 
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave}
            onClick={() => handleClick(project.link, index)} 
          >
            <img 
              src={project.imgSrc} 
              alt={project.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '16px' }}>
              <h3 style={{ fontSize: '23px', color: '#FFD700' }}>{project.title}</h3>
              <p style={{ marginTop: '8px', fontSize: '23px', color: '#FFFFFF' }}>{project.description}</p>
            </div>
            <div style={pixelationStyle(pixelatedIndex === index)} />
          </div>
        ))}
      </div>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="pixelate">
            <feFlood floodColor="white" result="flood" />
            <feComposite in2="flood" operator="in" />
            <feMorphology operator="dilate" radius="4" result="dilated" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Projects;
