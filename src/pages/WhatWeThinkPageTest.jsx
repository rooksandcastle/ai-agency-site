import React from 'react';
import BackButton from '../components/BackButton';

const WhatWeThinkPageTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Test Back Button */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <BackButton to="/" />
      </div>

      {/* Simple Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Think</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Our insights, thought leadership, and deep thinking about the future of ethical AI in business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeThinkPageTest;