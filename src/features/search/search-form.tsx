'use client';

import { AirportAutocomplete } from '@/components/airport-autocomplete';
import { Airline, SearchFormValues } from '@/types/flight';

interface Props {
  values: SearchFormValues;
  onChange: (next: SearchFormValues) => void;
  onSearch: () => void;
  loading: boolean;
}

export function SearchForm({ values, onChange, onSearch, loading }: Props) {
  return (
    <section id="buscar" className="scroll-mt-24 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <h2 className="text-xl font-semibold text-sky-900">Buscar passagens com milhas</h2>
      <form className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
        <AirportAutocomplete label="Origem" value={values.origin} onSelect={(code) => onChange({ ...values, origin: code })} />
        <AirportAutocomplete label="Destino" value={values.destination} onSelect={(code) => onChange({ ...values, destination: code })} />
        <label className="space-y-2"><span className="text-sm">Data</span><input type="date" value={values.date} onChange={(e)=>onChange({ ...values, date: e.target.value })} className="w-full rounded-xl border border-sky-200 px-3 py-2.5"/></label>
        <label className="space-y-2"><span className="text-sm">Passageiros</span><input type="number" min={1} value={values.passengers} onChange={(e)=>onChange({ ...values, passengers: Number(e.target.value) })} className="w-full rounded-xl border border-sky-200 px-3 py-2.5"/></label>
        <label className="space-y-2 lg:col-span-2"><span className="text-sm">Companhia</span><select value={values.airline} onChange={(e)=>onChange({ ...values, airline: e.target.value as Airline })} className="w-full rounded-xl border border-sky-200 px-3 py-2.5"><option value="azul">Azul</option><option value="gol">GOL</option><option value="latam">LATAM</option><option value="all">Todas</option></select></label>
        <label className="flex items-center gap-2 pt-8 text-sm"><input type="checkbox" checked={values.flexibleDates} onChange={(e)=>onChange({ ...values, flexibleDates: e.target.checked })}/>Datas flexíveis (±3 dias)</label>
        <button disabled={loading} className="mt-auto rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{loading ? 'Buscando...' : 'Buscar melhores oportunidades'}</button>
      </form>
    </section>
  );
}
