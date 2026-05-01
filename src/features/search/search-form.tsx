'use client';

const brazilAirports = [
  'IOS · Ilhéus',
  'SSA · Salvador',
  'CGH · São Paulo (Congonhas)',
  'GRU · São Paulo (Guarulhos)',
  'VCP · Campinas (Viracopos)',
  'GIG · Rio de Janeiro (Galeão)',
  'CNF · Belo Horizonte (Confins)'
];

export function SearchForm() {
  return (
    <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-sky-900">Buscar passagens com milhas</h2>
          <p className="mt-1 text-sm text-slate-500">Compare resgate em pontos Azul x valor em R$ e encontre o melhor custo-benefício.</p>
        </div>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">Foco regional: Ilhéus</span>
      </div>

      <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Origem</span>
          <input
            list="airports"
            placeholder="Ex: IOS · Ilhéus"
            defaultValue="IOS · Ilhéus"
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Destino</span>
          <input
            list="airports"
            placeholder="Ex: GRU · São Paulo"
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Data de ida</span>
          <input
            type="date"
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">Passageiros</span>
          <input
            type="number"
            min={1}
            max={9}
            defaultValue={1}
            className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="space-y-2 lg:col-span-2">
          <span className="text-sm font-medium text-slate-700">Companhia</span>
          <select className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200">
            <option>Azul (prioridade)</option>
            <option>LATAM</option>
            <option>GOL</option>
            <option>Todas</option>
          </select>
        </label>

        <label className="flex items-center gap-2 pt-8 text-sm text-slate-600">
          <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-sky-300 text-sky-600 focus:ring-sky-200" />
          Datas flexíveis (± 3 dias)
        </label>

        <button
          type="button"
          className="mt-auto rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Buscar melhores oportunidades
        </button>
      </form>

      <datalist id="airports">
        {brazilAirports.map((airport) => (
          <option key={airport} value={airport} />
        ))}
      </datalist>
    </section>
  );
}
