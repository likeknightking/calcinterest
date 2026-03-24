import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — CalcInterest.com',
  description: 'Learn about CalcInterest.com, a free compound interest calculator built by developers to help investors understand the power of compounding.',
  alternates: { canonical: 'https://calcinterest.com/about' },
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">📈 Compound Interest Calculator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">About CalcInterest.com</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What We Do</h2>
            <p>CalcInterest.com is a free online compound interest calculator designed to help investors, savers, and students visualize the power of compound growth. Our tools include a compound interest calculator with interactive growth charts, simple interest calculator, savings calculator, and investment calculator, all featuring year-by-year breakdowns, monthly contribution modeling, and inflation adjustment.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why We Built This</h2>
            <p>Compound interest is one of the most powerful concepts in finance, yet many people underestimate its impact because the math is not intuitive. We built CalcInterest.com to make the exponential growth of compounding visible and tangible through clear charts and detailed year-by-year tables. Understanding how your money grows over time is the foundation of sound financial planning.</p>
            <p className="mt-3">Built by developers for investors, savers, and anyone planning their financial future, this tool focuses on clarity, accuracy, and instant results with no barriers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Our Technology</h2>
            <p>CalcInterest.com is built with Next.js, React, and Tailwind CSS. Growth charts are rendered with Recharts for clear, interactive data visualization. All calculations use standard compound interest formulas and run entirely client-side in your browser. The application is statically optimized for fast page loads.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Our Other Free Tools</h2>
            <p>CalcInterest.com is part of a suite of free online tools built with the same philosophy of simplicity, privacy, and speed:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><a href="https://loancalcemi.com" className="text-blue-600 hover:underline">LoanCalcEMI.com</a> — EMI calculator with amortization schedules for all loan types</li>
              <li><a href="https://passwordmake.com" className="text-blue-600 hover:underline">PasswordMake.com</a> — Secure password and passphrase generator using the Web Crypto API</li>
              <li><a href="https://formatmyjson.com" className="text-blue-600 hover:underline">FormatMyJSON.com</a> — JSON formatter, validator, and converter powered by Monaco Editor</li>
              <li><a href="https://freeinvoicegen.app" className="text-blue-600 hover:underline">FreeInvoiceGen.app</a> — Professional invoice and receipt generator with PDF export</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Contact</h2>
            <p>Have feedback, suggestions, or questions? Reach us at <strong>contact@calcinterest.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
