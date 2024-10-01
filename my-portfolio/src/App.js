// src/App.js

import React, { useRef, useCallback, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Quiz from './components/Quiz';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlipImage from './components/FlipImage';
import PikachuWalking from './components/Pikachu';

const App = () => {
  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);
  const [insideSection, setInsideSection] = React.useState(false);

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
      <Header />
      <main className="p-8 flex flex-col items-center">
        <FlipImage / >
     
        {/* Quiz Section */}
        <Quiz />

        {/* About Section */}
        <About addToRefs={addToRefs} />
        
        {/* Projects Section */}
        <Projects addToRefs={addToRefs} />

        <PikachuWalking />
        {/* Timeline Section */}
        <Timeline />

        {/* Contact Section */}
        <Contact addToRefs={addToRefs} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
