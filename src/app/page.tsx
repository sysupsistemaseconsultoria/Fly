import { SearchForm } from '@/features/search/search-form';
import { MonthlyCalendar } from '@/features/calendar/monthly-calendar';
import { LowPointsDestinations } from '@/features/deals/low-points-destinations';
import { ResultsList } from '@/features/results/results-list';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100/30">
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
