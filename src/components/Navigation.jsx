import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandLogo from '../brand/rooks-castle-mark.svg';

const Navigation = ({ onCalendlyClick, fixed = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const triggerRefs = useRef({});
  const menuRefs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  const CALENDLY = "https://calendly.com/rooksandcastle101/30min";

  const navItems = [
    {
      id: 'services',
      label: 'Services',
      type: 'dropdown',
      links: [
        { label: 'AI Front Desk', href: '/services/ai-front-desk', description: '24/7 call answering & booking' },
        { label: 'Workflow Automation', href: '/services/workflow-automation', description: 'Quotes, invoices & reminders' },
        { label: 'Smart Follow-Up', href: '/services/smart-follow-up', description: 'Leads, payments & win-back' },
      ],
    },
    {
      id: 'industries',
      label: 'Industries',
      type: 'dropdown',
      links: [
        { label: 'Trades & Home Services', href: '/industries/trades', description: 'Plumbers, electricians, HVAC' },
        { label: 'Salons & Personal Services', href: '/industries/salons', description: 'Hair, beauty, wellness' },
        { label: 'Consultants & Professionals', href: '/industries/consultants', description: 'Independent, self-employed' },
      ],
    },
    { id: 'how-it-works', label: 'How It Works', href: '/#how-it-works', type: 'hash' },
    { id: 'contact', label: 'Contact', href: '/contact', type: 'route' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const sections = navItems
          .filter((item) => item.type === 'section')
          .map((item) => document.getElementById(item.id));
        const currentSection = sections.find((section) => {
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });

        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (event) => {
      const trigger = triggerRefs.current[openDropdown];
      const menu = menuRefs.current[openDropdown];
      if (trigger?.contains(event.target) || menu?.contains(event.target)) {
        return;
      }
      setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        const trigger = triggerRefs.current[openDropdown];
        trigger?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [openDropdown]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileDropdowns({});
    }
  }, [isMobileMenuOpen]);

  const navigateTo = (href) => {
    navigate(href);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const focusFirstMenuItem = (id) => {
    const menu = menuRefs.current[id];
    if (!menu) return;
    const first = menu.querySelector('[data-menuitem]');
    first?.focus();
  };

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    if (item.type === 'hash') {
      const [path, hash] = item.href.split('#');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 300);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.type === 'route') {
      navigateTo(item.href);
    }
  };

  const handleDropdownNavigate = (href) => {
    navigateTo(href);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = (id, focusMenu = false) => {
    setOpenDropdown((prev) => {
      const next = prev === id ? null : id;
      if (next && focusMenu) {
        setTimeout(() => focusFirstMenuItem(next), 0);
      }
      return next;
    });
  };

  const handleTriggerKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown(id, true);
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (openDropdown !== id) {
        setOpenDropdown(id);
        setTimeout(() => focusFirstMenuItem(id), 0);
      } else {
        focusFirstMenuItem(id);
      }
    }
  };

  const focusMenuItemAtIndex = (id, index) => {
    const menu = menuRefs.current[id];
    if (!menu) return;
    const items = menu.querySelectorAll('[data-menuitem]');
    if (!items.length) return;
    const nextIndex = (index + items.length) % items.length;
    items[nextIndex]?.focus();
  };

  const handleMenuItemKeyDown = (event, parentId, index) => {
    const items = menuRefs.current[parentId]?.querySelectorAll('[data-menuitem]');
    const total = items?.length || 0;

    if (!total) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusMenuItemAtIndex(parentId, index + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusMenuItemAtIndex(parentId, index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusMenuItemAtIndex(parentId, 0);
        break;
      case 'End':
        event.preventDefault();
        focusMenuItemAtIndex(parentId, total - 1);
        break;
      default:
        break;
    }
  };

  const toggleMobileDropdown = (id) => {
    setMobileDropdowns((prev) => {
      const isOpen = !!prev[id];
      return isOpen ? {} : { [id]: true };
    });
  };

  const isActive = (item) => {
    if (item.type === 'route') {
      if (item.href === '/') {
        return location.pathname === '/' && location.hash === '';
      }
      return location.pathname === item.href;
    }

    if (item.type === 'dropdown') {
      return item.links.some((link) => link.href === location.pathname);
    }

    return location.pathname === '/' && activeSection === item.id;
  };

  const navShellClasses =
    'pointer-events-auto relative overflow-visible rounded-[999px] px-4 sm:px-5 py-1.5 transition-all duration-300 backdrop-blur-[22px] border ' +
    (isScrolled
      ? 'border-white/15 bg-[#0F0F0F]/90 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
      : 'border-white/10 bg-[#0F0F0F]/75 shadow-[0_8px_32px_rgba(0,0,0,0.4)]');

  return (
    <>
      <div className={`${fixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative z-10'} pointer-events-none nav-accent`}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-4">
          <motion.nav
            className={navShellClasses}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/95 via-[#141414]/80 to-[#0F0F0F]/90" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-[2px] rounded-[999px] border border-white/10 shadow-[inset_0_1px_12px_rgba(255,255,255,0.12)]" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-4 whitespace-nowrap">
              <motion.button
                className="flex items-center gap-3 cursor-pointer whitespace-nowrap"
                onClick={() => handleNavClick({ type: 'route', href: '/' })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={brandLogo}
                  alt="Rooks & Castle logo"
                  className="h-11 w-auto object-contain"
                />
                <div className="text-left leading-tight">
                  <p className="text-base font-semibold text-white tracking-tight">Rooks & Castle</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/65">AI-powered automation</p>
                </div>
              </motion.button>

              <div className="hidden lg:flex items-center gap-2 whitespace-nowrap">
                {navItems.map((item, idx) => {
                  if (item.type === 'dropdown') {
                    const active = isActive(item);
                    const isOpen = openDropdown === item.id;
                    return (
                      <div key={item.id} className="relative">
                        <button
                          id={`${item.id}-trigger`}
                          ref={(el) => (triggerRefs.current[item.id] = el)}
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded={isOpen}
                          aria-controls={`${item.id}-menu`}
                          onClick={() => toggleDropdown(item.id)}
                          onKeyDown={(event) => handleTriggerKeyDown(event, item.id)}
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                            active
                              ? 'text-[var(--nav-active-text)] bg-[var(--nav-active-bg)] border border-[var(--nav-active-border)] shadow-[var(--nav-active-glow)]'
                              : 'text-white/75 border border-transparent hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              key={`${item.id}-menu`}
                              ref={(el) => (menuRefs.current[item.id] = el)}
                              id={`${item.id}-menu`}
                              role="menu"
                              aria-labelledby={`${item.id}-trigger`}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 min-w-[240px] rounded-2xl border border-white/10 bg-brand-surface/95 backdrop-blur-2xl shadow-2xl p-3 space-y-2 flex flex-col z-[9999] pointer-events-auto"
                              style={{ top: 'calc(100% + 10px)' }}
                            >
                              {item.links.map((link, linkIdx) => (
                                <button
                                  key={link.href}
                                  type="button"
                                  role="menuitem"
                                  data-menuitem="true"
                                  tabIndex={-1}
                                  aria-current={location.pathname === link.href ? 'page' : undefined}
                                  onKeyDown={(event) => handleMenuItemKeyDown(event, item.id, linkIdx)}
                                  onClick={() => handleDropdownNavigate(link.href)}
                                  className={`w-full text-left rounded-xl px-3 py-2 transition-colors ${
                                    location.pathname === link.href ? 'bg-white/5 text-white' : 'text-white/80 hover:bg-white/5'
                                  }`}
                                >
                                  <div className="text-sm font-semibold">{link.label}</div>
                                  <p className="text-xs text-white/60">{link.description}</p>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`relative px-3 py-1 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                        isActive(item)
                          ? 'text-[var(--nav-active-text)] bg-[var(--nav-active-bg)] border border-[var(--nav-active-border)] shadow-[var(--nav-active-glow)]'
                          : 'text-white/75 border border-transparent hover:text-white hover:bg-white/5'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
                <button
                  className="hidden lg:inline-flex items-center px-4 py-2 rounded-[16px] border border-[var(--nav-active-border)] bg-[var(--nav-cta-bg)] text-white font-semibold shadow-[var(--nav-active-glow)] hover:bg-[var(--nav-active-text)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--nav-active-text)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  onClick={() => window.open(CALENDLY, '_blank')}
                >
                  Book a Free Call
                </button>
              </div>

              <motion.button
                className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white shadow-[0_18px_35px_-28px_rgba(21,255,191,0.8)] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-lg" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/15 opacity-70" aria-hidden="true" />
                <div className="relative flex items-center justify-center">
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </div>
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </div>

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
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-20 right-6 w-80 max-w-[calc(100vw-3rem)] bg-brand-surface/98 backdrop-blur-xl border border-brand-border rounded-2xl shadow-2xl z-50 lg:hidden overflow-hidden"
              initial={{ opacity: 0, x: 100, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Elegant gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--nav-active-text)]/70 via-[var(--nav-cta-bg)]/50 to-[var(--nav-active-text)]/70"></div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <img src={brandLogo} alt="Rooks & Castle logo" className="h-9 w-auto object-contain" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Rooks & Castle</p>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">AI-powered automation</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {navItems.map((item, idx) => {
                    if (item.type === 'dropdown') {
                      const isOpen = mobileDropdowns[item.id];
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="border border-white/10 rounded-xl p-3"
                        >
                          <button
                            type="button"
                            id={`${item.id}-mobile-trigger`}
                            className="w-full flex items-center justify-between text-base font-medium text-white"
                            aria-haspopup="true"
                            aria-expanded={Boolean(isOpen)}
                            aria-controls={`${item.id}-mobile-panel`}
                            onClick={() => toggleMobileDropdown(item.id)}
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isOpen && (
                            <div
                              id={`${item.id}-mobile-panel`}
                              role="menu"
                              aria-labelledby={`${item.id}-mobile-trigger`}
                              className="mt-3 space-y-2"
                            >
                              {item.links.map((link) => (
                                <button
                                  key={link.href}
                                  type="button"
                                  role="menuitem"
                                  aria-current={location.pathname === link.href ? 'page' : undefined}
                                  onClick={() => handleDropdownNavigate(link.href)}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    location.pathname === link.href ? 'text-white bg-white/5' : 'text-white/80 hover:bg-white/5'
                                  }`}
                                >
                                  <div className="font-semibold">{link.label}</div>
                                  <p className="text-xs text-white/60">{link.description}</p>
                                </button>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      );
                    }

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 border ${
                          isActive(item)
                            ? 'text-[var(--nav-active-text)] border-[var(--nav-active-border)] bg-[var(--nav-active-bg)] shadow-[var(--nav-active-glow)]'
                            : 'text-white/80 border-transparent hover:border-white/20 hover:bg-white/5'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>
                <button
                  className="w-full inline-flex justify-center px-4 py-3 rounded-[16px] border border-[var(--nav-active-border)] bg-[var(--nav-cta-bg)] text-white font-semibold shadow-[var(--nav-active-glow)] hover:bg-[var(--nav-active-text)] transition-all duration-200"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open(CALENDLY, '_blank');
                  }}
                >
                  Book a Free Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navigation;
