'use client'

import { useEffect, useRef, useState } from 'react'
import { CompoundResult, CurrencyCode, formatCurrency } from '@/lib/compound-calculator'

function AnimatedNumber({ value, currency }: { value: number; currency: CurrencyCode }) {
  const [display, setDisplay] = useState(value)
  const prevRef = useRef(value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = prevRef.current
    const end = value
    const duration = 500
    const startTime = performance.now()

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(start + (end - start) * eased))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      else prevRef.current = end
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [value])

  return <>{formatCurrency(display, currency)}</>
}

interface Props {
  result: CompoundResult
  currency: CurrencyCode
  principal: number
}

export default function ResultCards({ result, currency, principal }: Props) {
  const gained = result.finalBalance - principal

  return (
    <div className="space-y-3" aria-live="polite">
      {/* Primary card */}
      <div className="bg-emerald-600 rounded-2xl p-5 text-white">
        <p className="text-emerald-100 text-xs font-medium uppercase tracking-wide mb-1">Final Balance</p>
        <p className="text-4xl font-bold tabular-nums">
          <AnimatedNumber value={result.finalBalance} currency={currency} />
        </p>
        <p className="text-emerald-200 text-sm mt-1">
          You gain <span className="text-white font-semibold"><AnimatedNumber value={gained} currency={currency} /></span> on top of your investment
        </p>
      </div>

      {/* 3 stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Interest Earned</p>
          <p className="text-lg font-bold text-emerald-600 tabular-nums">
            <AnimatedNumber value={result.totalInterest} currency={currency} />
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Total Invested</p>
          <p className="text-lg font-bold text-slate-800 tabular-nums">
            <AnimatedNumber value={result.totalContributions} currency={currency} />
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Eff. Annual Yield</p>
          <p className="text-lg font-bold text-indigo-600 tabular-nums">
            {result.effectiveAnnualRate.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Simple vs Compound comparison */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-amber-700 font-medium">Simple interest would give you</p>
          <p className="text-lg font-bold text-amber-800 tabular-nums">
            {formatCurrency(result.simpleInterest, currency)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-emerald-700 font-medium">Compounding earns you extra</p>
          <p className="text-lg font-bold text-emerald-700 tabular-nums">
            +{formatCurrency(result.finalBalance - result.simpleInterest, currency)}
          </p>
        </div>
      </div>
    </div>
  )
}
