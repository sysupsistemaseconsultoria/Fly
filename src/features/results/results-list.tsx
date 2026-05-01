import { FlightOption } from '@/types/flight';

export function ResultsList({ flights, loading }: { flights: FlightOption[]; loading: boolean }) {
  return (
    <section id="resultados" className="scroll-mt-24 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <h2 className="text-xl font-semibold text-sky-900">Resultados de voos</h2>
      {loading && <p className="mt-3 text-sm text-slate-500">Atualizando resultados...</p>}
      {!loading && flights.length === 0 && <p className="mt-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-500">Nenhuma oportunidade encontrada para esta busca.</p>}
      <div className="mt-4 space-y-3">
        {flights.map((item, index) => (
          <a key={item.id} href={item.deepLink} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-200 p-4 hover:border-sky-300 hover:bg-sky-50/30" title="Ver no site da Azul">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">{item.origin} → {item.destination} • {item.departure} → {item.arrival}</h3>
                <p className="text-sm text-slate-500">{item.date} • {item.stops === 0 ? 'Direto' : `${item.stops} conexão`}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-sky-700 hover:text-sky-900">{item.points.toLocaleString('pt-BR')} pontos</p>
                <p className="text-sm">{item.pointsPlusCash.toLocaleString('pt-BR')} + R$ {item.cashFare.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2 text-xs">
              {item.stops === 0 && <span className="rounded-full bg-sky-100 px-2 py-1 text-sky-700">Direto</span>}
              {index === 0 && <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Melhor uso de pontos</span>}
              <span className="rounded-full bg-slate-100 px-2 py-1">Ver tarifas</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
