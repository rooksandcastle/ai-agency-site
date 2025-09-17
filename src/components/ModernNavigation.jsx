import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hoverScale } from './AnimationWrapper';

const ModernNavigation = ({ onCalendlyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'process', 'about', 'pricing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const location = useLocation();

  // Main navigation items that route to different pages
  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/what-we-think', label: 'What We Think' },
    { path: '/who-we-are', label: 'Who We Are' },
    { path: '/what-we-do', label: 'What We Do' }
  ];

  // Homepage section navigation items
  const sectionNavItems = [
    { id: 'about', label: 'About Us' },
    { id: 'pricing', label: 'Pricing' }
  ];

  // Direct navigation items for homepage sections
  const directNavItems = [
    { id: 'contact', label: 'Contact' },
    { id: 'assessment', label: 'Book Free Consultation' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? 'bg-cyber-black/95 backdrop-blur-xl border-b border-green-500/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-cyber-black/80 via-cyber-black/40 to-transparent backdrop-blur-sm py-6'
      }`}
      style={{ zIndex: isMobileMenuOpen ? 9997 : 50 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Brand Text Only */}
          <motion.div
            className="cursor-pointer group"
            {...hoverScale}
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-white font-bold text-2xl tracking-tight leading-none hover:text-green-400 transition-colors duration-300">
              Rooks & Castle
            </h1>
            <p className="text-green-400 text-sm font-medium tracking-wide">
              Ethical AI Consulting
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Main Nav Items with Router Links */}
            <div className="flex items-center space-x-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-600"></div>

            {/* Section Nav Items */}
            <div className="flex items-center space-x-4">
              {sectionNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`px-3 py-2 font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => {
                    if (item.id === 'pricing') {
                      // For pricing, trigger Calendly modal since there's no pricing page
                      if (onCalendlyClick) {
                        onCalendlyClick();
                      }
                    } else if (location.pathname !== '/') {
                      // If not on homepage, navigate to homepage first then scroll
                      navigate(`/#${item.id}`);
                      setTimeout(() => scrollToSection(item.id), 100);
                    } else {
                      // If on homepage, scroll to section
                      scrollToSection(item.id);
                    }
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.id === 'pricing' ? 'Pricing' : item.label}
                </motion.button>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.button
              className="px-4 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
              onClick={() => {
                if (onCalendlyClick) {
                  onCalendlyClick();
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 9998
                }}
              />

              {/* Menu Content */}
              <motion.div
                id="mobile-menu"
                className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 lg:hidden overflow-y-auto shadow-2xl"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 9999
                }}
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div>
                    <h2 className="text-white font-bold text-lg">Rooks & Castle</h2>
                    <p className="text-green-400 text-sm">Navigation Menu</p>
                  </div>
                  <motion.button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Primary Navigation Cards */}
                <div className="p-6 space-y-4">
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>

                  {/* Navigation Cards */}
                  {mainNavItems.map((item, idx) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`w-full p-5 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 rounded-2xl text-left hover:from-green-500/10 hover:to-green-400/10 hover:border-green-500/50 transition-all duration-300 group ${
                          location.pathname === item.path ? 'border-green-500/50 bg-green-500/5' : ''
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">
                            {item.path === '/' ? '🏠' :
                             item.path === '/what-we-think' ? '🧠' :
                             item.path === '/who-we-are' ? '👥' :
                             '🛠️'}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg transition-colors ${
                              location.pathname === item.path ? 'text-green-400' : 'text-white group-hover:text-green-400'
                            }`}>
                              {item.label}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {item.path === '/' ? 'Main homepage with all sections' :
                               item.path === '/what-we-think' ? 'Our insights and thought leadership' :
                               item.path === '/who-we-are' ? 'Our story and team' :
                               'Our services and offerings'}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    </Link>
                  ))}

                  {/* Section Navigation Cards */}
                  {sectionNavItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      className={`w-full p-5 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 rounded-2xl text-left hover:from-green-500/10 hover:to-green-400/10 hover:border-green-500/50 transition-all duration-300 group cursor-pointer ${
                        activeSection === item.id ? 'border-green-500/50 bg-green-500/5' : ''
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (mainNavItems.length + idx) * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (item.id === 'pricing') {
                          // For pricing, trigger Calendly modal
                          if (onCalendlyClick) {
                            onCalendlyClick();
                          }
                        } else if (location.pathname !== '/') {
                          // If not on homepage, navigate to homepage first then scroll
                          navigate(`/#${item.id}`);
                          setTimeout(() => scrollToSection(item.id), 100);
                        } else {
                          // If on homepage, scroll to section
                          scrollToSection(item.id);
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">
                          {item.id === 'about' ? '👥' : '💰'}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold text-lg transition-colors ${
                            activeSection === item.id ? 'text-green-400' : 'text-white group-hover:text-green-400'
                          }`}>
                            {item.id === 'pricing' ? 'Get Pricing' : item.label}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {item.id === 'about' ? 'Our story and team' : 'Book consultation for pricing'}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="px-6 pb-6">
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Quick Actions</h3>

                  <div className="space-y-3">
                    <motion.button
                      className="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 text-black font-bold rounded-xl hover:from-green-400 hover:to-green-500 transition-all duration-300 flex items-center justify-between"
                      onClick={() => {
                        if (onCalendlyClick) {
                          onCalendlyClick();
                        } else if (location.pathname !== '/') {
                          // If not on homepage, navigate to homepage first then scroll
                          navigate('/#assessment');
                          setTimeout(() => scrollToSection('assessment'), 100);
                        } else {
                          // If on homepage, scroll to section
                          scrollToSection('assessment');
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center space-x-3">
                        <span>📅</span>
                        <span>Book Free Consultation</span>
                      </span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>

                    <motion.button
                      className="w-full p-4 bg-gray-800/50 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700/50 hover:border-green-500/50 transition-all duration-300 flex items-center justify-between"
                      onClick={() => {
                        if (location.pathname !== '/') {
                          // If not on homepage, navigate to homepage first then scroll
                          window.location.href = '/#contact';
                        } else {
                          // If on homepage, scroll to section
                          scrollToSection('contact');
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center space-x-3">
                        <span>💬</span>
                        <span>Contact Us</span>
                      </span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="border-t border-gray-700 p-6 mt-auto">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Ready to transform your business?</p>
                    <p className="text-green-400 font-semibold">rooksandcastle101@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default ModernNavigation;