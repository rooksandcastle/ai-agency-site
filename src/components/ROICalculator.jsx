import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LottieAnimation from './LottieAnimation';
import { Revenue } from '../animations';
import GlowButton from './motion/GlowButton';

const ROICalculator = () => {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(150);
  const [conversionRate, setConversionRate] = useState(40); // % of calls that convert to sales
  const [monthlyLoss, setMonthlyLoss] = useState(0);
  const [yearlyLoss, setYearlyLoss] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate ROI with counting animation
  useEffect(() => {
    setIsCalculating(true);
    // Apply conversion rate to calculate realistic loss
    const calculatedMonthlyLoss = missedCallsPerWeek * avgJobValue * 4.33 * (conversionRate / 100); // 4.33 weeks per month average
    const calculatedYearlyLoss = calculatedMonthlyLoss * 12;

    // Animate counting up
    const duration = 800; // ms
    const steps = 30;
    const increment = calculatedMonthlyLoss / steps;
    const yearlyIncrement = calculatedYearlyLoss / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setMonthlyLoss(Math.round(increment * currentStep));
      setYearlyLoss(Math.round(yearlyIncrement * currentStep));

      if (currentStep >= steps) {
        clearInterval(timer);
        setMonthlyLoss(Math.round(calculatedMonthlyLoss));
        setYearlyLoss(Math.round(calculatedYearlyLoss));
        setIsCalculating(false);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [missedCallsPerWeek, avgJobValue, conversionRate]);

  return (
    <section className="py-24 lg:py-32 relative bg-gray-900" id="roi-calculator">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Calculate Your <span className="text-emerald-400">Revenue Loss</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every missed call is a lost customer. See exactly how much it's costing you.
          </motion.p>
        </div>

        <motion.div
          className="border border-gray-700 shadow-xl rounded-3xl p-8 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Your Business Numbers</h3>

              {/* Missed Calls Input */}
              <div>
                <label className="flex items-center justify-between mb-4">
                  <span className="text-text-secondary font-medium">Missed calls per week</span>
                  <motion.span
                    className="text-3xl font-bold text-text-primary bg-brand-bg px-4 py-2 rounded-lg border border-brand-border"
                    key={missedCallsPerWeek}
                    initial={{ scale: 1.2, color: '#10B981' }}
                    animate={{ scale: 1, color: '#F9FAFB' }}
                    transition={{ duration: 0.3 }}
                  >
                    {missedCallsPerWeek}
                  </motion.span>
                </label>
                <motion.input
                  type="range"
                  min="1"
                  max="50"
                  value={missedCallsPerWeek}
                  onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-brand-bg border border-brand-border rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-premium-green"
                  whileFocus={{ scale: 1.01 }}
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${(missedCallsPerWeek / 50) * 100}%, #1A1A1A ${(missedCallsPerWeek / 50) * 100}%, #1A1A1A 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-text-tertiary mt-2">
                  <span>1 call</span>
                  <span>50 calls</span>
                </div>
              </div>

              {/* Average Job Value Input */}
              <div>
                <label className="flex items-center justify-between mb-4">
                  <span className="text-text-secondary font-medium">Average job value (£)</span>
                  <motion.span
                    className="text-3xl font-bold text-text-primary bg-brand-bg px-4 py-2 rounded-lg border border-brand-border"
                    key={avgJobValue}
                    initial={{ scale: 1.2, color: '#10B981' }}
                    animate={{ scale: 1, color: '#F9FAFB' }}
                    transition={{ duration: 0.3 }}
                  >
                    £{avgJobValue}
                  </motion.span>
                </label>
                <motion.input
                  type="range"
                  min="50"
                  max="2000"
                  step="10"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-3 bg-brand-bg border border-brand-border rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-premium-green"
                  whileFocus={{ scale: 1.01 }}
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${((avgJobValue - 50) / 1950) * 100}%, #1A1A1A ${((avgJobValue - 50) / 1950) * 100}%, #1A1A1A 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-text-tertiary mt-2">
                  <span>£50</span>
                  <span>£2,000+</span>
                </div>
              </div>

              {/* Conversion Rate Input */}
              <div>
                <label className="flex items-center justify-between mb-4">
                  <span className="text-text-secondary font-medium">Call conversion rate (%)</span>
                  <motion.span
                    className="text-3xl font-bold text-text-primary bg-brand-bg px-4 py-2 rounded-lg border border-brand-border"
                    key={conversionRate}
                    initial={{ scale: 1.2, color: '#10B981' }}
                    animate={{ scale: 1, color: '#F9FAFB' }}
                    transition={{ duration: 0.3 }}
                  >
                    {conversionRate}%
                  </motion.span>
                </label>
                <motion.input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-3 bg-brand-bg border border-brand-border rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-premium-green"
                  whileFocus={{ scale: 1.01 }}
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #10B981 ${((conversionRate - 10) / 90) * 100}%, #1A1A1A ${((conversionRate - 10) / 90) * 100}%, #1A1A1A 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-text-tertiary mt-2">
                  <span>10% (Conservative)</span>
                  <span>100% (Every call converts)</span>
                </div>
              </div>

              <div className="bg-brand-bg/50 border border-brand-border rounded-2xl p-6">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Industry Average:</strong> UK small businesses miss 30-40% of incoming calls during peak hours.
                  67% of callers won't leave a voicemail and will call your competitor instead. That's where missed call recovery with an AI receptionist becomes essential.
                </p>
              </div>
            </div>

            {/* Results Side */}
            <div className="flex flex-col justify-center">
              <div className="flex justify-center mb-8" aria-hidden="true">
                <div className="w-40 h-40 md:w-48 md:h-48">
                  <LottieAnimation
                    animationData={Revenue}
                    className="w-full h-full"
                    speed={0.8}
                    withMotion={false}
                  />
                </div>
              </div>
              <div className="bg-brand-bg border-2 border-premium-green/30 rounded-3xl p-8 shadow-green">
                <h3 className="text-xl font-semibold text-text-primary mb-8 text-center">Your Estimated Loss</h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${missedCallsPerWeek}-${avgJobValue}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Monthly Loss */}
                    <div className="text-center pb-6 border-b border-brand-border">
                      <div className="text-sm text-text-tertiary mb-2 uppercase tracking-wide">Monthly</div>
                      <motion.div
                        className="text-5xl lg:text-6xl font-black text-premium-green"
                        animate={isCalculating ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        £{monthlyLoss.toLocaleString()}
                      </motion.div>
                      <div className="text-sm text-text-tertiary mt-2">in lost revenue</div>
                    </div>

                    {/* Yearly Loss */}
                    <div className="text-center">
                      <div className="text-sm text-text-tertiary mb-2 uppercase tracking-wide">Yearly</div>
                      <motion.div
                        className="text-4xl lg:text-5xl font-black text-premium-green-light"
                        animate={isCalculating ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        £{yearlyLoss.toLocaleString()}
                      </motion.div>
                      <div className="text-sm text-text-tertiary mt-2">annually</div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* ROI Comparison */}
                <div className="mt-8 pt-6 border-t border-premium-green/20">
                  <div className="bg-premium-green/10 border border-premium-green/30 rounded-2xl p-4">
                    <div className="text-center">
                      <div className="text-sm text-premium-green font-semibold mb-2">AI Systems Engagement</div>
                      <div className="text-2xl font-bold text-text-primary">Tailored to your scope</div>
                      <div className="text-xs text-text-secondary mt-2">
                        Pays for itself by capturing just {Math.ceil((150 / (avgJobValue * (conversionRate / 100))) * 100) / 100} more calls per month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-text-secondary mb-4">
                  Ready to stop losing money?
                </p>
                <GlowButton as="a" href="#services" className="px-8 py-4 inline-flex">
                  Explore Services & Get Started →
                </GlowButton>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Note */}
        <motion.p
          className="text-center text-sm text-text-tertiary mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          No pressure. Our 30-day guarantee means you risk nothing.
        </motion.p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.35);
          transition: all 0.3s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(37, 99, 235, 0.55);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.35);
          transition: all 0.3s ease;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(37, 99, 235, 0.55);
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;
