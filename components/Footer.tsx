import React from 'react';

const socialLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}`,
  x: `https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}&text=${encodeURIComponent('Check out the amazing paver restoration work by Golden Paver Restorations!')}`,
  pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}&media=${encodeURIComponent('https://i.postimg.cc/yxn2B8mg/f1.jpg')}&description=${encodeURIComponent('Check out the amazing paver restoration work by Golden Paver Restorations!')}`,
  linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.goldenpaverrestorations.com/')}`,
  email: `mailto:?subject=${encodeURIComponent('Check Out Golden Paver Restorations')}&body=${encodeURIComponent('I found this great paver restoration company, check out their work: https://www.goldenpaverrestorations.com/')}`
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-oxford-blue border-t border-brand-slate-gray/30">
      <div className="container mx-auto px-6 py-8 text-center text-brand-powder-blue">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Spread The Word</h3>
          <div className="flex justify-center items-center space-x-5">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404Z"/>
              </svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.89 6.35 9.32.09-.38.16-.92.16-1.28 0-.42-.06-1.32-.3-2.23-.23-.84-.54-1.81-.54-1.81s-.28-.56-.28-1.37c0-1.28.78-2.23 1.65-2.23.78 0 1.15.59 1.15 1.3 0 .78-.5 1.95-.76 3.04-.21.91.45 1.65 1.36 1.65 1.63 0 2.89-1.73 2.89-4.19 0-2.18-1.55-3.74-3.83-3.74-2.59 0-4.18 1.93-4.18 3.99 0 .78.3.1.65 2.08.07.1.09.18.06.29-.03.1-.17.66-.2.81-.04.18-.15.22-.33.13-1.25-.58-2.03-2.4-2.03-3.88 0-3.15 2.29-5.75 6.34-5.75 3.34 0 5.63 2.4 5.63 5.26 0 3.34-2.1 5.93-5.02 5.93-.98 0-1.91-.5-2.22-1l-.48 1.92c-.22.86-.84 1.95-1.24 2.62C9.27 21.8 10.6 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </a>
            <a href={socialLinks.email} aria-label="Share via Email" className="text-brand-powder-blue hover:text-brand-gold-light transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm17 1.25-7.34 5.39a1.002 1.002 0 0 1-1.32 0L4 5.25V19h16V5.25zM4.52 4l7.48 5.5 7.48-5.5H4.52z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-brand-slate-gray/30 pt-6 mt-6">
          <div className="mb-4">
            <a href="tel:609-408-5000" className="inline-flex items-center gap-2 text-lg font-semibold hover:text-brand-gold-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>609-408-5000</span>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Golden Paver Restorations, LLC. All Rights Reserved.</p>
          <p className="text-sm text-brand-slate-gray mt-1 flex items-center justify-center flex-wrap gap-x-1.5 gap-y-1">
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