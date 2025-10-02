import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Golden Paver Restorations Logo"
    >
      {/* 
        The `<defs>` element is used to define graphical objects that can be reused.
        Here, we define an SVG filter that will be applied to the paver shapes.
      */}
      <defs>
        <filter id="paverTexture">
          {/* 
            `feTurbulence` creates an image using the Perlin turbulence function.
            This generates a random, cloud-like noise pattern which forms the basis of our texture.
            - `baseFrequency` controls how "zoomed in" the noise is.
            - `numOctaves` adds more detail and complexity to the noise.
          */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.3" 
            numOctaves="2" 
            result="turbulence" 
            seed="1"
          />
          {/*
            `feDisplacementMap` uses the pixel values from one image (the noise from `in2`)
            to spatially displace the pixels of another image (the paver shapes from `in`).
            This creates a warped, uneven surface, giving the flat shapes a rough, stone-like texture.
            - `scale` controls the intensity of the displacement effect.
          */}
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
        {/* These rectangles represent the individual pavers in the logo. */}
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