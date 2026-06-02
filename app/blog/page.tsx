import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CalcNav from '@/components/CalcNav'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Guides & Articles — Compound Interest, Investing & Saving | CalcInterest',
  description:
    'In-depth guides on compound interest, investing, saving, and personal finance. Learn how compounding works, how to plan for retirement, and how to make your money grow.',
  alternates: { canonical: 'https://calcinterest.com/blog' },
  openGraph: {
    title: 'Guides & Articles | CalcInterest',
    description: 'In-depth guides on compound interest, investing, and personal finance.',
    type: 'website',
    url: 'https://calcinterest.com/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(p => p.category)))

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://calcinterest.com/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">📈 Compound Interest Calculator</Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <CalcNav />

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Guides &amp; Articles</h1>
            <p className="text-slate-500 max-w-xl mx-auto">
              Clear, practical guides on compound interest, investing, and growing your money over time — written to help you make better financial decisions.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-16">New articles are on the way.</p>
          ) : (
            <div className="space-y-10">
              {categories.map(category => (
                <section key={category}>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-4">{category}</h2>
                  <div className="grid gap-4">
                    {posts
                      .filter(p => p.category === category)
                      .map(post => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
                        >
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">{post.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.readingTime} min read</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  )
}
