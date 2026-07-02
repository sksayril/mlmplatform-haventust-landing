import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function GoldChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'OANDA:XAUUSD',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'in',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="bg-[#050B14] border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-left space-y-6">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#E6B044]/3 blur-3xl pointer-events-none rounded-full" />
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block mb-1">Market Rates</span>
        <h3 className="text-2xl font-bold font-display text-white">Live Gold Price (XAU/USD)</h3>
        <p className="text-slate-400 text-xs font-light">Real-time asset feed directly from global gold currency markets.</p>
      </div>

      <div className="w-full h-[500px] rounded-xl overflow-hidden border border-slate-800 bg-[#02050A]">
        <div id="tradingview_gold_chart" ref={containerRef} className="w-full h-full" />
      </div>
    </section>
  );
}
