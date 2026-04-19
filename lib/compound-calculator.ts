export type CompoundingFrequency = 'daily' | 'monthly' | 'quarterly' | 'annually'

export const COMPOUNDING_FREQ: Record<CompoundingFrequency, number> = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  annually: 1,
}

export interface YearlySnapshot {
  year: number
  balance: number
  principal: number
  contributions: number
  interest: number
}

export interface CompoundResult {
  finalBalance: number
  totalContributions: number
  totalInterest: number
  simpleInterestTotal: number
  effectiveAnnualRate: number
  schedule: YearlySnapshot[]
}

export function calculateCompound(
  principal: number,
  annualRate: number,
  years: number,
  frequency: CompoundingFrequency,
  monthlyContribution: number = 0,
  inflationRate: number = 0
): CompoundResult {
  const n = COMPOUNDING_FREQ[frequency]
  const r = annualRate / 100
  const schedule: YearlySnapshot[] = []

  let balance = principal
  let totalContributions = principal

  for (let year = 1; year <= years; year++) {
    const startBalance = balance

    // Compound the balance over this year
    for (let period = 0; period < n; period++) {
      balance *= 1 + r / n
      // Add monthly contribution at each month mark
      if (frequency !== 'monthly') {
        const monthsPerPeriod = 12 / n
        balance += monthlyContribution * monthsPerPeriod
        totalContributions += monthlyContribution * monthsPerPeriod
      } else {
        balance += monthlyContribution
        totalContributions += monthlyContribution
      }
    }

    // Adjust for inflation (real value) — deflate balance, principal, and
    // contributions consistently so the stacked-area chart stays in real terms
    // and the interest band cannot become negative.
    const deflator = inflationRate > 0 ? Math.pow(1 + inflationRate / 100, year) : 1
    const realBalance = balance / deflator
    const realPrincipal = principal / deflator
    const realContributions = (totalContributions - principal) / deflator

    schedule.push({
      year,
      balance: Math.round(realBalance * 100) / 100,
      principal: Math.round(realPrincipal * 100) / 100,
      contributions: Math.round(realContributions * 100) / 100,
      interest: Math.round((realBalance - realPrincipal - realContributions) * 100) / 100,
    })
  }

  const finalBalance = schedule[schedule.length - 1].balance
  const totalInterest = schedule[schedule.length - 1].interest

  // Simple-interest total: principal + contributions + simple interest on each
  // (kept in nominal terms — used for a side comparison, not the chart).
  let simpleInterestTotal = principal + principal * (annualRate / 100) * years
  const totalMonths = years * 12
  for (let m = 1; m <= totalMonths; m++) {
    const remainingYears = (totalMonths - m) / 12
    simpleInterestTotal += monthlyContribution * (1 + (annualRate / 100) * remainingYears)
  }
  const effectiveAnnualRate = (Math.pow(1 + r / n, n) - 1) * 100

  return {
    finalBalance: Math.round(finalBalance * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    simpleInterestTotal: Math.round(simpleInterestTotal * 100) / 100,
    effectiveAnnualRate: Math.round(effectiveAnnualRate * 1000) / 1000,
    schedule,
  }
}

export const CURRENCIES = [
  { code: 'USD', symbol: '$',   name: 'US Dollar'         },
  { code: 'INR', symbol: '₹',   name: 'Indian Rupee'      },
  { code: 'EUR', symbol: '€',   name: 'Euro'              },
  { code: 'GBP', symbol: '£',   name: 'British Pound'     },
  { code: 'BRL', symbol: 'R$',  name: 'Brazilian Real'    },
  { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar'   },
  { code: 'AUD', symbol: 'A$',  name: 'Australian Dollar' },
] as const

export type CurrencyCode = typeof CURRENCIES[number]['code']

export function formatCurrency(value: number, currency: CurrencyCode = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

export function exportToCSV(schedule: YearlySnapshot[]): string {
  const header = 'Year,Balance,Principal,Contributions,Interest Earned'
  const rows = schedule.map(r =>
    `${r.year},${r.balance},${r.principal},${r.contributions},${r.interest}`
  )
  return [header, ...rows].join('\n')
}
