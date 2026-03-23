import type { Metadata } from 'next'
import CompoundCalculator from '@/components/CompoundCalculator'
import AdSlot from '@/components/AdSlot'
import CalcNav from '@/components/CalcNav'

export const metadata: Metadata = {
  title: 'Investment Calculator — Project Your Portfolio Growth Over Time',
  description:
    'Free investment calculator. See how your investments grow with compound returns, monthly contributions, and dollar-cost averaging. Plan for retirement and long-term wealth.',
  openGraph: {
    title: 'Investment Calculator — Free Portfolio Growth Tool',
    description: 'Project your investment growth with compound returns and monthly contributions.',
    type: 'website',
    url: 'https://calcinterest.com/investment-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Calculator',
    description: 'See how your investments grow over time with compound returns.',
  },
  alternates: { canonical: 'https://calcinterest.com/investment-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Investment Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free investment calculator with compound growth projections, monthly contributions, and inflation adjustment for long-term investing.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average stock market return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The S&P 500 has historically returned about 10% per year on average before inflation, or approximately 7% after inflation. However, individual years vary widely — from losses of 30%+ to gains of 30%+. Long-term investing smooths out this volatility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is dollar-cost averaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dollar-cost averaging (DCA) is the practice of investing a fixed amount at regular intervals regardless of market conditions. By investing consistently — say $500 per month — you buy more shares when prices are low and fewer when prices are high, reducing the impact of market timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I invest per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common guideline is to invest 15-20% of your gross income for retirement. If that is not feasible, start with whatever you can afford and increase over time. Even $100-$500 per month can grow to significant wealth over 20-30 years thanks to compound returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between saving and investing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saving typically means putting money in low-risk, liquid accounts like savings accounts or CDs (earning 4-5%). Investing means putting money into assets like stocks, bonds, or real estate with higher potential returns (7-10%) but also higher risk and volatility. Investing is better for long-term goals beyond 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to become a millionaire by investing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Investing $500 per month at a 10% average return, you would reach $1 million in about 30 years. Starting with $10,000 and adding $500 monthly at 10%, it takes about 28 years. The key factors are your contribution amount, rate of return, and time in the market.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I invest a lump sum or use dollar-cost averaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Historically, lump-sum investing outperforms dollar-cost averaging about two-thirds of the time because markets tend to go up over time. However, DCA reduces the risk of investing a large amount right before a market downturn. If you have a large sum, consider investing it over 3-6 months as a compromise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are index funds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Index funds are investment funds that track a specific market index like the S&P 500. They offer broad diversification, very low fees (often 0.03-0.10% per year), and historically outperform most actively managed funds. They are widely recommended as the core of a long-term investment strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does inflation affect my investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inflation erodes the purchasing power of your money over time. If your investments earn 10% and inflation is 3%, your real return is about 7%. Use our inflation adjustment feature to see the real value of your investments in today\'s dollars. Over 30 years, inflation can reduce the apparent value of your portfolio by more than half.',
      },
    },
  ],
}

export default function InvestmentCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg font-bold text-slate-800">📈 Investment Calculator</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <CalcNav />

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Investment Calculator</h2>
            <p className="text-slate-500">Project your portfolio growth with compound returns and regular contributions.</p>
          </div>

          <CompoundCalculator
            defaultPrincipal={10000}
            defaultRate={10}
            defaultYears={20}
            defaultMonthly={500}
          />

          <AdSlot slot="3344556677" format="horizontal" />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The Power of Long-Term Investing</h2>
              <p className="text-slate-600 leading-relaxed">
                Long-term investing is one of the most reliable paths to building wealth. The stock market, as measured by the S&P 500 index, has delivered an average annual return of approximately <strong>10% before inflation</strong> over the past century. While individual years can be volatile — with gains or losses exceeding 30% — holding investments for 20 years or more has historically always produced positive returns.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                The magic of compound returns means your investment gains generate their own gains. A $10,000 investment earning 10% annually grows to $67,275 in 20 years without any additional contributions. Add $500 per month and that number jumps to over $445,000. This exponential growth curve is why financial advisors consistently recommend starting to invest as early as possible — time in the market is far more valuable than timing the market.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Dollar-Cost Averaging Explained</h2>
              <p className="text-slate-600 leading-relaxed">
                Dollar-cost averaging (DCA) is the strategy of investing a fixed amount of money at regular intervals, regardless of what the market is doing. When you set up automatic monthly investments of $500, you are practicing DCA. This approach has several powerful advantages for everyday investors.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                When the market drops, your fixed $500 buys more shares at lower prices. When the market rises, you buy fewer shares but your existing holdings are worth more. Over time, this averages out your purchase price and removes the impossible task of predicting market highs and lows. Studies consistently show that investors who try to time the market underperform those who invest consistently. DCA also builds a disciplined investing habit and reduces the emotional stress of market volatility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Index Funds: The Foundation of Smart Investing</h2>
              <p className="text-slate-600 leading-relaxed">
                Index funds have revolutionized investing for everyday people. These funds track a broad market index — like the S&P 500 or the total stock market — and provide instant diversification across hundreds or thousands of companies. Their expense ratios are remarkably low, often just 0.03% to 0.10% per year, meaning almost all of your returns stay in your pocket.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Research consistently shows that <strong>over 85% of actively managed funds underperform their benchmark index</strong> over a 15-year period. By simply buying and holding a broad market index fund, you are likely to outperform most professional fund managers. The combination of low costs, broad diversification, and the power of compound returns makes index funds the cornerstone investment recommended by experts from Warren Buffett to Nobel Prize-winning economists.
              </p>
            </section>

            <AdSlot slot="7788990022" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Building a Retirement Investment Plan</h2>
              <p className="text-slate-600 leading-relaxed">
                Planning for retirement is perhaps the most important use case for this investment calculator. The general rule of thumb is to save and invest <strong>15% to 20% of your gross income</strong> for retirement. Start by maximizing any employer match in your 401(k) — that is free money with an immediate 100% return. Then contribute to a Roth IRA if you qualify, and put any remaining amount back into your 401(k) or a taxable brokerage account.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                How much do you need for retirement? A common target is <strong>25 times your annual expenses</strong>. If you spend $50,000 per year, aim for $1.25 million. This is based on the 4% safe withdrawal rule, which suggests you can withdraw 4% of your portfolio annually with a high probability of not running out of money over a 30-year retirement. Use this calculator to model different contribution amounts and timelines to find the plan that works for your goals.
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
          <p className="text-slate-400 text-sm">Investment Calculator — Free investment growth calculator. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
