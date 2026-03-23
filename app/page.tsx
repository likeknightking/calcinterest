import CompoundCalculator from '@/components/CompoundCalculator'
import AdSlot from '@/components/AdSlot'
import CalcNav from '@/components/CalcNav'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Compound Interest Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free compound interest calculator with growth chart, monthly contributions, inflation adjustment, and year-by-year breakdown.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is compound interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. Unlike simple interest, it grows exponentially over time — often called the "eighth wonder of the world."',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between compound and simple interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple interest is calculated only on the principal. Compound interest is calculated on the principal plus all previously earned interest. Over long periods, the difference becomes enormous.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does compounding frequency affect returns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'More frequent compounding (daily vs. annually) results in slightly higher returns. For example, $10,000 at 7% compounded annually for 20 years = $38,697. Compounded monthly = $40,064. The difference grows larger with higher rates and longer periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Rule of 72?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rule of 72 is a quick way to estimate how long it takes to double your money. Divide 72 by your annual interest rate. At 7%, your money doubles in about 72 / 7 = 10.3 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do monthly contributions matter so much?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular contributions compound over time just like the principal. Adding $200/month to a $10,000 investment at 7% for 20 years results in $148,000+ instead of $38,000. Consistent contributions are often more impactful than the initial amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is APY (Annual Percentage Yield)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'APY (or Effective Annual Rate) is the real annual return accounting for compounding frequency. A 7% nominal rate compounded monthly gives an APY of 7.229%. APY is what you actually earn and is always higher than the nominal rate when compounding is more frequent than annual.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does inflation impact compound interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inflation reduces the real value of your returns over time. If your investment earns 7% and inflation is 3%, your real return is approximately 4%. Over 20-30 years, failing to account for inflation can lead to a misleading picture of your future purchasing power. Use the inflation adjustment feature in our calculator to see real returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the compound interest formula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The compound interest formula is A = P(1 + r/n)^(nt), where A is the final amount, P is the principal, r is the annual interest rate as a decimal, n is the number of compounding periods per year, and t is the number of years. For monthly compounding at 7% for 10 years on $10,000: A = 10,000(1 + 0.07/12)^(12x10) = $20,097.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg font-bold text-slate-800">📈 Compound Interest Calculator</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <CalcNav />

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Compound Interest Calculator</h2>
            <p className="text-slate-500">See how your money grows over time with the power of compounding.</p>
          </div>

          <CompoundCalculator />

          {/* SEO Content */}
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">What is Compound Interest?</h2>
              <p className="text-slate-600 leading-relaxed">
                Compound interest is often called the <strong>eighth wonder of the world</strong> — a phrase attributed to Albert Einstein. Unlike simple interest, which is calculated only on your initial principal, compound interest is calculated on the principal <em>plus</em> all previously accumulated interest. This creates an exponential growth curve that accelerates over time.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                The longer your money compounds, the more dramatic the effect. The difference between 10 years and 30 years of compounding is not 3x, it is often 8-10x. This is why starting to invest early is one of the most powerful financial decisions you can make. Even small differences in the number of years can lead to dramatically different outcomes for your wealth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The Rule of 72</h2>
              <p className="text-slate-600 leading-relaxed">
                A quick mental math trick: divide <strong>72 by your annual interest rate</strong> to estimate how many years it takes to double your money.
              </p>
              <ul className="mt-3 space-y-1 text-slate-600 list-disc list-inside">
                <li>At <strong>4%</strong> — money doubles in ~18 years</li>
                <li>At <strong>7%</strong> — money doubles in ~10.3 years</li>
                <li>At <strong>10%</strong> — money doubles in ~7.2 years</li>
                <li>At <strong>12%</strong> — money doubles in ~6 years</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                This rule is surprisingly accurate for interest rates between 2% and 15%. For more precise calculations at higher rates, you can use the Rule of 69.3, which is the mathematically exact version. However, 72 is easier to divide mentally and close enough for quick estimates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Start Early?</h2>
              <p className="text-slate-600 leading-relaxed">
                Consider two investors: Alice invests $10,000 at age 25 and never adds another dollar. Bob waits until age 35 and invests $10,000. Both earn 7% annually. By age 65, Alice has <strong>$149,745</strong>. Bob has <strong>$76,123</strong>. Alice ends up with nearly twice as much — just by starting 10 years earlier, not by investing more.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Time is the most powerful variable in compound interest. The earlier you start, the more of that exponential curve you capture. Even if you can only invest small amounts in your twenties, those early contributions have decades to compound and will likely grow into the largest portion of your portfolio.
              </p>
            </section>

            {/* In-article ad */}
            <AdSlot slot="7788990011" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The Compound Interest Formula Explained</h2>
              <p className="text-slate-600 leading-relaxed">
                The standard compound interest formula is <strong>A = P(1 + r/n)^(nt)</strong>, where A is the final amount, P is the principal, r is the annual rate as a decimal, n is the compounding frequency per year, and t is the number of years. This formula reveals why compounding frequency matters — more frequent compounding means slightly higher returns.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                For example, $10,000 at 7% compounded annually for 20 years gives $38,697. Compounded monthly, it gives $40,064 — an extra $1,367. Compounded daily, $40,287. The difference between monthly and daily compounding is small, but the jump from annual to monthly is meaningful. Most savings accounts and investments use daily or monthly compounding, which works in your favor as an investor.
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
          <p className="text-slate-400 text-sm">Compound Interest Calculator — Free investment calculator. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
