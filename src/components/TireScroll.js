import React, { useState, useEffect } from 'react';
import './CSS/TireScroll.css';

const TireScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the percentage of scroll relative to the total scroll height
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / totalScrollHeight) * 20;
      setScrollY(scrollPosition);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-tire"
      style={{
        transform: `rotate(${scrollY}deg)`,
        top: `${scrollProgress}%`, // Tire moves along with scroll
      }}
    ></div>
  );
};

export default TireScroll;
