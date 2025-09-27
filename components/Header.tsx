import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-brand-blue-dark sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-display text-brand-gold-light hover:text-brand-gold transition-colors">
          Golden Paver Restorations
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-brand-cream hover:text-brand-gold-light transition-colors font-semibold">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Get a Free Quote
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-cream focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-blue-dark">
          <nav className="px-6 pt-2 pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-cream hover:text-brand-gold-light transition-colors font-semibold block text-center py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 block text-center mt-2" onClick={() => setIsOpen(false)}>
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
