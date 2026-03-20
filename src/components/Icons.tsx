import { 
  BarChart3, 
  Search, 
  Bell, 
  User, 
  LayoutDashboard, 
  Globe, 
  BellRing, 
  Monitor, 
  Shirt, 
  Utensils, 
  CreditCard, 
  Users, 
  Gamepad2, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  ArrowLeft, 
  Shield, 
  Radio, 
  AtSign, 
  Webhook, 
  BellPlus
} from 'lucide-react';

export const InsightsIcon = ({ className, fill }: { className?: string, fill?: boolean }) => <BarChart3 className={className} fill={fill ? 'currentColor' : 'none'} />;
export const SearchIcon = ({ className }: { className?: string }) => <Search className={className} />;
export const NotificationsIcon = ({ className }: { className?: string }) => <Bell className={className} />;
export const PersonIcon = ({ className }: { className?: string }) => <User className={className} />;
export const DashboardIcon = ({ className }: { className?: string }) => <LayoutDashboard className={className} />;
export const LanguageIcon = ({ className }: { className?: string }) => <Globe className={className} />;
export const NotificationsActiveIcon = ({ className }: { className?: string }) => <BellRing className={className} />;
export const ComputerIcon = ({ className }: { className?: string }) => <Monitor className={className} />;
export const CheckroomIcon = ({ className }: { className?: string }) => <Shirt className={className} />;
export const RestaurantIcon = ({ className }: { className?: string }) => <Utensils className={className} />;
export const PaymentsIcon = ({ className }: { className?: string }) => <CreditCard className={className} />;
export const PublicIcon = ({ className }: { className?: string }) => <Users className={className} />;
export const SportsEsportsIcon = ({ className }: { className?: string }) => <Gamepad2 className={className} />;
export const BoltIcon = ({ className }: { className?: string }) => <Zap className={className} />;
export const TrendingUpIcon = ({ className }: { className?: string }) => <TrendingUp className={className} />;
export const TrendingDownIcon = ({ className }: { className?: string }) => <TrendingDown className={className} />;
export const ArrowBackIcon = ({ className }: { className?: string }) => <ArrowLeft className={className} />;
export const ShieldIcon = ({ className }: { className?: string }) => <Shield className={className} />;
export const GroupIcon = ({ className }: { className?: string }) => <Users className={className} />;
export const CellTowerIcon = ({ className }: { className?: string }) => <Radio className={className} />;
export const AlternateEmailIcon = ({ className }: { className?: string }) => <AtSign className={className} />;
export const ApiIcon = ({ className }: { className?: string }) => <Webhook className={className} />;
export const AddAlertIcon = ({ className }: { className?: string }) => <BellPlus className={className} />;
