import type { Metadata } from 'next'
import SimpleInterestCalculator from '@/components/SimpleInterestCalculator'
import AdSlot from '@/components/AdSlot'
import CalcNav from '@/components/CalcNav'

export const metadata: Metadata = {
  title: 'Simple Interest Calculator — Calculate I = P x R x T Instantly',
  description:
    'Free simple interest calculator. Enter principal, rate, and time to calculate interest instantly. Compare simple vs compound interest side by side.',
  openGraph: {
    title: 'Simple Interest Calculator — Free Online Tool',
    description: 'Calculate simple interest with the formula I = P x R x T. Compare with compound interest.',
    type: 'website',
    url: 'https://calcinterest.com/simple-interest-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Interest Calculator',
    description: 'Calculate simple interest and compare with compound interest.',
  },
  alternates: { canonical: 'https://calcinterest.com/simple-interest-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Simple Interest Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free simple interest calculator. Calculate I = P x R x T with side-by-side compound interest comparison.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is simple interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple interest is a method of calculating interest where the interest is computed only on the original principal amount. The formula is I = P x R x T / 100, where P is principal, R is the annual rate, and T is the time in years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the simple interest formula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The simple interest formula is I = P x R x T / 100. P is the principal (initial amount), R is the annual interest rate as a percentage, and T is the time period in years. The total amount at maturity is A = P + I.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between simple and compound interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple interest is calculated only on the original principal. Compound interest is calculated on the principal plus all previously accumulated interest. Over time, compound interest grows exponentially while simple interest grows linearly.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is simple interest used in real life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple interest is commonly used for short-term loans, auto loans, some personal loans, and certificates of deposit. It is also used in Treasury bills, some bonds, and in calculating interest for partial-year periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is simple interest better than compound interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your perspective. As a borrower, simple interest is better because you pay less total interest. As an investor, compound interest is better because your money grows faster. For long-term investments, compound interest significantly outperforms simple interest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you calculate simple interest for months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate simple interest for months, convert the time to years by dividing by 12. For example, for 6 months: T = 6/12 = 0.5 years. Then apply the formula I = P x R x 0.5 / 100.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the total amount with simple interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The total amount (maturity value) with simple interest is A = P + I, where I = P x R x T / 100. So the complete formula is A = P(1 + RT/100). For example, $10,000 at 5% for 3 years gives A = $10,000 x (1 + 0.15) = $11,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can simple interest be negative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, yes. If the interest rate is negative (as seen in some European central bank policies), simple interest would reduce the principal over time. However, negative interest rates are rare and typically only apply to institutional deposits.',
      },
    },
  ],
}

export default function SimpleInterestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg font-bold text-slate-800">📊 Simple Interest Calculator</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <CalcNav />

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Simple Interest Calculator</h2>
            <p className="text-slate-500">Calculate interest using the formula I = P &times; R &times; T and compare with compound interest.</p>
          </div>

          <SimpleInterestCalculator />

          <AdSlot slot="1122334455" format="horizontal" />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Simple Interest</h2>
              <p className="text-slate-600 leading-relaxed">
                Simple interest is one of the most straightforward ways to calculate interest on a loan or investment. Unlike compound interest, which calculates interest on both the principal and previously earned interest, simple interest is computed <strong>only on the original principal amount</strong>. This makes it predictable and easy to calculate.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                The formula is <strong>I = P &times; R &times; T / 100</strong>, where P represents the principal, R is the annual interest rate as a percentage, and T is the time period in years. Because interest is never added back to the principal, simple interest grows in a straight line rather than an exponential curve. This linear growth makes it popular for short-term lending and certain fixed-income products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">When is Simple Interest Used?</h2>
              <p className="text-slate-600 leading-relaxed">
                Simple interest appears more often than you might think in everyday financial products. Auto loans are one of the most common examples. Many car dealerships and banks offer auto financing that uses simple interest calculations. Personal loans from banks and credit unions often use simple interest too, especially for shorter terms.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Treasury bills (T-bills) and some government bonds use simple interest. Certificates of deposit with fixed terms sometimes calculate returns using simple interest. When you borrow from friends or family with a basic interest agreement, that typically follows simple interest as well. Understanding which products use simple vs compound interest helps you make better borrowing and investing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Simple vs Compound Interest: Why It Matters</h2>
              <p className="text-slate-600 leading-relaxed">
                The difference between simple and compound interest may seem small at first, but it grows dramatically over time. On a $10,000 investment at 7% for 5 years, simple interest earns $3,500 while compound interest earns $4,026 — a difference of $526. Extend that to 30 years and simple interest earns $21,000 while compound interest earns $66,112.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                As a borrower, you generally want simple interest because the total cost of borrowing is lower. As an investor or saver, compound interest works in your favor because your returns generate their own returns. This is why financial advisors emphasize the importance of compound growth for retirement accounts and long-term wealth building. Our calculator above shows both side by side so you can see the real difference for your specific numbers.
              </p>
            </section>

            <AdSlot slot="5566778800" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Calculate Simple Interest Step by Step</h2>
              <p className="text-slate-600 leading-relaxed">
                Calculating simple interest is straightforward. First, identify your principal amount (the initial sum of money). Second, determine the annual interest rate as a percentage. Third, establish the time period in years. If your time is in months, divide by 12. If in days, divide by 365.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Plug these values into the formula: <strong>I = P &times; R &times; T / 100</strong>. For example, with a $5,000 principal at 6% for 3 years: I = 5,000 &times; 6 &times; 3 / 100 = $900. Your total repayment would be $5,900. For partial years, say 18 months: I = 5,000 &times; 6 &times; 1.5 / 100 = $450. This transparency makes budgeting predictable since each payment period accrues the same amount of interest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqJsonLd.mainEntity.map(faq => (
                  <div key={faq.name}>
                    <h3 className="text-lg font-semibold text-slate-800">{faq.name}</h3>
                    <p className="text-slate-600 leading-relaxed mt-1">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-slate-200 mt-16 py-8 text-center bg-white">
          <p className="text-slate-400 text-sm">Simple Interest Calculator — Free financial calculator. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
