import React, { useState, useEffect, useRef, ReactNode } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeIn from './FadeIn';

// --- Modal Component Definition ---
// The Modal component is defined here to be self-contained within the Gallery component file.

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * A reusable and accessible Modal component.
 * It displays content in a focused overlay, supports keyboard navigation (Escape key, focus trapping),
 * and can be closed by clicking the background overlay or the close button.
 */
const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Effect to handle keyboard events (Escape key) for closing the modal.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when the modal opens for accessibility.
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  // Effect to trap focus within the modal for accessibility.
  useEffect(() => {
    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !modalRef.current) return;
      
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) { // Shift+Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    if (show) {
      document.addEventListener('keydown', handleFocusTrap);
    }
    
    return () => {
      document.removeEventListener('keydown', handleFocusTrap);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    // The main modal container with ARIA roles for accessibility.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-brand-oxford-blue/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div
        ref={modalRef}
        className={`relative z-10 w-full max-w-5xl transition-all duration-300 ease-in-out ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {children}

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-20 p-2 text-white bg-brand-oxford-blue/60 rounded-full hover:bg-brand-oxford-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-brand-gold"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};


interface GalleryItem {
  before: string;
  after: string;
  title: string;
  beforeAlt: string;
  afterAlt: string;
}

const galleryItems: GalleryItem[] = [
  { 
    before: 'https://i.postimg.cc/yxn2B8mg/f1.jpg', 
    after: 'https://i.postimg.cc/Wp7B0XQC/f2.jpg', 
    title: 'Patio Transformation',
    beforeAlt: 'A beautifully clean and vibrant brick paver patio after sealing service in Stone Harbor, NJ.',
    afterAlt: 'A grimy, moss-covered brick paver patio before professional pressure washing and restoration.'
  },
  { 
    before: 'https://i.ibb.co/nND7yd90/brick-before.jpg', 
    after: 'https://i.ibb.co/8gKKpn14/brick-after.jpg', 
    title: 'Driveway Revival',
    beforeAlt: 'A faded and stained paver driveway with weeds growing in the joints before restoration.',
    afterAlt: 'A revived paver driveway with rich color and clean joint lines after polymeric sanding and sealing.'
  },
  { 
    before: 'https://i.postimg.cc/rFMtPFZh/h1.jpg', 
    after: 'https://i.postimg.cc/YCSLtDHB/h2.jpg', 
    title: 'Walkway Restoration',
    beforeAlt: 'A pristine and welcoming paver walkway, looking brand new after a deep clean and seal restoration.',
    afterAlt: 'An old paver walkway, discolored and covered in dirt before cleaning services.'
  },
];

/**
 * The Gallery component showcases the company's work using a series of
 * interactive BeforeAfterSlider components. For desktop users, it now includes a modal
 * feature to view a larger version of each slider for a more detailed look.
 */
const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-brand-gold font-display font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Our Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-oxford-blue tracking-tight">Proven Results</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
            <p className="text-lg text-brand-slate-gray mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore our recent transformations across South Jersey and witness the dramatic difference our expertise makes.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">
          {galleryItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div className="group flex flex-col h-full">
                <div 
                  className="relative cursor-zoom-in overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                  onClick={() => openModal(item)}
                >
                  <BeforeAfterSlider 
                    before={item.before} 
                    after={item.after}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-oxford-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-oxford-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold font-display text-brand-oxford-blue mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-brand-gold text-sm font-semibold uppercase tracking-wider">
                    <span>Cape May County, NJ</span>
                    <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
                    <span>Restoration</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <Modal show={!!selectedItem} onClose={closeModal}>
        {selectedItem && (
          <div className="w-full max-w-4xl p-2 sm:p-4">
            <BeforeAfterSlider
                before={selectedItem.before}
                after={selectedItem.after}
                beforeAlt={selectedItem.beforeAlt}
                afterAlt={selectedItem.afterAlt}
                loading="eager"
            />
            <div className="bg-brand-oxford-blue/90 backdrop-blur-md p-6 mt-4 rounded-xl border border-white/10 text-center">
               <h4 className="text-xl font-bold font-display text-white mb-1">{selectedItem.title}</h4>
               <p className="text-brand-powder-blue text-sm">Full deep clean, polymeric sanding, and premium seal application.</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Gallery;