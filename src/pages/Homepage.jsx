import React, { useState } from 'react';

// Import all existing components
import PremiumHero from '../components/PremiumHero';
import ModernNavigation from '../components/ModernNavigation';
import EnhancedProcess from '../components/EnhancedProcess';
import ImprovedAssessment from '../components/ImprovedAssessment';
import ComprehensiveFooter from '../components/ComprehensiveFooter';
import CalendlyBooking from '../components/CalendlyBooking';

// Import all sections from the original App.jsx
import {
  WhoWeHelpSection,
  PerformanceMetricsBanner,
  AboutSection,
  AIResponsibilitySection,
  BusinessNecessitySection,
  EthicsSection,
  PricingSection,
  AssessmentSection,
  ContactSection,
  WhatsAppButton
} from '../App';

const Homepage = () => {
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <ModernNavigation onCalendlyClick={() => setShowCalendlyModal(true)} />
      <main className="relative">
        <PremiumHero onCalendlyClick={() => setShowCalendlyModal(true)} />
        <WhoWeHelpSection />
        <EnhancedProcess />
        <PricingSection />
        <AboutSection />
        <AIResponsibilitySection />
        <EthicsSection />
        <AssessmentSection />
        <ContactSection onCalendlyClick={() => setShowCalendlyModal(true)} />
      </main>
      <ComprehensiveFooter />
      <WhatsAppButton />

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <CalendlyBooking
          isModal={true}
          onClose={() => setShowCalendlyModal(false)}
        />
      )}
    </div>
  );
};

export default Homepage;