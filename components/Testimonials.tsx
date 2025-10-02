import React from 'react';

const testimonials = [
    {
        quote: "Golden Paver Restorations completely transformed our backyard patio. It looks brand new! The team was professional, efficient, and the results exceeded our expectations.",
        name: "Sarah & Tom L.",
        location: "Avalon"
    },
    {
        quote: "Our driveway was faded and full of weeds. After their restoration service, the color is vibrant again and the polymeric sand has kept it weed-free. Highly recommend!",
        name: "Michael B.",
        location: "Wildwood Crest"
    },
    {
        quote: "I was considering replacing my entire walkway, but they restored it for a fraction of the cost. The quality of work is outstanding. Thank you!",
        name: "Jennifer P.",
        location: "W. Cape May"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-display text-brand-oxford-blue">What Our Clients Say</h2>
                    <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
                        We take pride in our work, and our clients' satisfaction is our greatest reward.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brand-bg border border-gray-200 p-8 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2">
                            <p className="text-brand-slate-gray mb-6">"{testimonial.quote}"</p>
                            <div className="text-right">
                                <p className="font-bold font-display text-brand-oxford-blue">{testimonial.name}</p>
                                <p className="text-sm text-brand-slate-gray">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;