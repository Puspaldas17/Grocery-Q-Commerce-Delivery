import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const platforms = ['Zepto', 'Blinkit', 'Instamart', 'Other'];
const zones = [
  'Bangalore North', 'Bangalore South', 'Bangalore East', 'Bangalore West',
  'Mumbai Central', 'Mumbai North', 'Mumbai South',
  'Delhi North', 'Delhi South', 'Delhi East', 'Delhi West',
  'Pune Central', 'Hyderabad Central', 'Chennai Central',
];

export default function Register() {
  const [form, setForm] = useState({ name: '', phone: '', platform: '', zone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [workerId] = useState(`WKR-${Math.floor(1000 + Math.random() * 9000)}`);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate API call
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="glass glow-card rounded-3xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-white mb-2">You're Protected!</h2>
          <p className="text-slate-400 text-sm mb-6">
            Welcome to GigShield AI, <span className="text-white font-semibold">{form.name}</span>.
            Your Worker ID is:
          </p>
          <div className="px-5 py-3 bg-slate-800/80 border border-white/10 rounded-xl font-mono text-indigo-400 font-bold text-lg mb-8">
            {workerId}
          </div>
          <div className="space-y-3">
            <Link
              to="/dashboard"
              className="block w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all text-sm text-center"
            >
              Go to My Dashboard
            </Link>
            <Link
              to="/"
              className="block w-full py-3 glass hover:bg-white/5 text-slate-300 font-semibold rounded-xl transition-all text-sm text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left — Info Panel */}
        <div className="lg:pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-indigo-300 mb-6 border border-indigo-500/20">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Setup takes less than 2 minutes
          </div>
          <h1 className="text-4xl font-black text-white mb-4 leading-tight">
            Start Your<br />
            <span className="gradient-text">Weekly Cover</span>
          </h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Register once and GigShield AI will automatically monitor your delivery zone, 
            assess risk, and pay you when disruptions happen — no action required.
          </p>

          <div className="space-y-5">
            {[
              { icon: '🤖', title: 'AI Calculates Your Premium', desc: 'Based on your zone\'s historical weather, AQI trends, and risk data.' },
              { icon: '⚡', title: 'Instant Payout on Triggers', desc: 'Compensation reaches your account in minutes — no claim forms.' },
              { icon: '🔐', title: 'Fraud-Proof Validation', desc: 'Your location and activity are automatically verified to ensure fair payouts.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center shrink-0 text-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="glass glow-card rounded-3xl p-7">
          <h2 className="text-white font-black text-xl mb-1">Create Your Account</h2>
          <p className="text-slate-500 text-sm mb-7">Enter your details to get instant weekly coverage.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Rajan Kumar"
                className="w-full bg-slate-800/60 border border-white/10 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">Mobile Number</label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center px-3 bg-slate-800/60 border border-white/10 rounded-xl text-slate-400 text-sm font-mono shrink-0">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="9876543210"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="flex-1 bg-slate-800/60 border border-white/10 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm transition-all"
                />
              </div>
            </div>

            {/* Platform */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">Delivery Platform</label>
              <select
                name="platform"
                value={form.platform}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/60 border border-white/10 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all appearance-none"
              >
                <option value="" disabled className="text-slate-600">Select your platform</option>
                {platforms.map((p) => (
                  <option key={p} value={p} className="bg-slate-800">{p}</option>
                ))}
              </select>
            </div>

            {/* Zone */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">Primary Delivery Zone</label>
              <select
                name="zone"
                value={form.zone}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/60 border border-white/10 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 text-white rounded-xl px-4 py-3 text-sm transition-all appearance-none"
              >
                <option value="" disabled className="text-slate-600">Select your delivery zone</option>
                {zones.map((z) => (
                  <option key={z} value={z} className="bg-slate-800">{z}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Setting up your coverage...
                </>
              ) : (
                'Activate My Weekly Cover →'
              )}
            </button>

            <p className="text-center text-slate-600 text-xs">
              By registering you agree to our{' '}
              <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
