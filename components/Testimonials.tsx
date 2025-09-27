import React from 'react';

const QuoteIcon = () => (
    <svg className="w-12 h-12 text-brand-gold-light opacity-20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 10.5C6.5 12.433 8.067 14 10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5ZM20 14C21.933 14 23.5 12.433 23.5 10.5C23.5 8.567 21.933 7 20 7C18.067 7 16.5 8.567 16.5 10.5C16.5 12.433 18.067 14 20 14Z" />
    </svg>
);


const testimonials = [
    {
        quote: "Golden Paver Restorations completely transformed our backyard patio. It looks brand new! The team was professional, efficient, and the results exceeded our expectations.",
        name: "Sarah & Tom L.",
        location: "Pleasantville"
    },
    {
        quote: "Our driveway was faded and full of weeds. After their restoration service, the color is vibrant again and the polymeric sand has kept it weed-free. Highly recommend!",
        name: "Michael B.",
        location: "Oak Brook"
    },
    {
        quote: "I was considering replacing my entire walkway, but they restored it for a fraction of the cost. The quality of work is outstanding. Thank you!",
        name: "Jennifer P.",
        location: "Sunnyvale"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-display text-brand-blue-dark">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        We take pride in our work, and our clients' satisfaction is our greatest reward.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brand-cream p-8 rounded-lg shadow-lg relative transform transition-transform hover:-translate-y-2">
                            <QuoteIcon />
                            <p className="text-brand-blue-dark mb-6 relative z-10">"{testimonial.quote}"</p>
                            <div className="text-right">
                                <p className="font-bold font-display text-brand-blue-dark">{testimonial.name}</p>
                                <p className="text-sm text-brand-blue">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
