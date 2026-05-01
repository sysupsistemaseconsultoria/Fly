import { SearchForm } from '@/features/search/search-form';
import { MonthlyCalendar } from '@/features/calendar/monthly-calendar';
import { LowPointsDestinations } from '@/features/deals/low-points-destinations';
import { ResultsList } from '@/features/results/results-list';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 p-6">
      <header>
        <h1 className="text-3xl font-bold">Flight Deals & Points Optimizer</h1>
        <p className="mt-2 text-slate-600">MVP do frontend em Next.js + Tailwind + React Query com base no PRD.</p>
      </header>
      <SearchForm />
      <MonthlyCalendar />
      <LowPointsDestinations />
      <ResultsList />
    </main>
  );
}
