import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  InsightsIcon, 
  SearchIcon, 
  NotificationsIcon, 
  PersonIcon, 
  DashboardIcon, 
  LanguageIcon, 
  NotificationsActiveIcon,
  ComputerIcon,
  CheckroomIcon,
  RestaurantIcon,
  PaymentsIcon,
  PublicIcon,
  SportsEsportsIcon,
  BoltIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ArrowBackIcon,
  ShieldIcon,
  GroupIcon,
  CellTowerIcon,
  AlternateEmailIcon,
  ApiIcon,
  AddAlertIcon
} from './components/Icons';
import Dashboard from './views/Dashboard';
import TrendDetail from './views/TrendDetail';
import Alerts from './views/Alerts';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedTrendId, setSelectedTrendId] = useState<string | null>(null);

  const navigateTo = (view: View, trendId: string | null = null) => {
    setCurrentView(view);
    setSelectedTrendId(trendId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      {/* Top Bar */}
      <header className="fixed top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigateTo('dashboard')}>
          <InsightsIcon className="text-primary text-3xl" fill />
          <h1 className="font-headline font-extrabold text-xl tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(0,245,255,0.4)]">CROWD PULSE</h1>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-xl mx-12">
          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <input 
              className="w-full bg-surface-container-low border-none border-b border-outline text-xs font-mono py-2 pl-10 focus:ring-0 focus:border-primary transition-all" 
              placeholder="QUERY REAL-TIME TRENDS..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative text-outline hover:text-primary transition-colors active:scale-95">
            <NotificationsIcon className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
          </button>
          <div className="h-8 w-8 bg-surface-container-highest rounded-sm border border-primary/30 flex items-center justify-center">
            <PersonIcon className="text-sm text-primary w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col gap-2 p-4 h-full w-64 fixed left-0 top-0 z-40 bg-surface shadow-2xl shadow-black/50 pt-24">
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-sm"></div>
          <div>
            <p className="font-mono text-xs font-bold text-primary tracking-tight">ANALYST_01</p>
            <p className="font-mono text-[10px] text-outline uppercase">Verified Intelligence</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <p className="px-2 mb-2 text-[10px] font-mono text-slate-600 uppercase tracking-widest">Sectors</p>
          <SidebarItem icon={<ComputerIcon />} label="Tech" active={currentView === 'dashboard'} onClick={() => navigateTo('dashboard')} />
          <SidebarItem icon={<CheckroomIcon />} label="Fashion" />
          <SidebarItem icon={<RestaurantIcon />} label="Food" />
          <SidebarItem icon={<PaymentsIcon />} label="Finance" />
          <SidebarItem icon={<PublicIcon />} label="Culture" />
          <SidebarItem icon={<SportsEsportsIcon />} label="Gaming" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-24 pb-32 px-6">
        <AnimatePresence mode="wait">
          {currentView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Dashboard onTrendClick={(id) => navigateTo('detail', id)} />
            </motion.div>
          )}
          {currentView === 'detail' && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TrendDetail onBack={() => navigateTo('dashboard')} />
            </motion.div>
          )}
          {currentView === 'alerts' && (
            <motion.div
              key="alerts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Alerts />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full h-16 z-50 bg-surface/90 backdrop-blur-md border-t border-primary/20 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
        <BottomNavItem 
          icon={<DashboardIcon />} 
          label="Intelligence" 
          active={currentView === 'dashboard'} 
          onClick={() => navigateTo('dashboard')} 
        />
        <BottomNavItem 
          icon={<LanguageIcon />} 
          label="Global Trends" 
          active={currentView === 'detail'} 
          onClick={() => navigateTo('detail', 'neural-synapse')} 
        />
        <BottomNavItem 
          icon={<NotificationsActiveIcon />} 
          label="Alerts" 
          active={currentView === 'alerts'} 
          onClick={() => navigateTo('alerts')} 
        />
      </nav>

      {/* Ticker Footer */}
      <footer className="fixed bottom-0 md:bottom-0 w-full h-10 bg-black/80 backdrop-blur-sm border-t border-white/5 flex items-center z-[60]">
        <div className="bg-primary px-4 h-full flex items-center z-10">
          <span className="font-mono text-[10px] font-bold text-black uppercase whitespace-nowrap">Live Signal Stream</span>
        </div>
        <div className="ticker-wrap h-full flex items-center overflow-hidden">
          <div className="ticker-content flex gap-8 items-center px-4">
            <TickerItem tag="#NEURAL_WEAR" change={14.2} location="NYC" color="primary" />
            <TickerItem tag="$CLIMATE_ALGO" change={-2.1} location="LDN" color="secondary" />
            <TickerItem tag="#QUANTUM_SATS" change={8.4} location="TKY" color="primary" />
            <TickerItem tag="#BIO_HACK_24" change={45.0} location="SF" color="primary" />
            <TickerItem tag="#LEGACY_RETAIL" change={-12.5} location="BER" color="secondary" />
            {/* Duplicate for loop */}
            <TickerItem tag="#NEURAL_WEAR" change={14.2} location="NYC" color="primary" />
            <TickerItem tag="$CLIMATE_ALGO" change={-2.1} location="LDN" color="secondary" />
            <TickerItem tag="#QUANTUM_SATS" change={8.4} location="TKY" color="primary" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 p-3 transition-all font-mono text-xs uppercase ${
        active 
          ? 'bg-primary/10 text-primary border-r-2 border-primary font-bold' 
          : 'text-outline opacity-70 hover:bg-white/5 hover:text-primary'
      }`}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      {label}
    </button>
  );
}

function BottomNavItem({ icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center transition-all ${
        active ? 'text-primary drop-shadow-[0_0_5px_rgba(0,245,255,0.5)]' : 'text-slate-600'
      }`}
    >
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="font-mono text-[10px] font-bold uppercase">{label}</span>
    </button>
  );
}

function TickerItem({ tag, change, location, color }: { tag: string, change: number, location: string, color: 'primary' | 'secondary' }) {
  return (
    <span className="font-mono text-[10px] text-outline uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
      <span className={`w-1.5 h-1.5 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></span>
      {tag} {change > 0 ? '+' : ''}{change}% ({location})
    </span>
  );
}
