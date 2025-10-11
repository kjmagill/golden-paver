import React from 'react';
import FadeIn from './FadeIn';

// NEW: A "Sparkles" icon to represent a clean, "like-new" finish.
const CleaningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

// NEW: A simplified icon of a push brush to represent the Polymeric Sanding process.
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


// This icon cleverly represents a paver extractor, a tool specific to paver repair.
const PaverExtractorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.87-5.87m0 0L11.42 15.17m5.87-5.87L11.42 3.5l-5.87 5.87m5.87 5.87-5.87-5.87" />
    </svg>
);


const services = [
  {
    icon: <CleaningIcon />,
    title: 'Cleaning & Sealing',
    description: 'Deep cleaning to remove dirt, grime, and stains, followed by a high-quality sealant to protect and enhance your pavers.'
  },
  {
    icon: <SandingIcon />,
    title: 'Polymeric Sanding',
    description: 'We replace old joint sand with new polymeric sand to prevent weed growth, resist erosion, and lock your pavers in place.'
  },
  {
    icon: <PaverExtractorIcon />,
    title: 'Repair & Restoration',
    description: 'Lifting and re-leveling sunken pavers, replacing broken ones, and restoring the structural integrity of your pavement.'
  },
];

/**
 * The Services component displays the main offerings of the business.
 * It uses a grid layout to present each service in a clear and visually appealing card format,
 * with custom icons to represent each category.
 */
const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-oxford-blue">Our Services</h2>
            <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
              We offer a comprehensive suite of services in Cape May County to make your hardscapes look brand new.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            // The `delay` prop creates a staggered animation effect, where each card fades in one after another.
            <FadeIn key={index} delay={index * 150}>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2 group h-full">
                <div className="flex justify-center mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-6">{service.icon}</div>
                <h3 className="text-2xl font-bold font-display text-brand-oxford-blue mb-2">{service.title}</h3>
                <p className="text-brand-slate-gray">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;