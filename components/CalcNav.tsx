'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Compound Interest' },
  { href: '/simple-interest-calculator', label: 'Simple Interest' },
  { href: '/savings-calculator', label: 'Savings' },
  { href: '/investment-calculator', label: 'Investment' },
]

export default function CalcNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-2 justify-center mb-8" aria-label="Calculator navigation">
      {links.map(link => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
