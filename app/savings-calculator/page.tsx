import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import CompoundCalculator from '@/components/CompoundCalculator'
import AdSlot from '@/components/AdSlot'
import CalcNav from '@/components/CalcNav'

export const metadata: Metadata = {
  title: 'Savings Calculator — Plan Your Savings Goals and Emergency Fund',
  description:
    'Free savings calculator. See how your savings grow with compound interest and monthly contributions. Plan emergency funds, high-yield savings, and retirement goals.',
  openGraph: {
    title: 'Savings Calculator — Free Savings Growth Tool',
    description: 'Plan your savings goals with compound interest and monthly contributions.',
    type: 'website',
    url: 'https://calcinterest.com/savings-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savings Calculator',
    description: 'See how your savings grow over time with compound interest.',
  },
  alternates: { canonical: 'https://calcinterest.com/savings-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Savings Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free savings calculator with compound interest, monthly contributions, and inflation adjustment for savings goals.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should I have in savings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financial experts generally recommend having 3 to 6 months of living expenses in an emergency fund. Beyond that, your savings goals depend on your lifestyle, income, and financial objectives. A good rule of thumb is to save at least 20% of your income each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a high-yield savings account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A high-yield savings account (HYSA) offers significantly higher interest rates than traditional savings accounts — typically 4-5% APY compared to 0.01-0.5%. They are usually offered by online banks with lower overhead costs. Your deposits are FDIC-insured up to $250,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will I have if I save $200 a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saving $200 per month at 4.5% interest, you would have approximately $13,430 after 5 years, $29,820 after 10 years, and $78,660 after 20 years. The longer you save, the more compound interest accelerates your growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 50/30/20 budget rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 50/30/20 rule suggests allocating 50% of after-tax income to needs (rent, food, utilities), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. This framework makes budgeting simple and ensures consistent savings contributions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I save or invest my money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are important. Keep 3-6 months of expenses in a high-yield savings account for emergencies. After that, investing in diversified index funds typically offers better long-term returns (7-10% historically) compared to savings accounts (4-5%). Savings accounts are best for short-term goals and emergency funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to save $10,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your monthly savings rate. Saving $500/month at 4.5% interest, you would reach $10,000 in about 19 months. Saving $200/month, it takes about 45 months (3.75 years). The higher your monthly contribution and interest rate, the faster you reach your goal.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an emergency fund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An emergency fund is money set aside specifically for unexpected expenses — job loss, medical bills, car repairs, or home emergencies. Financial planners recommend 3-6 months of living expenses kept in a liquid, easily accessible account like a high-yield savings account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does inflation affect my savings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, inflation reduces the purchasing power of your savings over time. If inflation is 3% and your savings account earns 4.5%, your real return is only about 1.5%. Use our calculator with the inflation adjustment feature to see the real value of your savings over time.',
      },
    },
  ],
}

export default function SavingsCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="text-lg font-bold text-slate-800">💰 Savings Calculator</div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <CalcNav />

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Savings Calculator</h1>
            <p className="text-slate-500">Plan your savings goals and see how your money grows with compound interest.</p>
          </div>

          <CompoundCalculator
            defaultPrincipal={1000}
            defaultRate={4.5}
            defaultYears={5}
            defaultMonthly={200}
            toolName="savings"
          />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Build Your Savings</h2>
              <p className="text-slate-600 leading-relaxed">
                Building a solid savings habit is one of the most important financial skills you can develop. The key is consistency — even small amounts add up significantly over time thanks to compound interest. Start by setting up automatic transfers from your checking account to your savings account on each payday. This removes the temptation to spend and turns saving into a default behavior rather than a conscious decision.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                The most effective strategy combines a <strong>high-yield savings account</strong> with regular monthly contributions. Online banks often offer rates between 4% and 5% APY, which is dramatically better than the national average of 0.01% at traditional banks. Over 5 years, the difference on a $10,000 balance can be thousands of dollars in extra earnings just from choosing the right account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Building Your Emergency Fund</h2>
              <p className="text-slate-600 leading-relaxed">
                An emergency fund is your financial safety net. Financial experts recommend saving <strong>3 to 6 months of living expenses</strong> in a liquid, easily accessible account. This money protects you from going into debt when unexpected expenses arise — and they always do. Car repairs, medical bills, job changes, and home maintenance can all create financial stress without adequate savings.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Start with a goal of $1,000 as your starter emergency fund, then work toward the full 3-6 month target. If your monthly expenses are $3,000, aim for $9,000 to $18,000. Keep this money in a high-yield savings account where it earns interest while remaining accessible within 1-2 business days. Do not invest your emergency fund in stocks or bonds — liquidity and stability are more important than growth for this purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">High-Yield Savings Accounts Explained</h2>
              <p className="text-slate-600 leading-relaxed">
                High-yield savings accounts (HYSAs) have transformed the savings landscape. These accounts, primarily offered by online banks, provide interest rates that are 10 to 50 times higher than traditional bank savings accounts. The higher rates are possible because online banks have lower operational costs — no branches, fewer employees, and less overhead.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                When choosing a HYSA, look beyond the advertised rate. Consider the minimum balance requirements, monthly fees, withdrawal limits, and whether the institution is FDIC-insured. Most reputable online HYSAs have no monthly fees, no minimum balance, and full FDIC insurance up to $250,000 per depositor. Rates can fluctuate with the federal funds rate, so the APY you see today may change. Use this calculator to model different rate scenarios for your savings plan.
              </p>
            </section>

            <AdSlot slot="9377102300" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The Power of Consistent Monthly Savings</h2>
              <p className="text-slate-600 leading-relaxed">
                Consistency matters more than the amount. Saving $200 every month at 4.5% interest builds to over $13,400 in just 5 years and nearly $80,000 in 20 years. The compound interest effect accelerates as your balance grows — in the early years, most of your balance comes from contributions, but over time, interest becomes a larger and larger portion. This is why starting early and staying consistent produces remarkable results.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Use the <strong>50/30/20 budgeting rule</strong> as a starting point: allocate 50% of your after-tax income to needs, 30% to wants, and 20% to savings and debt repayment. If 20% feels too aggressive, start with 10% and increase by 1% every few months until you reach your target. Automating your savings ensures you never skip a month, and many people find they do not miss money they never see in their checking account.
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
        <Footer />
      </div>
    </>
  )
}
