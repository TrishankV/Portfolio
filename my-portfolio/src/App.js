import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-arcade-black text-arcade-green font-arcade min-h-screen">
      <header className="p-4 border-b-4 border-arcade-yellow text-center">
        <h1 className="text-4xl">My Retro Arcade Portfolio</h1>
      </header>
      
      <main className="p-8">
        <section id="about" className="border-4 border-arcade-blue p-4 mb-8">
          <h2 className="text-3xl">About Me</h2>
          <p className="mt-4">I’m a college student passionate about retro gaming and development.</p>
        </section>
        
        <section id="projects" className="border-4 border-arcade-pink p-4 mb-8">
          <h2 className="text-3xl">Projects</h2>
          <ul className="mt-4">
            <li className="mb-2">Project 1: Retro Arcade Game</li>
            <li className="mb-2">Project 2: Vintage Web Design</li>
          </ul>
        </section>
        
        <section id="contact" className="border-4 border-arcade-green p-4">
          <h2 className="text-3xl">Contact Me</h2>
          <form className="mt-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="p-2 w-full border border-arcade-yellow bg-arcade-black text-arcade-green" />
            <label className="block mt-4 mb-2">Message</label>
            <textarea className="p-2 w-full border border-arcade-yellow bg-arcade-black text-arcade-green" rows="4"></textarea>
            <button type="submit" className="mt-4 bg-arcade-green text-arcade-black py-2 px-4 border-2 border-arcade-yellow hover:bg-arcade-yellow hover:text-arcade-black">Send</button>
          </form>
        </section>
      </main>
      
      <footer className="p-4 text-center border-t-4 border-arcade-yellow">
        <p>&copy; 2024 My Retro Arcade Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
