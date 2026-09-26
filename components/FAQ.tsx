import React, { useState } from 'react';
import FadeIn from './FadeIn';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlight?: string;
  icon: 'clock' | 'sparkles' | 'shield' | 'layers' | 'droplet' | 'sun';
}

const faqs: FAQItem[] = [
  {
    id: 'duration',
    category: 'Timeline & Curing',
    question: 'How long does a paver restoration project take?',
    answer: 'Most residential patio, walkway, and driveway restorations are completed in 1 to 2 business days, weather permitting. On Day 1, we perform deep rotary pressure cleaning, stain treatment, and joint preparation. Once the stone and joints are completely dry, we install commercial-grade polymeric sand and apply industrial paver sealer.',
    highlight: 'Foot traffic in 4-6 hours; vehicle parking in 48 hours.',
    icon: 'clock'
  },
  {
    id: 'maintenance',
    category: 'Care & Maintenance',
    question: 'How should I care for my pavers after they are sealed?',
    answer: 'Maintenance is remarkably easy once properly sealed. Simply rinse with a regular garden hose or use a leaf blower to remove seasonal pollen, pine needles, and sand. Avoid harsh acids or wire brushes. During winter in South Jersey, use calcium magnesium acetate (CMA) or pet-safe de-icers rather than rock salt (sodium chloride), which can degrade joint sand.',
    highlight: 'Rinse with fresh water; reseal every 3 to 5 years.',
    icon: 'sparkles'
  },
  {
    id: 'polymeric-sand',
    category: 'Joint Stabilization',
    question: 'Why is polymeric sand essential, and does it stop weeds?',
    answer: 'Traditional loose sand easily washes away with heavy rain, allowing weed roots and ant colonies to take hold. Polymeric sand is infused with specialized polymers that activate with water, curing into an elastomeric, semi-solid joint. It stays flexible enough to handle ground movement while forming an impenetrable barrier against weeds and insects.',
    highlight: 'Locks pavers in place and resists storm washouts.',
    icon: 'layers'
  },
  {
    id: 'slip-resistance',
    category: 'Safety & Finish',
    question: 'Will sealed pavers become slippery when wet?',
    answer: 'No. We exclusively formulate our sealers with micronized anti-skid additives and penetrating silane/siloxane chemistry that binds into the stone rather than creating a hazardous surface film. You get rich color enhancement and deep moisture protection while retaining safe, barefoot-friendly traction around pools, patios, and walkways.',
    highlight: 'Meets and exceeds ASTM wet-traction safety standards.',
    icon: 'shield'
  },
  {
    id: 'stain-removal',
    category: 'Deep Cleaning',
    question: 'Can you eliminate stubborn oil stains, rust, and white haze?',
    answer: 'Yes. Our multi-stage cleaning process targets specific contaminants. We use specialized surfactants to lift vehicle oil and barbecue grease, mineral removers for rust and battery acid, and dedicated efflorescence wash to eliminate the chalky white salt haze that often rises to the surface of unsealed pavers.',
    highlight: 'Custom bio-friendly cleansers tailored to your stone type.',
    icon: 'droplet'
  },
  {
    id: 'coastal-weather',
    category: 'Coastal Durability',
    question: 'Why is paver sealing especially critical in South Jersey?',
    answer: 'Coastal Cape May, Avalon, Stone Harbor, and Wildwood experience severe salt air, relentless ocean humidity, and intense winter freeze-thaw cycles. Unprotected pavers absorb salty moisture that expands when frozen, leading to surface flaking, pitting, and faded colors. Our breathable industrial sealer shields pavers from salt crystallization and UV fading.',
    highlight: 'Engineered specifically for coastal barrier island climates.',
    icon: 'sun'
  }
];

const renderIcon = (type: FAQItem['icon']) => {
  switch (type) {
    case 'clock':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'layers':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'shield':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'droplet':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case 'sun':
      return (
        <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
  }
};

/**
 * Modern FAQ component styled to match the elevated cards of the Testimonials section.
 * Addresses key questions on project duration, maintenance, polymeric sand, and coastal care.
 */
const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Timeline & Curing', 'Care & Maintenance', 'Joint Stabilization', 'Safety & Finish'];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header matching Testimonials layout */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-brand-gold font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-display text-brand-oxford-blue tracking-tight">
              Paver Restoration FAQ
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 mb-5 rounded-full"></div>
            <p className="text-base sm:text-lg text-brand-slate-gray max-w-2xl mx-auto leading-relaxed">
              Clear answers about our process, project timelines, and how to maintain the beauty of your stone for years to come.
            </p>

            {/* Quick Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-oxford-blue text-brand-gold shadow-md'
                      : 'bg-gray-100 text-brand-slate-gray hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Elevated Cards Grid (Matches Testimonials Aesthetic) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredFaqs.map((faq, index) => (
            <FadeIn key={faq.id} delay={index * 100}>
              <article className="bg-gray-50/70 border border-gray-100 p-7 sm:p-8 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
                
                {/* Header Icon + Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-gold/15 transition-all">
                    {renderIcon(faq.icon)}
                  </div>
                  <span className="text-[10px] font-display font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-2.5 py-1 rounded-full border border-brand-gold/15">
                    {faq.category}
                  </span>
                </div>

                {/* Question */}
                <h3 className="font-bold font-display text-brand-oxford-blue text-base sm:text-lg mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                  {faq.question}
                </h3>

                {/* Answer */}
                <p className="text-brand-slate-gray text-sm sm:text-[14.5px] leading-relaxed flex-grow">
                  {faq.answer}
                </p>

                {/* Key Highlight Footer Badge */}
                {faq.highlight && (
                  <div className="pt-4 mt-5 border-t border-gray-200/60 flex items-start gap-2">
                    <span className="text-brand-gold flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-brand-oxford-blue">
                      {faq.highlight}
                    </span>
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Direct Assistance Banner */}
        <FadeIn delay={200}>
          <div className="mt-14 sm:mt-16 bg-gradient-to-r from-brand-oxford-blue to-[#182a4d] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-brand-gold font-display font-bold text-xs uppercase tracking-widest mb-1.5 block">
                Have a unique project or stone type?
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                Speak Directly with Our Paver Restoration Specialists
              </h4>
              <p className="text-sm text-brand-powder-blue/80 mt-1 max-w-xl">
                We provide free on-site consultations throughout Cape May County, Avalon, Stone Harbor, and Wildwood.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-oxford-blue font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-brand-gold-light hover:shadow-brand-gold/25 transition-all text-xs font-display uppercase tracking-wider"
              >
                Request Free Quote
              </a>
              <a
                href="tel:609-408-5000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-gold/40 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-xl text-xs font-display font-semibold uppercase tracking-wider text-white transition-all"
              >
                Call 609-408-5000
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default FAQ;
