import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Golden Paver Restorations Logo"
    >
      <defs>
        <filter id="paverTexture">
          {/* Create a noisy, stone-like texture */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.3" 
            numOctaves="2" 
            result="turbulence" 
            seed="1"
          />
          {/* Use the noise to displace the original shape, creating a rough surface */}
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="turbulence" 
            scale="1.5" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </defs>
      {/* Apply the texture filter to the group of paver shapes */}
      <g fill="currentColor" filter="url(#paverTexture)">
        {/* Adjusted rectangles for slightly more spacing */}
        <rect x="0" y="0" width="27" height="27" rx="4" />
        <rect x="30" y="0" width="70" height="27" rx="4" />
        <rect x="0" y="30" width="58" height="32" rx="4" />
        <rect x="61" y="30" width="39" height="70" rx="4" />
        <rect x="0" y="65" width="27" height="35" rx="4" />
        <rect x="30" y="65" width="28" height="35" rx="4" />
      </g>
    </svg>
  );
};

export default Logo;
