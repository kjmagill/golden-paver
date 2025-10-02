import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-5';
      case 'down': return '-translate-y-5';
      case 'left': return 'translate-x-5';
      case 'right': return '-translate-x-5';
      default: return '';
    }
  };

  const baseClasses = `transition-all duration-700 ease-out`;
  const initialClasses = `opacity-0 ${getInitialTransform()}`;
  const finalClasses = 'opacity-100 translate-y-0 translate-x-0';
  
  const combinedClasses = `${baseClasses} ${isInView ? finalClasses : initialClasses} ${className}`;

  return (
    <div ref={ref} className={combinedClasses} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default FadeIn;