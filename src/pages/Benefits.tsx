export default function Benefits() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-16">
      
      <div className="space-y-4 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Platform Value</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          System Benefits
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Haventust leverages automated smart contracts and transparent matrix mechanics to secure your downline sales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6">
        {[
          { title: 'Decentralized Trust', desc: 'Organizational rules, matrix structures, and matching coefficients are locked inside immutable contracts. No executive changes or overrides.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
          { title: 'Instant Match Dispatch', desc: 'Leg matching checks execute instantly upon member activation. Payouts are directly pushed to linked Web3 wallets without withdrawal delay.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
          { title: 'Real-time Analytics', desc: 'Track your binary leg ratios, team depth volumes, active referrals, and direct sponsor volumes in a high-fidelity visual dashboard.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
          { title: 'Secure Wallet Integration', desc: 'Link non-custodial wallets (MetaMask, Trust Wallet) to maintain full asset custody. No central funds hold, maximizing protection.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
          { title: 'Optimized Spillover Plan', desc: 'Our automated matrix binary placement places spillover members systematically under active branches, accelerating group volume.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
          { title: 'Global Settlement System', desc: 'Transact without borders. Haventust supports instant cryptocurrency settlements, removing geographical exchange blocks.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.657-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.657-9 3-9m-9 9a9 9 0 019-9' }
        ].map((benefit, idx) => (
          <div 
            key={idx} 
            className="bg-[#050B14] hover:bg-[#07111F] border border-slate-800/80 hover:border-[#E6B044]/30 p-8 rounded-2xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E6B044]/10 border border-[#E6B044]/20 flex items-center justify-center text-[#E6B044] mb-6 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
