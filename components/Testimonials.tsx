import React from 'react';
import FadeIn from './FadeIn';

const testimonials = [
    {
        quote: "Golden Paver Restorations completely transformed our backyard patio. It looks brand new! The team was professional, efficient, and the results exceeded our expectations.",
        name: "Sarah & Tom L.",
        location: "Avalon, NJ"
    },
    {
        quote: "Our driveway was faded and full of weeds. After their restoration service, the color is vibrant again and the polymeric sand has kept it weed-free. Highly recommend!",
        name: "Michael B.",
        location: "Erma, NJ"
    },
    {
        quote: "I was considering replacing my entire walkway, but they restored it for a fraction of the cost. The quality of work is outstanding. Thank you!",
        name: "Jennifer P.",
        location: "W. Cape May, NJ"
    }
];

/**
 * The Testimonials component displays quotes from satisfied clients to build trust and social proof.
 * Each testimonial is presented in a card, creating a clean and readable layout.
 */
const Testimonials: React.FC = () => {
    return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-28 bg-gray-50/60 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-brand-gold font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 block">Client Reviews</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-display text-brand-oxford-blue tracking-tight">Trusted by Your Neighbors</h2>
                    <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 mb-5 rounded-full"></div>
                    <p className="text-base sm:text-lg text-brand-slate-gray max-w-2xl mx-auto leading-relaxed">
                        We take pride in our work, and our clients' satisfaction is our greatest reward.
                    </p>
                </div>
            </FadeIn>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                    <FadeIn key={index} delay={index * 150}>
                        <figure className="bg-white border border-gray-100 p-7 sm:p-8 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                            <div className="flex text-brand-gold gap-1 mb-4" aria-label="5 stars rating">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="flex-grow">
                                <p className="text-brand-slate-gray mb-6 text-sm sm:text-base leading-relaxed italic">"{testimonial.quote}"</p>
                            </blockquote>
                            <figcaption className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                <div>
                                    <p className="font-bold font-display text-brand-oxford-blue text-sm sm:text-base">{testimonial.name}</p>
                                    <p className="text-xs text-brand-slate-gray mt-0.5">{testimonial.location}</p>
                                </div>
                                <span className="text-[10px] font-semibold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-2 py-0.5 rounded">Verified</span>
                            </figcaption>
                        </figure>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Testimonials;