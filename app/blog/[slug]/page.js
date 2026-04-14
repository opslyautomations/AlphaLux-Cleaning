import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.alphaluxcleaning.com/blog/${post.slug}`,
      siteName: 'AlphaLux Cleaning',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://www.alphaluxcleaning.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'AlphaLux Cleaning',
      url: 'https://www.alphaluxcleaning.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AlphaLux Cleaning',
      url: 'https://www.alphaluxcleaning.com',
    },
    url: `https://www.alphaluxcleaning.com/blog/${post.slug}`,
    keywords: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.alphaluxcleaning.com/blog/${post.slug}`,
    },
  }

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <SchemaMarkup schema={blogSchema} />
      {faqSchema && <SchemaMarkup schema={faqSchema} />}

      {/* Hero */}
      <section
        className="bg-navy text-white"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom py-12 md:py-16">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
            light
          />
          <div className="max-w-3xl mt-4">
            <span className="inline-block bg-gold text-navy text-xs font-bold font-montserrat px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-montserrat font-extrabold text-2xl md:text-4xl leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span>&middot;</span>
              <span>{post.readingTime} read</span>
              {post.categoryLink && (
                <>
                  <span>&middot;</span>
                  <Link href={post.categoryLink} className="text-gold hover:underline">
                    View Service →
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main article */}
            <article className="lg:col-span-2">
              <p className="text-lg text-soft-navy leading-relaxed mb-8 font-medium border-l-4 border-gold pl-4">
                {post.excerpt}
              </p>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related service CTA */}
              {post.categoryLink && (
                <div className="bg-navy text-white rounded-lg p-6 mb-8">
                  <h3 className="font-montserrat font-bold text-lg mb-2">Related Service</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn more about our{' '}
                    <span className="text-gold font-medium">{post.category}</span> service or
                    get a free quote today.
                  </p>
                  <Link
                    href={post.categoryLink}
                    className="block bg-gold text-navy font-bold font-montserrat text-center px-4 py-3 rounded hover:opacity-90 transition-opacity text-sm mb-3"
                  >
                    View Service Details
                  </Link>
                  <a
                    href="/contact"
                    className="block border border-white text-white font-bold font-montserrat text-center px-4 py-3 rounded hover:bg-white hover:text-navy transition-colors text-sm"
                  >
                    Get a Free Quote
                  </a>
                </div>
              )}

              {/* Quick contact */}
              <div className="bg-light-gray rounded-lg p-6 mb-8">
                <h3 className="font-montserrat font-bold text-navy text-base mb-2">
                  Have Questions?
                </h3>
                <p className="text-dark-gray text-sm mb-4">
                  Our team is available Monday–Saturday, 7AM–7PM.
                </p>
                <a
                  href="tel:+16313368565"
                  className="block bg-gold text-navy font-bold font-montserrat text-center px-4 py-3 rounded hover:opacity-90 transition-opacity text-sm"
                >
                  (631) 336-8565
                </a>
              </div>

              {/* Service areas quick links */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-navy text-base mb-3">
                  We Serve
                </h3>
                <ul className="space-y-1">
                  {[
                    ['New York City', '/service-areas/new-york-city'],
                    ['Long Island', '/service-areas/long-island'],
                    ['Newark, NJ', '/service-areas/newark-nj'],
                    ['Hartford, CT', '/service-areas/hartford-ct'],
                    ['Buffalo, NY', '/service-areas/buffalo'],
                    ['Syracuse, NY', '/service-areas/syracuse'],
                  ].map(([city, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gold hover:text-navy transition-colors">
                        → {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-2xl mb-8">Also Worth Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rPost) => (
              <article
                key={rPost.slug}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-1 bg-gold" />
                <div className="p-5">
                  <span className="inline-block bg-navy text-white text-xs font-semibold font-montserrat px-2 py-0.5 rounded-full mb-2">
                    {rPost.category}
                  </span>
                  <h3 className="font-montserrat font-bold text-navy text-base leading-snug mb-2">
                    {rPost.title}
                  </h3>
                  <p className="text-dark-gray text-sm line-clamp-2 mb-3">{rPost.excerpt}</p>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="text-gold font-semibold text-sm hover:text-navy transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready for a Spotless Space?"
        subtext="Get your free, no-obligation quote today and experience cleaning done right."
      />
    </>
  )
}
