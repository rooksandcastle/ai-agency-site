import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, PhoneMissed } from 'lucide-react';

// Import new components
import ROICalculator from '../components/ROICalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import SocialProof from '../components/SocialProof';
import FollowUpService from '../components/FollowUpService';
import Navigation from '../components/Navigation';
import LottieAnimation from '../components/LottieAnimation';

// Import animations
import { VoiceCallHeader, LOTTIE_ANIMATIONS } from '../animations';

// Premium Animated Background - More Subtle
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {/* Deep dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-bg to-black"></div>

    {/* Very subtle green accent glows - much reduced */}
    <motion.div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* Very subtle grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>

    {/* Subtle noise texture for depth */}
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
    }}></div>
  </div>
);

// Animated Phone Icon - Lottie Version
const AnimatedPhoneIcon = () => {
  return (
    <div className="w-32 h-32 mx-auto mb-8">
      <LottieAnimation
        animationData={VoiceCallHeader}
        loop={true}
        autoplay={true}
        withMotion={true}
        motionProps={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: 'easeOut' }
        }}
      />
    </div>
  );
};

// Premium Button Component with Fill Animation
const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <motion.button
      className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Content */}
      <span className={`relative z-10 ${variant === 'primary' ? 'text-black' : 'text-text-primary'}`}>
        {children}
      </span>

      {/* Primary button styling */}
      {variant === 'primary' && (
        <>
          {/* Static background */}
          <div className="absolute inset-0 bg-emerald-600 rounded-xl"></div>
          {/* Hover fill effect */}
          <motion.div
            className="absolute inset-0 bg-emerald-700 rounded-xl"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </>
      )}

      {/* Secondary button styling */}
      {variant === 'secondary' && (
        <>
          {/* Border and bg */}
          <div className="absolute inset-0 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl"></div>
          {/* Hover fill effect */}
          <motion.div
            className="absolute inset-0 bg-emerald-600/10 rounded-xl"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </>
      )}
    </motion.button>
  );
};

const CallCaptureHome = () => {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  const whatsappNumber = '+447533595684';
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min'; // REPLACE WITH YOUR ACTUAL CALENDLY LINK

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your AI call capture system for my business.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCalendly = () => {
    window.open(calendlyLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <AnimatedBackground />
      <Navigation onCalendlyClick={handleCalendly} onWhatsAppClick={handleWhatsApp} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated Phone Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <AnimatedPhoneIcon />
          </motion.div>

          {/* Hero Headline - Instant Load */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary mb-6 leading-tight"
          >
            Never Lose a Customer to a
            <span className="block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-green to-premium-green-light animate-pulse-glow">
                Missed Call
              </span>
              {' '}
              Again
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-text-secondary mb-10 leading-relaxed max-w-4xl mx-auto"
          >
            Your 24/7 AI Receptionist and Call Answering Service for UK Small Businesses. Automated Call Handling,
            Appointment Booking, and Missed Call Recovery. Starting from £50/Month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <CTAButton onClick={handleCalendly}>
              Book Your Free AI Assessment →
            </CTAButton>
            <CTAButton variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See Live Demo
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-tertiary"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-premium-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              GDPR Compliant
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-premium-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              UK-Based & Regulated
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-premium-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Full Setup in 2 Weeks
            </span>
          </motion.div>
        </div>
      </section>

      {/* Problem - Hidden Cost of Missed Calls */}
      <section className="py-24 lg:py-32 relative bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Hidden Cost of <span className="text-red-400">Missed Calls</span> for UK Small Businesses
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '40%', label: 'Calls go unanswered', detail: 'When you\'re on site or with clients' },
              { stat: '67%', label: 'Won\'t leave voicemail', detail: 'They call your competitor instead' },
              { stat: '£150', label: 'Average job value', detail: '10 missed calls = £1,500 lost weekly' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-700 shadow-xl rounded-2xl p-8 text-center hover:border-red-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="text-5xl font-black text-red-400 mb-4">{item.stat}</div>
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <div className="text-sm text-gray-300">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your AI Receptionist Can Handle */}
      <section className="py-24 lg:py-32 bg-gray-900 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Your <span className="text-emerald-400">AI Receptionist Can Handle</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              More than just an automated call answering service. Your complete 24/7 AI-powered business partner for UK small business automation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🌙',
                title: 'Out-of-Hours Coverage',
                desc: '9am-5pm? Not anymore. Capture leads while you sleep, on weekends, during holidays.'
              },
              {
                icon: '📞',
                title: 'Intelligent Call-Back System',
                desc: 'AI prioritises urgent calls, schedules callbacks, and keeps customers informed automatically.'
              },
              {
                icon: '🎤',
                title: 'Custom Business Greetings',
                desc: 'Your brand voice, your script. Professional AI call answering that sounds personal every single time.'
              },
              {
                icon: '📊',
                title: 'Real-Time AI Insights',
                desc: 'Track call patterns, peak times, common questions. Make data-driven decisions instantly.'
              },
              {
                icon: '💬',
                title: 'Instant SMS Notifications',
                desc: 'Get full lead details texted to you in 30 seconds. Name, number, reason for call, urgency level.'
              },
              {
                icon: '🔄',
                title: 'Multiple Task Handling',
                desc: 'Bookings, quotes, FAQs, appointment changes. Complete business automation that handles it all seamlessly.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-2xl p-8 hover:border-premium-green/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-premium-green transition-colors duration-300">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - With Industry Examples */}
      <section className="py-24 lg:py-32 bg-gray-900 relative" id="how-it-works">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How It <span className="text-emerald-400">Works</span>
            </motion.h2>
            <motion.p
              className="text-gray-300 text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From missed call to captured lead in seconds. Fully automated AI receptionist system for seamless call handling.
            </motion.p>

            {/* 4-Step Process */}
            <div className="relative mb-20">
              {/* Connection Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-premium-green/50 via-premium-green/30 to-premium-green/50 hidden md:block"></div>

              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: 'Incoming Call',
                    desc: 'Customer calls outside business hours or when your lines are busy'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'AI Engages',
                    desc: 'Natural voice greeting, captures enquiry details, and assesses priority level'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    ),
                    title: 'Instant Notification',
                    desc: 'Lead details sent to you via SMS or email within 30 seconds'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: 'You Follow Up',
                    desc: 'Call back at your convenience with complete context. Customer already impressed by professional service.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-6 items-start relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-premium-green/20 to-premium-green-dark/10 backdrop-blur-xl border border-premium-green/30 rounded-2xl flex items-center justify-center text-premium-green relative z-10">
                      {item.icon}
                    </div>
                    <div className="flex-1 pt-3">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industry Examples */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl lg:text-5xl font-bold text-text-primary mb-4 text-center">
                Real-World <span className="text-premium-green">Examples</span>
              </h3>
              <p className="text-xl text-text-secondary text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                See how our AI receptionist captures and converts leads across different industries
              </p>

              {/* Desktop Grid - Hidden on Mobile */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {/* Dental Clinic Example */}
                <motion.div
                  className="bg-gradient-to-br from-premium-green/10 via-brand-surface/80 to-premium-green/5 border border-premium-green/20 rounded-3xl p-8 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-premium-green/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🦷</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-text-primary mb-1">Dental Clinic</h4>
                      <p className="text-sm text-text-tertiary">Automated Appointment Reminders</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        1
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Patient completes initial teeth whitening treatment</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        2
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Automatically sends personalised SMS reminders on Day 3 and Day 7 prompting them to book follow-up treatment</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        3
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Follow-Up:</strong> If no response, AI makes friendly call offering convenient booking slots</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">
                        £
                      </div>
                      <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> 65% of patients book full treatment package (£300-£500) within 10 days</p>
                    </div>
                  </div>
                </motion.div>

                {/* HVAC Example */}
                <motion.div
                  className="bg-gradient-to-br from-premium-green/10 via-brand-surface/80 to-premium-green/5 border border-premium-green/20 rounded-3xl p-8 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-premium-green/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-text-primary mb-1">HVAC Company</h4>
                      <p className="text-sm text-text-tertiary">Missed Call Whilst On Job</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        1
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Emergency call comes in Saturday evening whilst engineer is on another job</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        2
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Answers immediately, assesses urgency (broken boiler, family cold), captures all details and priority level</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        3
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Notification:</strong> Urgent SMS sent to engineer with customer details and emergency booking request for next morning</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">
                        £
                      </div>
                      <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> £850 emergency repair + £2,400 boiler replacement. Customer becomes long-term maintenance client.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Laser Clinic Example */}
                <motion.div
                  className="bg-gradient-to-br from-premium-green/10 via-brand-surface/80 to-premium-green/5 border border-premium-green/20 rounded-3xl p-8 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-premium-green/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-text-primary mb-1">Laser Clinic</h4>
                      <p className="text-sm text-text-tertiary">Post-Patch Test Follow-Up</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        1
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Client completes mandatory patch test, receives quote, leaves without booking first consultation</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        2
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Sends SMS on Day 4 with patch test results and limited-time booking incentive (10% off within 7 days)</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">
                        3
                      </div>
                      <p className="text-text-secondary text-sm"><strong className="text-text-primary">Follow-Up Call:</strong> Day 6 AI call if no response, answers questions, offers immediate booking with available slots</p>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">
                        £
                      </div>
                      <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> £1,200 six-session package booked. Without AI, client would have been forgotten and gone to competitor.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Carousel - Hidden on Desktop */}
              <div className="md:hidden relative px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="bg-gradient-to-br from-premium-green/10 via-brand-surface/80 to-premium-green/5 border border-premium-green/20 rounded-2xl p-6 backdrop-blur-xl"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -1000) {
                        setCurrentSlide((prev) => (prev + 1) % 3);
                      } else if (swipe > 1000) {
                        setCurrentSlide((prev) => (prev - 1 + 3) % 3);
                      }
                    }}
                  >
                    {currentSlide === 0 && (
                      <>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-premium-green/20 rounded-xl flex items-center justify-center">
                            <span className="text-xl">🦷</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-text-primary mb-0.5">Dental Clinic</h4>
                            <p className="text-xs text-text-tertiary">Automated Appointment Reminders</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">1</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Patient completes initial teeth whitening treatment</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">2</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Automatically sends personalised SMS reminders on Day 3 and Day 7 prompting them to book follow-up treatment</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">3</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Follow-Up:</strong> If no response, AI makes friendly call offering convenient booking slots</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">£</div>
                            <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> 65% of patients book full treatment package (£300-£500) within 10 days</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSlide === 1 && (
                      <>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-premium-green/20 rounded-xl flex items-center justify-center">
                            <span className="text-xl">🔧</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-text-primary mb-0.5">HVAC Company</h4>
                            <p className="text-xs text-text-tertiary">Missed Call Whilst On Job</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">1</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Emergency call comes in Saturday evening whilst engineer is on another job</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">2</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Answers immediately, assesses urgency (broken boiler, family cold), captures all details and priority level</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">3</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Notification:</strong> Urgent SMS sent to engineer with customer details and emergency booking request for next morning</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">£</div>
                            <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> £850 emergency repair + £2,400 boiler replacement. Customer becomes long-term maintenance client.</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSlide === 2 && (
                      <>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-premium-green/20 rounded-xl flex items-center justify-center">
                            <span className="text-xl">✨</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-text-primary mb-0.5">Laser Clinic</h4>
                            <p className="text-xs text-text-tertiary">Post-Patch Test Follow-Up</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">1</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Scenario:</strong> Client completes mandatory patch test, receives quote, leaves without booking first consultation</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">2</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">AI Process:</strong> Sends SMS on Day 4 with patch test results and limited-time booking incentive (10% off within 7 days)</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green/20 rounded-full flex items-center justify-center text-premium-green text-xs font-bold">3</div>
                            <p className="text-text-secondary text-sm"><strong className="text-text-primary">Follow-Up Call:</strong> Day 6 AI call if no response, answers questions, offers immediate booking with available slots</p>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-premium-green rounded-full flex items-center justify-center text-black text-xs font-bold">£</div>
                            <p className="text-premium-green font-semibold text-sm"><strong>Result:</strong> £1,200 six-session package booked. Without AI, client would have been forgotten and gone to competitor.</p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'bg-premium-green w-8' : 'bg-text-tertiary/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Follow-Up Service - Turn Trial Customers into Loyal Clients */}
      <FollowUpService />

      {/* ROI Calculator - Hidden on mobile */}
      <div className="hidden md:block">
        <ROICalculator />
      </div>

      {/* Your Investment - Pricing */}
      <section className="py-24 lg:py-32 relative bg-gray-900" id="pricing">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your <span className="text-emerald-400">Investment</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transparent pricing. No hidden fees.
            </motion.p>
            <motion.p
              className="text-sm text-text-tertiary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              One-time setup fee + flexible monthly pricing based on your usage
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Essential Front Desk */}
            <motion.div
              className="bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-3xl p-5 sm:p-8 hover:border-brand-border/60 transition-all duration-500 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute -top-3 sm:-top-4 right-4 bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
                50% OFF
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-text-primary mb-1 sm:mb-2">Essential Front Desk</h3>
              <p className="text-text-tertiary text-xs sm:text-sm mb-4 sm:mb-6">Mobile trades, solo consultants, small service providers</p>

              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-brand-border">
                <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-text-tertiary text-lg sm:text-xl line-through mr-2">£500</span>
                  <span className="text-3xl sm:text-5xl font-bold text-premium-green">£250</span>
                  <span className="text-text-tertiary text-sm sm:text-base">setup</span>
                </div>
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-sm text-text-tertiary">from</span>
                  <span className="text-xl sm:text-2xl font-semibold text-text-primary">£50</span>
                  <span className="text-text-tertiary text-sm sm:text-base">/month</span>
                </div>
                <p className="text-xs text-text-tertiary mt-2">Based on call volume & features</p>
              </div>

              <ul className="space-y-2 sm:space-y-4 text-text-secondary text-xs sm:text-sm mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 call answering with natural voice</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Appointment booking (Google Calendar/Calendly)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Basic FAQ handling (5-10 questions)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Lead notification via SMS/email</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>2-week setup, 30-day optimisation</span>
                </li>
              </ul>

              <p className="text-[10px] sm:text-xs text-text-tertiary mb-4 sm:mb-6">Solo operators & 2-3 person teams • £100k-£300k revenue</p>

              <CTAButton variant="secondary" onClick={handleCalendly} className="w-full text-sm sm:text-base">
                Select Plan →
              </CTAButton>
            </motion.div>

            {/* Professional Front Desk */}
            <motion.div
              className="bg-gradient-to-br from-premium-green/15 via-premium-green-dark/10 to-premium-green/15 backdrop-blur-xl border-2 border-premium-green/30 rounded-3xl p-5 sm:p-8 transform md:scale-105 relative shadow-2xl shadow-premium-green/10 hover:border-premium-green/50 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" }}
            >
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-green-gradient text-black px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg">
                MOST POPULAR
              </div>
              <div className="absolute -top-3 sm:-top-4 right-4 bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
                50% OFF
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-premium-green mb-1 sm:mb-2">Professional Front Desk</h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6">Growing teams, multi-location, or higher volume</p>

              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-premium-green/20">
                <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-text-tertiary text-lg sm:text-xl line-through mr-2">£800</span>
                  <span className="text-3xl sm:text-5xl font-bold text-premium-green">£400</span>
                  <span className="text-text-tertiary text-sm sm:text-base">setup</span>
                </div>
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-sm text-text-tertiary">from</span>
                  <span className="text-xl sm:text-2xl font-semibold text-text-primary">£150</span>
                  <span className="text-text-tertiary text-sm sm:text-base">/month</span>
                </div>
                <p className="text-xs text-text-tertiary mt-2">Based on call volume & features</p>
              </div>

              <ul className="space-y-2 sm:space-y-4 text-text-secondary text-xs sm:text-sm mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Everything in Essential, plus:</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>CRM integration (Zapier, custom API)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Advanced call routing (team availability)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Extended FAQ library (20+ questions)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Monthly performance review & tuning</span>
                </li>
              </ul>

              <p className="text-[10px] sm:text-xs text-text-tertiary mb-4 sm:mb-6">4-10 person teams • £300k-£750k revenue</p>

              <CTAButton onClick={handleCalendly} className="w-full text-sm sm:text-base">
                Select Plan →
              </CTAButton>
            </motion.div>

            {/* Enterprise Front Desk */}
            <motion.div
              className="bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-3xl p-5 sm:p-8 hover:border-brand-border/60 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg sm:text-2xl font-semibold text-text-primary mb-1 sm:mb-2">Enterprise Front Desk</h3>
              <p className="text-text-tertiary text-xs sm:text-sm mb-4 sm:mb-6">Multi-site operations, complex workflows</p>

              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-brand-border">
                <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-5xl font-bold text-text-primary">£1,200</span>
                  <span className="text-text-tertiary text-sm sm:text-base">setup</span>
                </div>
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-sm text-text-tertiary">from</span>
                  <span className="text-xl sm:text-2xl font-semibold text-text-primary">£300</span>
                  <span className="text-text-tertiary text-sm sm:text-base">/month</span>
                </div>
                <p className="text-xs text-text-tertiary mt-2">Based on call volume & features</p>
              </div>

              <ul className="space-y-2 sm:space-y-4 text-text-secondary text-xs sm:text-sm mb-6 sm:mb-8">
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Multi-location support (unified or separate)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Custom integrations & workflows</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Priority support (2-hour response SLA)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Bi-weekly performance analytics calls</span>
                </li>
              </ul>

              <p className="text-[10px] sm:text-xs text-text-tertiary mb-4 sm:mb-6">10+ person teams • £750k+ revenue</p>

              <CTAButton variant="secondary" onClick={handleCalendly} className="w-full text-sm sm:text-base">
                Get a Quote →
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-gray-900 relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Common <span className="text-emerald-400">Questions</span>
            </motion.h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: 'What\'s your 30-day money-back guarantee?',
                a: 'We\'re so confident in our AI receptionist service that we offer a comprehensive 30-day money-back guarantee. If you\'re not completely satisfied with the service quality, lead capture rate, or overall performance within the first 30 days, we\'ll refund your setup fee. No questions asked, no complicated forms. Plus, if we don\'t help you capture at least 5 quality leads in the first 30 days, you automatically get 50% of your investment back. You literally have nothing to lose with our call answering service.'
              },
              {
                q: 'How long does AI receptionist setup take?',
                a: '2 weeks or less for complete deployment. We handle everything: custom greetings, intelligent call routing, SMS alerts, and dashboard setup. You simply test it and approve.'
              },
              {
                q: 'What makes your guarantee different from other call answering services?',
                a: 'Unlike other providers with complex terms and conditions, our guarantee is simple and automatic. We track your lead capture and missed call recovery in real-time. If you hit fewer than 5 quality leads by day 30, we proactively reach out to process your refund. You don\'t even need to ask. We only succeed when you succeed, so we\'re invested in your results from day one.'
              },
              {
                q: 'Do I need technical knowledge to use an AI receptionist?',
                a: 'Zero technical knowledge required. We set up everything, train your team, and provide 30 days of support. You just receive SMS alerts and call leads back. It\'s designed for small business owners who want simple automation.'
              },
              {
                q: 'What happens to my existing phone number?',
                a: 'You keep it. We add intelligent call forwarding that only activates when you\'re unavailable. Nothing changes from your customers\' perspective. They call your number, our AI receptionist answers professionally.'
              },
              {
                q: 'Can your AI receptionist handle my specific industry?',
                a: 'Yes. We create custom greetings, industry-specific FAQs, booking systems, and quote requests tailored to your exact business needs. Whether you\'re in healthcare, trades, consulting, or retail, we configure the AI for your sector. That\'s why we do the free audit first.'
              },
              {
                q: 'Are there long-term contracts for your call answering service?',
                a: 'No long-term contracts. Flexible month-to-month service after initial setup. Cancel anytime if you\'re not seeing value, though most UK small business clients stay because the ROI is clear within weeks.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`border border-gray-700 shadow-xl rounded-2xl p-8 hover:border-emerald-600/50 transition-all duration-300 ${
                  idx >= 4 ? 'hidden md:block' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            className="bg-gradient-to-br from-emerald-600/10 to-emerald-900/5 border border-emerald-600/30 rounded-3xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Stop Losing Money to Missed Calls with AI Receptionist
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Free 15-minute audit for UK small businesses. We'll calculate exactly how much revenue you're losing to missed calls and show you how our call answering service can help.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CTAButton onClick={handleCalendly}>
                Book Free Audit
              </CTAButton>
              <CTAButton variant="secondary" onClick={handleWhatsApp}>
                WhatsApp Us
              </CTAButton>
            </motion.div>
            <motion.p
              className="text-sm text-text-tertiary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              No pressure. No sales pitch. Just honest assessment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Robot Animation - Bottom Decorative Element */}
      <div className="relative bg-gray-900 py-12 overflow-hidden">
        <div className="container mx-auto px-6 max-w-md">
          <LottieAnimation
            dotLottieSrc={LOTTIE_ANIMATIONS.robotFuturistic}
            loop={true}
            autoplay={true}
            withMotion={true}
            motionProps={{
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 }
            }}
          />
        </div>
      </div>

      {/* Enhanced WhatsApp Floating Button with Pulse Effect */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main button */}
        <motion.button
          onClick={handleWhatsApp}
          className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 sm:p-5 rounded-full shadow-2xl transition-all duration-300 group"
          aria-label="Contact us on WhatsApp"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* WhatsApp Icon */}
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>

          {/* Notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-white text-xs font-bold">!</span>
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          <div className="bg-brand-surface border border-brand-border px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium text-text-primary shadow-2xl">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 w-2 h-2 bg-brand-surface border-b border-r border-brand-border rotate-45"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallCaptureHome;