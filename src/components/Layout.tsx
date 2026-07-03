import { NavLink, Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#02050A] text-slate-100 font-sans relative overflow-x-hidden select-none">
      {/* Background Gradients */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#E6B044]/5 blur-[180px] pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-950/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#E6B044]/5 blur-[200px] pointer-events-none" />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#02050A]/90 backdrop-blur-md border-b border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border-2 border-[#E6B044] flex items-center justify-center bg-gradient-to-tr from-[#02050A] to-[#121B2A] shadow-md shadow-[#E6B044]/20">
              <span className="font-display font-black text-xl text-[#E6B044] tracking-wider">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-white leading-none">
                Haventust
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#E6B044] font-semibold mt-1">
                Together We Prosper
              </span>
            </div>
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            {[
              { path: '/', label: 'Home' },
              { path: '/about-us', label: 'About Us' },
              { path: '/plan', label: 'Plan' },
              { path: '/how-it-works', label: 'How It Works' },
              { path: '/benefits', label: 'Benefits' },
              { path: '/faqs', label: 'FAQs' },
              { path: '/contact', label: 'Contact' }
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 relative py-2 ${
                    isActive 
                      ? 'text-white font-semibold text-shadow-sm' 
                      : 'hover:text-slate-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E6B044] to-[#f4d068] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.haventust.in/"
              className="px-5 py-2 rounded-lg text-xs font-bold text-slate-300 border border-slate-700/80 hover:text-white hover:border-[#E6B044]/50 transition-all duration-300"
            >
              Login
            </a>
            <a
              href="https://app.haventust.in/"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-[#E6B044] to-[#F3C562] text-slate-950 hover:brightness-110 shadow-lg shadow-[#E6B044]/20 transition-all duration-300 active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Register Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Area */}
      <main className="relative z-10 min-h-[60vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-gradient-to-b from-[#02050A] to-[#040810] pt-16 pb-10 relative z-10 text-xs overflow-hidden">
        {/* Soft Radial Gold Glow */}
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[600px] h-[160px] bg-[#E6B044]/4 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-12 relative z-10">
          
          {/* Logo & Description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#E6B044] flex items-center justify-center bg-slate-950">
                <span className="font-display font-black text-sm text-[#E6B044]">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-none">Haventust</span>
                <span className="text-[7px] tracking-[0.2em] uppercase text-[#E6B044] font-semibold mt-1">Together We Prosper</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              Haventust is a global MLM platform that empowers people to achieve financial freedom through network based income opportunities.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                {
                  name: 'facebook',
                  url: '#facebook',
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  )
                },
                {
                  name: 'telegram',
                  url: '#telegram',
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.72 8.358l-1.91 9.006c-.144.636-.522.793-1.056.494l-2.909-2.143-1.403 1.35c-.155.155-.286.286-.586.286l.209-2.964 5.394-4.872c.235-.209-.051-.325-.366-.116l-6.666 4.195-2.872-.898c-.624-.195-.636-.624.13-.925l11.228-4.327c.52-.191.974.12.802.915z"/>
                    </svg>
                  )
                },
                {
                  name: 'whatsapp',
                  url: '#whatsapp',
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.458 4.796 1.459 5.432 0 9.851-4.416 9.854-9.853.002-2.632-1.02-5.107-2.88-6.971-1.861-1.865-4.338-2.89-6.974-2.891-5.439 0-9.859 4.417-9.862 9.854-.001 1.765.461 3.488 1.336 5.013l-.99 3.616 3.72-.977zm11.238-2.733c.307-.154.512-.34.582-.44.07-.1.144-.226.126-.29-.018-.063-.092-.1-.225-.167-.132-.066-.782-.386-.902-.43-.12-.043-.208-.066-.296.066-.088.132-.34.43-.418.52-.078.089-.156.1-.289.034-.133-.067-.56-.206-1.066-.658-.393-.351-.659-.785-.736-.917-.077-.132-.008-.204.058-.27.06-.06.133-.155.2-.232.066-.078.089-.133.133-.22.044-.09.022-.167-.011-.233-.033-.067-.296-.714-.406-.98-.107-.258-.216-.223-.296-.223-.077-.001-.165-.001-.253-.001-.088 0-.23.033-.351.165-.12.132-.461.45-.461 1.1s.472 1.277.538 1.365c.066.088.93 1.42 2.254 1.99.315.136.56.217.75.277.317.1.606.086.834.052.253-.037.782-.32.892-.628z"/>
                    </svg>
                  )
                },
                {
                  name: 'youtube',
                  url: '#youtube',
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11C4.482 20.454 12 20.454 12 20.454s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
                {
                  name: 'instagram',
                  url: '#instagram',
                  svg: (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-8 h-8 rounded-full border border-slate-800 hover:border-[#E6B044] flex items-center justify-center text-slate-500 hover:text-slate-950 hover:bg-[#E6B044] shadow-md hover:shadow-[#E6B044]/30 transition-all duration-300 active:scale-95"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.svg}
                </a>
              ))}
            </div>

            <div className="pt-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6B044]/5 border border-[#E6B044]/20 text-[9px] font-bold text-[#E6B044] tracking-wider">
                🛡️ Verified Smart Contract Protocol
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-display relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1.5px] after:bg-[#E6B044] after:rounded">
              Quick Links
            </h4>
            <ul className="space-y-3.5 font-medium text-slate-400">
              {[
                { path: '/', label: 'Home' },
                { path: '/about-us', label: 'About Us' },
                { path: '/plan', label: 'Plan' },
                { path: '/how-it-works', label: 'How It Works' },
                { path: '/benefits', label: 'Benefits' },
                { path: '/faqs', label: 'FAQs' },
                { path: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors duration-300 flex items-center gap-1.5 group">
                    <span className="w-0 h-[1.5px] bg-[#E6B044] rounded transition-all duration-300 group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-display relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1.5px] after:bg-[#E6B044] after:rounded">
              Support
            </h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li className="flex items-center gap-3 group">
                <svg className="w-4 h-4 text-[#E6B044] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sarabidalui71@gmail.com" className="hover:text-[#E6B044] transition-colors duration-300">sarabidalui71@gmail.com</a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#E6B044] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-display relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1.5px] after:bg-[#E6B044] after:rounded">
              Join Our Network
            </h4>
            <p className="text-slate-400 leading-relaxed font-light">
              Subscribe to get real-time downline placement positioning and earnings alerts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input 
                type="email" 
                placeholder="Email address"
                required
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-900 rounded-lg text-white text-xs focus:outline-none focus:border-[#E6B044] transition-colors"
              />
              <button 
                type="submit" 
                className="px-3.5 py-2.5 bg-[#E6B044] hover:bg-[#F3C562] text-slate-950 font-bold rounded-lg transition-all duration-300 active:scale-95 shadow-md shadow-[#E6B044]/10"
              >
                ➔
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copy bar & Scroll to Top */}
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-slate-500 text-[10px]">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© 2024 Haventust. All Rights Reserved.</span>
            <div className="flex items-center gap-3 pt-2 sm:pt-0">
              {['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Disclaimer'].map((link) => (
                <Link 
                  key={link} 
                  to={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-slate-300 transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-full border border-slate-800 hover:border-[#E6B044] hover:bg-[#E6B044] hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-md hover:shadow-[#E6B044]/20 group active:scale-95"
            title="Back to Top"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
