import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeIn from './FadeIn';

const galleryItems = [
  { 
    before: 'https://i.postimg.cc/Wp7B0XQC/f2.jpg', 
    after: 'https://i.postimg.cc/yxn2B8mg/f1.jpg', 
    title: 'Patio Transformation',
    beforeAlt: 'A grimy, moss-covered brick paver patio before professional pressure washing and restoration.',
    afterAlt: 'A beautifully clean and vibrant brick paver patio after sealing service in Stone Harbor, NJ.'
  },
  { 
    before: 'https://i.postimg.cc/3RxRYdp2/j2.jpg', 
    after: 'https://i.postimg.cc/9MQMCrTr/j1.jpg', 
    title: 'Driveway Revival',
    beforeAlt: 'A faded and stained paver driveway with weeds growing in the joints before restoration.',
    afterAlt: 'A revived paver driveway with rich color and clean joint lines after polymeric sanding and sealing.'
  },
  { 
    before: 'https://i.postimg.cc/YCSLtDHB/h2.jpg', 
    after: 'https://i.postimg.cc/rFMtPFZh/h1.jpg', 
    title: 'Walkway Restoration',
    beforeAlt: 'An old paver walkway, discolored and covered in dirt before cleaning services.',
    afterAlt: 'A pristine and welcoming paver walkway, looking brand new after a deep clean and seal restoration.'
  },
];

/**
 * The Gallery component showcases the company's work using a series of
 * interactive BeforeAfterSlider components. It provides visual proof of the
 * quality and impact of their services.
 */
const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-oxford-blue">Proven Results</h2>
            <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
              See the dramatic difference our professional restoration can make.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12">
          {galleryItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="flex flex-col items-center">
                <BeforeAfterSlider 
                  before={item.before} 
                  after={item.after}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                  loading="lazy"
                />
                <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-oxford-blue mt-4">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;