'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'

// Note: Replace the placeholder divs below with next/image components when real photos are available.
// Each placeholder div represents one gallery image with its category and alt text ready.

const galleryItems = [
  { id: 1, category: 'Residential', alt: 'Spotless kitchen after AlphaLux standard cleaning' },
  { id: 2, category: 'Residential', alt: 'Clean bathroom with polished fixtures and sparkling tiles' },
  { id: 3, category: 'Commercial', alt: 'Professional office cleaning — clean desks and floors' },
  { id: 4, category: 'Before & After', alt: 'Before and after deep cleaning of kitchen countertops' },
  { id: 5, category: 'Residential', alt: 'Living room after recurring cleaning service' },
  { id: 6, category: 'Specialty', alt: 'Post-construction cleaning — dust-free renovation result' },
  { id: 7, category: 'Commercial', alt: 'Clean retail store after commercial cleaning service' },
  { id: 8, category: 'Before & After', alt: 'Carpet before and after hot water extraction cleaning' },
  { id: 9, category: 'Residential', alt: 'Move-in ready bedroom after move-out cleaning' },
  { id: 10, category: 'Specialty', alt: 'Airbnb property after turnover cleaning — guest ready' },
  { id: 11, category: 'Residential', alt: 'Master bathroom deep clean with sparkling shower' },
  { id: 12, category: 'Commercial', alt: 'Clean commercial kitchen after janitorial service' },
]

const categories = ['All', 'Residential', 'Commercial', 'Before & After', 'Specialty']

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Gallery' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section
        className="bg-navy section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">Our Work</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Browse photos of AlphaLux cleaning work across homes and businesses throughout New York,
            New Jersey, and Connecticut.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-montserrat font-semibold text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-navy'
                    : 'bg-light-gray text-dark-gray hover:bg-gold hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          {/* Placeholder image grid — replace each div below with a next/image when real photos are available */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md group cursor-pointer"
                style={{ aspectRatio: '4/3' }}
                role="img"
                aria-label={item.alt}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-200 group-hover:bg-gray-300 transition-colors p-4">
                  <span className="text-gray-400 text-sm font-medium text-center">{item.alt}</span>
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-dark-gray py-12">No images in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection
        heading="Like What You See?"
        subtext="Book your cleaning today and experience the AlphaLux difference firsthand."
      />
    </>
  )
}
