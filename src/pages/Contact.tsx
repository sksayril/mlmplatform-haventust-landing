import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16 text-left">
      
      <div className="text-center space-y-4 max-w-xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E6B044] font-bold block">Support Channels</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Contact Us
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Have questions about the Gold Plan, smart contracts, or placement spillover? Reach out below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 items-start">
        
        {/* Left Side: Contact Form (7 Columns) */}
        <div className="lg:col-span-7 bg-[#050B14] border border-slate-800 p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6B044]/3 blur-2xl rounded-full" />
          
          <h2 className="text-2xl font-bold font-display text-white mb-6">Send A Message</h2>
          
          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl text-center space-y-3">
              <span className="text-3xl">✉️</span>
              <h3 className="text-lg font-bold text-emerald-400">Message Dispatched</h3>
              <p className="text-xs text-slate-400">
                Thank you for contacting Haventust support. Our core network coordinators will review and reply within 12 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-bold text-[#E6B044] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E6B044] transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E6B044] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter message subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E6B044] transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message Description</label>
                <textarea 
                  rows={5}
                  placeholder="Type details..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#E6B044] transition-colors text-sm resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-[#E6B044] text-slate-950 hover:brightness-110 shadow-lg shadow-[#E6B044]/15 transition-all duration-300 active:scale-98"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Coordinates & Map mock (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card Info */}
          <div className="bg-[#050B14] border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold font-display text-white border-b border-slate-900 pb-3">Corporate Coordinates</h3>
            
            <ul className="space-y-6 text-slate-400 font-light text-xs md:text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E6B044]/10 border border-[#E6B044]/20 flex items-center justify-center text-[#E6B044] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Email Coordinator</span>
                  <a href="mailto:sarabidalui71@gmail.com" className="hover:text-white transition-colors">sarabidalui71@gmail.com</a>
                </div>
              </li>



              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E6B044]/10 border border-[#E6B044]/20 flex items-center justify-center text-[#E6B044] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Working Hours</span>
                  <span>Monday - Saturday: 10:00 AM - 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Mockup */}
          <div className="bg-[#050B14] border border-slate-800 rounded-2xl overflow-hidden shadow-xl h-56 relative group">
            {/* Visual simulation of a dark-themed map */}
            <div className="absolute inset-0 bg-[#060C16] opacity-90" />
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" fill="none">
              <path d="M0,50 L400,50 M0,100 L400,100 M0,150 L400,150 M100,0 L100,200 M200,0 L200,200 M300,0 L300,200" stroke="#E6B044" strokeWidth="1" />
              <path d="M50,0 Q120,80 200,100 T350,200" stroke="#E6B044" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E6B044] border-2 border-slate-950 flex items-center justify-center text-slate-950 animate-bounce">
                📍
              </div>
              <span className="bg-slate-950 border border-slate-800 text-[10px] text-white px-3 py-1 rounded shadow-md font-bold font-mono">
                Haventust HQ
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
