import React from 'react';
import {
  Compass,
  Target,
  Workflow,
  PhoneCall,
  LineChart,
  ShieldCheck,
  Layers,
  Globe,
  Building2,
  Users,
  Briefcase,
  Stethoscope,
  Sparkles,
  MessageCircle,
  Headphones,
  Clock3,
  ClipboardCheck,
  CalendarRange,
  Inbox,
} from 'lucide-react';

const withIcon = (Component) => {
  const WrappedIcon = ({ className = '', size = 22, strokeWidth = 1.5, ...rest }) =>
    React.createElement(Component, {
      className: `text-white ${className}`,
      size,
      strokeWidth,
      ...rest,
    });
  WrappedIcon.displayName = Component.displayName || Component.name;
  return WrappedIcon;
};

export const Icons = {
  Strategy: withIcon(Compass),
  Growth: withIcon(Target),
  Operations: withIcon(Layers),
  Call: withIcon(PhoneCall),
  Insight: withIcon(LineChart),
  Shield: withIcon(ShieldCheck),
  Globe: withIcon(Globe),
  Workflow: withIcon(Workflow),
  Trades: withIcon(Briefcase),
  Clinic: withIcon(Stethoscope),
  Property: withIcon(Building2),
  People: withIcon(Users),
  Spark: withIcon(Sparkles),
  Message: withIcon(MessageCircle),
  Support: withIcon(Headphones),
  Clock: withIcon(Clock3),
  Checklist: withIcon(ClipboardCheck),
  Calendar: withIcon(CalendarRange),
  Inbox: withIcon(Inbox),
};

export default Icons;
