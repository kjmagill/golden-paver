import React, { useState } from 'react';
import Logo from './Logo';

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Header: React.FC = () => {
  // State to manage the visibility of the mobile navigation menu.
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];
  
  /**
   * Handles smooth scrolling to an anchor target on the page.
   * This prevents the default jumpy behavior of anchor links.
   * @param e - The mouse event from clicking the anchor link.
   */
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // The `scrollIntoView` API with 'smooth' behavior is supported by modern browsers.
        // The `scroll-smooth` class on the `<html>` tag in index.html serves as a fallback.
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // A reusable button component for the "Get a Free Quote" call to action.
  const QuoteButton = ({ isMobile = false }: { isMobile?: boolean }) => (
    <a 
      href="#contact" 
      onClick={(e) => {
        handleSmoothScroll(e);
        // If it's the mobile version of the button, close the menu after clicking.
        if (isMobile) {
          setIsOpen(false);
        }
      }}
      className={`group inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-oxford-blue font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-brand-gold-light hover:shadow-lg hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-oxford-blue focus:ring-brand-gold ${isMobile ? 'w-full mt-2' : ''}`}
    >
      <span>Get a Free Quote</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );

  return (
    <header className="bg-brand-oxford-blue sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a href="index.html" className="flex items-center gap-2 sm:gap-3 text-brand-gold-light hover:text-brand-gold transition-colors">
          <Logo className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="font-brand font-bold text-base sm:text-xl tracking-wider uppercase leading-tight">
            Golden Paver<span className="hidden sm:inline"> Restoration</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold">
              {link.label}
            </a>
          ))}
          <a href="tel:609-408-5000" className="flex items-center gap-2 text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold">
            <PhoneIcon className="w-4 h-4" />
            <span>609-408-5000</span>
          </a>
          <QuoteButton />
        </nav>
        <div className="md:hidden">
          {/* Hamburger menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brand-powder-blue focus:outline-none" 
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu, rendered conditionally based on the `isOpen` state. */}
      {isOpen && (
        <div className="md:hidden bg-brand-oxford-blue" id="mobile-menu">
          <nav className="px-6 pt-2 pb-4 flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold block text-center py-2" onClick={(e) => {
                handleSmoothScroll(e);
                setIsOpen(false); // Close menu on navigation
              }}>
                {link.label}
              </a>
            ))}
             <a href="tel:609-408-5000" className="flex items-center gap-2 text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold py-2">
              <PhoneIcon className="w-4 h-4" />
              <span>609-408-5000</span>
            </a>
            <QuoteButton isMobile={true} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;