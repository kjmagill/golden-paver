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
 * interactive BeforeAfterSlider components. For desktop users, it now includes a modal
 * feature to view a larger version of each slider for a more detailed look.
 */
const Gallery: React.FC = () => {
  // State to manage the currently selected gallery item for the modal view.
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-oxford-blue">Proven Results</h2>
            <p className="text-lg text-brand-slate-gray mt-4 max-w-2xl mx-auto">
              See the dramatic difference a professional restoration can make.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12">
          {galleryItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="flex flex-col items-center">
                <div className="relative w-full">
                  <BeforeAfterSlider 
                    before={item.before} 
                    after={item.after}
                    beforeAlt={item.beforeAlt}
                    afterAlt={item.afterAlt}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-oxford-blue mt-6">{item.title}</h3>
                {/* 
                  This button is displayed below the title on large screens ('lg:inline-flex').
                  This placement creates a clear visual hierarchy for the gallery item card.
                */}
                <button
                  onClick={() => openModal(item)}
                  className="hidden lg:inline-flex items-center gap-2 bg-brand-oxford-blue text-white font-semibold py-2 px-5 rounded-lg shadow-md mt-4 transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 active:translate-y-0 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-bg focus:ring-brand-gold"
                  aria-label={`View larger version of ${item.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  View Larger
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      {/* 
        The Modal component is rendered here. It is controlled by the `selectedItem` state.
        When `selectedItem` is not null, the modal is shown.
      */}
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
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Gallery;