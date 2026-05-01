export type Airline = 'azul' | 'gol' | 'latam' | 'all';

export interface SearchFormValues {
  origin: string;
  destination: string;
  flexibleDates: boolean;
  tripType: 'roundtrip' | 'oneway';
  passengers: number;
  airline: Airline;
}
