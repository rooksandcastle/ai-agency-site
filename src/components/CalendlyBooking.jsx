import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverScale } from './AnimationWrapper';

const CalendlyBooking = ({ isModal = false, onClose = null }) => {
  // Load Calendly widget script and handle body scroll
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Prevent background scrolling when modal is open
    if (isModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // Cleanup script and restore scrolling on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (isModal) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isModal]);

  const containerClass = isModal
    ? "fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
    : "min-h-screen bg-gradient-to-br from-cyber-black to-gray-900 py-20";

  const contentClass = isModal
    ? "bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
    : "max-w-6xl mx-auto px-6";

  return (
    <div className={containerClass} onWheel={isModal ? (e) => e.stopPropagation() : undefined}>
      {isModal && (
        <div
          className="absolute inset-0"
          onClick={onClose}
          onWheel={(e) => e.stopPropagation()}
        />
      )}

      <motion.div
        className={contentClass}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Header */}
        <div className="text-center mb-12 p-6">
          {isModal && (
            <motion.button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          )}

          <motion.div
            className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-6"
            variants={fadeInUp}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
            <span className="text-green-400 font-medium text-sm tracking-wide uppercase">
              Free Consultation Booking
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Free Strategy Session
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            30-minute consultation to identify the best digital automation opportunities for your small business.
          </p>
        </div>

        {/* Calendly Embed Container */}
        <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 mb-6">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rooksandcastle101/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          />

          {/* Fallback for when Calendly hasn't loaded */}
          <div className="text-center py-20" id="calendly-fallback">
            <div className="animate-pulse">
              <div className="text-green-400 text-6xl mb-6">📅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Loading Booking Calendar...</h3>
              <p className="text-gray-400 mb-6">
                If the calendar doesn't load, you can book directly at:
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold rounded-xl"
                onClick={() => window.open('https://calendly.com/rooksandcastle101/30min', '_blank')}
                {...hoverScale}
              >
                Open Calendly Directly
              </motion.button>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-900/20 rounded-xl">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Strategy Session</h3>
            <p className="text-gray-400 text-sm">
              We'll assess your current processes and identify the best automation opportunities.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-900/20 rounded-xl">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">ROI Analysis</h3>
            <p className="text-gray-400 text-sm">
              Get personalised projections on time savings and cost reductions for your business.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-900/20 rounded-xl">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">Implementation Plan</h3>
            <p className="text-gray-400 text-sm">
              Receive a clear roadmap for implementing digital solutions in your business.
            </p>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="text-center bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-white mb-2">
            Prefer to Talk First?
          </h4>
          <p className="text-gray-400 mb-4">
            Have questions before booking? Get in touch via WhatsApp for a quick chat.
          </p>
          <motion.button
            className="px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500/20 transition-colors"
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to learn more about booking a consultation for my business.");
              window.open(`https://wa.me/447123456789?text=${message}`, '_blank');
            }}
            {...hoverScale}
          >
            💬 Quick WhatsApp Chat
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CalendlyBooking;