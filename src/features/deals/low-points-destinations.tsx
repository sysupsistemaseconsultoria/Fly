const mockDestinations = [
  { destination: 'Ilhéus', points: 13140 },
  { destination: 'Salvador', points: 9800 },
  { destination: 'São Paulo', points: 11200 }
];

export function LowPointsDestinations() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Viajar com poucos pontos</h2>
      <ul className="mt-4 space-y-2">
        {mockDestinations.map((item) => (
          <li key={item.destination} className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm">
            <span>{item.destination}</span>
            <strong>{item.points.toLocaleString('pt-BR')} pts</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
