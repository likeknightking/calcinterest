'use client'

import { useState, useEffect } from 'react'
import { CompoundingFrequency, CurrencyCode, CURRENCIES } from '@/lib/compound-calculator'

// Free-text number input — no spin buttons, formats with commas on blur
function NumberInput({
  value, min, max, step, unit, label, onChange,
}: {
  value: number; min: number; max: number; step: number
  unit: string; label: string; onChange: (v: number) => void
}) {
  const [raw, setRaw] = useState(value.toLocaleString('en-US'))
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (!focused) setRaw(value.toLocaleString('en-US'))
  }, [value, focused])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRaw(e.target.value.replace(/[^0-9.,]/g, ''))
  }

  function handleBlur() {
    setFocused(false)
    const parsed = parseFloat(raw.replace(/,/g, ''))
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed))
      onChange(clamped)
      setRaw(clamped.toLocaleString('en-US'))
    } else {
      setRaw(value.toLocaleString('en-US'))
    }
  }

  function handleFocus() {
    setFocused(true)
    setRaw(value.toString())
  }

  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        inputMode="decimal"
        value={raw}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={label}
        className="w-32 text-right text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
      />
      {unit && <span className="text-sm text-slate-400 shrink-0">{unit}</span>}
    </div>
  )
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
        <NumberInput value={value} min={min} max={max} step={step} unit={unit} label={label} onChange={onChange} />
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={label} aria-valuemin={min} aria-valuemax={max} aria-valuenow={value}
        className="w-full accent-emerald-500 cursor-pointer h-2"
      />
      <div className="flex justify-between text-xs text-slate-400">
        <span>{min.toLocaleString('en-US')}{unit}</span>
        <span>{max.toLocaleString('en-US')}{unit}</span>
      </div>
    </div>
  )
}

interface Props {
  principal: number
  annualRate: number
  years: number
  frequency: CompoundingFrequency
  monthlyContribution: number
  inflationRate: number
  currency: CurrencyCode
  onChange: (field: string, value: number | string) => void
}

export default function CalculatorInputs({
  principal, annualRate, years, frequency, monthlyContribution, inflationRate, currency, onChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">Currency</span>
        <select
          value={currency}
          onChange={e => onChange('currency', e.target.value)}
          className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-400 text-slate-700"
        >
          {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.symbol} {c.name}</option>)}
        </select>
      </div>

      <SliderRow label="Initial Investment"   value={principal}           min={100}   max={1000000} step={100}  unit=""    onChange={v => onChange('principal', v)} />
      <SliderRow label="Annual Interest Rate" value={annualRate}          min={0.5}   max={30}      step={0.1}  unit="%"   onChange={v => onChange('annualRate', v)} />
      <SliderRow label="Time Period"          value={years}               min={1}     max={50}      step={1}    unit=" yrs" onChange={v => onChange('years', v)} />
      <SliderRow label="Monthly Contribution" value={monthlyContribution} min={0}     max={10000}   step={50}   unit=""    onChange={v => onChange('monthlyContribution', v)} />

      {/* Compounding frequency */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-600">Compounding Frequency</label>
        <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl">
          {(['daily', 'monthly', 'quarterly', 'annually'] as CompoundingFrequency[]).map(f => (
            <button
              key={f}
              onClick={() => onChange('frequency', f)}
              className={`py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${frequency === f ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Inflation (advanced) */}
      <details className="group">
        <summary className="text-sm text-slate-400 cursor-pointer hover:text-slate-600 list-none flex items-center gap-1">
          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
          Advanced: Inflation Adjustment
        </summary>
        <div className="mt-3">
          <SliderRow label="Inflation Rate" value={inflationRate} min={0} max={15} step={0.1} unit="%" onChange={v => onChange('inflationRate', v)} />
          {inflationRate > 0 && (
            <p className="text-xs text-amber-600 mt-1">Results show inflation-adjusted (real) value.</p>
          )}
        </div>
      </details>
    </div>
  )
}
