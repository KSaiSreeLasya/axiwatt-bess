export type TabType =
  | 'home'
  | 'about'
  | 'products'
  | 'industries'
  | 'technology'
  | 'sustainability'
  | 'contact';

export interface ProductSpec {
  id: string;
  name: string;
  category: 'utility' | 'ci' | 'residential';
  subtitle: string;
  capacity: string;
  powerOutput?: string;
  cycleLife?: string;
  voltageRange?: string;
  coolingSystem?: string;
  efficiency?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  features: string[];
  description: string;
  dimensions?: string;
  certifications?: string[];
}

export interface FacilityLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  coordinates: string;
  image: string;
  status: string;
  uptime: string;
  outputPower: string;
}

export interface EsgReport {
  id: string;
  title: string;
  icon: string;
  size: string;
  description: string;
  year: number;
}
