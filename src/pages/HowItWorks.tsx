import { useState } from 'react';

export default function HowItWorks() {
  // Simulator State
  const [referrals, setReferrals] = useState<number>(3);
  const [teamDepth, setTeamDepth] = useState<number>(4);
  const [avgPackage, setAvgPackage] = useState<number>(250);

  // Compensation Math
  const directBonus = referrals * avgPackage * 0.10;
  const totalTeamSize = Math.round(referrals * Math.pow(2, teamDepth - 1));
  const estimatedVolume = totalTeamSize * avgPackage;
  const binaryBonus = Math.round((estimatedVolume / 2) * 0.12);
  const totalEarnings = directBonus + binaryBonus;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-24">
      
      {/* 4-Step Process Section */}
      <section className="space-y-16">
        <div className="space-y-4 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Simple Process</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            How Haventust Works
          </h1>
          <p className="text-slate-400 text-sm font-light">
            An automated, decentralized organizational structure designed for secure network marketing.
          </p>
        </div>

        {/* Step Circles Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-12 items-start max-w-5xl mx-auto pt-6">
          <div className="hidden sm:block absolute top-[44px] left-[12%] right-[12%] h-[1.5px] border-t border-dashed border-[#E6B044]/30 -z-0" />

          {[
            { step: '1', name: 'Register', desc: 'Create your free Haventust account', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' },
            { step: '2', name: 'Choose Plan', desc: 'Select the Gold Plan and activate', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
            { step: '3', name: 'Build Your Network', desc: 'Connect with people and build your team', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
            { step: '4', name: 'Earn Unlimited', desc: 'Earn daily, weekly & monthly through your network', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center relative z-10 space-y-4 group">
              <div className="w-22 h-22 rounded-full border-2 border-slate-800 bg-[#02050A] group-hover:border-[#E6B044] shadow-md hover:shadow-[#E6B044]/15 flex items-center justify-center text-slate-400 group-hover:text-[#E6B044] transition-all duration-300 relative">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={item.icon} />
                </svg>
                <span className="absolute bottom-[-6px] right-[-6px] w-6 h-6 rounded-full bg-[#E6B044] text-slate-950 font-black text-xs flex items-center justify-center shadow">
                  {item.step}
                </span>
              </div>
              <div className="text-center pt-2">
                <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">{item.name}</h4>
                <p className="text-[11px] text-slate-500 max-w-[180px] mx-auto leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simulator Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-[#0b0a0f] border border-slate-800/85 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#E6B044] uppercase tracking-widest">Earnings Simulator</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">MLM Income Estimator</h2>
            <p className="text-slate-400 text-sm mt-1">Adjust parameters below to estimate binary matching and referral payouts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">Direct Referrals</span>
                  <span className="text-[#E6B044] font-bold">{referrals} Partners</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={referrals} 
                  onChange={(e) => setReferrals(parseInt(e.target.value))}
                  className="w-full accent-[#E6B044] h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">Downline Network Depth</span>
                  <span className="text-[#E6B044] font-bold">{teamDepth} Levels</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="8" 
                  value={teamDepth} 
                  onChange={(e) => setTeamDepth(parseInt(e.target.value))}
                  className="w-full accent-[#E6B044] h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 Lv</span>
                  <span>4 Lv</span>
                  <span>8 Lv</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300 font-medium">Average Product Package</span>
                  <span className="text-[#E6B044] font-bold">${avgPackage} USD</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="50"
                  value={avgPackage} 
                  onChange={(e) => setAvgPackage(parseInt(e.target.value))}
                  className="w-full accent-[#E6B044] h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>$50</span>
                  <span>$1,000</span>
                  <span>$2,000</span>
                </div>
              </div>
            </div>

            {/* Earnings details */}
            <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">Estimated Payout</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Direct Sponsorship (10%)</span>
                    <span className="text-white font-mono font-medium">${directBonus.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Binary Matching Volume</span>
                    <span className="text-white font-mono font-medium">${estimatedVolume.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Binary Leg Payout (12% Match)</span>
                    <span className="text-white font-mono font-medium">${binaryBonus.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-6">
                <span className="text-xs text-slate-500 block mb-1">Total Estimated Network Rewards</span>
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-emerald-400 to-[#E6B044] bg-clip-text text-transparent">
                  ${totalEarnings.toLocaleString()}
                </span>
                <p className="text-[9px] text-slate-500 mt-2 italic leading-normal">
                  *Projections are structural estimations. Payouts are resolved daily based on real-time matrix leg balance ratio rules on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
