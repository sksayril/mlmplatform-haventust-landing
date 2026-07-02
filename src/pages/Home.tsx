import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import goldBarImg from '../assets/gold_bar.png';
import GoldChart from '../components/GoldChart';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  earnings: string;
  avatar: string;
}

interface NetworkNode {
  id: string;
  label: string;
  name: string;
  role: string;
  x: number;
  y: number;
  parentId?: string;
}

export default function Home() {
  const [activeUsers, setActiveUsers] = useState<number>(10482);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return prev + change;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 'root',
      name: 'Sarah Chen',
      role: 'Diamond Director',
      quote: 'Haventust completely automated my binary downlines. Payouts arrive instantly with zero delays!',
      earnings: '$268K matched',
      avatar: 'S',
    },
    {
      // Connected as left child
      id: 'l2_left',
      name: 'Marcus Vance',
      role: 'Platinum Leader',
      quote: 'The Gold Plan spillover structure systematically placed 40+ members under my weaker leg in weeks.',
      earnings: '$140K matched',
      avatar: 'M',
    },
    {
      // Connected as middle child
      id: 'l2_mid',
      name: 'Elena Rostova',
      role: 'Gold Executive',
      quote: 'The level matching logic is 100% transparent. No administrative overrides, just code doing its work.',
      earnings: '$110K matched',
      avatar: 'E',
    },
    {
      // Connected as bottom child under left
      id: 'l3_left_1',
      name: 'Yuki Tanaka',
      role: 'Active Member',
      quote: 'Starting with a ₹ 11,000 package was the best business choice. Already hit my level 3 matching.',
      earnings: '$62K matched',
      avatar: 'Y',
    }
  ];

  // 13 Nodes Ternary Tree Database (1 -> 3 -> 9)
  const nodes: NetworkNode[] = [
    // Level 1: Root
    { id: 'root', label: 'S', name: 'Sarah Chen', role: 'Diamond Director', x: 200, y: 30 },
    
    // Level 2: Middle (3 nodes)
    { id: 'l2_left', label: 'M', name: 'Marcus Vance', role: 'Platinum Leader', x: 80, y: 90, parentId: 'root' },
    { id: 'l2_mid', label: 'E', name: 'Elena Rostova', role: 'Gold Executive', x: 200, y: 90, parentId: 'root' },
    { id: 'l2_right', label: 'A', name: 'Amara Okafor', role: 'Silver Partner', x: 320, y: 90, parentId: 'root' },
    
    // Level 3: Bottom (9 nodes)
    // Children of l2_left
    { id: 'l3_left_1', label: 'Y', name: 'Yuki Tanaka', role: 'Active Member', x: 40, y: 160, parentId: 'l2_left' },
    { id: 'l3_left_2', label: 'D', name: 'David Kim', role: 'Silver Partner', x: 80, y: 160, parentId: 'l2_left' },
    { id: 'l3_left_3', label: 'J', name: 'James O\'Connor', role: 'Bronze Associate', x: 120, y: 160, parentId: 'l2_left' },
    // Children of l2_mid
    { id: 'l3_mid_1', label: 'K', name: 'Kai Sterling', role: 'Active Member', x: 165, y: 160, parentId: 'l2_mid' },
    { id: 'l3_mid_2', label: 'N', name: 'Nadia Petrova', role: 'Active Member', x: 200, y: 160, parentId: 'l2_mid' },
    { id: 'l3_mid_3', label: 'Z', name: 'Zayn Malik', role: 'Active Member', x: 235, y: 160, parentId: 'l2_mid' },
    // Children of l2_right
    { id: 'l3_right_1', label: 'L', name: 'Logan Paul', role: 'Active Member', x: 280, y: 160, parentId: 'l2_right' },
    { id: 'l3_right_2', label: 'R', name: 'Ruby Rose', role: 'Active Member', x: 320, y: 160, parentId: 'l2_right' },
    { id: 'l3_right_3', label: 'T', name: 'Tyler Durden', role: 'Active Member', x: 360, y: 160, parentId: 'l2_right' }
  ];

  // Helper mapping path to trace ancestors for highlighting
  const pathMap: Record<string, string[]> = {
    root: ['root'],
    l2_left: ['root', 'l2_left'],
    l2_mid: ['root', 'l2_mid'],
    l2_right: ['root', 'l2_right'],
    l3_left_1: ['root', 'l2_left', 'l3_left_1'],
    l3_left_2: ['root', 'l2_left', 'l3_left_2'],
    l3_left_3: ['root', 'l2_left', 'l3_left_3'],
    l3_mid_1: ['root', 'l2_mid', 'l3_mid_1'],
    l3_mid_2: ['root', 'l2_mid', 'l3_mid_2'],
    l3_mid_3: ['root', 'l2_mid', 'l3_mid_3'],
    l3_right_1: ['root', 'l2_right', 'l3_right_1'],
    l3_right_2: ['root', 'l2_right', 'l3_right_2'],
    l3_right_3: ['root', 'l2_right', 'l3_right_3'],
  };

  const isPathActive = (nodeId: string) => {
    if (!hoveredNode) return false;
    if (hoveredNode === nodeId) return true;
    const activePath = pathMap[hoveredNode];
    return activePath ? activePath.includes(nodeId) : false;
  };

  // Find info of hovered node for visual details
  const hoveredNodeInfo = nodes.find(n => n.id === hoveredNode) || nodes[0];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-28">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E6B044]/40 bg-[#E6B044]/5 text-[10px] font-bold text-[#E6B044] tracking-widest uppercase">
            Gold Plan
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build Connections.<br />
            <span className="bg-gradient-to-r from-[#E6B044] to-[#FAD980] bg-clip-text text-transparent">
              Earn Limitless.
            </span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            A Trusted MLM Platform to Build Your Network and Create Multiple Streams of Income.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-6">
            {[
              { text: '100% Network Based Income', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { text: 'Secure & Transparent', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { text: 'Global Opportunity', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-.5A2 2 0 0113 4V3.5m-3.065 16.92c.112-.047.221-.097.327-.15M12 21a9 9 0 100-18 9 9 0 000 18z' },
              { text: 'Lifetime Earnings', icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' }
            ].map((b, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E6B044]/10 border border-[#E6B044]/25 flex items-center justify-center text-[#E6B044] shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={b.icon} />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200">{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-[#E6B044] to-[#F3C562] text-slate-950 hover:brightness-110 shadow-lg shadow-[#E6B044]/20 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Join Haventust Now
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              to="/plan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold border border-[#E6B044]/50 text-[#E6B044] hover:bg-[#E6B044]/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Gold Plan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero Visual Right */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          <div className="absolute bottom-[-10px] w-[260px] h-[35px] bg-[#E6B044]/10 rounded-full blur-md animate-pulse" />
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#E6B044] to-transparent opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
            <img 
              src={goldBarImg} 
              alt="Haventust Gold Plan Bullion" 
              className="relative w-[280px] h-auto object-contain drop-shadow-[0_25px_30px_rgba(230,176,68,0.25)] transition-transform duration-500 hover:scale-102"
            />
          </div>
        </div>
      </section>

      {/* Stats strip with Live Active Connections */}
      <section className="py-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#060C16] border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/40 relative">
          
          <div className="absolute top-3 right-5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              {activeUsers.toLocaleString()} Live Users
            </span>
          </div>

          {[
            { num: '10K+', label: 'Active Members', sub: 'Growing Every Day', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
            { num: '15+', label: 'Countries', sub: 'Global Presence', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.657-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.657-9 3-9m-9 9a9 9 0 019-9' },
            { num: '50K+', label: 'Payouts Processed', sub: 'Successfully', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { num: '100%', label: 'Network Based', sub: 'Income System', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 text-left border-r last:border-0 border-slate-800/80 px-2 md:px-4 shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#E6B044]/10 border border-[#E6B044]/20 flex items-center justify-center text-[#E6B044] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-white block leading-none mb-1 font-display">{stat.num}</span>
                <span className="text-xs font-semibold text-slate-300 block">{stat.label}</span>
                <span className="text-[10px] text-slate-500 block font-light">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gold Price Feed Chart */}
      <GoldChart />

      {/* Connected Network Testimonials with Animated Ternary Tree */}
      <section className="bg-slate-950/20 border border-slate-900 p-8 rounded-3xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testimonial Cards List (7 Columns) */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block mb-1">User Growth</span>
              <h2 className="font-display text-3xl font-extrabold text-white">Network Connections</h2>
              <p className="text-slate-400 text-xs mt-1">Hover over testimonial cards or tree nodes to track active binary matching channels.</p>
            </div>

            <div className="space-y-4">
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  onMouseEnter={() => setHoveredNode(t.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`bg-[#050B14] p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    hoveredNode === t.id 
                      ? 'border-[#E6B044]/50 translate-x-2 shadow-lg shadow-[#E6B044]/5' 
                      : 'border-slate-800/80'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#E6B044]/15 flex items-center justify-center text-[#E6B044] font-bold font-display shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-white block">{t.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">{t.earnings}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-indigo-400 block mb-2">{t.role}</span>
                    <p className="text-xs text-slate-400 leading-normal italic font-light">"{t.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hover details display card */}
            <div className="bg-[#060D19]/60 p-4 border border-slate-800/80 rounded-xl space-y-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block">Selected Node Profile</span>
              <span className="text-sm font-bold text-white block">{hoveredNodeInfo.name}</span>
              <span className="text-[10px] text-[#E6B044] font-semibold block">{hoveredNodeInfo.role}</span>
            </div>
          </div>

          {/* 3-Tier Ternary Tree SVG visual (6 Columns) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-[#02050A] border border-slate-900 rounded-3xl p-6 w-full max-w-lg flex flex-col items-center justify-center relative overflow-hidden h-[360px] select-none shadow-inner">
              
              <svg className="w-full h-full" viewBox="0 0 400 220">
                <defs>
                  <style>{`
                    @keyframes flow-active {
                      to {
                        stroke-dashoffset: -20;
                      }
                    }
                    .active-path {
                      stroke: #E6B044;
                      stroke-width: 2.8;
                      stroke-dasharray: 6, 4;
                      animation: flow-active 1.2s linear infinite;
                      filter: drop-shadow(0 0 2px rgba(230, 176, 68, 0.4));
                    }
                    .inactive-path {
                      stroke: #121926;
                      stroke-width: 1.5;
                      transition: all 0.3s ease;
                    }
                  `}</style>
                </defs>

                {/* Level 2 connection lines (from Root to Level 2 nodes) */}
                {nodes.filter(n => n.parentId === 'root').map((n) => (
                  <line 
                    key={`line-root-${n.id}`}
                    x1={200} 
                    y1={30} 
                    x2={n.x} 
                    y2={n.y} 
                    className={isPathActive(n.id) ? 'active-path' : 'inactive-path'} 
                  />
                ))}

                {/* Level 3 connection lines (from Level 2 to Level 3 nodes) */}
                {nodes.filter(n => n.parentId && n.parentId.startsWith('l2')).map((n) => {
                  const parentNode = nodes.find(p => p.id === n.parentId);
                  return (
                    <line 
                      key={`line-l2-${n.id}`}
                      x1={parentNode?.x} 
                      y1={parentNode?.y} 
                      x2={n.x} 
                      y2={n.y} 
                      className={isPathActive(n.id) ? 'active-path' : 'inactive-path'} 
                    />
                  );
                })}

                {/* Nodes drawing */}
                {nodes.map((node) => {
                  const isActive = isPathActive(node.id);
                  const isLevel3 = node.id.startsWith('l3');
                  const radius = isLevel3 ? 8 : (node.id === 'root' ? 14 : 11);
                  
                  return (
                    <g 
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer group"
                    >
                      {/* Outer pulsing ring for active nodes */}
                      {isActive && (
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={radius + 4} 
                          fill="none" 
                          stroke="#E6B044" 
                          strokeWidth="1.5" 
                          className="animate-ping opacity-60" 
                        />
                      )}
                      
                      {/* Node Body */}
                      <circle 
                        cx={node.x} 
                        cy={node.y} 
                        r={radius} 
                        fill={isActive ? '#E6B044' : '#060D19'} 
                        stroke="#E6B044" 
                        strokeWidth={isActive ? '2.5' : '1.5'} 
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                      
                      {/* Inner letter */}
                      {!isLevel3 && (
                        <text 
                          x={node.x} 
                          y={node.y + (node.id === 'root' ? 4.5 : 3.5)} 
                          fill={isActive ? '#02050a' : '#E6B044'} 
                          fontSize={node.id === 'root' ? '11' : '9'} 
                          fontWeight="bold" 
                          textAnchor="middle"
                          fontFamily="sans-serif"
                        >
                          {node.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
              
              <div className="flex gap-6 mt-4 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E6B044]" /> Root Affiliate
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#060D19] border border-[#E6B044]" /> Connected Downlines
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Leaderboard Section */}
      <section className="space-y-12 text-left">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Network Rankings</span>
          <h2 className="font-display text-3xl font-extrabold text-white">Top Weekly Earner Leaderboard</h2>
          <p className="text-slate-400 text-xs font-light">Real-time compilation of team payout matches resolved on-chain this week.</p>
        </div>

        <div className="bg-[#050B14] border border-slate-800 rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-300">
              <thead className="text-xs uppercase bg-[#060D19] text-[#E6B044] border-b border-slate-800 font-bold tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">Rank</th>
                  <th scope="col" className="px-6 py-4">Leader Profile</th>
                  <th scope="col" className="px-6 py-4">MLM Tier Status</th>
                  <th scope="col" className="px-6 py-4 text-right">Weekly Earnings</th>
                  <th scope="col" className="px-6 py-4 text-right">On-Chain Payout Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900">
                {[
                  { rank: '🥇 1', user: 'sarah_chen', tier: 'Diamond Director', val: '$14,820', status: 'Dispatched', isLive: true },
                  { rank: '🥈 2', user: 'marcus_vance', tier: 'Platinum Leader', val: '$12,300', status: 'Dispatched', isLive: true },
                  { rank: '🥉 3', user: 'elena_rostova', tier: 'Gold Executive', val: '$9,400', status: 'Dispatched', isLive: true },
                  { rank: '4', user: 'amara_okafor', tier: 'Silver Partner', val: '$7,200', status: 'Dispatched', isLive: true },
                  { rank: '5', user: 'david_kim', tier: 'Silver Partner', val: '$6,850', status: 'Processing', isLive: false }
                ].map((item, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-900/60 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-white font-mono">{item.rank}</td>
                    <td className="px-6 py-4 font-semibold text-white">@{item.user}</td>
                    <td className="px-6 py-4 text-indigo-400 font-semibold text-xs">{item.tier}</td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-[#E6B044]">{item.val}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${
                        item.isLive 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 animate-pulse'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.isLive ? 'bg-emerald-400' : 'bg-yellow-400'}`} />
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
