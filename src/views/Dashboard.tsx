import { BreakoutAlert, Trend } from '../types';
import { BoltIcon, TrendingUpIcon, TrendingDownIcon } from '../components/Icons';

const BREAKOUT_ALERTS: BreakoutAlert[] = [
  { id: '1', priority: 'Priority Alpha', title: 'Neural Interface Fabrics', velocity: 412, data: [2, 4, 3, 6, 8, 10] },
  { id: '2', priority: 'Market Shift', title: 'Post-Plastic Artisans', velocity: 285, data: [4, 2, 5, 4, 7, 9] },
  { id: '3', priority: 'Signal Burst', title: 'Modular Bio-Hacking', velocity: 194, data: [1, 3, 2, 5, 6, 8] },
];

const TRENDS: Trend[] = [
  { id: 'zero-latency', title: 'Zero-Latency Gaming', score: 94.2, change: 12, sources: ['Reddit /r/gaming', 'Twitter #LatencyFree'], path: 'M0 50 Q 25 20, 50 45 T 100 25 T 150 15 T 200 5', color: 'primary' },
  { id: 'digital-minimalism', title: 'Digital Minimalism', score: 78.5, change: -4, sources: ['Medium / Tech', 'Substack'], path: 'M0 10 Q 50 40, 100 30 T 200 50', color: 'secondary' },
  { id: 'ai-dining', title: 'AI Curated Dining', score: 82.1, change: 21, sources: ['Instagram', 'TikTok Trends'], path: 'M0 55 L 40 45 L 80 48 L 120 30 L 160 35 L 200 10', color: 'primary' },
  { id: 'urban-forests', title: 'Urban Vertical Forests', score: 65.9, change: 8, sources: ['Pinterest'], path: 'M0 30 Q 50 10, 100 40 T 200 20', color: 'primary' },
  { id: 'quantum-banking', title: 'Quantum Banking', score: 89.4, change: 33, sources: ['Forbes', 'HackerNews'], path: 'M0 40 L 50 10 L 100 45 L 150 15 L 200 5', color: 'primary' },
  { id: 'tech-wear', title: 'Sustainable Tech-Wear', score: 71.0, change: 5, sources: ['Vogue'], path: 'M0 20 Q 50 50, 100 10 T 200 30', color: 'primary' },
];

export default function Dashboard({ onTrendClick }: { onTrendClick: (id: string) => void }) {
  return (
    <div className="space-y-16">
      {/* Hero: Breakout Alert */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-secondary"></div>
          <h2 className="font-headline text-2xl uppercase tracking-tighter text-secondary">Breakout Alerts</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BREAKOUT_ALERTS.map((alert) => (
            <div 
              key={alert.id}
              className="relative group cursor-pointer overflow-hidden rounded-sm bg-surface-container p-6 border-t-2 border-secondary/50 hover:border-secondary neon-glow-magenta transition-all hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <BoltIcon className="w-12 h-12 text-secondary" />
              </div>
              <p className="font-mono text-[10px] text-secondary/80 mb-2 uppercase tracking-widest">{alert.priority}</p>
              <h3 className="font-headline text-3xl mb-4 leading-none">{alert.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-2xl text-secondary">+{alert.velocity}%</span>
                  <span className="font-mono text-[10px] text-outline uppercase">Velocity Index</span>
                </div>
                <div className="h-10 w-24 flex items-end gap-[2px]">
                  {alert.data.map((h, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-secondary transition-all" 
                      style={{ height: `${h * 10}%`, opacity: 0.2 + (i * 0.15) }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body: Trend Feed */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-primary"></div>
            <h2 className="font-headline text-2xl uppercase tracking-tighter text-primary">Live Trend Feed</h2>
          </div>
          <div className="flex gap-4">
            <button className="font-mono text-[10px] uppercase border-b border-primary text-primary pb-1 px-2">High Confidence</button>
            <button className="font-mono text-[10px] uppercase text-outline hover:text-primary transition-colors pb-1 px-2">Rising Stars</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TRENDS.map((trend) => (
            <div 
              key={trend.id}
              onClick={() => onTrendClick(trend.id)}
              className="glass-panel p-6 rounded-sm border-l-2 border-primary/50 neon-glow-cyan cursor-pointer hover:bg-surface-container-high transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-headline text-xl leading-tight">{trend.title}</h4>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-outline uppercase">Score</p>
                  <p className="font-mono text-xl text-primary">{trend.score}</p>
                </div>
              </div>
              <div className="mb-6 h-16 flex items-center justify-center bg-black/20 relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 60">
                  <path 
                    d={trend.path} 
                    fill="none" 
                    stroke={trend.color === 'primary' ? '#00f5ff' : '#ff006e'} 
                    strokeWidth="2" 
                  />
                  {trend.color === 'primary' && (
                    <path d={`${trend.path} V 60 H 0 Z`} fill="url(#gradient-cyan)" opacity="0.1" />
                  )}
                </svg>
                <div className={`absolute right-2 top-2 flex items-center gap-1 ${trend.change > 0 ? 'text-primary' : 'text-secondary'}`}>
                  {trend.change > 0 ? <TrendingUpIcon className="w-4 h-4" /> : <TrendingDownIcon className="w-4 h-4" />}
                  <span className="text-[10px] font-bold">{trend.change > 0 ? '+' : ''}{trend.change}%</span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {trend.sources.map((source, i) => (
                  <span key={i} className="px-2 py-1 bg-surface-container-high text-[9px] font-mono text-outline uppercase">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <svg className="hidden">
        <defs>
          <linearGradient id="gradient-cyan" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00f5ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00f5ff', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
