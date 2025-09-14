
import React, { useState, useEffect } from 'react';

// Animated Background with Neural Network Effect
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-300/5 rounded-full blur-2xl animate-ping"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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

// Futuristic Button Component
const FuturisticButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-500 hover:to-green-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40',
    secondary: 'border-2 border-green-400 text-green-400 hover:bg-green-400/10 hover:border-green-300',
    ghost: 'text-green-400 hover:text-green-300 hover:bg-green-400/5'
  };

  return (
    <button 
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
    </button>
  );
};

// Glowing Card Component
const GlowCard = ({ children, className = '', hover = true }) => (
  <div className={`bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 relative overflow-hidden ${
    hover ? 'hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10' : ''
  } transition-all duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

// Sticky Navigation
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="small" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-green-400 transition-colors">Process</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-300 hover:text-green-400 transition-colors">Resources</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-green-400 transition-colors">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors">Contact</button>
            <FuturisticButton onClick={() => scrollToSection('assessment')}>
              Book Assessment
            </FuturisticButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-green-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-green-400 transition-colors text-left">Process</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-300 hover:text-green-400 transition-colors text-left">Resources</button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-green-400 transition-colors text-left">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors text-left">Contact</button>
              <FuturisticButton onClick={() => scrollToSection('assessment')} className="mt-4 w-full">
                Book Assessment
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section with Animated Entrance
const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Animated Company Logo Entrance */}
        <div className={`mb-12 transition-all duration-1500 transform ${
          textVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
        }`}>
          <Logo size="large" />
        </div>

        {/* Marcus Aurelius Quote */}
        <div className={`mb-8 transition-all duration-1000 delay-300 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <blockquote className="text-green-400 text-lg md:text-xl italic mb-2">
            "The best revenge is not to be like your enemy."
          </blockquote>
          <cite className="text-gray-400 text-sm">— Marcus Aurelius</cite>
        </div>

        {/* Mission Statement Quote */}
        <div className={`mb-8 transition-all duration-1000 delay-500 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-900/30 rounded-2xl p-6 border border-green-500/20 max-w-2xl mx-auto">
            <blockquote className="text-green-400 text-lg italic mb-2">
              "Our mission is radical simplification of workflow processes"
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Headline */}
        <div className={`transition-all duration-1000 delay-700 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            AI Implementation <br />
            Doesn't Have To Be <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Complex</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className={`transition-all duration-1000 delay-900 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-green-400 font-semibold">Any business can benefit from AI.</span><br />
            We make cutting-edge automation accessible through psychology-informed implementation 
            that your team actually adopts.
          </p>
        </div>

        {/* Urgency CTA */}
        <div className={`transition-all duration-1000 delay-1100 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } bg-red-900/20 border border-red-500/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto`}>
          <p className="text-red-300 text-lg font-semibold mb-2">⚡ The Automation Gap is Widening</p>
          <p className="text-gray-300">
            While you're considering AI, your competitors are already automating. 
            Don't get left behind—<span className="text-green-400 font-semibold">join the 15+ hour weekly savings revolution.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transition-all duration-1000 delay-1300 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } flex flex-col sm:flex-row gap-4 justify-center items-center mb-12`}>
          <FuturisticButton className="text-lg px-8 py-4" onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Free Assessment →
          </FuturisticButton>
          <FuturisticButton variant="secondary" className="text-lg px-8 py-4" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
            See Our Process
          </FuturisticButton>
        </div>

        {/* Trust Indicators */}
        <div className={`transition-all duration-1000 delay-1500 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>SMB Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Ethics First</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>ROI Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>From £10/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ethics Quote Section
const EthicsSection = () => (
  <section className="py-20 relative">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <GlowCard className="border-green-500/30">
        <div className="text-green-400 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
          </svg>
        </div>
        <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
          "We believe in transparency, human-centered AI, and enabling humans rather than replacing them. 
          Technology should amplify human potential, not diminish it."
        </blockquote>
        <div className="text-green-400 font-semibold">— Our Philosophy</div>
      </GlowCard>
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
      description: "We don't just analyze your processes—we understand your team's psychology and resistance points.",
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
      title: "Results & Optimization", 
      subtitle: "Measuring Success, Maximizing ROI",
      description: "Continuous monitoring and optimization ensure sustained results and growing returns.",
      subSteps: [
        "Performance Monitoring: Track time saved, efficiency gains, and ROI metrics",
        "System Optimization: Refine workflows based on real-world usage patterns",
        "Scaling Strategy: Identify additional automation opportunities as you grow"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-green-400">'Business in Flow'</span> Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three strategic phases that transform chaos into streamlined automation. 
            Timeline varies by business complexity, but our framework remains consistent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, idx) => (
            <GlowCard key={idx} className="text-center group relative">
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {process.step}
              </div>
              
              <h3 className="font-bold text-xl text-white mb-2">{process.title}</h3>
              <h4 className="text-green-400 font-semibold text-lg mb-4">{process.subtitle}</h4>
              <p className="text-gray-300 mb-6">{process.description}</p>
              
              {/* Sub-steps */}
              <div className="text-left">
                <div className="text-sm font-semibold text-green-400 mb-3">What This Involves:</div>
                <ul className="space-y-2">
                  {process.subSteps.map((step, stepIdx) => (
                    <li key={stepIdx} className="text-sm text-gray-400 flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connection Line (Desktop) */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
              )}
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            <span className="text-green-400 font-semibold">Timeline:</span> Most implementations complete within 4-12 weeks, 
            depending on complexity and team size.
          </p>
          <FuturisticButton onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Assessment Today →
          </FuturisticButton>
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
          We're AI consultants with psychology backgrounds, specializing in automation that teams actually adopt. 
          Our mission is making digital solutions accessible to all.
        </p>
        <blockquote className="text-lg italic text-green-400 max-w-2xl mx-auto">
          "Our mission is radical simplification of workflow processes through human-centered AI implementation."
        </blockquote>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <GlowCard>
          <h3 className="text-2xl font-bold text-green-400 mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-4">
            Radical simplification of workflow processes through human-centered AI implementation. 
            We believe technology should amplify human potential, not replace it.
          </p>
          <p className="text-gray-300">
            Every business deserves access to cutting-edge automation, regardless of size or technical expertise.
            We make digital solutions accessible to all.
          </p>
        </GlowCard>

        <GlowCard>
          <h3 className="text-2xl font-bold text-green-400 mb-4">Our Approach</h3>
          <p className="text-gray-300 mb-4">
            Psychology-informed AI implementation ensures your team actually adopts new systems. 
            We focus on organizational psychology and change management, not just technology.
          </p>
          <p className="text-gray-300">
            Average client saves 15+ hours weekly with 95% team adoption rates.
          </p>
        </GlowCard>
      </div>

      <div className="bg-gray-900/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Ethical Framework & Good Practices</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Anthropic's 4D Framework</h4>
            <p className="text-gray-400 text-sm">Designing AI systems that are helpful, harmless, honest, and human-compatible.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Transparency First</h4>
            <p className="text-gray-400 text-sm">Complete visibility into AI processes, no black boxes or hidden algorithms.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-white mb-2">Human Empowerment</h4>
            <p className="text-gray-400 text-sm">AI augments human capabilities rather than replacing human judgment.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            We follow established frameworks, ethical guidelines, and best practices to ensure 
            responsible AI implementation that benefits businesses while protecting human interests.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Pricing Section
const PricingSection = () => (
  <section className="py-20 relative">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Pricing That Makes <span className="text-green-400">Sense</span>
      </h2>
      <p className="text-xl text-gray-300 mb-12">
        Custom solutions tailored to your business needs and current status. We don't get paid until you see results.
      </p>

      <GlowCard className="border-green-500/30">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Our Pricing Philosophy</h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Solutions starting from £10/month
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                ROI-based pricing—we succeed when you succeed
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Free consultation, assessment & workflow mapping
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Custom pricing based on company size & needs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Only start paying once ROI is achieved
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-400/10 to-green-600/5 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">What's Included Free:</h4>
            <div className="text-green-400 text-3xl font-bold mb-2">£0</div>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Business Process Assessment</li>
              <li>• Workflow Mapping & Analysis</li>
              <li>• ROI Opportunity Identification</li>
              <li>• Implementation Roadmap</li>
            </ul>
          </div>
        </div>
      </GlowCard>
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
        'Coffee Shop / QSR',
        'Legal / Professional Services',
        'Trades / Home Services',
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
        <p className="text-gray-300 mb-6">Based on your answers, we'll prepare a customized consultation.</p>
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-500/30">
          {/* REPLACE THIS WITH YOUR CALENDLY WIDGET */}
          <div className="mb-4">
            <p className="text-gray-400 mb-2">Your Calendly widget will go here</p>
            <p className="text-sm text-gray-500">
              Answers: {answers.industry} | {answers.size} | {answers.interest}
            </p>
          </div>
          <FuturisticButton onClick={() => window.open('https://calendly.com/YOUR-LINK', '_blank')}>
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

// Assessment Section
const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your <span className="text-green-400">Free Assessment</span>
          </h2>
          <p className="text-xl text-gray-300">
            Quick 3-question assessment to customize your consultation experience.
          </p>
        </div>

        <GlowCard className="border-green-500/30">
          <AssessmentQuiz />
        </GlowCard>
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
          <h3 className="text-xl font-bold text-green-400 mb-4">Get Notified</h3>
          <p className="text-gray-300 mb-4">Be the first to see our latest case studies and results.</p>
          <input 
            type="email" 
            placeholder="Your email address"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl text-white mb-4 focus:border-green-500 focus:outline-none"
          />
          <FuturisticButton className="w-full">
            Notify Me
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
            Our commitment to transparent AI implementation and human-centered design principles.
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
const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about AI automation for my business. Can we schedule a consultation?");
    // REPLACE THIS WITH YOUR ACTUAL WHATSAPP BUSINESS NUMBER
    const whatsappNumber = "447123456789"; // Replace with your real number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Booking */}
          <GlowCard>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Book Your Free Consultation</h3>
            <p className="text-gray-300 mb-6">
              30-minute strategic session to identify your highest-ROI automation opportunities.
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-green-500/20">
              <p className="text-gray-400 mb-4">Your Calendly integration will be embedded here</p>
              <FuturisticButton>
                Schedule Consultation
              </FuturisticButton>
            </div>
          </GlowCard>

          {/* WhatsApp Contact */}
          <GlowCard>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Quick Questions?</h3>
            <p className="text-gray-300 mb-6">
              Get instant answers via WhatsApp. Perfect for quick queries or urgent automation needs.
            </p>
            <div className="bg-gray-900/50 rounded-xl p-6 text-center border border-green-500/20">
              <div className="text-green-400 text-4xl mb-4">💬</div>
              <FuturisticButton onClick={handleWhatsAppClick}>
                Message on WhatsApp
              </FuturisticButton>
            </div>
          </GlowCard>
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
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    </button>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <EthicsSection />
        <ProcessSection />
        <AboutSection />
        <PricingSection />
        <AssessmentSection />
        <ProjectsSection />
        <ResourcesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;