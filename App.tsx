import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

/**
 * The main application component.
 * It serves as the root of the component tree, assembling the page layout
 * by composing all the major sections: Header, Hero, Services, etc.
 */
const App: React.FC = () => {
  // useEffect hook to manage the canonical URL for SEO.
  useEffect(() => {
    /**
     * Sets the canonical URL for the page.
     * It prioritizes the URL from `metadata.json` and falls back to the current
     * window location if the metadata can't be fetched or doesn't contain a canonical URL.
     * This ensures the correct URL is specified for SEO, even on initial load.
     */
    const setCanonicalUrl = async () => {
      // Default to the current page's URL as a fallback.
      let url = window.location.href; 
      
      try {
        const response = await fetch('/metadata.json');
        if (response.ok) {
          const meta = await response.json();
          // If a canonical URL is specified in the metadata, use it.
          if (meta.canonicalUrl) {
            url = meta.canonicalUrl;
          }
        }
      } catch (error) {
        // If metadata can't be fetched, the fallback to window.location.href is used.
        console.error('Could not fetch metadata.json for canonical URL:', error);
      }
      
      // Attempt to find an existing canonical link tag, which is pre-rendered in index.html.
      let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

      // If for some reason it doesn't exist, create it and append it to the head.
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }

      // Set the href of the canonical link tag.
      // This ensures the most accurate URL is used, overriding any static values.
      canonicalLink.href = url;
    };
    
    setCanonicalUrl();

  }, []); // The empty dependency array ensures this effect runs only once after initial render.

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
