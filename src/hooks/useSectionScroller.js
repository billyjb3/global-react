import { useState, useEffect, useRef } from 'react';

export function useSectionScroller() {
  const scrollables = useRef({});
  const [currentSection, setCurrentSection] = useState(null);

  const defaultOptions = {
    threshold: .6,
    behavior: 'smooth',
    block: 'start', // Vertical alignment: 'start', 'center', 'end', or 'nearest'
  };

  const registerScrollable = (ref, id, optionProps = {}) => {
    if (!scrollables.current[id]) {
      const options = {
        ...defaultOptions,
        ...optionProps,
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setCurrentSection(id);
      }, { threshold: options.threshold });

      scrollables.current[id] = {
        ref,
        observer,
        ...options,
      };
      observer.observe(ref.current);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(scrollables.current).forEach((scrollable) => {
        const { ref, observable } = scrollable;
        observable?.unobserve(ref.current);
        observable?.disconnect();
      });
    };
  }, []);

  const handleClick = (id) => {
    const scrollable = scrollables.current[id];
    if (scrollable) {
      const {
        ref,
        behavior,
        block,
      } = scrollable;
      ref.current.scrollIntoView({ behavior, block });
    }
  };

  return { registerScrollable, handleClick, currentSection };
}
