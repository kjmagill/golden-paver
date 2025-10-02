import React, { useState } from 'react';
import Logo from './Logo';

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const QuoteButton = ({ isMobile = false }: { isMobile?: boolean }) => (
    <a 
      href="#contact" 
      onClick={() => isMobile && setIsOpen(false)}
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
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold font-display text-brand-gold-light hover:text-brand-gold transition-colors">
          <Logo className="w-10 h-10" />
          <span>Golden Paver Restorations</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold">
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
      {isOpen && (
        <div className="md:hidden bg-brand-oxford-blue" id="mobile-menu">
          <nav className="px-6 pt-2 pb-4 flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-powder-blue hover:text-brand-gold-light transition-colors font-semibold block text-center py-2" onClick={() => setIsOpen(false)}>
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