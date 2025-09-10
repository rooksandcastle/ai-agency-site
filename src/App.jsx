import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Simple inline components to get started
function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur bg-brand-bg/60 border-b border-white/5 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-brand-accent">YOUR AGENCY</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-brand-accent">Home</a>
          <a href="/about" className="hover:text-brand-accent">About</a>
          <a href="/bookings" className="bg-brand-primary text-black px-4 py-2 rounded-full font-medium">Book</a>
        </div>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(124,92,255,0.15),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Build smarter, ship faster.
          </h1>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto">
            We design and deploy AI systems that turn bottlenecks into leverage â€" from copilots to full-stack automation.
          </p>
          <div className="space-x-4">
            <a href="/bookings" className="bg-brand-primary text-black px-6 py-3 rounded-full font-medium hover:opacity-90">
              Book a Consultation
            </a>
            <a href="#services" className="border border-white/10 px-6 py-3 rounded-full hover:border-white/20">
              Explore Services
            </a>
          </div>
        </div>
      </section>
      
{/* Services Section */}
<section className="py-20 border-t border-white/5">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
      <p className="text-brand-muted mt-3">Modular services to meet you where you are.</p>
    </div>
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {[
        { title: "AI Strategy & Roadmaps", description: "Identify high-ROI use cases and pragmatic delivery plans." },
        { title: "Custom Copilots & Agents", description: "Assistants integrated with your tools, data, and workflows." },
        { title: "Data & Retrieval", description: "RAG pipelines, evaluation, guardrails, observability." },
        { title: "Automation & MLOps", description: "From prototypes to production with CI/CD and monitoring." }
      ].map((service, idx) => (
        <div key={idx} className="rounded-2xl p-6 bg-brand-card border border-white/5">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="text-brand-muted mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's talk</h2>
            <p className="text-brand-muted mt-3">Tell us about your goals. We'll follow up within 1 business day.</p>
          </div>
          <div className="max-w-md mx-auto">
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-brand-card border border-white/10 px-4 py-3" />
              <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl bg-brand-card border border-white/10 px-4 py-3" />
              <input name="company" placeholder="Company" className="w-full rounded-xl bg-brand-card border border-white/10 px-4 py-3" />
              <textarea name="message" required placeholder="What are you building?" rows="5" className="w-full rounded-xl bg-brand-card border border-white/10 px-4 py-3"></textarea>
              <button type="submit" className="w-full rounded-full px-6 py-3 bg-brand-primary text-black font-medium hover:opacity-90">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text p-8">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">About us</h1>
        <p className="text-brand-muted max-w-3xl mb-10">We're a senior team of engineers and designers building AI-native products and automations. Your results are our reputation.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { k: 'Markets', v: 'B2B SaaS, e-commerce, ops-heavy' },
            { k: 'Stack', v: 'OpenAI, Claude, vector DBs, orchestration, evals' },
            { k: 'Model ops', v: 'Guardrails, tracing, cost & performance tuning' }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-6 bg-brand-card border border-white/5">
              <div className="text-sm text-brand-muted">{item.k}</div>
              <div className="text-lg font-semibold mt-1">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Bookings() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text p-8">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Book a consultation</h1>
        <p className="text-brand-muted mb-8">Pick a time that works for you.</p>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-brand-card p-8 text-center">
          <p className="text-brand-muted">Replace this with your Calendly embed code</p>
          <p className="text-sm text-brand-muted mt-2">Get your embed code from calendly.com</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}