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
    <section id="home" className="relative bg-brand-oxford-blue text-white pt-12 pb-14 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CA9703 1px, transparent 1px)', backgroundSize: '30px 30px' }} aria-hidden="true"></div>
      
      {/* Animated Light Blobs for Depth */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none opacity-40" aria-hidden="true"></div>

      <div className="container mx-auto px-6 xl:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] sm:text-xs font-display font-bold tracking-[0.18em] uppercase mb-4 sm:mb-5">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                Top-Tier Hardscape Care
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.35rem] 2xl:text-[3.75rem] font-bold font-display leading-[1.12] mb-4 sm:mb-6 tracking-tight">
                <span className="lg:whitespace-nowrap inline-block">
                  The <span className="text-brand-gold italic font-bold">Golden Standard</span>
                </span>{' '}
                <br className="hidden lg:block" />
                <span className="inline-block lg:whitespace-nowrap text-white/95">in Paver Restoration</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-brand-powder-blue/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
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
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-oxford-blue font-bold py-3.5 px-8 rounded-xl shadow-xl shadow-brand-gold/15 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-brand-gold-light hover:shadow-brand-gold/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <span className="font-display tracking-[0.1em] uppercase text-xs">Request Free Quote</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a 
                  href="tel:609-408-5000"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-brand-powder-blue/15 bg-white/[0.04] backdrop-blur-sm px-7 py-3.5 rounded-xl font-display font-semibold transition-all duration-300 hover:bg-white/[0.08] hover:border-brand-gold/40 active:scale-95 group"
                >
                  <PhoneIcon className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] tracking-[0.1em] uppercase text-white/90">609-408-5000</span>
                </a>
              </div>

              {/* Trust badges footer */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-4 gap-x-8 border-t border-brand-powder-blue/[0.12] pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex text-brand-gold scale-[0.85]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-[0.16em] text-brand-powder-blue/90">Top Rated Service</span>
                </div>
                <div className="hidden sm:block h-3 w-px bg-brand-powder-blue/20"></div>
                <div className="flex items-center gap-2.5 group">
                  <svg className="h-4 w-4 text-brand-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-[11px] font-display font-semibold uppercase tracking-[0.16em] text-brand-powder-blue/90">Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Slider Column */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto lg:ml-auto lg:mr-0 max-w-lg xl:max-w-xl w-full"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-brand-gold/10 rounded-[2.5rem] pointer-events-none hidden sm:block" aria-hidden="true"></div>
              
              <div className="relative z-10 bg-brand-oxford-blue p-1.5 sm:p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group">
                <BeforeAfterSlider 
                    before="/images/canyonclub-before.jpg"
                    after="/images/canyonclub-after.jpg"
                    beforeAlt="Dirty and faded driveway pavers with weeds, before restoration by Golden Paver Restorations."
                    afterAlt="Beautifully restored driveway with clean, vibrant pavers and fresh polymeric sand after paver sealing service."
                    loading="eager"
                    fetchpriority="high"
                    aspectRatio="aspect-[1/1]"
                />
                
                {/* Subtle Overlay Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-oxford-blue/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white/90">
                  Drag to compare
                </div>
              </div>

              {/* Professional Project Attribution - Refined Signature Style */}
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 px-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-brand-gold"></span>
                  <p className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-white">
                    Canyon Club Resort Marina
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-gold/90">
                    Cape May, NJ
                  </p>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <p className="text-[10px] font-medium uppercase tracking-[0.05em] text-white/50 italic">
                    Original Project Site
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
