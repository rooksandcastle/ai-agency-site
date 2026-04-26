import React from 'react';
import { Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

const serviceLinks = [
  { label: 'AI Front Desk', href: '/services/ai-front-desk' },
  { label: 'Workflow Automation', href: '/services/workflow-automation' },
  { label: 'Smart Follow-Up', href: '/services/smart-follow-up' },
];

const industryLinks = [
  { label: 'Trades & Home Services', href: '/industries/trades' },
  { label: 'Salons & Personal Services', href: '/industries/salons' },
  { label: 'Consultants & Professionals', href: '/industries/consultants' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Accessibility', href: '/accessibility' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/108562997', icon: Linkedin },
  { label: 'X', href: 'https://x.com/rooksandcastle?s=21', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/rooksandcastle', icon: Instagram },
  { label: 'WhatsApp', href: 'https://wa.me/447533595684', icon: MessageCircle },
];

const AppFooter = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <h3 className="text-base font-bold text-white">Rooks & Castle</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Practical AI systems for UK service businesses. We set up the infrastructure so you never miss a customer again.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Get in touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://calendly.com/rooksandcastle101/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-premium-green hover:text-premium-green-light transition-colors font-medium"
                >
                  Book a Free Call →
                </a>
              </li>
              <li>
                <a href="mailto:hello@rooksandcastle.co.uk" className="text-sm text-text-secondary hover:text-white transition-colors">
                  hello@rooksandcastle.co.uk
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/research" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Research
                </a>
              </li>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-text-secondary">
          <span>© {new Date().getFullYear()} Rooks & Castle Ltd. All rights reserved.</span>
          <span>UK-based · GDPR compliant · No lock-in contracts</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
