import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-oxford-blue border-t border-brand-slate-gray/30">
      <div className="container mx-auto px-6 py-6 text-center text-brand-powder-blue">
        <p>&copy; {new Date().getFullYear()} Golden Paver Restorations. All Rights Reserved.</p>
        <p className="text-sm text-brand-slate-gray mt-1 flex items-center justify-center space-x-1.5">
            <span>Made with</span>
            <img 
              className="emoji" 
              alt="heart" 
              height="16" 
              width="16" 
              src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" 
            /> 
            <span>by</span>
            <a href="https://kjmagill.com" className="hover:text-brand-gold-light transition-colors">
              KJ Magill
            </a>
            <span>|</span>
            <a href="https://capemaywebdesign.com" className="hover:text-brand-gold-light transition-colors">
              capemaywebdesign.com
            </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;