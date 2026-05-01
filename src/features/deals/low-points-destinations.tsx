interface DestinationDeal { destination: string; code: string; points: number }
const mockDestinations = [
  {
    destination: 'Ilhéus',
    points: 13140,
    image:
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=60'
  },
  {
    destination: 'Salvador',
    points: 9800,
    image:
      'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&w=900&q=60'
  },
  {
    destination: 'São Paulo',
    points: 11200,
    image:
      'https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=900&q=60'
  }
];

export function LowPointsDestinations({ destinations }: { destinations: DestinationDeal[] }) {
  return (
    <section id="poucos-pontos" className="scroll-mt-24 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <h2 className="text-xl font-semibold text-sky-900">Qualquer lugar — menor pontuação</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {destinations.map((item) => (
          <article key={item.destination} className="rounded-2xl border border-sky-100 p-4 shadow-md">
            <h3 className="font-semibold">{item.destination} ({item.code})</h3>
            <p className="mt-2 inline-block rounded-full bg-sky-600 px-3 py-1 text-sm text-white">{item.points.toLocaleString('pt-BR')} pts</p>
    <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-sky-900">Viajar com poucos pontos</h2>
          <p className="mt-1 text-sm text-slate-500">Destinos com menor custo de resgate para quem parte de Ilhéus.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {mockDestinations.map((item) => (
          <article key={item.destination} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
            <div className="h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-semibold text-slate-800">{item.destination}</h3>
              <p className="text-sm text-slate-500">Melhor tarifa em pontos nas próximas semanas.</p>
              <strong className="inline-flex rounded-full bg-sky-600 px-3 py-1 text-sm text-white">
                {item.points.toLocaleString('pt-BR')} pts
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
