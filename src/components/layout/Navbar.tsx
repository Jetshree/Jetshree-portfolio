'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Add a small delay so the user sees the menu starting to close
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80; // Offset for fixed header
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end md:justify-center items-center relative h-12">

        {/* Desktop Nav */}
        <div className={`hidden md:flex gap-8 px-8 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass bg-background/50' : ''}`}>
           {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href} 
               className="text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors"
             >
               {link.name}
             </a>
           ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          suppressHydrationWarning
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303] relative z-[999] mt-4 mx-6 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-center py-12 gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black uppercase tracking-widest text-white hover:text-electric-blue w-full text-center py-4 cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
