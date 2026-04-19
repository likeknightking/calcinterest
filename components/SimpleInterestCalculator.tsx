'use client'

import { useState, useMemo, useEffect } from 'react'
import { CurrencyCode, CURRENCIES, formatCurrency } from '@/lib/compound-calculator'
import { trackToolUsed } from '@/lib/track'

interface State {
  principal: number
  rate: number
  time: number
  currency: CurrencyCode
}

const DEFAULT: State = {
  principal: 10000,
  rate: 7,
  time: 5,
  currency: 'USD',
}

function SliderRow({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number
  unit: string; onChange: (v: number) => void
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-3">
        <label className="text-sm font-medium text-slate-600 shrink-0">{label}</label>
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
            {value.toLocaleString('en-US')}{unit}
          </span>
        </div>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full accent-emerald-500 cursor-pointer h-2"
      />
      <div className="flex justify-between text-xs text-slate-400">
        <span>{min.toLocaleString('en-US')}{unit}</span>
        <span>{max.toLocaleString('en-US')}{unit}</span>
      </div>
    </div>
  )
}

export default function SimpleInterestCalculator() {
  const [state, setState] = useState<State>(DEFAULT)

  useEffect(() => {
    trackToolUsed('simple_interest')
  }, [])

  const result = useMemo(() => {
    const { principal, rate, time } = state
    const simpleInterest = (principal * rate * time) / 100
    const simpleTotal = principal + simpleInterest

    // Compound interest for comparison (annual compounding, no contributions)
    const compoundTotal = principal * Math.pow(1 + rate / 100, time)
    const compoundInterest = compoundTotal - principal

    return {
      simpleInterest: Math.round(simpleInterest * 100) / 100,
      simpleTotal: Math.round(simpleTotal * 100) / 100,
      compoundInterest: Math.round(compoundInterest * 100) / 100,
      compoundTotal: Math.round(compoundTotal * 100) / 100,
      difference: Math.round((compoundTotal - simpleTotal) * 100) / 100,
    }
  }, [state])

  return (
    <div className="space-y-4">
      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">Currency</span>
          <select
            value={state.currency}
            onChange={e => setState(prev => ({ ...prev, currency: e.target.value as CurrencyCode }))}
            className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-400 text-slate-700"
          >
            {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.symbol} {c.name}</option>)}
          </select>
        </div>

        <SliderRow label="Principal Amount" value={state.principal} min={100} max={1000000} step={100} unit="" onChange={v => setState(prev => ({ ...prev, principal: v }))} />
        <SliderRow label="Annual Interest Rate" value={state.rate} min={0.5} max={30} step={0.1} unit="%" onChange={v => setState(prev => ({ ...prev, rate: v }))} />
        <SliderRow label="Time Period" value={state.time} min={1} max={50} step={1} unit=" yrs" onChange={v => setState(prev => ({ ...prev, time: v }))} />
      </div>

      {/* Simple Interest Result */}
      <div className="bg-emerald-600 rounded-2xl p-5 text-white" aria-live="polite">
        <p className="text-emerald-100 text-xs font-medium uppercase tracking-wide mb-1">Simple Interest Earned</p>
        <p className="text-4xl font-bold tabular-nums">{formatCurrency(result.simpleInterest, state.currency)}</p>
        <p className="text-emerald-200 text-sm mt-1">
          Total amount: <span className="text-white font-semibold">{formatCurrency(result.simpleTotal, state.currency)}</span>
        </p>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Simple Interest Total</p>
          <p className="text-lg font-bold text-slate-800 tabular-nums">{formatCurrency(result.simpleTotal, state.currency)}</p>
          <p className="text-xs text-slate-400 mt-1">Interest: {formatCurrency(result.simpleInterest, state.currency)}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Compound Interest Total</p>
          <p className="text-lg font-bold text-emerald-600 tabular-nums">{formatCurrency(result.compoundTotal, state.currency)}</p>
          <p className="text-xs text-slate-400 mt-1">Interest: {formatCurrency(result.compoundInterest, state.currency)}</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
        <p className="text-xs text-amber-700 font-medium">Compound interest earns you extra</p>
        <p className="text-2xl font-bold text-emerald-700 tabular-nums mt-1">
          +{formatCurrency(result.difference, state.currency)}
        </p>
        <p className="text-xs text-amber-600 mt-1">compared to simple interest over {state.time} years</p>
      </div>

      {/* Formula */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-sm font-semibold text-slate-600 mb-3">Simple Interest Formula</h3>
        <div className="bg-slate-50 rounded-lg p-4 text-center">
          <p className="text-lg font-mono text-slate-700">I = P &times; R &times; T / 100</p>
        </div>
        <div className="mt-3 space-y-1 text-sm text-slate-500">
          <p><strong>I</strong> = Interest earned = {formatCurrency(result.simpleInterest, state.currency)}</p>
          <p><strong>P</strong> = Principal = {formatCurrency(state.principal, state.currency)}</p>
          <p><strong>R</strong> = Annual rate = {state.rate}%</p>
          <p><strong>T</strong> = Time in years = {state.time}</p>
        </div>
      </div>
    </div>
  )
}
