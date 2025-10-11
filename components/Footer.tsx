import React from 'react';
import Logo from './Logo';

// This object generates the full URLs for social media sharing.
// `encodeURIComponent` is used to ensure that the URLs, text, and descriptions are correctly formatted
// for use as URL parameters, preventing issues with special characters.
const socialLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}`,
  x: `https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}&text=${encodeURIComponent('Check out the amazing paver restoration work by Golden Paver Restorations!')}`,
  pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}&media=${encodeURIComponent('https://i.postimg.cc/3RxRYdp2/j2.jpg')}&description=${encodeURIComponent('Check out the amazing paver restoration work by Golden Paver Restorations!')}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}`,
  email: `mailto:?subject=${encodeURIComponent('Check Out Golden Paver Restorations')}&body=${encodeURIComponent('I found this great paver restoration company, check out their work: https://www.goldenpaverrestorations.com/')}`
};

const serviceAreas = [
    'Avalon', 'Stone Harbor', 'Cape May',
    'The Wildwoods', 'Sea Isle City', 'Ocean City',
    'Cape May CH', 'Erma'
];

/**
 * The Footer component contains contact information, social sharing links,
 * and copyright/credit details for the website in a new, visually balanced
 * centered layout.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-oxford-blue text-brand-powder-blue border-t border-brand-slate-gray/30">
      <div className="container mx-auto px-6 py-12 text-center">

        {/* Brand & Tagline */}
        <a href="index.html" className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 text-brand-gold-light hover:text-brand-gold transition-colors">
          <Logo className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
          <span className="font-brand font-bold text-lg sm:text-xl tracking-wider uppercase">
            Golden Paver<span className="hidden sm:inline"> Restorations</span>
          </span>
        </a>
        <p className="text-brand-slate-gray max-w-md mx-auto">
          The golden standard in paver cleaning, sealing, and restoration for South Jersey.
        </p>

        {/* Contact Info */}
        <div className="my-8">
           <a href="tel:609-849-8869" className="inline-flex items-center gap-2 font-semibold hover:text-brand-gold-light transition-colors text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>609-849-8869</span>
            </a>
        </div>

        {/* Service Area */}
        <div className="my-8">
          <h3 className="text-lg font-bold text-white mb-4">Proudly Serving Cape May County</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-2 max-w-lg mx-auto text-brand-slate-gray">
            {serviceAreas.map(area => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        
        {/* Social Sharing */}
        <div className="my-8">
          <h3 className="text-lg font-bold text-white mb-4">Spread the Word</h3>
          <div className="flex justify-center items-center space-x-5">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404Z"/>
              </svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-.979 0-1.916-.523-2.228-1.148l-.622 2.353c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            <a href={socialLinks.email} aria-label="Share via Email" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright and Credits */}
        <div className="border-t border-brand-slate-gray/30 pt-6 mt-6">
            <p className="text-sm text-brand-slate-gray mb-2">
                &copy; {new Date().getFullYear()} Golden Paver Restorations, LLC. All Rights Reserved.
            </p>
            <p className="text-sm text-brand-slate-gray flex items-center justify-center flex-wrap gap-x-1.5 gap-y-1">
              <span>Designed by</span>
              <a href="https://kjmagill.com" className="hover:text-brand-gold-light transition-colors">
                KJ Magill
              </a>
              <span>|</span>
              <a href="https://capemaywebdesign.com" className="hover:text-brand-gold-light transition-colors">
                capemaywebdesign.com
              </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;