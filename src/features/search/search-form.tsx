'use client';

import { SearchFormValues } from '@/types/flight';

const initialValues: SearchFormValues = {
  origin: '',
  destination: '',
  flexibleDates: true,
  tripType: 'roundtrip',
  passengers: 1,
  airline: 'azul'
};

export function SearchForm() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Busca principal</h2>
      <p className="mt-1 text-sm text-slate-600">Estrutura inicial pronta para ligar ao backend/API Gateway.</p>
      <pre className="mt-4 overflow-auto rounded-lg bg-slate-900 p-4 text-xs text-slate-100">
        {JSON.stringify(initialValues, null, 2)}
      </pre>
    </section>
  );
}
