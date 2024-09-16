import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import SocialIcons from './resized_icons';

const App = () => {
  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [insideSection, setInsideSection] = useState(false);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleKeyDown = useCallback((e) => {
    const { key } = e;
    const sectionCount = sectionRefs.current.length;

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault();
      const isDown = key === 'ArrowDown';
      const currentIndex = currentSectionIndex + (isDown ? 1 : -1);

      if (currentIndex >= 0 && currentIndex < sectionCount) {
        const currentSection = sectionRefs.current[currentSectionIndex];
        const nextSection = sectionRefs.current[currentIndex];

        if (currentSection) {
          currentSection.classList.add('section-exit');
          setTimeout(() => currentSection.classList.remove('section-exit'), 500);
        }
        if (nextSection) {
          nextSection.classList.add('section-enter');
          setTimeout(() => nextSection.classList.remove('section-enter'), 500);
        }

        setCurrentSectionIndex(currentIndex);
        setTimeout(() => nextSection?.focus(), 500);
      }
    } else if (key === 'Enter') {
      e.preventDefault();
      if (insideSection) {
        const focusableElements = sectionRefs.current[currentSectionIndex]?.querySelectorAll('[tabindex="0"]');
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      } else {
        setInsideSection(true);
        const focusableElements = sectionRefs.current[currentSectionIndex]?.querySelectorAll('[tabindex="0"]');
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    } else if (key === 'Backspace') {
      e.preventDefault();
      if (insideSection) {
        setInsideSection(false);
        sectionRefs.current[currentSectionIndex]?.focus();
      }
    }
  }, [currentSectionIndex, insideSection]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-arcade-black text-arcade-green font-arcade min-h-screen bg-pixel">
      <header className="p-4 border-b-4 border-arcade-yellow text-center bg-gradient-to-r from-arcade-blue to-arcade-purple shadow-lg">
        <h1 className="text-8xl font-bold text-arcade-yellow drop-shadow-lg" tabIndex="0">YET ANOTHER PORTFOLIO !!!</h1>
      </header>
      
      <main className="p-8 flex flex-col items-center">
        <div className="w-48 h-48 mb-8 bg-arcade-pink border-4 border-arcade-blue flex items-center justify-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-pulse pixel-art">
          <img src="./assets/773993385225741025.png" alt="Pixel Art" className="w-full h-full object-cover" />
        </div>
        
        <section id="about" className="border-4 border-arcade-blue p-6 mb-8 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" ref={addToRefs} tabIndex="0" role="region" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">About Me</h2>
          <p className="text-lg pixel-art">I’m a Fourth year college student for the Umiversity of Mumbai doing bachelors in AI and DS . I am enthusuiast anout AI and development in AI and tried to improve my skills in AI </p>
        </section>
        
        <section id="projects" className="border-4 border-arcade-green p-6 mb-8 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" ref={addToRefs} tabIndex="0" role="region" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">Projects</h2>
          <ul className="list-disc pl-6 space-y-2 pixel-art">
            <li className="text-lg">Retro Arcade Game: A nostalgic game experience with pixel-perfect graphics.</li>
            <li className="text-lg">Vintage Web Design: A website inspired by the look and feel of early internet days.</li>
          </ul>
        </section>
        
        <section id="contact" className="border-4 border-arcade-pink p-6 w-full max-w-3xl rounded-lg shadow-lg bg-arcade-dark hover:bg-arcade-light transition-colors duration-300 transform hover:scale-105 hover:rotate-1" ref={addToRefs} tabIndex="0" role="region" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-4xl mb-4 text-arcade-yellow pixel-art">Contact Me</h2>
          <p className="text-lg pixel-art">Feel free to reach out via email:</p>
          <p className="text-lg text-arcade-yellow pixel-art">your-email@example.com</p>
          <SocialIcons />
        </section>
      </main>
      
      <footer className="p-4 text-center border-t-4 border-arcade-yellow bg-gradient-to-r from-arcade-blue to-arcade-purple">
        <p className="pixel-art">&copy; 2024 My Retro Arcade Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
