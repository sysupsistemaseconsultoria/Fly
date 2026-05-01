export type Airline = 'azul' | 'gol' | 'latam' | 'all';

export interface Airport {
  code: string;
  city: string;
  airport: string;
  state: string;
  country: string;
}

export interface SearchFormValues {
  origin: string;
  destination: string;
  date: string;
  flexibleDates: boolean;
  passengers: number;
  airline: Airline;
}

export interface FlightOption {
  id: string;
  origin: string;
  destination: string;
  date: string;
  airline: Airline;
  departure: string;
  arrival: string;
  stops: number;
  points: number;
  pointsPlusCash: number;
  cashFare: number;
  deepLink?: string;
}
