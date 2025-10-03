import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animated Background
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
    <div className="absolute top-1/5 left-1/5 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-green-500/15 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/5 right-1/5 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
  </div>
);

// Button Component
const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-500 hover:to-green-600 shadow-2xl shadow-green-500/30'
    : 'border-2 border-green-400 text-green-400 hover:bg-green-400/10';

  return (
    <motion.button
      className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${styles} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

const CallCaptureHome = () => {
  const [visible, setVisible] = useState(false);

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
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-3" />
            <span className="text-red-400 font-medium text-sm tracking-wide">
              MISSING CALLS = LOSING £££ MONTHLY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Never Miss Another<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Customer
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/20 rounded-full backdrop-blur-md mb-6"
          >
            <span className="text-white font-medium text-lg">Out-of-Hours Phone Coverage for Your Business</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed"
          >
            Every call is answered professionally, every lead is captured, every booking is automated. 24/7—even when you can't.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-400 mb-4"
          >
            Essential operational infrastructure for modern small businesses
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base text-gray-300 mb-12"
          >
            Your business is now open 24/7. For less than the cost of one part-time shift weekly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <CTAButton onClick={handleCalendly}>
              Book Free Audit Call
            </CTAButton>
            <CTAButton variant="secondary" onClick={handleWhatsApp}>
              Message on WhatsApp
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm text-gray-500"
          >
            Psychology-informed AI implementation • Human-centered • Ethical by design
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              The Hidden Cost of <span className="text-red-400">Missed Calls</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '40%', label: 'Calls go unanswered', detail: 'When you\'re on site or with clients' },
              { stat: '67%', label: 'Won\'t leave voicemail', detail: 'They call your competitor instead' },
              { stat: '£150', label: 'Average job value', detail: '10 missed calls = £1,500 lost weekly' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-red-500/20 rounded-2xl p-8 text-center">
                <div className="text-5xl font-black text-red-400 mb-4">{item.stat}</div>
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <div className="text-sm text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your AI Front Desk <span className="text-green-400">Can Handle</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than just answering calls—it's your 24/7 business partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                desc: 'Your brand voice, your script. Sounds professional, feels personal—every single time.'
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
                desc: 'Bookings, quotes, FAQs, appointment changes—handles it all without breaking a sweat.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">See It In <span className="text-green-400">Action</span></h3>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Call Arrives', desc: 'Customer calls at 11pm on Sunday—you\'re off the clock' },
                { step: '2', title: 'AI Answers Professionally', desc: 'Custom greeting, captures details, assesses urgency' },
                { step: '3', title: 'You Get Instant Alert', desc: 'SMS with full lead info: name, contact, needs, urgency score' },
                { step: '4', title: 'You Call Back & Close', desc: 'Follow up when it suits you—customer already impressed' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-gradient-to-r from-green-500/5 to-green-600/5 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-lg shadow-green-500/30">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Proven Results</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-white"><strong>15 leads captured</strong> in first 30 days</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-white"><strong>£2,250 new revenue</strong> from missed calls</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-white"><strong>Paid for itself in 2 weeks</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment - 3-Tier Pricing */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your <span className="text-green-400">Investment</span>
            </h2>
            <p className="text-xl text-gray-300 mb-3">Transparent pricing. No hidden fees.</p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              One-time setup + simple monthly subscription
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Essential Front Desk */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500/50 rounded-2xl p-8 transform md:scale-105 relative shadow-2xl shadow-green-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Essential Front Desk</h3>
              <p className="text-gray-300 text-sm mb-6">Mobile trades, solo consultants, small service providers</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-green-400">£500</span>
                  <span className="text-gray-400 text-lg">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">£150</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li>✓ 24/7 call answering with natural voice</li>
                <li>✓ Appointment booking (Google Calendar/Calendly)</li>
                <li>✓ Basic FAQ handling (5-10 questions)</li>
                <li>✓ Lead notification via SMS/email</li>
                <li>✓ 2-week setup, 30-day optimisation</li>
              </ul>

              <p className="text-xs text-gray-400 italic">For solo operators & 2-3 person teams • £100k-£300k revenue</p>

              <CTAButton onClick={handleCalendly} className="w-full mt-6">
                Get Started →
              </CTAButton>
            </div>

            {/* Professional Front Desk */}
            <div className="bg-gray-900/50 border border-gray-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Professional Front Desk</h3>
              <p className="text-gray-300 text-sm mb-6">Growing teams, multi-location, or higher volume</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">£800</span>
                  <span className="text-gray-400 text-lg">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">£200</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li>✓ Everything in Essential, plus:</li>
                <li>✓ CRM integration (Zapier, custom API)</li>
                <li>✓ Advanced call routing (team availability)</li>
                <li>✓ Extended FAQ library (20+ questions)</li>
                <li>✓ Monthly performance review & tuning</li>
              </ul>

              <p className="text-xs text-gray-400 italic">For 4-10 person teams • £300k-£750k revenue</p>

              <CTAButton variant="secondary" onClick={handleCalendly} className="w-full mt-6">
                Learn More →
              </CTAButton>
            </div>

            {/* Enterprise Front Desk */}
            <div className="bg-gray-900/50 border border-gray-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Front Desk</h3>
              <p className="text-gray-300 text-sm mb-6">Multi-site operations, complex workflows</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">£1,200</span>
                  <span className="text-gray-400 text-lg">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">£300</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li>✓ Everything in Professional, plus:</li>
                <li>✓ Multi-location support (unified or separate)</li>
                <li>✓ Custom integrations & workflows</li>
                <li>✓ Priority support (2-hour response SLA)</li>
                <li>✓ Bi-weekly performance analytics calls</li>
              </ul>

              <p className="text-xs text-gray-400 italic">For 10+ person teams • £750k+ revenue</p>

              <CTAButton variant="secondary" onClick={handleCalendly} className="w-full mt-6">
                Contact Sales →
              </CTAButton>
            </div>
          </div>

          {/* Enhanced Social Proof */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/5 to-green-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-green-500/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Trusted by Businesses Like Yours
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { icon: '🔧', label: 'Plumbers' },
                  { icon: '⚡', label: 'Electricians' },
                  { icon: '✂️', label: 'Hair Salons' },
                  { icon: '💆', label: 'Beauty Clinics' },
                  { icon: '🏠', label: 'Home Services' },
                  { icon: '🛠️', label: 'Tradespeople' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                    <p className="text-gray-300 text-sm font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Common <span className="text-green-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How much does it actually cost?',
                a: 'Essential Front Desk starts at £500 setup + £150/month. Professional is £800 + £200/month. Enterprise is £1,200 + £300/month. Most businesses pay back the setup within 4-8 weeks from new leads alone.'
              },
              {
                q: 'How long does setup take?',
                a: '2 weeks or less. We handle everything—custom greetings, call routing, SMS alerts, dashboard setup. You just test it and approve.'
              },
              {
                q: 'What if it doesn\'t capture enough leads?',
                a: 'ROI guarantee: If we don\'t help you capture at least 5 quality leads in the first 30 days, you get 50% of your investment back. No questions, no hassle.'
              },
              {
                q: 'Do I need technical knowledge?',
                a: 'Zero. We set up everything, train your team, and provide 30 days of support. You just receive SMS alerts and call leads back.'
              },
              {
                q: 'What about my existing phone number?',
                a: 'Keep it. We add intelligent call forwarding that only activates when you\'re unavailable. Nothing changes from your customers\' perspective.'
              },
              {
                q: 'Can the AI handle my specific business needs?',
                a: 'Yes. Custom greetings, industry-specific FAQs, booking systems, quote requests—we tailor everything to your exact business. That\'s why we do the audit first.'
              },
              {
                q: 'Are there long-term contracts?',
                a: 'No. Flexible month-to-month after setup. Cancel anytime if you\'re not seeing value (though most clients stay because it pays for itself).'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Stop Losing Money to Missed Calls
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Free 15-minute audit: We'll calculate exactly how much you're losing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <CTAButton onClick={handleCalendly}>
                Book Free Audit
              </CTAButton>
              <CTAButton variant="secondary" onClick={handleWhatsApp}>
                WhatsApp Us
              </CTAButton>
            </div>
            <p className="text-sm text-gray-500">No pressure. No sales pitch. Just honest assessment.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>
    </div>
  );
};

export default CallCaptureHome;