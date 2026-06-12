import { useState, useEffect } from 'react';

// min checks are inclusive, max checks are not

export const defaultBreakpoints = {
  isExtraSmall: { max: 500 },
  isSmall: { min: 500, max: 800 },
  isMedium: { min: 800, max: 1020 },
  isLarge: { min: 1020 },
};

export function useBreakpoints(customBreakpoints) {
  const getBreakpoints = () => {
    const breaks = customBreakpoints || defaultBreakpoints;
    const width = window?.innerWidth;
    const values = {};
    Object.entries(breaks).forEach(([key, value]) => {
      const { min, max } = value;
      const minCheck = min ? width >= min : true;
      const maxCheck = max ? width < max : true;
      values[key] = minCheck && maxCheck;
    });
  }

  const [breakpoints, setBreakpoints] = useState(getBreakpoints());

  const handleWindowChange = () => {
    setBreakpoints(getBreakpoints());
  };

  useEffect(() => {
    handleWindowChange();
    window.addEventListener('resize', handleWindowChange);
    return () => {
      window.removeEventListener('resize', handleWindowChange);
    }
  }, []);

  return breakpoints;
}
