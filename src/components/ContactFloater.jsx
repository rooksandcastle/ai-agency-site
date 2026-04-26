import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mail, MessageCircle, Phone, Calendar } from 'lucide-react';

const options = [
  { label: 'Email us', icon: Mail, href: 'mailto:hello@rooksandcastle.co.uk', bg: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/447533595684', bg: 'bg-green-500/10 border-green-500/30 text-green-400' },
  { label: 'Call us', icon: Phone, href: 'tel:+447533595684', bg: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
  { label: 'Book a meeting', icon: Calendar, href: 'https://calendly.com/rooksandcastle101/30min', bg: 'bg-premium-green/10 border-premium-green/30 text-premium-green' },
];

const ContactFloater = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            {options.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.href.startsWith('mailto:') || opt.href.startsWith('tel:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`flex items-center gap-3 border rounded-full px-4 py-2.5 text-sm font-medium bg-brand-surface backdrop-blur-md shadow-lg hover:scale-105 transition-transform ${opt.bg}`}
              >
                <opt.icon className="w-4 h-4 flex-shrink-0" />
                {opt.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-premium-green flex items-center justify-center shadow-[0_8px_30px_-6px_rgba(16,185,129,0.7)] hover:bg-premium-green/90 transition-colors"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6 text-gray-900" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageSquare className="w-6 h-6 text-gray-900" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ContactFloater;
