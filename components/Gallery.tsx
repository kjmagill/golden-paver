import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const galleryItems = [
  { before: 'https://i.postimg.cc/Wp7B0XQC/f2.jpg', after: 'https://i.postimg.cc/yxn2B8mg/f1.jpg', title: 'Patio Transformation' },
  { before: 'https://i.postimg.cc/3RxRYdp2/j2.jpg', after: 'https://i.postimg.cc/9MQMCrTr/j1.jpg', title: 'Driveway Revival' },
  { before: 'https://i.postimg.cc/YCSLtDHB/h2.jpg', after: 'https://i.postimg.cc/rFMtPFZh/h1.jpg', title: 'Walkway Restoration' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-brand-oxford-blue">Our Work in Action</h2>
          <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
            See the dramatic difference our professional restoration can make.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <BeforeAfterSlider before={item.before} after={item.after} />
              <h3 className="text-2xl font-bold font-display text-brand-oxford-blue mt-4">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;