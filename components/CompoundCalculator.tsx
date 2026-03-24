'use client'

import { useState, useMemo } from 'react'
import { calculateCompound, CompoundingFrequency, CurrencyCode } from '@/lib/compound-calculator'
import CalculatorInputs from './CalculatorInputs'
import ResultCards from './ResultCards'
import GrowthChart from './GrowthChart'
import ScheduleTable from './ScheduleTable'
import AdSlot from './AdSlot'

interface State {
  principal: number
  annualRate: number
  years: number
  frequency: CompoundingFrequency
  monthlyContribution: number
  inflationRate: number
  currency: CurrencyCode
}

interface CompoundCalculatorProps {
  defaultPrincipal?: number
  defaultRate?: number
  defaultYears?: number
  defaultMonthly?: number
}

const DEFAULT: State = {
  principal: 10000,
  annualRate: 7,
  years: 20,
  frequency: 'monthly',
  monthlyContribution: 200,
  inflationRate: 0,
  currency: 'USD',
}

export default function CompoundCalculator({
  defaultPrincipal,
  defaultRate,
  defaultYears,
  defaultMonthly,
}: CompoundCalculatorProps = {}) {
  const [state, setState] = useState<State>({
    ...DEFAULT,
    ...(defaultPrincipal !== undefined && { principal: defaultPrincipal }),
    ...(defaultRate !== undefined && { annualRate: defaultRate }),
    ...(defaultYears !== undefined && { years: defaultYears }),
    ...(defaultMonthly !== undefined && { monthlyContribution: defaultMonthly }),
  })

  function handleChange(field: string, value: number | string) {
    setState(prev => ({ ...prev, [field]: value }))
  }

  const result = useMemo(
    () => calculateCompound(
      state.principal,
      state.annualRate,
      state.years,
      state.frequency,
      state.monthlyContribution,
      state.inflationRate,
    ),
    [state.principal, state.annualRate, state.years, state.frequency, state.monthlyContribution, state.inflationRate]
  )

  return (
    <div className="space-y-4">
      <CalculatorInputs {...state} onChange={handleChange} />

      <ResultCards result={result} currency={state.currency} principal={state.principal} />

      <GrowthChart schedule={result.schedule} currency={state.currency} />

      {/* Ad — between chart and schedule table */}
      <AdSlot slot="3164015341" format="horizontal" />

      <ScheduleTable schedule={result.schedule} currency={state.currency} />

      {/* Ad — below tool */}
      <AdSlot slot="2505272890" format="rectangle" className="mx-auto" />
    </div>
  )
}
