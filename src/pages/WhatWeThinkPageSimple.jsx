import React from 'react';
import { Link } from 'react-router-dom';

const WhatWeThinkPageSimple = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: 'white', padding: '2rem' }}>
      {/* Simple Back Button */}
      <Link to="/" style={{ color: '#10b981', textDecoration: 'none', marginBottom: '2rem', display: 'block' }}>
        ← Back to Home
      </Link>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          What We <span style={{ color: '#10b981' }}>Think</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#d1d5db', maxWidth: '800px', margin: '0 auto' }}>
          Our insights, thought leadership, and deep thinking about the future of ethical AI in business.
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#374151', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: '#10b981', fontSize: '2rem', marginBottom: '1rem' }}>AI Insights & Thought Leadership</h2>
          <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
            We believe AI should enhance human potential, not replace it. Our approach focuses on creating solutions that are transparent, ethical, and designed with the end user in mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeThinkPageSimple;