'use client';

import { useEffect, useMemo, useState } from 'react';
import { SearchForm } from '@/features/search/search-form';
import { MonthlyCalendar } from '@/features/calendar/monthly-calendar';
import { LowPointsDestinations } from '@/features/deals/low-points-destinations';
import { ResultsList } from '@/features/results/results-list';
import { HeaderNav } from '@/features/header/header-nav';
import { SearchFormValues } from '@/types/flight';
import { searchFlights } from '@/services/flight-search';

const initialValues: SearchFormValues = {
  origin: 'IOS', destination: 'VCP', date: '2026-10-12', flexibleDates: true, passengers: 1, airline: 'azul'
};

export default function HomePage() {
  const [values, setValues] = useState<SearchFormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('buscar');
  const [result, setResult] = useState(() => searchFlights(initialValues));

  const bestDayText = useMemo(() => {
    const d = result.bestDay;
    return `Melhor dia: ${d.date.slice(8,10)}/${d.date.slice(5,7)} — ${d.minPoints.toLocaleString('pt-BR')} pontos`;
  }, [result.bestDay]);


  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible?.target instanceof HTMLElement) setActive(visible.target.id);
    }, { threshold: [0.25, 0.5, 0.75] });
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(searchFlights(values));
      setLoading(false);
    }, 450);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100/30">
      <header className="sticky top-0 z-20 border-b border-sky-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="rounded-xl bg-sky-600 px-3 py-1.5 text-sm font-bold text-white">FLY</div>
          <HeaderNav active={active} />
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <SearchForm values={values} onChange={setValues} onSearch={handleSearch} loading={loading} />
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">{bestDayText}</p>
        <LowPointsDestinations destinations={result.destinations} />
        <MonthlyCalendar days={result.calendar} />
        <ResultsList flights={result.flights} loading={loading} />
      <header className="border-b border-sky-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-sky-600 px-3 py-1.5 text-sm font-bold text-white">FLY</div>
            <div>
              <h1 className="text-lg font-bold text-sky-900">Flight Deals & Points Optimizer</h1>
              <p className="text-xs text-slate-500">Busque voos e maximize seu saldo de milhas</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#" className="hover:text-sky-700">Buscar</a>
            <a href="#" className="hover:text-sky-700">Poucos Pontos</a>
            <a href="#" className="hover:text-sky-700">Resultados</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <SearchForm />
        <LowPointsDestinations />
        <MonthlyCalendar />
        <ResultsList />
      </div>
    </main>
  );
}
