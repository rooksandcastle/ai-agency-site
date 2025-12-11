import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hoverScale, fadeInUp } from './AnimationWrapper';

const ImprovedAssessment = () => {
  const [currentStep, setCurrentStep] = useState('industry');
  const [formData, setFormData] = useState({
    industry: '',
    customIndustry: '',
    businessSize: '',
    primaryGoal: '',
    name: '',
    email: '',
    company: ''
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Prevent background scrolling when dropdown is open
  useEffect(() => {
    if (showDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDropdown]);

  const industries = [
    'Education',
    'Legal / Professional Services',
    'Small Businesses & Services',
    'E-commerce / Retail',
    'Healthcare / Medical',
    'Financial Services',
    'Real Estate',
    'Marketing / Advertising',
    'Education / Training',
    'Manufacturing',
    'Technology / Software',
    'Hospitality / Tourism',
    'Logistics / Transport',
    'Construction',
    'Other (Please specify)'
  ];

  const businessSizes = [
    'Solo entrepreneur',
    '2-5 employees',
    '6-15 employees',
    '16-50 employees',
    '51+ employees'
  ];

  const primaryGoals = [
    'Save time on repetitive tasks',
    'Improve customer service',
    'Increase operational efficiency',
    'Scale business operations',
    'Reduce operational costs',
    'Improve data analysis',
    'Automate workflows',
    'Other'
  ];

  const handleIndustrySelect = (industry) => {
    setFormData({ ...formData, industry });
    setShowDropdown(false);
    if (industry !== 'Other (Please specify)') {
      setCurrentStep('businessSize');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleNext = (field, value) => {
    setFormData({ ...formData, [field]: value });

    const stepOrder = ['industry', 'businessSize', 'primaryGoal', 'details'];
    const currentIndex = stepOrder.indexOf(currentStep);

    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    } else {
      setShowCalendly(true);
    }
  };

  const submitFormData = async (finalFormData) => {
    try {
      const emailData = {
        to: 'hello@rooksandcastle.co.uk',
        subject: 'New Business Assessment Submission',
        html: `
          <h2>New Assessment Form Submission</h2>
          <p><strong>Industry:</strong> ${finalFormData.industry}${finalFormData.customIndustry ? ` (${finalFormData.customIndustry})` : ''}</p>
          <p><strong>Business Size:</strong> ${finalFormData.businessSize}</p>
          <p><strong>Primary Goal:</strong> ${finalFormData.primaryGoal}</p>
          <p><strong>Name:</strong> ${finalFormData.name}</p>
          <p><strong>Email:</strong> ${finalFormData.email}</p>
          <p><strong>Company:</strong> ${finalFormData.company || 'Not provided'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      };

      // You'll need to implement your email service here
      // For now, we'll console.log the data
      console.log('Form Data to Email:', emailData);

      // Store in localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('assessmentSubmissions') || '[]');
      submissions.push({ ...finalFormData, timestamp: new Date().toISOString() });
      localStorage.setItem('assessmentSubmissions', JSON.stringify(submissions));

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleBack = () => {
    const stepOrder = ['industry', 'businessSize', 'primaryGoal', 'details'];
    const currentIndex = stepOrder.indexOf(currentStep);

    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const renderStepIndicator = () => {
    const steps = ['Industry', 'Size', 'Goal', 'Details'];
    const stepOrder = ['industry', 'businessSize', 'primaryGoal', 'details'];
    const currentIndex = stepOrder.indexOf(currentStep);

    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                idx <= currentIndex
                  ? 'bg-green-400 text-black'
                  : 'bg-gray-700 text-gray-400'
              }`}>
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={`w-8 h-0.5 ml-4 transition-all duration-300 ${
                  idx < currentIndex ? 'bg-green-400' : 'bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (showCalendly) {
    return (
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-green-400 mb-4">Perfect! Let's Schedule Your Assessment</h3>
        <p className="text-gray-300 mb-6">Based on your answers, we'll prepare a customised consultation for your {formData.industry} business.</p>

        <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-500/30 mb-6">
          <div className="mb-4">
            <p className="text-gray-400 mb-4">Assessment Summary:</p>
            <div className="text-sm text-gray-300 space-y-2 text-left max-w-md mx-auto">
              <p><span className="text-green-400">Industry:</span> {formData.industry}</p>
              <p><span className="text-green-400">Business Size:</span> {formData.businessSize}</p>
              <p><span className="text-green-400">Primary Goal:</span> {formData.primaryGoal}</p>
              {formData.company && <p><span className="text-green-400">Company:</span> {formData.company}</p>}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 mb-4">Calendly Integration:</p>
            <p className="text-sm text-gray-500 mb-4">
              1. Create your Calendly booking page<br/>
              2. Get your scheduling link<br/>
              3. Replace the onClick URL below
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl shadow-2xl shadow-green-500/25"
              {...hoverScale}
              onClick={() => window.open('https://calendly.com/rooksandcastle101/30min', '_blank')}
            >
              Schedule Your Free Consultation
            </motion.button>
          </div>
        </div>

        <motion.button
          className="text-green-400 hover:text-green-300 transition-colors"
          onClick={() => {
            setShowCalendly(false);
            setCurrentStep('industry');
            setFormData({
              industry: '',
              customIndustry: '',
              businessSize: '',
              primaryGoal: '',
              name: '',
              email: '',
              company: ''
            });
          }}
          whileHover={{ x: -5 }}
        >
          ← Start Over
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {renderStepIndicator()}

      <AnimatePresence mode="wait">
        {/* Industry Selection */}
        {currentStep === 'industry' && (
          <motion.div
            key="industry"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What industry is your business in?</h3>

            <motion.button
              className="w-full p-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-600 rounded-2xl text-left hover:border-green-500/70 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 text-white flex justify-between items-center group backdrop-blur-sm"
              onClick={() => setShowDropdown(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  {formData.industry || 'Click to select your industry'}
                </span>
                <span className="text-sm text-gray-400 mt-1">
                  Choose from 15+ industry categories
                </span>
              </div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <span className="text-green-400 text-sm font-medium">Select</span>
                <svg
                  className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.button>

            {formData.industry === 'Other (Please specify)' && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  value={formData.customIndustry}
                  onChange={(e) => setFormData({ ...formData, customIndustry: e.target.value })}
                  placeholder="Please specify your industry..."
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                />
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-xl"
                  {...hoverScale}
                  onClick={() => formData.customIndustry && setCurrentStep('businessSize')}
                  disabled={!formData.customIndustry}
                >
                  Continue
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Industry Modal */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDropdown(false)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-gray-700"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-white">Select Your Industry</h4>
                    <motion.button
                      className="text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                      onClick={() => setShowDropdown(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  <p className="text-gray-400 mt-2">Choose the category that best describes your business</p>
                </div>

                {/* Modal Content */}
                <div className="p-6 max-h-96 overflow-y-auto scrollbar-thin">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {industries.map((industry, idx) => (
                      <motion.button
                        key={idx}
                        className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-left hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 text-white group"
                        onClick={() => handleIndustrySelect(industry)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="group-hover:text-green-400 transition-colors">
                            {industry}
                          </span>
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Business Size */}
        {currentStep === 'businessSize' && (
          <motion.div
            key="businessSize"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.button
                className="text-green-400 hover:text-green-300 transition-colors flex items-center"
                onClick={handleBack}
                whileHover={{ x: -5 }}
              >
                ← Back
              </motion.button>
              <h3 className="text-2xl font-bold text-white">How many employees?</h3>
              <div /> {/* Spacer */}
            </div>

            <div className="space-y-3">
              {businessSizes.map((size, idx) => (
                <motion.button
                  key={idx}
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-left hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 text-white"
                  onClick={() => handleNext('businessSize', size)}
                  whileHover={{ scale: 1.01, x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Primary Goal */}
        {currentStep === 'primaryGoal' && (
          <motion.div
            key="primaryGoal"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.button
                className="text-green-400 hover:text-green-300 transition-colors flex items-center"
                onClick={handleBack}
                whileHover={{ x: -5 }}
              >
                ← Back
              </motion.button>
              <h3 className="text-2xl font-bold text-white">What's your primary goal?</h3>
              <div /> {/* Spacer */}
            </div>

            <div className="space-y-3">
              {primaryGoals.map((goal, idx) => (
                <motion.button
                  key={idx}
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-left hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300 text-white"
                  onClick={() => handleNext('primaryGoal', goal)}
                  whileHover={{ scale: 1.01, x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {goal}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Details */}
        {currentStep === 'details' && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.button
                className="text-green-400 hover:text-green-300 transition-colors flex items-center"
                onClick={handleBack}
                whileHover={{ x: -5 }}
              >
                ← Back
              </motion.button>
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>
              <div /> {/* Spacer */}
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="assessment-name" className="sr-only">Your name</label>
                <input
                  id="assessment-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name *"
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  required
                  aria-required="true"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="assessment-email" className="sr-only">Email address</label>
                <input
                  id="assessment-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email address *"
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="assessment-company" className="sr-only">Company name</label>
                <input
                  id="assessment-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name (optional)"
                  className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  autoComplete="organisation"
                />
              </div>

              <motion.button
                className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-xl shadow-2xl shadow-green-500/25"
                {...hoverScale}
                onClick={() => {
                  if (formData.name && formData.email) {
                    submitFormData(formData);
                    setShowCalendly(true);
                  }
                }}
                disabled={!formData.name || !formData.email}
              >
                Complete Assessment →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImprovedAssessment;