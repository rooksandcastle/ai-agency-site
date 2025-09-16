import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverScale } from './AnimationWrapper';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: 10,
    avgHourlyWage: 25,
    hoursPerWeekManual: 15,
    implementationCost: 5000,
    monthlyCost: 200,
    productivityIncrease: 30,
    errorReduction: 80,
    avgErrorCost: 100
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    monthlyROI: 0,
    paybackPeriod: 0,
    threeYearValue: 0,
    hoursReclaimed: 0,
    errorsSaved: 0
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const {
      employees,
      avgHourlyWage,
      hoursPerWeekManual,
      implementationCost,
      monthlyCost,
      productivityIncrease,
      errorReduction,
      avgErrorCost
    } = inputs;

    // Weekly time savings
    const weeklyHoursSaved = employees * hoursPerWeekManual * (productivityIncrease / 100);
    const weeklyLaborSavings = weeklyHoursSaved * avgHourlyWage;

    // Annual savings
    const annualLaborSavings = weeklyLaborSavings * 52;
    const annualErrorSavings = (employees * avgErrorCost * 52) * (errorReduction / 100);
    const annualSavings = annualLaborSavings + annualErrorSavings;

    // Total costs
    const annualOperationalCost = monthlyCost * 12;
    const totalFirstYearCost = implementationCost + annualOperationalCost;

    // ROI calculations
    const netAnnualSavings = annualSavings - annualOperationalCost;
    const paybackPeriod = implementationCost / (netAnnualSavings / 12);
    const monthlyROI = ((netAnnualSavings / 12) / totalFirstYearCost) * 100;

    // Three-year value
    const threeYearSavings = annualSavings * 3;
    const threeYearCosts = implementationCost + (annualOperationalCost * 3);
    const threeYearValue = threeYearSavings - threeYearCosts;

    // Hours and errors
    const annualHoursReclaimed = weeklyHoursSaved * 52;
    const errorsPerYear = employees * 2; // Assume 2 errors per employee per year
    const errorsSaved = errorsPerYear * (errorReduction / 100);

    setResults({
      annualSavings: Math.round(annualSavings),
      monthlyROI: Math.round(monthlyROI * 100) / 100,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearValue: Math.round(threeYearValue),
      hoursReclaimed: Math.round(annualHoursReclaimed),
      errorsSaved: Math.round(errorsSaved)
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const inputFields = [
    {
      key: 'employees',
      label: 'Number of Employees',
      type: 'number',
      min: 1,
      max: 1000,
      suffix: 'people'
    },
    {
      key: 'avgHourlyWage',
      label: 'Average Hourly Wage',
      type: 'number',
      min: 10,
      max: 200,
      prefix: '£',
      suffix: 'per hour'
    },
    {
      key: 'hoursPerWeekManual',
      label: 'Hours/Week on Manual Tasks',
      type: 'number',
      min: 1,
      max: 40,
      suffix: 'hours per employee'
    },
    {
      key: 'implementationCost',
      label: 'Implementation Cost',
      type: 'number',
      min: 1000,
      max: 100000,
      prefix: '£',
      suffix: 'one-time'
    },
    {
      key: 'monthlyCost',
      label: 'Monthly Running Cost',
      type: 'number',
      min: 50,
      max: 5000,
      prefix: '£',
      suffix: 'per month'
    },
    {
      key: 'productivityIncrease',
      label: 'Productivity Increase',
      type: 'number',
      min: 10,
      max: 80,
      suffix: '% efficiency gain'
    },
    {
      key: 'errorReduction',
      label: 'Error Reduction',
      type: 'number',
      min: 20,
      max: 95,
      suffix: '% fewer mistakes'
    },
    {
      key: 'avgErrorCost',
      label: 'Average Cost per Error',
      type: 'number',
      min: 10,
      max: 1000,
      prefix: '£',
      suffix: 'per error'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyber-black to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            AI ROI <span className="text-green-400">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate the potential return on investment for AI automation in your business.
            Get personalised projections based on your specific metrics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Business Inputs
            </h2>

            <div className="space-y-6">
              {inputFields.map((field, idx) => (
                <motion.div
                  key={field.key}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <label
                    htmlFor={`input-${field.key}`}
                    className="block text-sm font-semibold text-green-400"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    {field.prefix && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {field.prefix}
                      </span>
                    )}
                    <input
                      id={`input-${field.key}`}
                      type={field.type}
                      min={field.min}
                      max={field.max}
                      value={inputs[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className={`w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 ${
                        field.prefix ? 'pl-8' : ''
                      }`}
                      aria-describedby={field.suffix ? `${field.key}-suffix` : undefined}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                    {field.suffix && (
                      <span
                        id={`${field.key}-suffix`}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
                        aria-hidden="true"
                      >
                        {field.suffix}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-xl shadow-2xl shadow-green-500/25"
              {...hoverScale}
              onClick={() => setShowResults(true)}
            >
              Calculate ROI
            </motion.button>
          </motion.div>

          {/* Results */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              ROI Projections
            </h2>

            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">
                    {formatCurrency(results.annualSavings)}
                  </div>
                  <div className="text-sm text-gray-300">Annual Savings</div>
                </div>

                <div className="bg-green-500/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-green-400 mb-2">
                    {results.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-300">Months to Payback</div>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                  <span className="text-gray-300">Monthly ROI</span>
                  <span className="text-white font-semibold">{results.monthlyROI}%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                  <span className="text-gray-300">3-Year Value</span>
                  <span className="text-white font-semibold">{formatCurrency(results.threeYearValue)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                  <span className="text-gray-300">Hours Reclaimed/Year</span>
                  <span className="text-white font-semibold">{results.hoursReclaimed.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800/30 rounded-xl">
                  <span className="text-gray-300">Errors Prevented/Year</span>
                  <span className="text-white font-semibold">{results.errorsSaved}</span>
                </div>
              </div>

              {/* ROI Breakdown */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Investment Breakdown</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Implementation Cost:</span>
                    <span className="text-gray-300">{formatCurrency(inputs.implementationCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Annual Operating Cost:</span>
                    <span className="text-gray-300">{formatCurrency(inputs.monthlyCost * 12)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-700 pt-3">
                    <span className="text-green-400 font-semibold">Net Annual Benefit:</span>
                    <span className="text-green-400 font-semibold">
                      {formatCurrency(results.annualSavings - (inputs.monthlyCost * 12))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-xl border border-green-500/20">
              <p className="text-white mb-4">
                Ready to achieve these results? Let's discuss your AI automation strategy.
              </p>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-xl"
                {...hoverScale}
                onClick={() => {
                  // Scroll to assessment or contact
                  const assessment = document.getElementById('assessment');
                  if (assessment) {
                    assessment.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Free Assessment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-900/20 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-gray-300">Disclaimer:</strong> This calculator provides estimates based on industry averages and your inputs.
              Actual results may vary depending on implementation complexity, team adoption rates, and specific business processes.
              For a personalised assessment with more accurate projections, book a free consultation with our team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;