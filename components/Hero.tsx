
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
          <a href="#contact" className="bg-brand-gold hover:bg-brand-gold-light text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 inline-block text-lg">
            Request Your Free Estimate
          </a>
        </div>
        <div className="w-full max-w-2xl mx-auto">
           <BeforeAfterSlider 
              before="https://picsum.photos/seed/paverbefore/800/600"
              after="https://picsum.photos/seed/paverafter/800/600"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;