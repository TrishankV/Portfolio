import React, { useEffect, useState, useRef } from 'react';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import instagramIcon from '../assets/icons/instagram.png';
import twitterIcon from '../assets/icons/twitter.png';
import '../CSSes/icons.css'; // Import the CSS file for animations

// Function to resize image
function resizeImage(imageSrc, newWidth, newHeight, callback) {
  const image = new Image();
  image.src = imageSrc;

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    const resizedImage = canvas.toDataURL();
    callback(resizedImage);
  };
}

const SocialIcons = () => {
  const [resizedIcons, setResizedIcons] = useState({
    linkedin: '',
    github: '',
    instagram: '',
    twitter: ''
  });

  // Create refs for each icon
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const instagramRef = useRef(null);
  const twitterRef = useRef(null);

  // Resize the images when the component mounts
  useEffect(() => {
    resizeImage(linkedinIcon, 40, 40, (dataUrl) =>
      setResizedIcons((prev) => ({ ...prev, linkedin: dataUrl }))
    );
    resizeImage(githubIcon, 40, 40, (dataUrl) =>
      setResizedIcons((prev) => ({ ...prev, github: dataUrl }))
    );
    resizeImage(instagramIcon, 40, 40, (dataUrl) =>
      setResizedIcons((prev) => ({ ...prev, instagram: dataUrl }))
    );
    resizeImage(twitterIcon, 40, 40, (dataUrl) =>
      setResizedIcons((prev) => ({ ...prev, twitter: dataUrl }))
    );
  }, []);

  const handleClick = (url, ref) => {
    if (ref.current) {
      ref.current.classList.add('explode');
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        ref.current.classList.remove('explode');
      }, 500); // Duration of explosion effect
    }
  };

  return (
    <section id="social" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '1rem' }} className="mt-8">
    {resizedIcons.linkedin && (
        <a href="#" onClick={() => handleClick('https://www.linkedin.com/in/trushank-vashikar-9b841a263/', linkedinRef)} className="relative">
          <div ref={linkedinRef} className="w-16 h-16 flex items-center justify-center bg-arcade-black border-arcade-yellow border-4 rounded-lg transition-transform transform hover:scale-110 hover:animate-bounce focus:outline-none focus:ring-4 focus:ring-arcade-yellow">
            <img src={resizedIcons.linkedin} alt="LinkedIn" className="w-12 h-12" />
          </div>
        </a>
      )}
      {resizedIcons.github && (
        <a href="#" onClick={() => handleClick('https://github.com/trishankv', githubRef)} className="relative">
          <div ref={githubRef} className="w-16 h-16 flex items-center justify-center bg-arcade-black border-arcade-yellow border-4 rounded-lg transition-transform transform hover:scale-110 hover:animate-bounce focus:outline-none focus:ring-4 focus:ring-arcade-yellow">
            <img src={resizedIcons.github} alt="GitHub" className="w-12 h-12" />
          </div>
        </a>
      )}
      {resizedIcons.instagram && (
        <a href="#" onClick={() => handleClick('https://www.instagram.com/trishankv', instagramRef)} className="relative">
          <div ref={instagramRef} className="w-16 h-16 flex items-center justify-center bg-arcade-black border-arcade-yellow border-4 rounded-lg transition-transform transform hover:scale-110 hover:animate-bounce focus:outline-none focus:ring-4 focus:ring-arcade-yellow">
            <img src={resizedIcons.instagram} alt="Instagram" className="w-12 h-12" />
          </div>
        </a>
      )}
      {resizedIcons.twitter && (
        <a href="#" onClick={() => handleClick('https://x.com/v9trish', twitterRef)} className="relative">
          <div ref={twitterRef} className="w-16 h-16 flex items-center justify-center bg-arcade-black border-arcade-yellow border-4 rounded-lg transition-transform transform hover:scale-110 hover:animate-bounce focus:outline-none focus:ring-4 focus:ring-arcade-yellow">
            <img src={resizedIcons.twitter} alt="Twitter" className="w-12 h-12" />
          </div>
        </a>
      )}
    </section>
  );
};

export default SocialIcons;
