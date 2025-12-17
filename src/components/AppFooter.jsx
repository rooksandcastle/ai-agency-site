import React from 'react';
import { Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'AI Front Desk', href: '/ai-front-desk' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/#about' },
  { label: 'Book a free consultation', href: '/book' },
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
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 space-y-8 text-sm text-text-secondary">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Rooks & Castle</h3>
          <p className="max-w-2xl">
            Practical AI systems for service businesses. We set up the infrastructure so you get found fast, look trustworthy, and respond like a pro.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-text-secondary hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || '#'}
                aria-label={link.label}
                className="text-text-secondary hover:text-white transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-text-secondary">
          <span>hello@rooksandcastle.co.uk</span>
          <span>© {new Date().getFullYear()} Rooks & Castle. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
