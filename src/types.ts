export type View = 'dashboard' | 'detail' | 'alerts';

export interface Trend {
  id: string;
  title: string;
  score: number;
  change: number;
  sources: string[];
  path: string;
  color: string;
}

export interface BreakoutAlert {
  id: string;
  priority: string;
  title: string;
  velocity: number;
  data: number[];
}

export interface Signal {
  id: string;
  tag: string;
  change: number;
  location: string;
  color: string;
}
