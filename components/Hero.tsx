import React from 'react';
import { motion } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeIn from './FadeIn';

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

/**
 * The Hero component serves as the main "above-the-fold" content.
 * It features a compelling headline, a call-to-action, and an interactive
 * before-and-after image slider to immediately engage visitors.
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-oxford-blue text-white pt-16 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CA9703 1px, transparent 1px)', backgroundSize: '30px 30px' }} aria-hidden="true"></div>
      
      {/* Animated Light Blobs for Depth */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none opacity-40" aria-hidden="true"></div>

      <div className="container mx-auto px-6 xl:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] sm:text-xs font-display font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                Top-Tier Hardscape Care
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.05] mb-4 sm:mb-6 tracking-tight">
                The <span className="text-brand-gold italic font-bold inline-block sm:inline">Golden Standard</span> <br className="hidden lg:block" /> in Paver Restoration
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-brand-powder-blue/75 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                South Jersey's elite choice for precision cleaning and industrial-grade sealing. We don't just clean—we preserve the natural beauty of your stone.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById('contact');
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl shadow-brand-gold/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-brand-gold-light hover:shadow-brand-gold/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <span className="font-display tracking-[0.1em] uppercase text-xs">Request Free Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a 
                  href="tel:609-408-5000"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-brand-powder-blue/5 bg-white/[0.03] backdrop-blur-sm px-8 py-3 rounded-lg font-display font-semibold transition-all duration-300 hover:bg-white/[0.07] hover:border-brand-powder-blue/20 active:scale-95 group"
                >
                  <PhoneIcon className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] tracking-[0.1em] uppercase text-white/80">609-408-5000</span>
                </a>
              </div>

              {/* Trust badges footer */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-4 gap-x-8 border-t border-brand-powder-blue/[0.08] pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex text-brand-gold scale-[0.85]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-powder-blue/60">Top Rated Service</span>
                </div>
                <div className="hidden sm:block h-3 w-px bg-brand-powder-blue/10"></div>
                <div className="flex items-center gap-2.5 group">
                  <svg className="h-4 w-4 text-brand-gold/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-brand-powder-blue/60">Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Slider Column */}
          <div className="lg:col-span-5 xl:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto lg:ml-auto lg:mr-0 max-w-lg xl:max-w-xl"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-brand-gold/10 rounded-[2.5rem] pointer-events-none hidden sm:block" aria-hidden="true"></div>
              
              <div className="relative z-10 bg-brand-oxford-blue p-1.5 sm:p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group">
                <BeforeAfterSlider 
                    before="https://i.ibb.co/XrHdr9ZQ/canyonclub-before.jpg"
                    after="https://i.ibb.co/ks5NHd75/canyonclub-after.jpg"
                    beforeAlt="Dirty and faded driveway pavers with weeds, before restoration by Golden Paver Restorations."
                    afterAlt="Beautifully restored driveway with clean, vibrant pavers and fresh polymeric sand after paver sealing service."
                    loading="eager"
                    fetchpriority="high"
                    aspectRatio="aspect-[1/1]"
                />
                
                {/* Subtle Overlay Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-oxford-blue/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Drag to compare
                </div>
              </div>

              {/* Floating Review Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 z-20 border border-brand-gold/10"
              >
                <div className="bg-brand-gold/10 p-1.5 sm:p-2 rounded-xl">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div className="whitespace-nowrap leading-tight">
                  <p className="text-brand-oxford-blue font-bold text-[13px] sm:text-sm">South Jersey's #1</p>
                  <p className="text-brand-slate-gray text-[9px] font-bold uppercase tracking-wider">Choice for Restoration</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
