
import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-brand-oxford-blue text-white py-20 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-4">
            Restore Your Pavers to Their <span className="text-brand-gold-light">Golden Glory</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-powder-blue mb-8">
            Professional cleaning, sealing, and restoration services that bring your outdoor spaces back to life.
          </p>
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl text-lg transition-all duration-300 ease-in-out hover:bg-brand-gold-light hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-oxford-blue focus:ring-brand-gold"
          >
            <span>Request Your Free Estimate</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        <div className="w-full max-w-2xl mx-auto">
           <BeforeAfterSlider 
              before="https://i.postimg.cc/76fBFnBV/d2.jpg"
              after="https://i.postimg.cc/vBcPJtPn/d1.jpg"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;