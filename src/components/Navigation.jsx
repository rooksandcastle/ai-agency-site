import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navigation = ({ onCalendlyClick, onWhatsAppClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'roi-calculator', label: 'ROI Calculator', href: '#roi-calculator' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for nav bar styling
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id.replace('#', '')));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('#')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-green-gradient rounded-xl flex items-center justify-center shadow-lg shadow-premium-green/30">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-lg font-bold text-text-primary">AI Front Desk</div>
                <div className="text-xs text-text-tertiary -mt-0.5">24/7 Call Capture</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-premium-green bg-premium-green/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-brand-surface/50'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                onClick={onCalendlyClick}
                className="px-6 py-2.5 bg-green-gradient text-black font-semibold rounded-xl hover:shadow-green-lg transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4" />
                Book Free Audit
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-brand-surface border border-brand-border text-text-primary hover:border-premium-green/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-green-gradient"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-20 right-6 w-80 max-w-[calc(100vw-3rem)] bg-brand-surface/98 backdrop-blur-xl border border-brand-border rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, x: 100, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Elegant gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-green-gradient"></div>

              <div className="p-6">
                {/* Navigation Links */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-premium-green bg-premium-green/10 border border-premium-green/30'
                          : 'text-text-primary hover:bg-brand-bg border border-transparent'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-6 border-t border-brand-border">
                  <motion.button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onCalendlyClick();
                    }}
                    className="w-full px-6 py-3 bg-green-gradient text-black font-semibold rounded-xl hover:shadow-green-lg transition-all duration-300 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free Audit
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onWhatsAppClick();
                    }}
                    className="w-full px-6 py-3 bg-brand-bg border border-brand-border text-text-primary font-semibold rounded-xl hover:border-premium-green/50 transition-all duration-300 flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp Us
                  </motion.button>
                </div>

                {/* Quick Info */}
                <motion.div
                  className="mt-6 pt-6 border-t border-brand-border text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-text-tertiary mb-2">Starting from</p>
                  <p className="text-2xl font-bold text-premium-green">£50/month</p>
                  <p className="text-xs text-text-secondary mt-1">50% off setup fee</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Side Scroll Navigation Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-full py-4 px-3 shadow-2xl">
          <div className="space-y-4">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="group relative block"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-premium-green scale-125 shadow-lg shadow-premium-green/50'
                      : 'bg-text-tertiary/40 hover:bg-text-secondary'
                  }`}
                />

                {/* Tooltip */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-brand-surface border border-brand-border px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium text-text-primary shadow-xl">
                    {item.label}
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-2 h-2 bg-brand-surface border-r border-t border-brand-border rotate-45"></div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="mt-6 pt-4 border-t border-brand-border">
            <div className="relative w-1 h-20 bg-brand-border rounded-full mx-auto overflow-hidden">
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-green-gradient rounded-full"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
