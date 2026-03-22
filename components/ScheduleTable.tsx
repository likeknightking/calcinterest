'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Download } from 'lucide-react'
import { YearlySnapshot, CurrencyCode, formatCurrency, exportToCSV } from '@/lib/compound-calculator'

interface Props {
  schedule: YearlySnapshot[]
  currency: CurrencyCode
}

export default function ScheduleTable({ schedule, currency }: Props) {
  const [open, setOpen] = useState(false)

  function handleDownload() {
    const blob = new Blob([exportToCSV(schedule)], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'compound-interest-schedule.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
        >
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Year-by-Year Breakdown
          <span className="text-xs font-normal text-slate-400">({schedule.length} years)</span>
        </button>
        {open && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <Download size={13} /> Export CSV
          </button>
        )}
      </div>

      {open && (
        <div className="overflow-x-auto max-h-80 overflow-y-auto border-t border-slate-100">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                {['Year', 'Balance', 'Principal', 'Contributions', 'Interest Earned'].map(h => (
                  <th key={h} scope="col" className="px-4 py-2.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{row.year}</td>
                  <td className="px-4 py-2.5 text-slate-800 font-semibold tabular-nums">{formatCurrency(row.balance, currency)}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{formatCurrency(row.principal, currency)}</td>
                  <td className="px-4 py-2.5 text-indigo-600 tabular-nums">{formatCurrency(row.contributions, currency)}</td>
                  <td className="px-4 py-2.5 text-emerald-600 tabular-nums">{formatCurrency(row.interest, currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
