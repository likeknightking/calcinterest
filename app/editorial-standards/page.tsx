import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Editorial Standards — How We Create Our Content | CalcInterest',
  description:
    'How CalcInterest researches, writes, and reviews its guides on compound interest and personal finance. Our commitment to accuracy, clarity, and independence.',
  alternates: { canonical: 'https://calcinterest.com/editorial-standards' },
}

export default function EditorialStandards() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">📈 Compound Interest Calculator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Editorial Standards</h1>
        <p className="text-slate-500 mb-8">How the CalcInterest Editorial Team researches, writes, and reviews everything we publish.</p>

        <div className="article-body">
          <h2>Who writes our content</h2>
          <p>
            Our guides are produced by the <strong>CalcInterest Editorial Team</strong> — writers and reviewers who focus on personal finance,
            saving, and investing fundamentals. We write for everyday savers and investors, not finance professionals, so our priority is
            making complex ideas like compounding genuinely easy to understand.
          </p>

          <h2>How we research and verify</h2>
          <p>Every guide follows the same process before it is published:</p>
          <ul>
            <li>Claims involving numbers are checked against the standard financial formulas we also use in our calculators.</li>
            <li>Worked examples are recalculated to confirm the figures are correct.</li>
            <li>We cite the reasoning behind a recommendation rather than asking you to take it on faith.</li>
            <li>Guides are reviewed for clarity and updated when rates, rules, or best practices change.</li>
          </ul>

          <h2>Our independence</h2>
          <p>
            CalcInterest is free to use and supported by advertising. Ads never influence the content of our guides. We do not sell
            financial products, and we are not paid to recommend any specific bank, broker, or investment.
          </p>

          <h2>This is education, not financial advice</h2>
          <p>
            Our content is for general educational purposes. It does not account for your personal circumstances and is not a substitute for
            advice from a licensed financial professional. Always do your own research before making financial decisions.
          </p>

          <h2>Corrections</h2>
          <p>
            Found something that looks wrong? We want to fix it. Email <strong>contact@calcinterest.com</strong> and we will review it promptly.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">← Read our guides</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
