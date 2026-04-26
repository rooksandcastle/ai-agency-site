const SITE_URL = 'https://www.rooksandcastle.co.uk';

const PAGE_META = {
  '/': {
    title: 'R&C — Automations for Businesses',
    description: 'Never miss another customer. AI systems that answer calls, book appointments, and capture leads 24/7 — built for small businesses.',
    image: `${SITE_URL}/og-image.png`,
  },
  '/services': {
    title: 'Our Services | Rooks & Castle',
    description: 'AI Front Desk, Workflow Automation, and Smart Follow-Up — three systems built to keep your business running while you focus on the work.',
    image: `${SITE_URL}/og-image.png`,
  },
  '/services/ai-front-desk': {
    title: 'AI Front Desk | Rooks & Castle',
    description: 'Every call answered, every enquiry captured — 24/7. An AI receptionist that handles calls in your name and books appointments automatically.',
    image: `${SITE_URL}/media/Services/AI%20FRONT%20DESK%20HEADER.jpg`,
  },
  '/services/workflow-automation': {
    title: 'Workflow Automation | Rooks & Castle',
    description: 'The admin that eats your evenings — automated. Quotes, invoices, scheduling, and follow-ups that run themselves so you can focus on the job.',
    image: `${SITE_URL}/media/Services/Workflow%20Automation.webp`,
  },
  '/services/smart-follow-up': {
    title: 'Smart Follow-Up | Rooks & Castle',
    description: 'Stop chasing, start closing. Automated sequences that follow up with leads, send payment reminders, and re-engage past customers.',
    image: `${SITE_URL}/media/Services/Smart%20Follow%20up.webp`,
  },
  '/industries': {
    title: 'Industries We Serve | Rooks & Castle',
    description: 'AI automation built for trades, salons, and consultants. Real systems for real businesses — not generic software.',
    image: `${SITE_URL}/og-image.png`,
  },
  '/industries/trades': {
    title: 'AI for Trades & Home Services | Rooks & Castle',
    description: "You can't answer the phone when you're under a sink. We make sure every call is captured, every job is followed up, and every invoice gets paid.",
    image: `${SITE_URL}/media/Industries/Trades_1.png`,
  },
  '/industries/salons': {
    title: 'AI for Salons & Personal Services | Rooks & Castle',
    description: 'AI receptionist that books appointments, reduces no-shows by 40%, and fills your diary — while you focus on clients.',
    image: `${SITE_URL}/media/Industries/Salon_1.png`,
  },
  '/industries/consultants': {
    title: 'AI for Consultants & Self-Employed | Rooks & Castle',
    description: "You can't be doing the work and chasing it at the same time. We automate enquiry responses, proposal follow-ups, and invoice reminders.",
    image: `${SITE_URL}/media/Industries/Consultant_1.png`,
  },
  '/contact': {
    title: 'Contact Us | Rooks & Castle',
    description: 'Get in touch with Rooks & Castle. Book a free 30-minute call and find out exactly what we would automate first in your business.',
    image: `${SITE_URL}/og-image.png`,
  },
  '/research': {
    title: 'Research & Insights | Rooks & Castle',
    description: 'Thinking on AI, automation, and what it actually means for small businesses. No hype — just honest, practical insight.',
    image: `${SITE_URL}/og-image.png`,
  },
};

const STATIC_EXTENSIONS = new Set([
  'js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'svg', 'ico',
  'woff', 'woff2', 'ttf', 'otf', 'json', 'map', 'mp4', 'webm',
  'gif', 'pdf', 'txt', 'xml', 'lottie',
]);

function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, context) {
  const url = new URL(req.url);
  const path = url.pathname;

  // Pass static assets straight through
  const ext = path.includes('.') ? path.split('.').pop().toLowerCase() : '';
  if (ext && STATIC_EXTENSIONS.has(ext)) {
    return context.next();
  }

  const response = await context.next();

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const meta = PAGE_META[path] || PAGE_META['/'];
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  let html = await response.text();

  html = html
    .replace(/(<title>)[^<]*(<\/title>)/, `$1${esc(meta.title)}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/g, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/g, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/g, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/g, `$1${meta.image}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/g, `$1${canonicalUrl}$2`)
    .replace(/(<meta property="twitter:title" content=")[^"]*(")/g, `$1${esc(meta.title)}$2`)
    .replace(/(<meta property="twitter:description" content=")[^"]*(")/g, `$1${esc(meta.description)}$2`)
    .replace(/(<meta property="twitter:image" content=")[^"]*(")/g, `$1${meta.image}$2`);

  const headers = new Headers(response.headers);
  headers.set('content-type', 'text/html; charset=utf-8');

  return new Response(html, { status: response.status, headers });
}
