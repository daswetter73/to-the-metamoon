import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
      windowHeight: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
