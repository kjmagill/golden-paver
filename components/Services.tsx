import React from 'react';
import FadeIn from './FadeIn';

// A "Sparkles" icon to represent a clean, "like-new" finish.
const CleaningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

// A simplified icon of a push brush to represent the Polymeric Sanding process.
const SandingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        {/* Brush Head */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 15h16" />
        {/* Handle */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l7-11" />
        {/* Bristles */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 15v4m4-4v4m4-4v4m4-4v4" />
    </svg>
);


// A shield icon with a water droplet, symbolizing protection from the elements.
const SealingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        {/* A standard, clean shield shape. */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        {/* A simple, clear water droplet path, positioned in the middle of the shield. */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.65c-1.38 0-2.5-1.12-2.5-2.5 0-2.85 2.5-5.15 2.5-5.15s2.5 2.3 2.5 5.15c0 1.38-1.12 2.5-2.5 2.5z" />
    </svg>
);


const services = [
  {
    icon: <CleaningIcon />,
    title: 'Deep Cleaning',
    description: 'A thorough cleaning process to remove weeds, dirt, stains, and growths such as algae, moss, and lichen.'
  },
  {
    icon: <SandingIcon />,
    title: 'Polymeric Sanding',
    description: 'Replacing old sand with new polymeric sand to prevent weed growth, resist erosion, and lock your pavers in place.'
  },
  {
    icon: <SealingIcon />,
    title: 'Paver Sealing',
    description: 'Application of high quality sealer to enhance colors and protect from future stains, weathering & UV damage.'
  },
];

/**
 * The Services component displays the main offerings of the business.
 * It uses a grid layout to present each service in a clear and visually appealing card format,
 * with custom icons to represent each category.
 */
const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Proven Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-oxford-blue tracking-tight">Our Restoration Services</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
            <p className="text-lg text-brand-slate-gray mt-6 max-w-2xl mx-auto leading-relaxed">
              Serving Cape May, Avalon & Stone Harbor with a meticulous three-step restoration process designed to last for years.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div className="group bg-white p-8 sm:p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-2 flex flex-col items-center text-center h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="flex justify-center mb-8 relative">
                  <div className="absolute inset-0 bg-brand-gold/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-brand-oxford-blue mb-4 group-hover:text-brand-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-brand-slate-gray leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;