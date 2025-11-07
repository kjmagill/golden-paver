import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

/**
 * A placeholder component displayed when an image fails to load.
 */
const ImagePlaceholder: React.FC<{ text: string }> = ({ text }) => (
  <div className="absolute inset-0 w-full h-full bg-gray-200 flex flex-col items-center justify-center text-brand-slate-gray p-4 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="text-sm font-semibold">Image Unavailable</p>
    <p className="text-xs text-gray-500">{text} image failed to load.</p>
  </div>
);


const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  before, 
  after, 
  beforeAlt = 'Before restoration', 
  afterAlt = 'After restoration',
  loading = 'lazy',
  fetchpriority = 'auto'
}) => {
  // `sliderPosition` stores the handle's position as a percentage (0-100).
  const [sliderPosition, setSliderPosition] = useState(50);
  // `isDragging` is a flag to track whether the user is actively dragging the handle.
  const [isDragging, setIsDragging] = useState(false);
  // State to track image loading errors.
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // When the image sources change, reset the error states.
  useEffect(() => {
    setBeforeError(false);
    setAfterError(false);
  }, [before, after]);

  /**
   * Calculates and sets the slider position based on the client's X coordinate.
   * This is a useCallback to memoize the function, preventing re-creation on every render.
   */
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate the horizontal position within the container.
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    // Convert the position to a percentage.
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection while dragging
    setIsDragging(true);
    handleRef.current?.focus(); // Focus the handle for keyboard events
  }, []);
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    handleRef.current?.focus();
  }, []);

  // Effect to handle the dragging logic by adding global event listeners.
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    // Only move the slider if dragging is active.
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };
    
    // Add listeners to the window to capture movement anywhere on the page.
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    // Cleanup function: remove the event listeners when the component unmounts or `isDragging` changes.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMove]);

  /**
   * Handles keyboard navigation for accessibility.
   * Allows moving the slider with left and right arrow keys.
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(pos => Math.max(0, pos - 2));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(pos => Math.min(100, pos + 2));
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl shadow-2xl group bg-gray-100"
      // ARIA attributes for screen readers to understand this as a slider.
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after image comparison slider"
    >
      {/* Before Image (bottom layer) */}
      {beforeError ? (
        <ImagePlaceholder text="Before" />
      ) : (
        <img 
          src={before} 
          alt={beforeAlt} 
          className="absolute inset-0 w-full h-full object-cover" 
          draggable="false" 
          loading={loading} 
          decoding="async" 
          fetchPriority={fetchpriority} 
          width="800" height="600" 
          onError={() => setBeforeError(true)}
        />
      )}
      
      {/* After Image Container (top layer, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        // The `clipPath` CSS property creates the reveal effect.
        // It defines a rectangular clipping mask that is resized based on the slider's position.
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {afterError ? (
          <ImagePlaceholder text="After" />
        ) : (
          <img 
            src={after} 
            alt={afterAlt} 
            className="absolute inset-0 w-full h-full object-cover" 
            draggable="false" 
            loading={loading} 
            decoding="async" 
            fetchPriority={fetchpriority} 
            width="800" height="600" 
            onError={() => setAfterError(true)}
          />
        )}
      </div>
      
      {/* Slider controls are only rendered if both images load successfully. */}
      {!beforeError && !afterError && (
        <>
          {/* Slider Handle */}
          <div 
            ref={handleRef}
            className={`absolute top-0 bottom-0 w-1 bg-white/70 cursor-ew-resize backdrop-blur-sm transition-colors duration-300 outline-none group-focus:bg-brand-gold-light ${isDragging ? 'bg-brand-gold-light' : 'group-hover:bg-brand-gold-light'}`}
            // The handle's `left` position is dynamically updated based on the state.
            style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            tabIndex={0} // Makes the handle focusable.
            role="presentation" // The main container has the slider role
          >
            <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center shadow-lg border-2 border-white/50 transition-all duration-300 group-focus:scale-110 group-focus:border-brand-gold-light ${isDragging ? 'border-brand-gold-light' : 'group-hover:border-brand-gold-light'}`}>
              <svg className={`w-5 h-5 sm:w-6 sm:w-6 text-brand-oxford-blue/80 transition-colors duration-300 group-focus:text-brand-oxford-blue ${isDragging ? 'text-brand-oxford-blue' : 'group-hover:text-brand-oxford-blue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
              </svg>
            </div>
          </div>
          
          {/* Labels */}
          <div aria-hidden="true" className={`absolute top-3 left-3 bg-brand-oxford-blue bg-opacity-70 text-white text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-sm pointer-events-none transition-opacity duration-300 focus-within:opacity-0 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>BEFORE</div>
          <div aria-hidden="true" className={`absolute top-3 right-3 bg-brand-oxford-blue bg-opacity-70 text-white text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-sm pointer-events-none transition-opacity duration-300 focus-within:opacity-0 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>AFTER</div>
        </>
      )}
    </div>
  );
};

export default BeforeAfterSlider;