import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeIn from './FadeIn';

/**
 * The Hero component serves as the main "above-the-fold" content.
 * It features a compelling headline, a call-to-action, and an interactive
 * before-and-after image slider to immediately engage visitors.
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-brand-oxford-blue text-white py-16 sm:py-20 md:py-28 overflow-x-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <FadeIn direction="right">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight mb-4">
              The <span className="bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent">Golden Standard</span> in Paver Restoration
            </h1>
            <p className="text-lg md:text-xl text-brand-powder-blue mb-8">
              Professional cleaning, sanding and sealing services that bring your pavers back to life.
            </p>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('contact');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-br from-brand-gold-light to-brand-gold text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl text-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-oxford-blue focus:ring-brand-gold"
            >
              <span className="font-display [text-shadow:0_1px_0_rgba(255,255,255,0.3)]">Request Your Free Estimate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={200}>
          <div className="w-full max-w-2xl mx-auto">
            <BeforeAfterSlider 
                before="https://i.postimg.cc/76fBFnBV/d2.jpg"
                after="https://i.postimg.cc/vBcPJtPn/d1.jpg"
                beforeAlt="Dirty and faded driveway pavers with weeds, before restoration by Golden Paver Restorations."
                afterAlt="Beautifully restored driveway with clean, vibrant pavers and fresh polymeric sand after paver sealing service."
                loading="eager"
                fetchpriority="high"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;