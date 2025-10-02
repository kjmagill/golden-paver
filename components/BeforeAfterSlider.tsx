import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleRef.current?.focus();
  }, []);
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    handleRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMove]);

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
      className="relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl shadow-2xl group"
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after image comparison slider"
    >
      {/* Before Image */}
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      
      {/* After Image Container (clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      </div>
      
      {/* Slider Handle */}
      <div 
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white/70 cursor-ew-resize backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-gold group-focus:bg-brand-gold outline-none"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="presentation" // The main container has the slider role
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:border-brand-gold group-focus:scale-110 group-focus:border-brand-gold">
          <svg className="w-6 h-6 text-brand-oxford-blue/80 transition-colors duration-300 group-hover:text-brand-oxford-blue group-focus:text-brand-oxford-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
          </svg>
        </div>
      </div>
       
       {/* Labels */}
       <div className="absolute top-3 left-3 bg-brand-oxford-blue bg-opacity-70 text-white text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-sm pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 focus-within:opacity-0">BEFORE</div>
       <div className="absolute top-3 right-3 bg-brand-oxford-blue bg-opacity-70 text-white text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-sm pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 focus-within:opacity-0">AFTER</div>
    </div>
  );
};

export default BeforeAfterSlider;