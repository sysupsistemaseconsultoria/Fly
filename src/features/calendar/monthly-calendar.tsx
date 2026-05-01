export function MonthlyCalendar() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Calendário inteligente</h2>
      <p className="mt-1 text-sm text-slate-600">Componente base para grade mensal com preço em R$ e pontos.</p>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
        {Array.from({ length: 35 }).map((_, index) => (
          <div key={index} className="h-14 rounded-md border border-slate-200 bg-slate-50" />
        ))}
      </div>
    </section>
  );
}
