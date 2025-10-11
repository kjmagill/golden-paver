import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

/**
 * A reusable component that fades in its children when they scroll into the viewport.
 */
const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  // `isInView` tracks whether the component is currently visible in the viewport.
  const [isInView, setIsInView] = useState(false);
  // `ref` is used to get a direct reference to the component's root DOM element.
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // The IntersectionObserver API provides a way to asynchronously observe changes
    // in the intersection of a target element with an ancestor element or with a
    // top-level document's viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // `entry.isIntersecting` is true if the element is at least partially visible.
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once the element is in view and the animation is triggered, we can stop observing it.
          // This ensures the animation only runs once.
          observer.unobserve(element);
        }
      },
      {
        // `threshold: 0.1` means the callback will trigger when 10% of the element is visible.
        threshold: 0.1,
      }
    );

    // Start observing the component's DOM element.
    observer.observe(element);

    // Cleanup function: stop observing the element when the component unmounts.
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  /**
   * Determines the initial transform style based on the `direction` prop.
   * This creates the "slide-in" effect from a specific direction.
   */
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-5';
      case 'down': return '-translate-y-5';
      case 'left': return 'translate-x-5';
      case 'right': return '-translate-x-5';
      default: return '';
    }
  };

  // Base classes for the transition effect.
  const baseClasses = `transition-all duration-700 ease-out`;
  // Initial state classes: transparent and translated off-screen.
  const initialClasses = `opacity-0 ${getInitialTransform()}`;
  // Final state classes: fully opaque and in its final position.
  const finalClasses = 'opacity-100 translate-y-0 translate-x-0';
  
  // Conditionally apply classes based on whether the component is in view.
  // The 'fade-in-element' class is added to allow targeting via CSS for accessibility overrides (e.g., prefers-reduced-motion).
  const combinedClasses = `fade-in-element ${baseClasses} ${isInView ? finalClasses : initialClasses} ${className}`;

  return (
    <div ref={ref} className={combinedClasses} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default React.memo(FadeIn);