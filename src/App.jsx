
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Premium Components
import PremiumHero from './components/PremiumHero';
import ModernNavigation from './components/ModernNavigation';
import EnhancedProcess from './components/EnhancedProcess';
import ImprovedAssessment from './components/ImprovedAssessment';
import ComprehensiveFooter from './components/ComprehensiveFooter';
import CalendlyBooking from './components/CalendlyBooking';

// Pages
import CallCaptureHome from './pages/CallCaptureHome';
// import Homepage from './pages/Homepage';
// import WhatWeThinkPageFixed from './pages/WhatWeThinkPageFixed';
// import WhoWeArePageFixed from './pages/WhoWeArePageFixed';
// import WhatWeDoPageFixed from './pages/WhatWeDoPageFixed';

// Premium Animated Background
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

      {/* Premium animated orbs */}
      <div className="absolute top-1/5 left-1/5 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-green-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/5 right-1/5 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-green-300/8 rounded-full blur-2xl animate-ping"></div>

      {/* Premium grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:80px_80px]"></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40"></div>
    </div>
  );
};

// Your Real Logo with Futuristic Enhancement
const Logo = ({ size = 'normal' }) => {
  const sizes = {
    small: 'h-10',
    normal: 'h-14', 
    large: 'h-20'
  };

  return (
    <div className={`flex items-center ${sizes[size]} group cursor-pointer`}>
      {/* Your Classical Logo with Futuristic Glow */}
      <div className="relative">
        <div className="bg-gradient-to-br from-green-400/20 via-green-500/20 to-green-600/20 p-3 rounded-2xl shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-500 transform group-hover:rotate-1">
          {/* Your Actual Logo Image */}
          <img 
            src="/logo.png" 
            alt="Rooks & Castle Logo" 
            className={`${
              size === 'small' ? 'w-6 h-8' : 
              size === 'normal' ? 'w-8 h-10' : 
              'w-12 h-16'
            } object-contain filter drop-shadow-lg`}
          />
        </div>
        {/* Futuristic glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
        {/* Scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/30 to-transparent rounded-2xl animate-pulse"></div>
      </div>
      
      <div className="ml-4">
        <div className="text-white font-bold text-2xl tracking-tight leading-none">
          Rooks & Castle
        </div>
        <div className="text-green-400 text-sm font-medium tracking-wide">
          Ethical AI Consulting
        </div>
      </div>
    </div>
  );
};

// Premium Futuristic Button Component
const FuturisticButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-500 hover:to-green-600 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 active:from-green-600 active:to-green-700',
    secondary: 'border-2 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300 active:bg-green-400/20 active:border-green-200 backdrop-blur-sm shadow-lg shadow-green-500/20',
    ghost: 'text-green-400 hover:text-green-300 hover:bg-green-400/5 active:bg-green-400/10'
  };

  return (
    <motion.button
      className={`px-6 py-4 rounded-2xl font-semibold relative overflow-hidden transition-all duration-300 touch-manipulation min-h-[56px] sm:min-h-[64px] ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <span className="relative z-10 font-medium tracking-wide">{children}</span>

      {/* Enhanced shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />

      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-green-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.button>
  );
};

// Enhanced Glowing Card Component
const GlowCard = ({ children, className = '', hover = true }) => (
  <motion.div
    className={`bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 relative overflow-hidden ${
      hover ? 'hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10' : ''
    } transition-all duration-500 ${className}`}
    whileHover={hover ? { y: -5, scale: 1.02 } : {}}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Premium Navigation - MacBook Pro & iPhone 15 Optimized
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-2xl border-b border-green-500/20 shadow-2xl shadow-green-500/10' : 'bg-black/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center h-10 sm:h-12 lg:h-14 group cursor-pointer">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400/25 via-green-500/25 to-green-600/25 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-500">
                <img
                  src="/logo.png"
                  alt="Rooks & Castle Logo"
                  className="w-6 h-7 sm:w-7 sm:h-9 lg:w-8 lg:h-10 object-contain filter drop-shadow-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-green-600/40 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            </div>
            <div className="ml-3 sm:ml-4">
              <div className="font-black text-lg sm:text-xl lg:text-2xl tracking-tight leading-none text-white">
                Rooks & Castle
              </div>
              <div className="text-green-400 text-xs sm:text-sm lg:text-base font-medium tracking-wide">
                AI Made Simple
              </div>
            </div>
          </div>

          {/* Desktop Menu - MacBook Pro Optimized */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-400 transition-colors font-medium text-base xl:text-lg tracking-wide">Home</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-green-400 transition-colors font-medium text-base xl:text-lg tracking-wide">Process</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors font-medium text-base xl:text-lg tracking-wide">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors font-medium text-base xl:text-lg tracking-wide">Contact</button>
            <FuturisticButton onClick={() => scrollToSection('assessment')} className="text-base xl:text-lg px-6 xl:px-8 py-3 xl:py-4">
              Book Assessment
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button - iPhone 15 Optimized */}
          <button
            className="lg:hidden text-gray-300 hover:text-green-400 transition-colors p-3 -mr-3 rounded-xl hover:bg-green-500/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - iPhone 15 Optimized */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-6 py-8 border-t border-green-500/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-400 transition-colors text-left font-medium py-4 px-4 rounded-2xl hover:bg-green-500/10 text-lg">Home</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-green-400 transition-colors text-left font-medium py-4 px-4 rounded-2xl hover:bg-green-500/10 text-lg">Process</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors text-left font-medium py-4 px-4 rounded-2xl hover:bg-green-500/10 text-lg">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors text-left font-medium py-4 px-4 rounded-2xl hover:bg-green-500/10 text-lg">Contact</button>
              <FuturisticButton onClick={() => scrollToSection('assessment')} className="mt-6 w-full text-lg py-5">
                Book Assessment
              </FuturisticButton>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Premium Hero Section - Framer-style Design
const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-16 lg:pt-0">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        {/* Premium Badge */}
        <div className={`transition-all duration-1000 delay-100 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-6 sm:mb-8 lg:mb-10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
            <span className="text-green-400 font-medium text-sm sm:text-base tracking-wide uppercase">
              Premium AI Solutions • Small Business Ready
            </span>
          </div>
        </div>

        {/* Main Headline - Premium Framer Style */}
        <div className={`transition-all duration-1000 delay-300 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-6 sm:mb-8 lg:mb-10 leading-[0.95] tracking-tight">
            AI Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">Simple</span><br />for Your Team
          </h1>
        </div>

        {/* Premium Subheadline */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            <span className="text-green-400 font-medium">Psychology-driven technology</span> for seamless small business integration.
          </p>
        </div>

        {/* Value Props */}
        <div className={`transition-all duration-1000 delay-700 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed">
            Transform complex workflows into intuitive automation.<br className="hidden sm:block" />
            <span className="text-white font-medium">From £10/month. ROI guaranteed.</span>
          </p>
        </div>

        {/* Premium CTA Section */}
        <div className={`transition-all duration-1000 delay-900 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20">
            <FuturisticButton
              className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 w-full sm:w-auto min-w-[280px] sm:min-w-[320px]"
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Assessment →
            </FuturisticButton>
            <FuturisticButton
              variant="secondary"
              className="text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 w-full sm:w-auto min-w-[280px] sm:min-w-[320px]"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </FuturisticButton>
          </div>
        </div>

        {/* Premium Trust Indicators */}
        <div className={`transition-all duration-1000 delay-1100 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-gray-400 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base lg:text-lg font-medium">SMB Specialists</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base lg:text-lg font-medium">Ethics First</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base lg:text-lg font-medium">ROI Guaranteed</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm sm:text-base lg:text-lg font-medium">From £10/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Premium divider component
const PremiumDivider = () => (
  <div className="relative py-20 lg:py-32">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
    </div>
  </div>
);

// Ethics Quote Section
const EthicsSection = () => (
  <section className="py-20 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ethical <span className="text-green-400">AI Framework</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our ethical framework ensures AI feels like a trusted partner, not a replacement.
          <span className="text-green-400 font-semibold"> Practical, ethical, and built to help you grow.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <GlowCard className="border-green-500/30">
          <div className="text-green-400 mb-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Respect & Transparency</h3>
          <p className="text-gray-300">
            You'll always know what's automated, what's human, and how it fits together.
            No black boxes or hidden processes—complete visibility into how your AI works.
          </p>
        </GlowCard>

        <GlowCard className="border-green-500/30">
          <div className="text-green-400 mb-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Results That Matter</h3>
          <p className="text-gray-300">
            We focus on what actually helps your business: saving time, reducing costs, and finding new opportunities.
            Practical results, not flashy tech demos.
          </p>
        </GlowCard>
      </div>

      <div className="text-center">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full blur-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-lg"></div>
          <GlowCard className="border-green-500/30 backdrop-blur-xl">
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6 text-center">
              We believe in transparency, human centered AI, and enabling humans rather than replacing them.
              Technology should amplify human potential, not diminish it. <span className="text-green-400 font-semibold">AI supports you, never replaces you.</span>
            </blockquote>
            <div className="text-center">
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
                <div className="text-green-400 font-semibold tracking-wide">Rooks & Castle Ltd</div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  </section>
);

// 3-Step Process Section
const ProcessSection = () => {
  const processes = [
    {
      step: "01",
      title: "Assessment & Discovery",
      subtitle: "Understanding Your Business DNA",
      description: "We don't just analyse your processes—we understand your team's psychology and resistance points.",
      subSteps: [
        "Business Process Audit: Map current workflows and identify bottlenecks",
        "Team Psychology Assessment: Understand change readiness and adoption barriers", 
        "AI Opportunity Analysis: Identify highest-ROI automation opportunities"
      ]
    },
    {
      step: "02", 
      title: "Implementation & Training",
      subtitle: "Building Systems That Stick",
      description: "Psychology-informed implementation ensures your team actually adopts the new systems.",
      subSteps: [
        "Custom Automation Setup: Deploy n8n workflows, AI agents, and integrations",
        "Staff Training Program: Hands-on training designed for real adoption",
        "Change Management: Support team through transition with proven methodologies"
      ]
    },
    {
      step: "03",
      title: "Results & Optimisation", 
      subtitle: "Measuring Success, Maximising ROI",
      description: "Continuous monitoring and optimisation ensure sustained results and growing returns.",
      subSteps: [
        "Performance Monitoring: Track time saved, efficiency gains, and ROI metrics",
        "System Optimisation: Refine workflows based on real-world usage patterns",
        "Scaling Strategy: Identify additional automation opportunities as you grow"
      ]
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-green-400">'Business in Flow'</span> Process
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Three strategic phases that transform chaos into streamlined automation.
            Timeline varies by business complexity, but our framework remains consistent.
          </p>
        </div>

        {/* Interactive Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400/50 via-green-400 to-green-400/50 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {processes.map((process, idx) => (
              <GlowCard key={idx} className="text-center group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Enhanced Step Number */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-black mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50">
                  {process.step}
                </div>

                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors text-center">{process.title}</h3>
                <h4 className="text-green-400 font-semibold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-center">{process.subtitle}</h4>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-center px-2">{process.description}</p>

                {/* Enhanced Sub-steps */}
                <div className="text-left bg-gray-900/30 rounded-xl p-4 sm:p-6">
                  <div className="text-sm sm:text-base font-semibold text-green-400 mb-3 sm:mb-4">What This Involves:</div>
                  <ul className="space-y-2 sm:space-y-3">
                    {process.subSteps.map((step, stepIdx) => (
                      <li key={stepIdx} className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mt-1.5 sm:mt-2 mr-3 sm:mr-4 flex-shrink-0 group-hover:animate-pulse"></div>
                        <span className="text-xs sm:text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Connection Arrow */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-10 -right-8 z-20">
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                    <div className="absolute -right-1 -top-2 w-0 h-0 border-l-8 border-l-green-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gray-900/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 border border-green-500/30 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Implementation Timeline</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-bold text-green-400">4-6</span>
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Small Business</h4>
                <p className="text-gray-400 text-xs sm:text-sm">weeks for basic automation</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-bold text-green-400">8-10</span>
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Medium Business</h4>
                <p className="text-gray-400 text-xs sm:text-sm">weeks for complex workflows</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-bold text-green-400">12+</span>
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Enterprise</h4>
                <p className="text-gray-400 text-xs sm:text-sm">weeks for full transformation</p>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
              <span className="text-green-400 font-semibold">Fast-track available:</span> Get results in as little as 2 weeks for urgent projects.
            </p>

            <FuturisticButton onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })} className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 w-full sm:w-auto">
              Start Your Assessment Today →
            </FuturisticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-green-400">Rooks & Castle</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We believe AI should make life <span className="text-green-400 font-semibold">simpler, safer, and more successful</span> for small businesses and independent professionals.
          Our job isn't just to deliver tools — it's to make sure you <span className="text-green-400 font-semibold">feel confident, in control, and supported</span> when using AI.
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          We're business consultants who understand what makes teams tick, specializing in building AI solutions that your staff actually enjoy using—because they're designed with psychology-informed principles that put people first.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-green-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/10 to-transparent rounded-full blur-2xl"></div>
            <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed text-center relative z-10">
              <span className="text-green-400 text-5xl leading-none">"</span>We're here to make AI feel like a <span className="text-green-400 font-semibold">trusted partner in your business</span> — practical, ethical, and built to help you grow.<span className="text-green-400 text-5xl leading-none">"</span>
            </blockquote>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <GlowCard>
          <h3 className="text-2xl font-bold text-green-400 mb-4">People First, Always</h3>
          <p className="text-gray-300 mb-4">
            AI supports you, never replaces you. Every solution keeps your goals and customers at the center.
            We understand what makes teams comfortable with new technology because we approach it with human psychology in mind.
          </p>
          <p className="text-gray-300">
            No tech speak, no hidden tricks. We explain what AI does, how it helps, and what to expect, making sure you always feel in control.
          </p>
        </GlowCard>

        <GlowCard>
          <h3 className="text-2xl font-bold text-green-400 mb-4">Safe & Accountable</h3>
          <p className="text-gray-300 mb-4">
            No black boxes. We test, check, and stay accountable for everything we deliver. You'll always know what's automated, what's human, and how it fits together.
          </p>
          <p className="text-gray-300">
            We use these same AI systems to run our own business. Everything we build for you has been tested in real-world conditions with complete transparency.
          </p>
        </GlowCard>
      </div>

    </div>
  </section>
);

// AI Responsibility Promise Section
const AIResponsibilitySection = () => (
  <section className="py-20 bg-gradient-to-b from-cyber-black to-gray-900 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our <span className="text-green-400">AI Responsibility Promise</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          At Rooks & Castle, we believe AI should make life <span className="text-green-400 font-semibold">simpler, safer, and more successful</span> for small businesses and independent professionals.
          Our job isn't just to deliver tools — it's to make sure you feel confident, in control, and supported when using AI.
        </p>
      </div>

      {/* 6 Core Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <GlowCard className="text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">People First, Always</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            AI supports you, never replaces you. Every solution keeps your goals and customers at the center.
          </p>
        </GlowCard>

        <GlowCard className="text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Straightforward & Honest</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            No tech speak, no hidden tricks. We explain what AI does, how it helps, and what to expect.
          </p>
        </GlowCard>

        <GlowCard className="text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Safe & Accountable</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            No black boxes. We test, check, and stay accountable for everything we deliver.
          </p>
        </GlowCard>

        <GlowCard className="text-center">
          <div className="text-4xl mb-4">⚖️</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Fair & Accessible</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            AI shouldn't just be for big corporations. Affordable, practical, scalable solutions for any size business.
          </p>
        </GlowCard>

        <GlowCard className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Results That Matter</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Focus on what helps your business: saving time, reducing costs, finding opportunities.
          </p>
        </GlowCard>

        <GlowCard className="text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-green-400 mb-3">Respect & Transparency</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            You'll always know what's automated, what's human, and how it fits together.
          </p>
        </GlowCard>
      </div>

      {/* Promise Statement */}
      <div className="bg-gradient-to-r from-green-500/15 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to make AI feel like a <span className="text-green-400 font-semibold">trusted partner in your business</span> —
            practical, ethical, and built to help you grow.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Our Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "Customer Analytics",
      description: "Transform raw customer data into results that matter for your business growth.",
      features: [
        "Behavioural pattern analysis",
        "Predictive customer lifetime value",
        "Churn risk identification",
        "Personalisation engine optimisation"
      ],
      icon: "📊",
      color: "blue"
    },
    {
      title: "Answer Generator",
      description: "Straightforward and honest AI that gives your team instant access to company knowledge. No tech speak, just practical answers.",
      features: [
        "Context-aware response generation",
        "Multi-language support",
        "Industry-specific terminology",
        "Real-time knowledge updates"
      ],
      icon: "💬",
      color: "green"
    },
    {
      title: "Information Finder",
      description: "Advanced search and retrieval systems that locate relevant information across all your data sources.",
      features: [
        "Cross-platform data discovery",
        "Semantic search capabilities",
        "Document relationship mapping",
        "Automated categorisation"
      ],
      icon: "🔍",
      color: "purple"
    },
    {
      title: "Report Generator",
      description: "Automated business intelligence that creates comprehensive reports from your operational data.",
      features: [
        "Dynamic dashboard creation",
        "Scheduled report delivery",
        "Visual data storytelling",
        "Executive summary automation"
      ],
      icon: "📈",
      color: "orange"
    },
    {
      title: "AI Agents",
      description: "People first, always—AI employees that support your team without replacing them. Fair & accessible automation for any business size.",
      features: [
        "Custom workflow automation",
        "Decision tree processing",
        "Integration orchestration",
        "Continuous process optimisation"
      ],
      icon: "🤖",
      color: "cyan"
    },
    {
      title: "Smart Communication Hub",
      description: "Safe & accountable AI communication that helps you feel confident, in control, and supported in all customer interactions.",
      features: [
        "Email automation and responses",
        "Appointment scheduling coordination",
        "Lead nurturing sequences",
        "Customer communication tracking"
      ],
      icon: "📧",
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-500/20 hover:border-blue-500/40",
      green: "border-green-500/20 hover:border-green-500/40",
      purple: "border-purple-500/20 hover:border-purple-500/40",
      orange: "border-orange-500/20 hover:border-orange-500/40",
      cyan: "border-cyan-500/20 hover:border-cyan-500/40",
      indigo: "border-indigo-500/20 hover:border-indigo-500/40"
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-cyber-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2 sm:mr-3" />
            <span className="text-green-400 font-medium text-xs sm:text-sm tracking-wide uppercase">
              Digital Assistants • Built Just For Your Business
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 font-display px-2">
            Increase Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Operational Efficiency
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            With affordable B2B solutions designed specifically for small businesses and their unique operational needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`group relative bg-gray-900/30 backdrop-blur-xl border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-gray-800/40 transition-all duration-500 ${getColorClasses(service.color)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Icon */}
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center text-xs sm:text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Which Services Your Business Needs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Performance Metrics Banner (Accenture Style)
const PerformanceMetricsBanner = () => {
  const metrics = [
    {
      percentage: "97%",
      description: "of executives said AI agents will transform their company operations"
    },
    {
      percentage: "67%",
      description: "of organisations plan to increase spending in AI technology and automation"
    },
    {
      percentage: "75%",
      description: "of executives said that 'good quality training data' is the most valuable ingredient for AI success"
    },
    {
      percentage: "10-15%",
      description: "more revenue growth is achieved by AI-driven companies than by their peers"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 border-y border-green-500/20 backdrop-blur-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Data and AI Performance
          </h3>
          <p className="text-green-400 font-medium">Industry Leading Metrics</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.percentage}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Business Necessity Section
const BusinessNecessitySection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 to-cyber-black relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-3" />
          <span className="text-red-400 font-medium text-sm tracking-wide uppercase">
            The New Business Reality
          </span>
        </motion.div>

        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 font-display">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400">
            Every Business
          </span> Needs This Now
        </h2>

        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          For decades, only Fortune 500 companies could afford custom digital systems and dedicated tech teams.
          <br className="hidden sm:block" />
          Now every small business is expected to compete at that same level—and affordable consultancy solutions make it possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <GlowCard className="border-red-500/20">
          <div className="text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold text-red-400 mb-4">The Pressure is Real</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Customer expectations have skyrocketed. Response times that were acceptable 5 years ago now lose you business.
              Manual processes that once worked are now competitive disadvantages.
            </p>
          </div>
        </GlowCard>

        <GlowCard className="border-orange-500/20">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Scale or Fall Behind</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your competitors are already automating. Every month you delay is market share lost to businesses
              that can serve more customers with the same team size.
            </p>
          </div>
        </GlowCard>

        <GlowCard className="border-green-500/20">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-green-400 mb-4">The Solution is Here</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              What once required millions in investment and years of development can now be implemented
              in weeks for the cost of a part-time employee.
            </p>
          </div>
        </GlowCard>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Don't Let Anxiety About Scaling Hold You Back
        </h3>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          The gap between corporate advantages and small business capabilities has never been smaller.
          AI agents level the playing field—giving you the operational efficiency of enterprises
          without the enterprise budget or complexity.
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl shadow-2xl shadow-green-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
        >
          See How We Can Help Your Business Scale
        </motion.button>
      </div>
    </div>
  </section>
);

// Pricing Section
const PricingSection = () => (
  <section className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Investment <span className="text-green-400">Tiers</span>
        </h2>
        <p className="text-xl text-gray-300 mb-4">
          Tailored pricing revealed after your free audit
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Like Johnny Walker's Red, Black & Blue—each tier offers distinct value. Your exact pricing is determined after we understand your business needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Essential Tier */}
        <GlowCard className="border-gray-500/30 hover:border-gray-400/50 transition-all duration-300">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-300">Essential</h3>
              <span className="text-3xl">🥈</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Perfect for small businesses starting their AI journey</p>

            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">
                Custom
              </div>
              <p className="text-sm text-gray-400">Price after audit</p>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-1.5"></span>
                <span>Single AI solution</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-1.5"></span>
                <span>Basic workflow automation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-1.5"></span>
                <span>Email support</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-1.5"></span>
                <span>Quarterly reviews</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-1.5"></span>
                <span>Standard implementation</span>
              </li>
            </ul>

            <p className="text-xs text-gray-500 italic">Best for: Startups, solo entrepreneurs</p>
          </div>
        </GlowCard>

        {/* Professional Tier - Featured */}
        <GlowCard className="border-green-500/50 hover:border-green-400/70 transition-all duration-300 transform md:scale-105 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-xs font-bold">
            MOST POPULAR
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-400">Professional</h3>
              <span className="text-3xl">🥇</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">Comprehensive AI solutions for growing companies</p>

            <div className="mb-6">
              <div className="text-4xl font-bold text-green-400 mb-2">
                Custom
              </div>
              <p className="text-sm text-gray-400">Price after audit</p>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Multiple AI solutions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Advanced automation & integrations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Monthly strategy sessions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5"></span>
                <span>Custom training & documentation</span>
              </li>
            </ul>

            <p className="text-xs text-gray-400 italic">Best for: SMEs, scaling businesses</p>
          </div>
        </GlowCard>

        {/* Enterprise Tier */}
        <GlowCard className="border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Enterprise</h3>
              <span className="text-3xl">💎</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Bespoke AI transformation for large organisations</p>

            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                Bespoke
              </div>
              <p className="text-sm text-gray-400">Price after audit</p>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Full AI ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Enterprise-grade infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>24/7 white-glove support</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Weekly strategy & optimisation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Dedicated team & technical lead</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Compliance & security audit</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5"></span>
                <span>Custom SLAs & guarantees</span>
              </li>
            </ul>

            <p className="text-xs text-gray-500 italic">Best for: Large enterprises, corporations</p>
          </div>
        </GlowCard>
      </div>

      {/* What's Always Free */}
      <GlowCard className="border-green-500/30 max-w-4xl mx-auto">
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">What's Always Free</h3>
          <div className="text-5xl font-bold text-green-400 mb-6">£0</div>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-gray-300">Business Process Assessment</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-gray-300">Workflow Mapping & Analysis</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-gray-300">ROI Opportunity Identification</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-gray-300">Custom Implementation Roadmap</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">No commitment required. See exactly what we can do for your business before making any investment.</p>
        </div>
      </GlowCard>

      {/* Frameworks & Principles We Follow */}
      <div className="mt-16">
        <div className="bg-black rounded-2xl p-8 border border-green-500/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Frameworks & Principles We Follow</h3>

          <div className="text-center mb-8">
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We align our work with international AI ethics frameworks (EU AI Act, IEEE 2857™, GDPR, NIST AI Risk Management Framework) and actively engage with leading research communities (OECD AI Principles, Anthropic, OpenAI). This ensures our solutions are responsible, human centered, and built for long term trust.
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">

            {/* EU AI Act */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/eu-ai-act.svg"
                alt="EU AI Act"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
             
            </div>

            {/* GDPR */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/gdpr.svg"
                alt="GDPR"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
             
            </div>

            {/* IEEE */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/ieee.svg"
                alt="IEEE"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
            </div>

            {/* NIST AI RMF */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/nist-ai-rmf.svg"
                alt="NIST AI Risk Management Framework"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
            </div>

            {/* OECD */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/oecd.svg"
                alt="OECD AI Principles"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
            </div>

            {/* Anthropic */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/anthropic.svg"
                alt="Anthropic"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
             
            </div>

            {/* OpenAI */}
            <div className="flex items-center justify-center">
              <img
                src="/logos/openai.svg"
                alt="OpenAI"
                className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

// Assessment Quiz Component
const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showCalendly, setShowCalendly] = useState(false);
  const [customAnswer, setCustomAnswer] = useState('');

  const questions = [
    {
      id: 'industry',
      question: 'What industry is your business in?',
      options: [
        'Education',
        'Legal / Professional Services',
        'Small Businesses & Services',
        'E-commerce / Retail',
        'Healthcare / Medical',
        'Other'
      ]
    },
    {
      id: 'size',
      question: 'How many employees does your business have?',
      options: [
        '1-5 employees',
        '6-15 employees', 
        '16-50 employees',
        '51+ employees'
      ]
    },
    {
      id: 'interest',
      question: 'What brings you to us today?',
      options: [
        'Want to learn about AI opportunities',
        'Need help implementing AI systems',
        'Looking to scale operations',
        'Want to see ROI from automation',
        'Other'
      ]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[currentStep].id]: answer });
    setCustomAnswer('');
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowCalendly(true);
    }
  };

  const handleCustomSubmit = () => {
    if (customAnswer.trim()) {
      handleAnswer(customAnswer.trim());
    }
  };

  if (showCalendly) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Perfect! Let's Schedule Your Assessment</h3>
        <p className="text-gray-300 mb-6">Based on your answers, we'll prepare a customised consultation.</p>
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-500/30">
          <div className="mb-4">
            <p className="text-gray-400 mb-2">Integration Instructions:</p>
            <div className="text-sm text-gray-500 mb-4">
              <p className="mb-2">1. Create your Calendly booking page</p>
              <p className="mb-2">2. Get your scheduling link</p>
              <p className="mb-2">3. Replace the onClick URL below</p>
              <p className="text-xs mt-4 p-3 bg-gray-800 rounded">
                User answers: {answers.industry} | {answers.size} | {answers.interest}
              </p>
            </div>
          </div>
          <FuturisticButton onClick={() => window.open('https://calendly.com/your-link-here', '_blank')}>
            Schedule Your Free Consultation
          </FuturisticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-gray-400 text-sm mt-2">Question {currentStep + 1} of {questions.length}</p>
      </div>

      {/* Current Question */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">{questions[currentStep].question}</h3>
        
        <div className="space-y-3">
          {questions[currentStep].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-left hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 text-white"
            >
              {option}
            </button>
          ))}
          
          {questions[currentStep].options.includes('Other') && (
            <div className="mt-4">
              <input
                type="text"
                value={customAnswer}
                onChange={(e) => setCustomAnswer(e.target.value)}
                placeholder="Please specify..."
                className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none mb-3"
              />
              <FuturisticButton 
                onClick={handleCustomSubmit}
                disabled={!customAnswer.trim()}
                className="w-full"
              >
                Submit Custom Answer
              </FuturisticButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Assessment Section
const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your <span className="text-green-400">Free Assessment</span>
          </h2>
          <p className="text-xl text-gray-300">
            Quick assessment designed specifically for small businesses to customise your affordable consultancy experience.
          </p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 relative" style={{ overflow: 'visible' }}>
          <ImprovedAssessment />
        </div>
      </div>
    </section>
  );
};

// Coming Soon Projects Section
const ProjectsSection = () => (
  <section className="py-20 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Case Studies & <span className="text-green-400">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Real results from real businesses. More case studies uploading soon.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((idx) => (
          <GlowCard key={idx} className="relative overflow-hidden h-64" hover={false}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-green-400 text-4xl font-bold mb-2">Coming Soon</div>
                <p className="text-gray-400">Case Study {idx}</p>
              </div>
            </div>
            <div className="opacity-20">
              <div className="h-32 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl mb-4"></div>
              <h3 className="font-bold text-lg text-white mb-2">Client Success Story</h3>
              <p className="text-gray-400 text-sm">Detailed case study showcasing ROI and implementation process.</p>
            </div>
          </GlowCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-gray-900/30 rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="text-xl font-bold text-green-400 mb-4">Coming Soon</h3>
          <p className="text-gray-300 mb-6">Real case studies with measurable results are on their way. Follow our journey above to stay updated.</p>
          <FuturisticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
            Book Your Assessment Instead
          </FuturisticButton>
        </div>
      </div>
    </div>
  </section>
);

// Resources Section
const ResourcesSection = () => (
  <section id="resources" className="py-20 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Resources & <span className="text-green-400">Frameworks</span>
        </h2>
        <p className="text-xl text-gray-300">
          Free educational content, frameworks, and tools to help your AI journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlowCard>
          <h3 className="text-xl font-bold text-green-400 mb-4">Anthropic's 4D Framework</h3>
          <p className="text-gray-300 mb-4">
            Our ethical foundation: Helpful, Harmless, Honest, and Human-compatible AI implementation.
          </p>
          <FuturisticButton variant="ghost">
            Learn More →
          </FuturisticButton>
        </GlowCard>

        <GlowCard>
          <h3 className="text-xl font-bold text-green-400 mb-4">Company Tools We Use</h3>
          <div className="text-gray-300 space-y-2 mb-4">
            <p>• n8n for workflow automation</p>
            <p>• ChatGPT-5 for intelligent processing</p>
            <p>• Zapier for simple integrations</p>
            <p>• Custom psychology frameworks</p>
          </div>
          <FuturisticButton variant="ghost">
            View Tools →
          </FuturisticButton>
        </GlowCard>

        <GlowCard>
          <h3 className="text-xl font-bold text-green-400 mb-4">Ethics & Transparency</h3>
          <p className="text-gray-300 mb-4">
            Our commitment to transparent AI implementation and human centered design principles.
          </p>
          <FuturisticButton variant="ghost">
            View Principles →
          </FuturisticButton>
        </GlowCard>
      </div>
    </div>
  </section>
);

// Blog Section
const BlogSection = () => (
  <section id="blog" className="py-20 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Blog & <span className="text-green-400">Insights</span>
        </h2>
        <p className="text-xl text-gray-300">
          Latest thoughts on AI, automation, and business transformation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {[1, 2, 3].map((idx) => (
              <GlowCard key={idx} className="md:flex gap-6">
                <div className="md:w-48 h-32 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl mb-4 md:mb-0 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Coming Soon: Blog Post {idx}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Insights on AI implementation, business automation, and digital transformation for SMBs.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 text-sm">Coming Soon</span>
                    <FuturisticButton variant="ghost" className="text-sm px-4 py-2">
                      Read More →
                    </FuturisticButton>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <div>
          <GlowCard>
            <h3 className="text-xl font-bold text-green-400 mb-4">Follow Us</h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest insights and AI automation tips.
            </p>
            <div className="space-y-3">
              <FuturisticButton variant="ghost" className="w-full text-left">
                📱 Instagram Feed (Coming Soon)
              </FuturisticButton>
              <FuturisticButton variant="ghost" className="w-full text-left">
                🐦 Twitter Feed (Coming Soon)
              </FuturisticButton>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = ({ onCalendlyClick }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about digital automation for my small business. Can we schedule a consultation?");
    // REPLACE THIS WITH YOUR ACTUAL WHATSAPP BUSINESS NUMBER
    const whatsappNumber = "447123456789"; // Replace with your real number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Ready to feel <span className="text-green-400 font-semibold">confident, in control, and supported</span> with AI for your business?
            Let's have a straightforward conversation about how we can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Calendar Booking */}
          <GlowCard>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-3 sm:mb-4">Book Your Free Consultation</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              30-minute strategic session to identify your highest-ROI automation opportunities for your small business.
            </p>
            <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 text-center border border-green-500/20">
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Ready to schedule your consultation:</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">• Free 30-minute strategy session<br/>• Discuss your business needs<br/>• Get personalised recommendations<br/>• No obligation or sales pressure</p>
              <div className="text-green-400 text-2xl sm:text-4xl mb-3 sm:mb-4">📅</div>
              <FuturisticButton onClick={onCalendlyClick} className="w-full sm:w-auto">
                Schedule Free Consultation
              </FuturisticButton>
            </div>
          </GlowCard>

          {/* WhatsApp Contact */}
          <GlowCard>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-3 sm:mb-4">Quick Questions?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Get instant answers via WhatsApp. Perfect for small business owners who need quick guidance on digital solutions.
            </p>
            <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 text-center border border-green-500/20">
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Direct line to our consultants:</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">• Ask about affordable B2B solutions<br/>• Get quick project estimates<br/>• Discuss your specific business needs<br/>• Schedule urgent consultations</p>
              <div className="text-green-400 text-2xl sm:text-4xl mb-3 sm:mb-4">💬</div>
              <FuturisticButton onClick={handleWhatsAppClick} className="w-full sm:w-auto">
                Message on WhatsApp
              </FuturisticButton>
            </div>
          </GlowCard>
        </div>

        {/* Enhanced Follow Our Journey Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-2xl"></div>

            <div className="text-center relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
                <span className="text-green-400 font-medium text-sm tracking-wide uppercase">Stay Connected</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">Follow Our Journey</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Behind-the-scenes insights, case studies, and practical AI automation tips.
                Join our community of forward-thinking business owners.
              </p>

              {/* Social Links Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <a
                  href="https://twitter.com/rooksandcastle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">Twitter</span>
                </a>

                <a
                  href="https://instagram.com/rooksandcastle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.758h-1.958V5.273h1.958v1.957zm-2.744 5.718c0-1.297-.49-2.447-1.297-3.323-.875-.807-2.026-1.297-3.323-1.297s-2.448.49-3.323 1.297c-.807.876-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.808 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323z"/>
                  </svg>
                  <span className="text-white font-semibold group-hover:text-pink-400 transition-colors">Instagram</span>
                </a>

                <a
                  href="https://linkedin.com/company/rooksandcastle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-3 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-white font-semibold group-hover:text-blue-500 transition-colors">LinkedIn</span>
                </a>
              </div>

              {/* Consolidated Email Subscription */}
              <div className="bg-gray-900/50 rounded-xl p-6 max-w-md mx-auto">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Get Case Studies First</h4>
                <p className="text-gray-400 text-sm mb-4">Real results, practical insights, no spam.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:border-green-500 focus:outline-none"
                  />
                  <FuturisticButton className="px-4 py-2 text-sm">
                    Join
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about AI automation for my business. Can we schedule a consultation?");
    // REPLACE THIS WITH YOUR ACTUAL WHATSAPP BUSINESS NUMBER
    const whatsappNumber = "447123456789"; // Replace with your real number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </button>
  );
};

// Export all sections for Homepage component
export {
  ServicesSection,
  PerformanceMetricsBanner,
  AboutSection,
  AIResponsibilitySection,
  BusinessNecessitySection,
  EthicsSection,
  PricingSection,
  AssessmentSection,
  ContactSection,
  ProjectsSection,
  WhatsAppButton
};

// Main App Component with Router
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CallCaptureHome />} />
      </Routes>
    </Router>
  );
};

export default App;