
import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);


  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] select-none overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
      </div>
      <div 
        className="absolute top-0 bottom-0 bg-white w-1 cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
        </div>
      </div>
       <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
       <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
    </div>
  );
};

export default BeforeAfterSlider;
