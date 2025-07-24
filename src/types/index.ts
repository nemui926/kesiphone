export interface Appliance {
  id: string;
  nameJa: string;
  nameEn: string;
  icon: string;
  status?: 'on' | 'off';
}

export interface AppState {
  selectedApplianceId: string | null;
  lastAction: string | null;
  isLoading: boolean;
  error: string | null;
  applianceStatuses: Record<string, 'on' | 'off'>;
}