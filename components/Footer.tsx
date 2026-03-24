import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-slate-700">Compound Interest Calculator</Link></li>
              <li><Link href="/simple-interest-calculator" className="text-slate-500 hover:text-slate-700">Simple Interest Calculator</Link></li>
              <li><Link href="/savings-calculator" className="text-slate-500 hover:text-slate-700">Savings Calculator</Link></li>
              <li><Link href="/investment-calculator" className="text-slate-500 hover:text-slate-700">Investment Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-slate-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-slate-700">Terms of Service</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-slate-700">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://loancalcemi.com" className="text-slate-500 hover:text-slate-700">EMI Calculator</a></li>
              <li><a href="https://passwordmake.com" className="text-slate-500 hover:text-slate-700">Password Generator</a></li>
              <li><a href="https://formatmyjson.com" className="text-slate-500 hover:text-slate-700">JSON Formatter</a></li>
              <li><a href="https://freeinvoicegen.app" className="text-slate-500 hover:text-slate-700">Invoice Generator</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 text-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} CalcInterest.com. All rights reserved. Free investment calculator — no sign-up required.</p>
        </div>
      </div>
    </footer>
  )
}
