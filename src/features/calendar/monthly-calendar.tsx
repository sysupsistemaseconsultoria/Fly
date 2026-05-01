interface CalendarDay { date: string; minPoints: number }

export function MonthlyCalendar({ days }: { days: CalendarDay[] }) {
  const min = Math.min(...days.map((d) => d.minPoints));

  return (
    <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/50">
      <h2 className="text-xl font-semibold text-sky-900">Calendário mensal (pontos mínimos)</h2>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-7">
        {days.map((day) => (
          <div key={day.date} className={`rounded-lg border p-2 text-xs ${day.minPoints === min ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
            <p>{day.date.slice(8,10)}/{day.date.slice(5,7)}</p>
            <p className="font-semibold">{day.minPoints.toLocaleString('pt-BR')} pts</p>
          </div>
        ))}
      </div>
    </section>
  );
}
