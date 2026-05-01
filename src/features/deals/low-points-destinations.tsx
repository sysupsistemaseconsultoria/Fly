interface DestinationDeal { destination: string; code: string; points: number }

export function LowPointsDestinations({ destinations }: { destinations: DestinationDeal[] }) {
  return (
    <section id="poucos-pontos" className="scroll-mt-24 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <h2 className="text-xl font-semibold text-sky-900">Qualquer lugar — menor pontuação</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {destinations.map((item) => (
          <article key={item.destination} className="rounded-2xl border border-sky-100 p-4 shadow-md">
            <h3 className="font-semibold">{item.destination} ({item.code})</h3>
            <p className="mt-2 inline-block rounded-full bg-sky-600 px-3 py-1 text-sm text-white">{item.points.toLocaleString('pt-BR')} pts</p>
          </article>
        ))}
      </div>
    </section>
  );
}
