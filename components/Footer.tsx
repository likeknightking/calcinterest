import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-slate-500 hover:text-slate-700">Guides &amp; Articles</Link></li>
              <li><Link href="/editorial-standards" className="text-slate-500 hover:text-slate-700">Editorial Standards</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-slate-700">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-slate-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-slate-700">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Popular Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/how-compound-interest-works" className="text-slate-500 hover:text-slate-700">How Compound Interest Works</Link></li>
              <li><Link href="/blog/compound-interest-formula-explained" className="text-slate-500 hover:text-slate-700">Compound Interest Formula</Link></li>
              <li><Link href="/blog/rule-of-72-double-your-money" className="text-slate-500 hover:text-slate-700">The Rule of 72</Link></li>
              <li><Link href="/blog/simple-vs-compound-interest" className="text-slate-500 hover:text-slate-700">Simple vs Compound Interest</Link></li>
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
