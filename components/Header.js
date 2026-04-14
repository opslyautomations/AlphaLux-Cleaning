'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const servicesLinks = [
  { label: 'Standard Cleaning', href: '/services/standard-cleaning' },
  { label: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { label: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
  { label: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { label: 'Carpet & Upholstery Cleaning', href: '/services/carpet-upholstery-cleaning' },
  { label: 'Airbnb Cleaning', href: '/services/airbnb-cleaning' },
  { label: 'Vacation Rental Cleaning', href: '/services/vacation-rental-cleaning' },
  { label: 'Post Construction Cleaning', href: '/services/post-construction-cleaning' },
  { label: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
  { label: 'Janitorial Cleaning', href: '/services/janitorial-cleaning' },
]

const areasLinks = [
  { label: 'New York City', href: '/service-areas/new-york-city' },
  { label: 'Long Island', href: '/service-areas/long-island' },
  { label: 'Syracuse', href: '/service-areas/syracuse' },
  { label: 'Rochester', href: '/service-areas/rochester' },
  { label: 'Buffalo', href: '/service-areas/buffalo' },
  { label: 'Newark, NJ', href: '/service-areas/newark-nj' },
  { label: 'Trenton, NJ', href: '/service-areas/trenton-nj' },
  { label: 'New Haven, CT', href: '/service-areas/new-haven-ct' },
  { label: 'Hartford, CT', href: '/service-areas/hartford-ct' },
  { label: 'Danbury, CT', href: '/service-areas/danbury-ct' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileAreasOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight" onClick={closeMobile}>
          <span className="font-montserrat font-extrabold text-navy text-xl tracking-tight">
            Alpha<span className="text-gold">Lux</span>
          </span>
          <span className="text-xs text-soft-navy font-inter tracking-wide">CLEANING</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/" className="text-dark-gray hover:text-gold font-medium transition-colors text-sm">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-dark-gray hover:text-gold font-medium transition-colors text-sm"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray hover:text-navy transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-dark-gray hover:text-gold font-medium transition-colors text-sm"
              aria-expanded={areasOpen}
              aria-haspopup="true"
            >
              Service Areas
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 pt-2 w-48 z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {areasLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray hover:text-navy transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-dark-gray hover:text-gold font-medium transition-colors text-sm">
            About
          </Link>
          <Link href="/reviews" className="text-dark-gray hover:text-gold font-medium transition-colors text-sm">
            Reviews
          </Link>
          <Link href="/blog" className="text-dark-gray hover:text-gold font-medium transition-colors text-sm">
            Blog
          </Link>
          <Link href="/contact" className="text-dark-gray hover:text-gold font-medium transition-colors text-sm">
            Contact
          </Link>
        </nav>

        {/* Right: CTA + Phone (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+16313368565" className="text-sm text-soft-navy font-medium hover:text-gold transition-colors">
            (631) 336-8565
          </a>
          <Link
            href="/contact"
            className="bg-gold text-navy font-bold font-montserrat px-5 py-2.5 rounded text-sm hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+16313368565"
            aria-label="Call AlphaLux Cleaning"
            className="text-navy hover:text-gold transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.1 2.82 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="text-navy hover:text-gold transition-colors p-1"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg" role="navigation" aria-label="Mobile navigation">
          <div className="container-custom py-4 flex flex-col gap-1">
            <Link href="/" onClick={closeMobile} className="py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100">
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 py-1 flex flex-col gap-1">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="py-1.5 text-sm text-soft-navy hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Service Areas */}
            <div>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="w-full flex justify-between items-center py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100"
                aria-expanded={mobileAreasOpen}
              >
                Service Areas
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 py-1 flex flex-col gap-1">
                  {areasLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="py-1.5 text-sm text-soft-navy hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={closeMobile} className="py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100">
              About
            </Link>
            <Link href="/reviews" onClick={closeMobile} className="py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100">
              Reviews
            </Link>
            <Link href="/blog" onClick={closeMobile} className="py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100">
              Blog
            </Link>
            <Link href="/contact" onClick={closeMobile} className="py-2 text-dark-gray hover:text-gold font-medium border-b border-gray-100">
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMobile}
              className="mt-3 bg-gold text-navy font-bold font-montserrat px-6 py-3 rounded text-center hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
