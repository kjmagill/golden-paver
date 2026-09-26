import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Header: React.FC = () => {
  // State to manage the visibility of the mobile navigation menu.
  const [isOpen, setIsOpen] = useState(false);

  // Add a listener to close the mobile menu on window resize if it's open
  // and the viewport becomes larger than the mobile breakpoint.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open for better UX
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

  // A reusable button component for the "Get a Quote" call to action.
  const QuoteButton = ({ isMobile = false }: { isMobile?: boolean }) => (
    <a 
      href="#contact" 
      onClick={(e) => {
        handleSmoothScroll(e);
        if (isMobile) {
          setIsOpen(false);
        }
      }}
      className={`group inline-flex items-center justify-center gap-1.5 xl:gap-2 bg-brand-gold text-brand-oxford-blue font-bold py-2 px-3.5 xl:px-5 rounded-lg shadow-[0_4px_10px_rgba(202,151,3,0.2)] transition-all duration-300 ease-in-out hover:bg-brand-gold-light hover:shadow-[0_8px_20px_rgba(202,151,3,0.4)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-oxford-blue focus:ring-brand-gold whitespace-nowrap flex-shrink-0 ${isMobile ? 'w-full mt-4 py-2.5 px-6' : ''}`}
    >
      <span className="font-display uppercase tracking-wider xl:tracking-widest text-[11px] xl:text-xs">Get a Quote</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );

  return (
    // The header is 'sticky' and positioned at 'top-0' to keep it fixed at the top of the viewport during scroll.
    // 'z-50' ensures it appears above other page content.
    <header className="bg-brand-oxford-blue/95 backdrop-blur-md sticky top-0 z-50 border-b border-brand-gold/10 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 xl:px-10 py-2.5 sm:py-3.5 flex justify-between items-center gap-4">
        <a href="/" className="flex items-center gap-2 sm:gap-2.5 text-brand-gold-light group transition-all duration-300 flex-shrink-0">
          <div className="relative flex-shrink-0">
            <Logo className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </div>
          <span className="font-brand font-bold text-base sm:text-lg xl:text-xl 2xl:text-2xl tracking-[0.02em] uppercase leading-tight flex flex-row items-center whitespace-nowrap">
            <span className="text-brand-gold-light">Golden</span>
            <span className="text-brand-gold-light ml-1.5">Paver</span>
            <span className="text-brand-gold-light/80 xl:inline hidden ml-1.5">Restorations</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-3 lg:gap-3.5 xl:gap-6 2xl:gap-8 flex-shrink-0">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={handleSmoothScroll} 
              className="relative text-brand-powder-blue hover:text-white transition-colors font-display font-bold text-[11px] xl:text-xs tracking-wider xl:tracking-[0.14em] uppercase group py-1 whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="h-4 w-px bg-brand-gold/20 mx-0.5"></div>
          <a 
            href="tel:609-408-5000" 
            className="flex items-center gap-2 text-white hover:text-brand-gold-light transition-all duration-300 font-display font-bold group whitespace-nowrap"
            title="Call 609-408-5000"
          >
            <div className="bg-brand-gold/10 p-1.5 rounded-lg group-hover:bg-brand-gold group-hover:text-brand-oxford-blue transition-colors flex-shrink-0">
              <PhoneIcon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] xl:text-xs 2xl:text-[13px] tracking-wider font-semibold whitespace-nowrap">609-408-5000</span>
          </a>
          <QuoteButton />
        </nav>
        <div className="lg:hidden">
          {/* Animated Hamburger menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-brand-powder-blue focus:outline-none p-2 -mr-2 z-20 relative" 
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 relative" aria-hidden="true">
              <span className={`block absolute h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
              <span className={`block absolute h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ease-in-out top-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Animated Mobile menu */}
      <div 
        id="mobile-menu"
        className={`
          absolute top-full left-0 right-0 bg-brand-oxford-blue border-b border-brand-gold/15 lg:hidden overflow-hidden
          transition-[max-height,opacity] duration-500 ease-in-out shadow-2xl
          ${isOpen ? 'max-h-screen' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="px-6 py-6 flex flex-col items-center space-y-3">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`
                text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300
                font-display font-semibold uppercase tracking-wider text-sm block text-center py-2
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
              `}
              style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : '0ms' }}
              onClick={(e) => {
                handleSmoothScroll(e);
                setIsOpen(false); // Close menu on navigation
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="w-16 h-px bg-brand-powder-blue/15 my-1"></div>
          <a 
            href="tel:609-408-5000" 
            className={`
              flex items-center gap-2.5 text-white hover:text-brand-gold-light 
              transition-all duration-300 font-display font-bold py-2 text-sm tracking-wider
              ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
            `}
            style={{ transitionDelay: isOpen ? `${100 + navLinks.length * 50}ms` : '0ms' }}
          >
            <div className="bg-brand-gold/10 p-1.5 rounded-lg text-brand-gold">
              <PhoneIcon className="w-4 h-4" />
            </div>
            <span>609-408-5000</span>
          </a>
          <div 
            className={`
              w-full max-w-xs pt-2 transition-all duration-300
              ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}
            `}
            style={{ transitionDelay: isOpen ? `${100 + (navLinks.length + 1) * 50}ms` : '0ms' }}
          >
            <QuoteButton isMobile={true} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;