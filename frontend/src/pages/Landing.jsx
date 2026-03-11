import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '⚡',
    title: 'Instant Payouts',
    desc: 'No forms, no waiting. Compensation lands in your account within minutes of a disruption trigger.',
  },
  {
    icon: '🤖',
    title: 'AI Risk Assessment',
    desc: 'Machine learning models evaluate your zone\'s real-time weather, AQI, and traffic data.',
  },
  {
    icon: '🛡️',
    title: 'Weekly Coverage',
    desc: 'Affordable weekly plans starting at ₹39. Pay for the week you need, skip when you don\'t.',
  },
  {
    icon: '📍',
    title: 'Zone-Based Protection',
    desc: 'Coverage is validated against your active delivery zone so every payout is fair and accurate.',
  },
  {
    icon: '🔐',
    title: 'Fraud-Proof',
    desc: 'Multi-layer validation using GPS, timestamps, and ML anomaly detection ensures every claim is genuine.',
  },
  {
    icon: '📊',
    title: 'Transparent Triggers',
    desc: 'You always know exactly what causes a payout — rainfall thresholds, AQI limits, and official alerts.',
  },
];

const steps = [
  { step: '01', title: 'Register', desc: 'Sign up with your platform and delivery zone in under 2 minutes.' },
  { step: '02', title: 'AI Risk Scan', desc: 'Our AI analyses your zone and generates your personalized weekly premium.' },
  { step: '03', title: 'Purchase Cover', desc: 'Pay your small weekly premium and activate your protection instantly.' },
  { step: '04', title: 'Auto-Detection', desc: 'The system monitors weather, AQI, and zone data 24/7 in real time.' },
  { step: '05', title: 'Instant Payout', desc: 'When a trigger is detected in your zone, funds are transferred automatically.' },
];

const triggers = [
  { icon: '🌧️', event: 'Heavy Rainfall', threshold: '> 40 mm/hr', payout: '₹200–₹400' },
  { icon: '🌫️', event: 'Extreme AQI', threshold: 'AQI > 300', payout: '₹150–₹350' },
  { icon: '🌊', event: 'Flood Alert', threshold: 'Zone-level advisory', payout: '₹300–₹500' },
  { icon: '🚫', event: 'Zone Lockdown', threshold: 'Closure > 2 hrs', payout: '₹250–₹450' },
];

const plans = [
  { risk: 'Low Risk', color: 'emerald', premium: '₹39', payout: '₹800', zones: 'Dry city zones (Oct–Feb)' },
  { risk: 'Medium Risk', color: 'amber', premium: '₹59', payout: '₹1,200', zones: 'Urban zones, monsoon season' },
  { risk: 'High Risk', color: 'rose', premium: '₹79', payout: '₹2,000', zones: 'Flood-prone / high-AQI zones' },
];

export default function Landing() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-glow overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-indigo-300 mb-8 border border-indigo-500/20">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            AI-Powered Parametric Insurance — Hackathon 2026
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Your Earnings,{' '}
            <span className="gradient-text">Protected.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            GigShield AI automatically compensates Zepto, Blinkit, and Instamart delivery partners
            when heavy rains, floods, or zone closures stop their deliveries — no claims, no waiting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 text-base"
            >
              Get Weekly Cover — from ₹39
            </Link>
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 glass text-slate-300 hover:text-white font-semibold rounded-xl transition-all text-base border border-white/10 hover:border-white/20"
            >
              View Dashboard →
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {[
              { label: 'Weekly Cover', value: 'from ₹39' },
              { label: 'Max Payout', value: '₹2,000/week' },
              { label: 'Payout Time', value: '< 5 mins' },
              { label: 'Platforms', value: 'Zepto · Blinkit · Instamart' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why GigShield AI?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Built specifically for the on-demand delivery economy — fast, fair, and fully automated.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="glass glow-card rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-indigo-300 transition-colors">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From sign-up to payout — the entire process is automatic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                  <span className="text-indigo-400 font-black text-sm">{s.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-linear-to-r from-indigo-500/40 to-transparent" />
                )}
                <h3 className="text-white font-bold text-sm mb-1">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIGGERS TABLE */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Parametric Triggers</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Objective, measurable data — not opinions. When a threshold is crossed, your payout is automatic.
            </p>
          </div>
          <div className="glass glow-card rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold">Event</th>
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold">Trigger Threshold</th>
                  <th className="text-left px-6 py-4 text-slate-400 font-semibold">Compensation</th>
                </tr>
              </thead>
              <tbody>
                {triggers.map((t, i) => (
                  <tr key={t.event} className={`border-b border-white/5 ${i === triggers.length - 1 ? 'border-0' : ''} hover:bg-white/2 transition-colors`}>
                    <td className="px-6 py-4 text-white font-medium">
                      <span className="mr-2">{t.icon}</span>{t.event}
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-mono text-xs">{t.threshold}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">
                        {t.payout}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Weekly Plans</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Premiums are AI-calculated based on your zone's risk level. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.risk}
                className={`glass rounded-2xl p-6 flex flex-col ${
                  i === 1
                    ? 'border border-indigo-500/40 glow-card ring-1 ring-indigo-500/20 relative'
                    : 'border border-white/5'
                }`}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-4 ${
                  plan.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                  plan.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-rose-500/10 text-rose-400'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    plan.color === 'emerald' ? 'bg-emerald-400' :
                    plan.color === 'amber' ? 'bg-amber-400' : 'bg-rose-400'
                  }`} />
                  {plan.risk}
                </div>
                <div className="text-4xl font-black text-white mb-1">{plan.premium}<span className="text-base text-slate-400 font-normal">/week</span></div>
                <p className="text-slate-500 text-xs mb-1">{plan.zones}</p>
                <div className="my-5 border-t border-white/5" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Max weekly payout</span>
                  <span className="text-white font-bold">{plan.payout}</span>
                </div>
                <Link
                  to="/register"
                  className={`mt-6 text-center text-sm font-bold py-2.5 rounded-xl transition-all ${
                    i === 1
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25'
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center glass glow-card rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to protect your income?
          </h2>
          <p className="text-slate-400 mb-8">
            Join thousands of delivery partners who stopped worrying about unpredictable weather and zone closures.
          </p>
          <Link
            to="/register"
            className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/30 text-base"
          >
            Start Your Weekly Cover
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 text-center text-slate-600 text-sm">
        © 2026 GigShield AI — Protecting the Gig Economy, Rain or Shine.
      </footer>
    </div>
  );
}
