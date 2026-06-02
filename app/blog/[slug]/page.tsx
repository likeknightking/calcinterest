import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import AdSlot from '@/components/AdSlot'
import { getAllSlugs, getPost, getRelatedPosts } from '@/lib/posts'

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article not found' }
  const url = `https://calcinterest.com/blog/${post.slug}`
  return {
    title: `${post.title} | CalcInterest`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug)
  const url = `https://calcinterest.com/blog/${post.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Organization', name: post.author, url: 'https://calcinterest.com/editorial-standards' },
    publisher: {
      '@type': 'Organization',
      name: 'CalcInterest',
      url: 'https://calcinterest.com',
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calcinterest.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://calcinterest.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">📈 Compound Interest Calculator</Link>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-600">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-500">{post.category}</span>
          </nav>

          <article>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">{post.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <Link href="/editorial-standards" className="hover:text-slate-600">{post.author}</Link>
                <span>•</span>
                <time dateTime={post.date}>Updated {formatDate(post.updated)}</time>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

            <AdSlot slot="9377102300" format="article" />

            <div className="mt-10 rounded-xl bg-emerald-50 border border-emerald-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Try the free calculator</h2>
              <p className="text-slate-600 text-sm mb-4">
                Put these numbers to work. See exactly how your money grows with charts and a year-by-year breakdown.
              </p>
              <Link href="/" className="inline-block bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors">
                Open the Compound Interest Calculator →
              </Link>
            </div>
          </article>

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Related guides</h2>
              <div className="grid gap-4">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-slate-500 text-sm">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link href="/blog" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">← Back to all guides</Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
