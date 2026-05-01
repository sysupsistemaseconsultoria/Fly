'use client';

import { useMemo, useState } from 'react';
import { searchAirports } from '@/services/flight-search';

interface Props {
  label: string;
  value: string;
  onSelect: (code: string) => void;
}

export function AirportAutocomplete({ label, value, onSelect }: Props) {
  const [query, setQuery] = useState(value);
  const suggestions = useMemo(() => searchAirports(query), [query]);

  return (
    <label className="relative space-y-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value.length < 2) onSelect('');
        }}
        placeholder="Cidade, aeroporto ou IATA"
        className="w-full rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
      />
      {query.length >= 2 && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-xl border border-sky-100 bg-white p-1 shadow-lg">
          {suggestions.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                onClick={() => {
                  setQuery(`${item.city} (${item.code})`);
                  onSelect(item.code);
                }}
                className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-sky-50"
              >
                {item.city} ({item.code}) — {item.airport}
              </button>
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
