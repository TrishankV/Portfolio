// Timeline.js
import React from 'react';
import '../App.css'; // Ensure you have this CSS file for styling

const Timeline = () => {
  const events = [
    { year: '1972', event: 'Pong released by Atari, marking the beginning of arcade gaming.' },
    { year: '1983', event: 'Nintendo Entertainment System (NES) launched in Japan.' },
    { year: '1985', event: 'Super Mario Bros. released, revitalizing the video game industry.' },
    { year: '1989', event: 'Game Boy released by Nintendo, bringing handheld gaming to the masses.' },
    { year: '1996', event: 'Nintendo 64 released, introducing 3D gaming to the console market.' },
    { year: '2006', event: 'Nintendo Wii released, promoting motion-sensing gameplay.' },
  ];

  return (
    <div className="timeline-container">
      <h2 className="text-4xl mb-4 text-arcade-yellow pixel-art">Timeline of Retro Gaming</h2>
      <ul className="timeline-list">
        {events.map((event, index) => (
          <li key={index} className="timeline-item">
            <span className="timeline-year">{event.year}</span>
            <span className="timeline-event">{event.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
