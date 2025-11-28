import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoute } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'Work', path: PageRoute.WORK },
    { name: 'Services', path: PageRoute.SERVICES },
    { name: 'Blog', path: PageRoute.BLOG },
    { name: 'About', path: PageRoute.ABOUT },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen ? 'bg-primary/90 backdrop-blur-xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
             <img 
                src="https://flowconsulting.ng/wp-content/uploads/2025/01/Group-43867.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto object-contain"
             />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-muted hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                  <span className="bg-secondary text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(237,244,250,0.2)] hover:shadow-[0_0_20px_rgba(255,111,59,0.4)]">
                      Start a Project
                  </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-secondary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-black bg-accent'
                      : 'text-muted hover:text-secondary hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
               <Link to="/contact" className="block px-4 py-3 rounded-xl text-base font-medium text-black bg-secondary hover:bg-accent mt-4 text-center transition-colors">
                  Start a Project
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;