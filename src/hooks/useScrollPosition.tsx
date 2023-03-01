import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener(`scroll`, updatePosition);

    return () => window.removeEventListener(`scroll`, updatePosition);
  }, []);

  return { position };
};
