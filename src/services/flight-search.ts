import { Airport, FlightOption, SearchFormValues } from '@/types/flight';

export const airports: Airport[] = [
  { code: 'IOS', city: 'Ilhéus', airport: 'Aeroporto Jorge Amado', state: 'BA', country: 'Brasil' },
  { code: 'VCP', city: 'Campinas', airport: 'Viracopos', state: 'SP', country: 'Brasil' },
  { code: 'SSA', city: 'Salvador', airport: 'Deputado Luís Eduardo Magalhães', state: 'BA', country: 'Brasil' },
  { code: 'GRU', city: 'São Paulo', airport: 'Guarulhos', state: 'SP', country: 'Brasil' }
];

const mockFlights: FlightOption[] = [
  {
    id: 'ios-vcp-1', origin: 'IOS', destination: 'VCP', date: '2026-10-12', airline: 'azul', departure: '17:10', arrival: '19:20', stops: 0,
    points: 117600, pointsPlusCash: 11760, cashFare: 1303.7,
    deepLink: 'https://www.voeazul.com.br/br/pt/home/selecao-de-voo?origem=IOS&destino=VCP&dataIda=2026-10-12&utm_source=flypromo&utm_medium=redirect&utm_campaign=milhas'
  },
  {
    id: 'ios-vcp-2', origin: 'IOS', destination: 'VCP', date: '2026-10-12', airline: 'azul', departure: '15:00', arrival: '21:15', stops: 1,
    points: 117600, pointsPlusCash: 11760, cashFare: 2545.7,
    deepLink: 'https://www.voeazul.com.br/br/pt/home/selecao-de-voo?origem=IOS&destino=VCP&dataIda=2026-10-12&utm_source=flypromo&utm_medium=redirect&utm_campaign=milhas'
  },
  {
    id: 'ios-vcp-3', origin: 'IOS', destination: 'VCP', date: '2026-10-12', airline: 'azul', departure: '15:00', arrival: '22:50', stops: 1,
    points: 117600, pointsPlusCash: 11760, cashFare: 2545.7,
    deepLink: 'https://www.voeazul.com.br/br/pt/home/selecao-de-voo?origem=IOS&destino=VCP&dataIda=2026-10-12&utm_source=flypromo&utm_medium=redirect&utm_campaign=milhas'
  }
];

export function searchAirports(query: string) {
  if (query.trim().length < 2) return [];
  const q = query.toLowerCase();
  return airports.filter((a) =>
    [a.code, a.city, a.airport].some((v) => v.toLowerCase().includes(q))
  );
}

export function buildDeepLink(flight: Pick<FlightOption, 'origin'|'destination'|'date'>) {
  return `https://www.voeazul.com.br/br/pt/home/selecao-de-voo?origem=${flight.origin}&destino=${flight.destination}&dataIda=${flight.date}&utm_source=flypromo&utm_medium=redirect&utm_campaign=milhas`;
}

export function searchFlights(values: SearchFormValues) {
  const offsets = values.flexibleDates ? [-3,-2,-1,0,1,2,3] : [0];
  const dates = offsets.map((offset) => {
    const d = new Date(`${values.date}T00:00:00`);
    d.setDate(d.getDate()+offset);
    return d.toISOString().slice(0,10);
  });

  const flights = mockFlights.filter((f) =>
    f.origin === values.origin &&
    (values.destination === 'ANY' || f.destination === values.destination) &&
    dates.includes(f.date) &&
    (values.airline === 'all' || f.airline === values.airline)
  ).map((f) => ({ ...f, deepLink: f.deepLink ?? buildDeepLink(f) }));

  const calendar = dates.map((d) => ({ date: d, minPoints: d === '2026-10-12' ? 117600 : 132400 + Math.floor(Math.random()*8000) }));
  const bestDay = calendar.reduce((min, day) => day.minPoints < min.minPoints ? day : min, calendar[0]);

  const destinations = [
    { destination: 'Salvador', code: 'SSA', points: 9800 },
    { destination: 'São Paulo', code: 'VCP', points: 11760 },
    { destination: 'Campinas', code: 'VCP', points: 11760 }
  ].sort((a,b)=>a.points-b.points);

  return { flights, calendar, bestDay, destinations };
}
