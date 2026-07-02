import { useState } from 'react';

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">
      
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Support & Help</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Everything you need to know about position lock, matrices, matching limits, and smart contract execution.
        </p>
      </div>

      <div className="space-y-4 pt-6 text-left">
        {[
          {
            q: "How does the Haventust binary structure function?",
            a: "Our system features two downline branches: a left leg and a right leg. Sales volume accumulates across both teams. Daily network income, team bonuses, and matching commissions match automatically on-chain based on structural leg volumes."
          },
          {
            q: "Are the commissions really paid out instantly?",
            a: "Yes. Haventust operates on-chain. Commission rules are executed directly inside smart contracts. The moment a matching logic resolves, funds are pushed straight to your Web3 non-custodial wallet."
          },
          {
            q: "What is the minimum sponsorship required for matching eligibility?",
            a: "To trigger leg-matching rewards, you need at least two direct referrals: one placed in your left branch and one in your right branch, both with an active package subscription."
          },
          {
            q: "Can I transfer or sell my matrix position?",
            a: "Since positions are recorded as unique tokens (NFTs) representing organizational points, they can be securely transferred or delegated through compatible blockchain marketplace integrations."
          },
          {
            q: "Is there any renewal or maintenance fee for the Gold Plan?",
            a: "No. The Gold Plan is a one-time investment of ₹ 11,000/- with lifetime membership validity and no recurring renewal fees."
          },
          {
            q: "Can I register multiple accounts?",
            a: "Yes, you can register multiple accounts linked to different Web3 wallets, allowing you to maximize tri-binary position structures for multiple matching streams."
          }
        ].map((faq, index) => (
          <div 
            key={index} 
            className="bg-slate-950/40 border border-slate-900 hover:border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-white hover:text-[#E6B044] transition-colors"
            >
              <span className="text-sm md:text-base">{faq.q}</span>
              <svg 
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openFaq === index && (
              <div className="px-6 pb-6 pt-1 text-slate-400 text-xs md:text-sm leading-relaxed border-t border-slate-900/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
