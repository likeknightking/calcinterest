import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — CalcInterest.com',
  description: 'Terms of service for CalcInterest.com. Understand the terms and conditions for using our free compound interest calculator tools.',
  alternates: { canonical: 'https://calcinterest.com/terms' },
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">📈 Compound Interest Calculator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Acceptance of Terms</h2>
            <p>By accessing and using CalcInterest.com (&quot;the site&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Description of Service</h2>
            <p>CalcInterest.com provides free online compound interest, simple interest, savings, and investment calculators. These tools are intended for informational and educational purposes only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Disclaimer of Warranties</h2>
            <p>All tools and calculations are provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without warranties of any kind, either express or implied. We do not warrant that the calculations produced by our tools are accurate, complete, or suitable for any particular purpose. While we use standard compound interest formulas, results are estimates and should be verified with a qualified financial professional before making any investment decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitation of Liability</h2>
            <p>CalcInterest.com and its operators shall not be liable for any damages arising from the use of or inability to use this site or its tools. This includes, but is not limited to, direct, indirect, incidental, consequential, or punitive damages. You use the calculators at your own risk and are solely responsible for any decisions made based on the results.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Not Financial Advice</h2>
            <p>The information and calculations provided on this site do not constitute financial, investment, tax, or legal advice. Results are estimates based on the values you input and standard mathematical formulas. Actual investment returns may vary due to market conditions, fees, taxes, and other factors not accounted for by these calculators. Always consult a qualified financial advisor before making investment decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Intellectual Property</h2>
            <p>All content on this site, including text, graphics, logos, code, and design, is the property of CalcInterest.com and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without prior written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">User Responsibilities</h2>
            <p>You agree to use this site only for lawful purposes. You are responsible for ensuring the accuracy of any data you input into our calculators. You agree not to attempt to disrupt, overload, or interfere with the proper functioning of the site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the site following any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Contact</h2>
            <p>If you have any questions about these terms, please contact us at <strong>contact@calcinterest.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
