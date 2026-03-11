import React, { useState } from 'react';

const riskData = [
  {
    icon: '🌧️',
    label: 'Rainfall',
    value: '12 mm/hr',
    status: 'Safe',
    statusColor: 'emerald',
    detail: 'Light rain. Below trigger threshold of 40 mm/hr.',
  },
  {
    icon: '🌫️',
    label: 'Air Quality Index',
    value: 'AQI 112',
    status: 'Moderate',
    statusColor: 'amber',
    detail: 'Moderate air quality. Trigger threshold: AQI 300.',
  },
  {
    icon: '🚦',
    label: 'Zone Traffic',
    value: 'Normal',
    status: 'Safe',
    statusColor: 'emerald',
    detail: 'No lockdowns or curfews detected in your zone.',
  },
  {
    icon: '🌊',
    label: 'Flood Alerts',
    value: 'None Active',
    status: 'Safe',
    statusColor: 'emerald',
    detail: 'No flood advisories issued for Bangalore South.',
  },
];

const recentClaims = [
  { date: 'Mar 01, 2026', event: 'Heavy Rainfall (52mm/hr)', amount: '₹350', status: 'Paid' },
  { date: 'Feb 21, 2026', event: 'Extreme AQI (AQI 310)', amount: '₹200', status: 'Paid' },
  { date: 'Feb 08, 2026', event: 'Zone Lockdown (4 hrs)', amount: '₹300', status: 'Paid' },
];

const StatusDot = ({ color }) => (
  <span className={`inline-block w-2 h-2 rounded-full ${
    color === 'emerald' ? 'bg-emerald-400' :
    color === 'amber' ? 'bg-amber-400' : 'bg-rose-400'
  }`} />
);

export default function Dashboard() {
  const [zone] = useState('Bangalore South');

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-2">
          <StatusDot color="emerald" />
          Protection Active — Week of Mar 10–16, 2026
        </div>
        <h1 className="text-3xl font-black text-white">Worker Dashboard</h1>
        <p className="text-slate-500 mt-1 text-sm">Zone: <span className="text-slate-300 font-medium">{zone}</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Policy Card */}
          <div className="rounded-2xl p-6 bg-linear-to-br from-indigo-600 via-indigo-700 to-blue-800 relative overflow-hidden shadow-2xl shadow-indigo-900/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-900/40 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-indigo-200 text-xs font-semibold uppercase tracking-widest">Active Policy</span>
                <h2 className="text-2xl font-black text-white mt-1">Medium Risk — Weekly Standard</h2>
                <p className="text-indigo-200 text-sm mt-1">Expires Sunday, Mar 16 · 11:59 PM</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-indigo-200 mb-1">Max Payout</div>
                <div className="text-3xl font-black text-white">₹1,200</div>
                <div className="text-xs text-indigo-300 mt-0.5">Premium paid: ₹59</div>
              </div>
            </div>
          </div>

          {/* AI Risk Monitor */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-bold">Live AI Risk Monitor</h2>
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Updated just now
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {riskData.map((item) => (
                <div key={item.label} className="glass glow-card rounded-xl p-5 hover:border-indigo-500/20 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                        <div className="text-white font-bold">{item.value}</div>
                      </div>
                    </div>
                    <span className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.statusColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                      item.statusColor === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      <StatusDot color={item.statusColor} />
                      {item.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Claims */}
          <div>
            <h2 className="text-white font-bold mb-4">Recent Claims</h2>
            <div className="glass glow-card rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs">Date</th>
                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs">Event</th>
                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs">Amount</th>
                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentClaims.map((claim, i) => (
                    <tr key={i} className={`${i < recentClaims.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/2 transition-colors`}>
                      <td className="px-5 py-3.5 text-slate-400 text-xs whitespace-nowrap">{claim.date}</td>
                      <td className="px-5 py-3.5 text-white text-xs">{claim.event}</td>
                      <td className="px-5 py-3.5 text-emerald-400 font-bold text-xs">{claim.amount}</td>
                      <td className="px-5 py-3.5">
                        <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                          {claim.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDEBAR --- */}
        <div className="lg:col-span-4 flex flex-col gap-5">

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'This Week Earned', value: '₹550', color: 'emerald' },
              { label: 'Total Payouts', value: '₹850', color: 'indigo' },
              { label: 'Weeks Covered', value: '4', color: 'slate' },
              { label: 'Risk Score', value: '28/100', color: 'amber' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4">
                <div className={`text-xl font-black ${
                  stat.color === 'emerald' ? 'text-emerald-400' :
                  stat.color === 'indigo' ? 'text-indigo-400' :
                  stat.color === 'amber' ? 'text-amber-400' : 'text-white'
                }`}>{stat.value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Recommendation */}
          <div className="glass glow-card rounded-2xl p-5 border border-indigo-500/15">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🤖</span>
              <h3 className="text-white font-bold text-sm">AI Recommendation</h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your zone has a <span className="text-amber-400 font-semibold">38% chance</span> of heavy rainfall
              next Monday based on seasonal patterns. Consider purchasing your next week's cover early.
            </p>
            <button className="w-full mt-4 py-2.5 text-xs font-bold text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-lg transition-all">
              Renew Coverage Early
            </button>
          </div>

          {/* Zone Info */}
          <div className="glass rounded-2xl p-5">
            <h3 className="text-white font-bold text-sm mb-4">Zone Overview</h3>
            <div className="space-y-3">
              {[
                { label: 'Active Zone', val: 'Bangalore South' },
                { label: 'Platform', val: 'Blinkit' },
                { label: 'Risk Category', val: 'Medium' },
                { label: 'Cover Expires', val: 'Mar 16, 2026' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="text-white font-medium">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
