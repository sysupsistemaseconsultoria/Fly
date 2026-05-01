'use client';

interface Props { active: string }

export function HeaderNav({ active }: Props) {
  const items = [
    { id: 'buscar', label: 'Buscar' },
    { id: 'poucos-pontos', label: 'Poucos Pontos' },
    { id: 'resultados', label: 'Resultados' }
  ];

  return (
    <nav className="hidden gap-6 text-sm md:flex">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'font-semibold text-sky-700' : 'text-slate-600 hover:text-sky-700'}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
