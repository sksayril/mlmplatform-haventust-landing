export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 text-left">
      
      {/* Title / Intro */}
      <section className="max-w-3xl space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Who We Are</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          About Haventust
        </h1>
        <p className="text-slate-400 text-base font-light leading-relaxed">
          Haventust was founded with a singular, powerful mission: to redefine network marketing by placing transparency, equity, and decentralization at the heart of the affiliate marketing experience. By leveraging blockchain automation and instant peer-to-peer payout protocols, we eliminate administrative overhead, payout delays, and database trust issues.
        </p>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Decentralized Transparency', desc: 'Every position lock, matrix level matching calculation, and direct sponsor bonus is calculated transparently on the smart contract layer.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { title: 'Global Network Growth', desc: 'Affiliates across 15+ countries utilize the platform to scale international downlines and coordinate sales cycles without geo-restrictions.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.657-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.657-9 3-9m-9 9a9 9 0 019-9' },
            { title: 'Limitless Prosperity', desc: 'With a highly rewarding Gold Plan structure and 20% matching commissions, network partners secure multiple income streams.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
          ].map((v, idx) => (
            <div key={idx} className="bg-[#050B14] border border-slate-800/80 p-8 rounded-2xl space-y-4 hover:border-[#E6B044]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#E6B044]/10 flex items-center justify-center text-[#E6B044]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={v.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white font-display">{v.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
