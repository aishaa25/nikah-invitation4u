export interface GuestWish {
  id: string;
  name: string;
  message: string;
  date: string;
  duaType?: string;
}

export interface RsvpData {
  name: string;
  attending: 'yes' | 'regret';
  guestCount: number;
  phone?: string;
  notes?: string;
}

export type SlideId =
  | 'envelope'
  | 'intro'
  | 'names'
  | 'scratch'
  | 'venue'
  | 'hadith'
  | 'countdown'
  | 'closing';
