import React from 'react';
import FadeIn from './FadeIn';

const BrushIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const RepairIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.87-5.87m0 0L11.42 15.17m5.87-5.87L11.42 3.5l-5.87 5.87m5.87 5.87-5.87-5.87" />
    </svg>
);


const services = [
  {
    icon: <BrushIcon />,
    title: 'Cleaning & Sealing',
    description: 'Deep cleaning to remove dirt, grime, and stains, followed by a high-quality sealant to protect and enhance your pavers.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Polymeric Sanding',
    description: 'We replace old joint sand with new polymeric sand to prevent weed growth, resist erosion, and lock your pavers in place.'
  },
  {
    icon: <RepairIcon />,
    title: 'Repair & Restoration',
    description: 'Lifting and re-leveling sunken pavers, replacing broken ones, and restoring the structural integrity of your pavement.'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-oxford-blue">Our Services</h2>
            <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
              We offer a comprehensive suite of services to make your hardscapes look brand new.
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