export default function Plan() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-16">
      
      <div className="space-y-4 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Gold Level Package</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Gold Plan Overview
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Unlock premium structural matching, team bonuses up to 10 generations, and instant settlement limits.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left pt-6">
        {/* Left Block (Gold Plan Investment Card) */}
        <div className="lg:col-span-4 bg-gradient-to-b from-[#060D19] to-[#02050A] border border-[#E6B044]/25 p-8 rounded-2xl shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6B044]/5 blur-2xl rounded-full" />
          
          <div className="space-y-4 w-full">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E6B044]/50 bg-[#E6B044]/10 text-xs font-bold text-[#E6B044] uppercase tracking-wider">
              Gold Plan
            </span>
            <span className="text-xs text-slate-400 block pt-2">One Time Investment</span>
            <span className="text-3xl sm:text-4xl font-black text-white font-display block py-2 tracking-tight">
              ₹ 11,000/-
            </span>
          </div>

          {/* SVG Coins stack */}
          <div className="my-8 relative">
            <svg className="w-48 h-32 drop-shadow-[0_15px_15px_rgba(230,176,68,0.2)]" viewBox="0 0 200 120" fill="none">
              <ellipse cx="60" cy="85" rx="30" ry="12" fill="#9C6B1C" />
              <path d="M30 85v10c0 6.6 13.4 12 30 12s30-5.4 30-12V85H30z" fill="#B3812E" />
              <ellipse cx="60" cy="85" rx="28" ry="10" fill="#E6B044" />
              
              <ellipse cx="140" cy="85" rx="30" ry="12" fill="#9C6B1C" />
              <path d="M110 85v10c0 6.6 13.4 12 30 12s30-5.4 30-12V85h-60z" fill="#B3812E" />
              <ellipse cx="140" cy="85" rx="28" ry="10" fill="#E6B044" />

              <ellipse cx="100" cy="70" rx="36" ry="15" fill="#805615" />
              <path d="M64 70v15c0 8.3 16.1 15 36 15s36-6.7 36-15V70H64z" fill="#A87724" />
              <ellipse cx="100" cy="70" rx="34" ry="13" fill="#C29237" />

              <path d="M64 55v15c0 8.3 16.1 15 36 15s36-6.7 36-15V55H64z" fill="#D5A344" />
              <ellipse cx="100" cy="55" rx="34" ry="13" fill="#E6B044" />
              
              <circle cx="100" cy="55" r="16" stroke="#9C6B1C" strokeWidth="2" />
              <text x="100" y="61" fill="#9C6B1C" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">H</text>
            </svg>
          </div>

          <div className="w-full">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block border-t border-slate-900 pt-4 font-semibold">
              Instant Position Lock
            </span>
          </div>
        </div>

        {/* Right Block (2x3 Grid of features + Wide banner) */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Daily Network Income', val: 'Up to ₹500', desc: 'Credited daily based on structure', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { label: 'Weekly Network Income', val: 'Up to ₹3,500', desc: 'Weekly cycle settlements', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
              { label: 'Monthly Network Income', val: 'Up to ₹15,000', desc: 'Consistent matrix volume match', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'Team Bonus', val: 'Up to 10 Level', desc: 'Generational level match payouts', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { label: 'Matching Bonus', val: 'Up to 20%', desc: 'Binary left-right matching ratio', icon: 'M11 3.055A9.001 9.001 0 1020.95 12H11V3.055z' },
              { label: 'Repurchase Bonus', val: 'Up to 5%', desc: 'Recurring loyalty program commission', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H12v6' }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#050B14] hover:bg-[#07111F] border border-slate-800/80 hover:border-[#E6B044]/30 rounded-xl p-5 shadow transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E6B044]/10 flex items-center justify-center text-[#E6B044] mb-4 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{card.label}</h3>
                <span className="text-lg font-bold text-white block mb-2 font-display">{card.val}</span>
                <p className="text-[10px] text-slate-500 leading-normal">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom 100% network plan banner */}
          <div className="bg-[#060D19] border border-slate-800 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E6B044]/3 blur-3xl pointer-events-none" />
            
            <div className="flex items-start gap-4 text-left">
              <div className="w-11 h-11 rounded-lg bg-[#E6B044]/15 flex items-center justify-center text-[#E6B044] shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">This is a 100% Network Based Income Plan.</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Your income depends on your network strength, team performance and helping others succeed.
                </p>
              </div>
            </div>

            {/* Graphic Nodes Diagram representation */}
            <div className="shrink-0">
              <svg className="w-24 h-16 opacity-80" viewBox="0 0 100 60" fill="none">
                <circle cx="50" cy="15" r="5" fill="#E6B044" />
                <circle cx="25" cy="40" r="5" fill="#E6B044" />
                <circle cx="75" cy="40" r="5" fill="#E6B044" />
                
                <line x1="47" y1="18" x2="28" y2="37" stroke="#E6B044" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="53" y1="18" x2="72" y2="37" stroke="#E6B044" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="/haventust-business-plan.pdf"
          download="Haventust_Business_Plan.pdf"
          className="px-10 py-4 rounded-2xl font-bold bg-[#E6B044] text-slate-950 hover:brightness-110 shadow-[0_4px_25px_rgba(230,176,68,0.45)] hover:shadow-[0_4px_30px_rgba(230,176,68,0.6)] transition-all duration-300 flex items-center gap-2 active:scale-98 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Business Plan PDF
        </a>
        <button className="px-10 py-4 rounded-2xl font-bold border border-[#E6B044]/40 text-[#E6B044] hover:bg-[#E6B044]/5 transition-all duration-300 flex items-center gap-2 active:scale-98">
          View Full Plan Details
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </div>
  );
}
