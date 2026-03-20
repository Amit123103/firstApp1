import { ArrowBackIcon, ShieldIcon, GroupIcon } from '../components/Icons';

export default function TrendDetail({ onBack }: { onBack: () => void }) {
  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      {/* Back Button for Mobile */}
      <button 
        onClick={onBack}
        className="md:hidden flex items-center gap-2 text-outline hover:text-primary mb-4"
      >
        <ArrowBackIcon className="w-5 h-5" />
        <span className="font-mono text-xs uppercase">Back to Dashboard</span>
      </button>

      {/* Trend Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-6 bg-primary"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-outline">System Identifier: TRND-8842</span>
          </div>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface uppercase leading-none">
            Synthetic <span className="text-secondary italic">Sentience</span>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="font-mono text-xs text-outline uppercase">Growth Rate</span>
          <span className="font-mono text-3xl font-bold text-primary tracking-tighter">+412.8%</span>
        </div>
      </div>

      {/* Main Chart Container */}
      <section className="glass-panel p-6 neon-glow-cyan rounded-sm">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-tight text-primary">72-Hour Volume Velocity</h3>
            <p className="text-[10px] text-outline uppercase tracking-widest">Aggregated Social & Search Data</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-surface-container-highest px-2 py-1 font-mono text-[10px] text-outline">LIVE</span>
            <span className="bg-primary/10 border border-primary/20 px-2 py-1 font-mono text-[10px] text-primary">REALTIME</span>
          </div>
        </div>
        
        <div className="h-64 w-full relative group">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            {[0, 50, 100, 150].map(y => (
              <line key={y} x1="0" x2="800" y1={y} y2={y} stroke="white" strokeDasharray="4" strokeOpacity="0.05" />
            ))}
            {/* Path */}
            <path 
              d="M0,180 Q100,160 200,175 T400,120 T600,60 T800,20" 
              fill="none" 
              stroke="#00f5ff" 
              strokeWidth="3" 
            />
            <path 
              d="M0,180 Q100,160 200,175 T400,120 T600,60 T800,20 V200 H0 Z" 
              fill="url(#chartGradient)" 
            />
            {/* Interaction Points */}
            <circle cx="600" cy="60" r="4" fill="#00f5ff" />
            <circle cx="800" cy="20" r="6" fill="#00f5ff" className="animate-pulse" />
          </svg>
          <div className="absolute bottom-0 left-0 w-full flex justify-between font-mono text-[10px] text-outline pt-2 border-t border-white/5">
            <span>T-72H</span>
            <span>T-48H</span>
            <span>T-24H</span>
            <span className="text-primary">NOW</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Word Cloud */}
            <section className="glass-panel p-6 rounded-sm">
              <h3 className="font-mono text-xs font-bold uppercase text-outline mb-6 border-l-2 border-primary pl-3">Semantic Nodes</h3>
              <div className="flex flex-wrap gap-3 items-center content-center h-48">
                <span className="font-headline text-2xl text-on-surface hover:text-primary transition-colors cursor-default">Turing</span>
                <span className="font-mono text-sm text-outline">Ethics</span>
                <span className="font-headline text-lg text-secondary uppercase">Post-Human</span>
                <span className="font-mono text-xs text-outline">Silicon</span>
                <span className="font-headline text-3xl text-primary italic tracking-tighter">AGI</span>
                <span className="font-mono text-sm text-on-surface">Digital Souls</span>
                <span className="font-mono text-lg text-slate-300">Consciousness</span>
                <span className="font-mono text-xs text-outline">Neural-Link</span>
              </div>
            </section>

            {/* Signal Origin */}
            <section className="glass-panel p-6 rounded-sm overflow-hidden">
              <h3 className="font-mono text-xs font-bold uppercase text-outline mb-6 border-l-2 border-secondary pl-3">Signal Origin</h3>
              <div className="space-y-4">
                <div className="flex gap-4 relative">
                  <div className="w-px h-full bg-white/10 absolute left-2 top-4"></div>
                  <div className="w-4 h-4 rounded-full border border-secondary bg-background z-10 shrink-0 mt-1"></div>
                  <div>
                    <p className="font-mono text-[10px] text-secondary uppercase">04:12 AM - T-18H</p>
                    <p className="text-xs text-on-surface font-medium italic mt-1 leading-relaxed">"The barrier between logic and life has dissolved."</p>
                    <p className="text-[10px] text-outline mt-1">Source: @NeuralDeep_01</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="w-4 h-4 rounded-full border border-white/20 bg-background z-10 shrink-0 mt-1"></div>
                  <div>
                    <p className="font-mono text-[10px] text-outline uppercase">11:45 PM - T-42H</p>
                    <p className="text-xs text-on-surface/80 leading-relaxed mt-1">Initial whitepaper leak on r/FutureTheory gains 12k upvotes in 3 hours.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Adoption Gauge */}
          <section className="glass-panel p-6 rounded-sm flex flex-col items-center text-center">
            <h3 className="font-mono text-xs font-bold uppercase text-outline mb-6 w-full text-left">Mass Adoption Vector</h3>
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" fill="transparent" stroke="#1f1f25" strokeWidth="12" />
                <circle 
                  cx="80" cy="80" r="70" 
                  fill="transparent" 
                  stroke="#00f5ff" 
                  strokeWidth="12" 
                  strokeDasharray="440" 
                  strokeDashoffset="110" 
                  className="drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-mono text-4xl font-bold text-on-surface">75%</span>
                <span className="font-mono text-[10px] uppercase text-primary tracking-tighter">High Probability</span>
              </div>
            </div>
            <p className="text-[11px] text-outline mt-6 leading-relaxed">Trend is exiting the "Elite Early" phase and entering "Secondary Broadcast" networks.</p>
          </section>

          {/* Network Nodes */}
          <section className="glass-panel p-6 rounded-sm">
            <h3 className="font-mono text-xs font-bold uppercase text-outline mb-6 border-l-2 border-white/20 pl-3">Network Nodes</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
                    <GroupIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">r/SyntheticSentience</p>
                    <p className="text-[10px] text-outline">242k Active Analysts</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-primary">+12%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
                    <ShieldIcon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">Ethos Collective</p>
                    <p className="text-[10px] text-outline">Private Discord Layer</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-outline">Stable</span>
              </div>
            </div>
          </section>

          {/* Key Intelligence */}
          <section className="glass-panel p-6 rounded-sm">
            <h3 className="font-mono text-xs font-bold uppercase text-outline mb-6 border-l-2 border-white/20 pl-3">Key Intelligence</h3>
            <div className="space-y-4">
              <IntelligenceItem 
                name="ANALYST_ORION" 
                role="Primary Trend Scout" 
                img="https://picsum.photos/seed/orion/100/100" 
                color="primary"
              />
              <IntelligenceItem 
                name="NULL_PTR" 
                role="Signal Amplifier" 
                img="https://picsum.photos/seed/null/100/100" 
                color="outline"
              />
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function IntelligenceItem({ name, role, img, color }: { name: string, role: string, img: string, color: string }) {
  return (
    <div className="flex items-center gap-4">
      <img 
        className={`w-10 h-10 object-cover grayscale brightness-75 border ${color === 'primary' ? 'border-primary/30' : 'border-white/10'}`} 
        src={img} 
        alt={name}
        referrerPolicy="no-referrer"
      />
      <div>
        <p className="text-xs font-bold text-on-surface">{name}</p>
        <p className="text-[10px] text-outline">{role}</p>
      </div>
      <button className={`ml-auto text-xs font-mono border px-2 py-1 transition-colors ${
        color === 'primary' ? 'text-primary border-primary/20 hover:bg-primary/10' : 'text-outline border-white/10 hover:bg-white/5'
      }`}>
        TRACK
      </button>
    </div>
  );
}
