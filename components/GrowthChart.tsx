'use client'

import dynamic from 'next/dynamic'
import { YearlySnapshot, CurrencyCode, formatCurrency } from '@/lib/compound-calculator'

const AreaChart       = dynamic(() => import('recharts').then(m => m.AreaChart),       { ssr: false })
const Area            = dynamic(() => import('recharts').then(m => m.Area),            { ssr: false })
const XAxis           = dynamic(() => import('recharts').then(m => m.XAxis),           { ssr: false })
const YAxis           = dynamic(() => import('recharts').then(m => m.YAxis),           { ssr: false })
const CartesianGrid   = dynamic(() => import('recharts').then(m => m.CartesianGrid),   { ssr: false })
const Tooltip         = dynamic(() => import('recharts').then(m => m.Tooltip),         { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false, loading: () => <div className="h-[220px] animate-pulse bg-slate-100 rounded-lg" /> })

interface Props {
  schedule: YearlySnapshot[]
  currency: CurrencyCode
}

function formatYAxis(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`
  return String(value)
}

export default function GrowthChart({ schedule, currency }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-sm font-semibold text-slate-600 mb-4">Investment Growth Over Time</h3>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={schedule} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#94A3B8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#94A3B8" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Year', position: 'insideBottom', offset: -2, fontSize: 11, fill: '#94A3B8' }}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11, fill: '#94A3B8' }}
              tickLine={false}
              axisLine={false}
              width={45}
            />
            <Tooltip
              formatter={(value) => formatCurrency(Number(value), currency)}
              labelFormatter={(label) => `Year ${label}`}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #E2E8F0' }}
            />
            <Area type="monotone" dataKey="principal"     name="Principal"     stroke="#94A3B8" fill="url(#colorPrincipal)" strokeWidth={2} stackId="1" />
            <Area type="monotone" dataKey="contributions" name="Contributions"  stroke="#6366F1" fill="url(#colorContrib)"   strokeWidth={2} stackId="1" />
            <Area type="monotone" dataKey="interest"      name="Interest"       stroke="#10B981" fill="url(#colorInterest)"  strokeWidth={2} stackId="1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-3 justify-center">
        {[
          { color: '#94A3B8', label: 'Principal' },
          { color: '#6366F1', label: 'Contributions' },
          { color: '#10B981', label: 'Interest' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}
