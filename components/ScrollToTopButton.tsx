import React, { useState, useEffect } from 'react';

/**
 * A button that appears when the user scrolls down the page and allows them
 * to smoothly scroll back to the top.
 */
const ScrollToTopButton: React.FC = () => {
  // State to track whether the button should be visible.
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Toggles the visibility of the button based on the user's scroll position.
   * The button appears if the user has scrolled more than 300 pixels down.
   */
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Smoothly scrolls the window to the top of the page.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Set up an event listener for the 'scroll' event when the component mounts.
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // Conditionally apply classes for visibility and transitions.
      // The button fades and slides in from the bottom when visible.
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-gradient-to-br from-brand-gold-light to-brand-gold text-brand-oxford-blue p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;