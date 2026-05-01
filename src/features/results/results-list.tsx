const mockResults = [
  {
    route: 'IOS → VCP',
    date: 'Seg, 12 Out',
    points: 13140,
    cash: 689,
    bestDay: true,
    bestValue: true
  },
  {
    route: 'IOS → SSA',
    date: 'Qua, 14 Out',
    points: 9800,
    cash: 420,
    bestDay: false,
    bestValue: true
  },
  {
    route: 'IOS → GRU',
    date: 'Sex, 16 Out',
    points: 15400,
    cash: 590,
    bestDay: true,
    bestValue: false
  }
];

export function ResultsList() {
  return (
    <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-sky-900">Resultados de voos</h2>
          <p className="mt-1 text-sm text-slate-500">Ordenado por melhor uso de pontos e datas mais vantajosas.</p>
        </div>
        <div className="flex gap-2 text-xs font-medium">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700">Melhor Dia</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">Melhor uso de pontos</span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {mockResults.map((item) => (
          <article key={`${item.route}-${item.date}`} className="rounded-xl border border-slate-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">{item.route}</h3>
                <p className="text-sm text-slate-500">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-sky-700">{item.points.toLocaleString('pt-BR')} pts</p>
                <p className="text-sm text-slate-500">ou R$ {item.cash.toLocaleString('pt-BR')}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              {item.bestDay && <span className="rounded-full bg-sky-100 px-2 py-1 text-sky-700">Melhor Dia</span>}
              {item.bestValue && (
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Melhor uso de pontos</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
