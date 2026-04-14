'use client'

import { useState } from 'react'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'

const categories = ['All', 'Service Guides', 'Location Guides']

const serviceCategories = [
  'Standard Cleaning', 'Deep Cleaning', 'Move-In/Move-Out', 'Recurring Cleaning',
  'Carpet & Upholstery', 'Airbnb Cleaning', 'Post Construction', 'Commercial Cleaning',
  'Vacation Rental', 'Eco-Friendly',
]

function isLocationPost(post) {
  return !serviceCategories.includes(post.category)
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = blogPosts.filter((post) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Location Guides') return isLocationPost(post)
    if (activeFilter === 'Service Guides') return !isLocationPost(post)
    return true
  })

  return (
    <>
      {/* Hero */}
      <section
        className="bg-navy text-white"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom section-padding">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} light />
          <h1 className="font-montserrat font-extrabold text-3xl md:text-5xl mt-4 mb-4">
            Cleaning Tips, Guides &amp; Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Expert advice on house cleaning, deep cleaning, vacation rentals, and more — from the
            professionals at AlphaLux Cleaning.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[64px] z-30">
        <div className="container-custom">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-4 text-sm font-semibold font-montserrat whitespace-nowrap border-b-2 transition-colors ${
                  activeFilter === cat
                    ? 'border-gold text-navy'
                    : 'border-transparent text-dark-gray hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <p className="text-sm text-soft-navy mb-8">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Card top accent */}
                <div className="h-1 bg-gold" />
                <div className="p-6 flex flex-col flex-1">
                  {/* Category badge */}
                  <span className="inline-block bg-navy text-white text-xs font-semibold font-montserrat px-3 py-1 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h2 className="font-montserrat font-bold text-navy text-lg leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-dark-gray text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-soft-navy">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}{' '}
                      &middot; {post.readingTime} read
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold font-semibold text-sm hover:text-navy transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
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
