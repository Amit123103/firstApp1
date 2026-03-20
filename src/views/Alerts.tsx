import { CellTowerIcon, AlternateEmailIcon, ApiIcon, AddAlertIcon } from '../components/Icons';

export default function Alerts() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="mb-12 border-l-4 border-primary pl-6">
        <h2 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-primary">Alert Configuration</h2>
        <p className="font-mono text-sm text-outline mt-2 tracking-wide uppercase">System Protocol: Active Monitoring v4.2</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Alert Setup Form & Settings */}
        <div className="lg:col-span-7 space-y-12">
          {/* Subscription Form */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-primary"></span>
              <h3 className="font-headline font-bold uppercase tracking-widest text-lg">Keyword Subscription</h3>
            </div>
            <div className="bg-surface-container p-8 space-y-8 rounded-sm">
              <div className="space-y-4">
                <label className="font-mono text-xs uppercase text-outline tracking-widest">Intelligence Keywords</label>
                <div className="relative group">
                  <input 
                    className="w-full bg-transparent border-b border-outline py-3 px-1 font-mono text-sm focus:outline-none focus:border-primary transition-all" 
                    placeholder="ENTER KEYWORDS (E.G. AI AGENTS, BLOCKCHAIN)..." 
                    type="text"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="font-mono text-xs uppercase text-outline tracking-widest">Category Filter</label>
                  <select className="w-full bg-surface-container-high border-none py-3 px-4 font-mono text-xs text-on-surface uppercase tracking-tight focus:ring-1 focus:ring-primary">
                    <option>TECH_INTELLIGENCE</option>
                    <option>FINANCIAL_SENTIMENT</option>
                    <option>CULTURAL_SHIFTS</option>
                    <option>EMERGING_MARKETS</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="font-mono text-xs uppercase text-outline tracking-widest">Sensitivity Threshold</label>
                  <div className="flex items-center gap-4 py-2">
                    <input 
                      className="w-full accent-primary h-1 bg-surface-container-highest appearance-none cursor-pointer" 
                      type="range" 
                      defaultValue={85}
                    />
                    <span className="font-mono text-xs text-primary">85%</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-black font-headline font-extrabold uppercase py-4 tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <AddAlertIcon className="w-5 h-5" />
                Activate Monitor
              </button>
            </div>
          </section>

          {/* Preferences (Toggles) */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-secondary"></span>
              <h3 className="font-headline font-bold uppercase tracking-widest text-lg">Notification Channels</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ToggleCard icon={<CellTowerIcon />} label="PUSH_MOBILE" sublabel="Instant Relay" active />
              <ToggleCard icon={<AlternateEmailIcon />} label="EMAIL_DIGEST" sublabel="Daily Summary" />
              <ToggleCard icon={<ApiIcon />} label="WEBHOOK_JSON" sublabel="Raw Data Feed" active />
            </div>
          </section>
        </div>

        {/* Alert History Sidebar */}
        <div className="lg:col-span-5">
          <section className="space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-outline"></span>
                <h3 className="font-headline font-bold uppercase tracking-widest text-lg">Incident Logs</h3>
              </div>
              <span className="font-mono text-[10px] text-outline opacity-50">LIVE_FEED_ON</span>
            </div>
            <div className="bg-surface-container border-t-2 border-primary rounded-sm overflow-hidden">
              <div className="divide-y divide-white/5">
                <LogItem title='BREAKOUT: "NEURAL_FASHION"' date="2023-11-24 // 14:22 UTC" score={98.4} priority="Critical Alpha" color="secondary" />
                <LogItem title='SPIKE: "SYNTHETIC_MEATS"' date="2023-11-24 // 09:15 UTC" score={72.1} priority="Moderate Signal" color="outline" />
                <LogItem title='VOLUMETRIC: "DEFI_RENAISSANCE"' date="2023-11-23 // 18:40 UTC" score={89.9} priority="Critical Alpha" color="secondary" />
                <LogItem title='PATTERN: "ZERO_POINT_ENERGY"' date="2023-11-23 // 12:05 UTC" score={65.3} priority="Moderate Signal" color="outline" />
              </div>
              <div className="p-4 bg-surface-container-high text-center">
                <button className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline hover:text-primary transition-colors">Fetch Archive Logs</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ToggleCard({ icon, label, sublabel, active }: { icon: any, label: string, sublabel: string, active?: boolean }) {
  return (
    <div className="glass-panel p-6 border-l border-white/5 flex flex-col justify-between h-40 group cursor-pointer rounded-sm">
      <div className="flex justify-between items-start">
        <span className={`w-6 h-6 ${active ? 'text-primary' : 'text-outline'}`}>{icon}</span>
        <div className="w-10 h-5 bg-surface-container-highest relative rounded-full p-1">
          <div className={`w-3 h-3 rounded-full transition-all ${active ? 'bg-primary shadow-[0_0_8px_rgba(0,245,255,0.6)] translate-x-5' : 'bg-outline-variant translate-x-0'}`}></div>
        </div>
      </div>
      <div>
        <p className={`font-headline font-bold text-sm tracking-tight transition-colors ${active ? 'group-hover:text-primary' : 'group-hover:text-on-surface'}`}>{label}</p>
        <p className="font-mono text-[10px] text-outline mt-1 uppercase">{sublabel}</p>
      </div>
    </div>
  );
}

function LogItem({ title, date, score, priority, color }: { title: string, date: string, score: number, priority: string, color: string }) {
  return (
    <div className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
      <div className="flex flex-col">
        <span className={`font-mono text-xs font-bold tracking-tight ${color === 'secondary' ? 'text-primary' : 'text-on-surface'}`}>{title}</span>
        <span className="font-mono text-[10px] text-outline mt-1 italic">{date}</span>
      </div>
      <div className="text-right">
        <div className="font-mono text-lg font-bold">{score}</div>
        <div className={`font-mono text-[8px] uppercase ${color === 'secondary' ? 'text-secondary' : 'text-outline'}`}>{priority}</div>
      </div>
    </div>
  );
}
