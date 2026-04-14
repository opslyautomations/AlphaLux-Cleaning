import Link from 'next/link'
import GHLForm from '@/components/GHLForm'
import TrustBar from '@/components/TrustBar'
import ServiceCard from '@/components/ServiceCard'
import ReviewCard from '@/components/ReviewCard'
import CTASection from '@/components/CTASection'
import SchemaMarkup from '@/components/SchemaMarkup'
import { reviews } from '@/lib/reviews'

export const metadata = {
  title: 'Premium House Cleaning Services | AlphaLux Cleaning',
  description:
    'AlphaLux Cleaning delivers premium residential and commercial cleaning across NY, NJ, and CT. Book your free quote today.',
  openGraph: {
    title: 'Premium House Cleaning Services | AlphaLux Cleaning',
    description:
      'AlphaLux Cleaning delivers premium residential and commercial cleaning across NY, NJ, and CT. Book your free quote today.',
    url: 'https://www.alphaluxcleaning.com',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AlphaLux Cleaning',
  description:
    'Premium residential and commercial cleaning services across New York, New Jersey, and Connecticut.',
  telephone: '+16313368565',
  email: 'info@alphaluxcleaning.com',
  url: 'https://www.alphaluxcleaning.com',
  areaServed: [
    { '@type': 'State', name: 'New York' },
    { '@type': 'State', name: 'New Jersey' },
    { '@type': 'State', name: 'Connecticut' },
  ],
  priceRange: '$$',
  sameAs: [],
}

const servicesData = [
  {
    icon: '🏠',
    title: 'Standard Cleaning',
    description: 'Regular maintenance cleaning for a consistently fresh and healthy home environment.',
    href: '/services/standard-cleaning',
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    description: 'Comprehensive top-to-bottom cleaning including grout, behind appliances, and overlooked areas.',
    href: '/services/deep-cleaning',
  },
  {
    icon: '📦',
    title: 'Move-In/Move-Out Cleaning',
    description: 'Full detail cleaning for homes during tenant or owner transitions — protect your deposit.',
    href: '/services/move-in-move-out-cleaning',
  },
  {
    icon: '🔄',
    title: 'Recurring Cleaning',
    description: 'Scheduled ongoing cleaning plans — weekly, biweekly, or monthly — with a consistent trusted team.',
    href: '/services/recurring-cleaning',
  },
  {
    icon: '🛋️',
    title: 'Carpet & Upholstery Cleaning',
    description: 'Hot water extraction cleaning for carpets, rugs, and upholstered furniture.',
    href: '/services/carpet-upholstery-cleaning',
  },
  {
    icon: '🏡',
    title: 'Airbnb Cleaning',
    description: 'Fast turnover cleaning for short-term rental properties to keep your ratings high.',
    href: '/services/airbnb-cleaning',
  },
  {
    icon: '🌴',
    title: 'Vacation Rental Cleaning',
    description: 'Guest-ready cleaning for vacation properties — VRBO, vacation homes, and more.',
    href: '/services/vacation-rental-cleaning',
  },
  {
    icon: '🔨',
    title: 'Post Construction Cleaning',
    description: 'Dust, debris, and detail cleaning after renovations or new construction projects.',
    href: '/services/post-construction-cleaning',
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    description: 'Professional cleaning for offices, retail, and commercial properties of all sizes.',
    href: '/services/commercial-cleaning',
  },
  {
    icon: '🧹',
    title: 'Janitorial Cleaning',
    description: 'Ongoing daily and weekly facility maintenance for businesses across the tri-state area.',
    href: '/services/janitorial-cleaning',
  },
]

const whyUsReasons = [
  {
    icon: '✓',
    title: 'Meticulous Attention to Detail',
    description: 'We follow comprehensive checklists so nothing is ever missed. Every surface, every corner, every time.',
  },
  {
    icon: '✓',
    title: 'Vetted, Trusted Professionals',
    description: 'All team members undergo background checks and training before entering any client property.',
  },
  {
    icon: '✓',
    title: 'Eco-Friendly Products',
    description: 'We use professional-grade, environmentally responsible cleaning products safe for families and pets.',
  },
  {
    icon: '✓',
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work. If anything is not right, we come back and make it right — no questions asked.',
  },
  {
    icon: '✓',
    title: 'Licensed & Fully Insured',
    description: 'Complete peace of mind knowing you are covered. We are fully licensed and carry comprehensive insurance.',
  },
  {
    icon: '✓',
    title: 'Tri-State Coverage',
    description: 'Serving New York, New Jersey, and Connecticut — the same premium standard wherever you are located.',
  },
]

const serviceAreas = {
  NY: [
    { city: 'New York City', href: '/service-areas/new-york-city' },
    { city: 'Long Island', href: '/service-areas/long-island' },
    { city: 'Syracuse', href: '/service-areas/syracuse' },
    { city: 'Rochester', href: '/service-areas/rochester' },
    { city: 'Buffalo', href: '/service-areas/buffalo' },
  ],
  NJ: [
    { city: 'Newark', href: '/service-areas/newark-nj' },
    { city: 'Trenton', href: '/service-areas/trenton-nj' },
  ],
  CT: [
    { city: 'New Haven', href: '/service-areas/new-haven-ct' },
    { city: 'Hartford', href: '/service-areas/hartford-ct' },
    { city: 'Danbury', href: '/service-areas/danbury-ct' },
  ],
}

export default function HomePage() {
  const previewReviews = reviews.slice(0, 3)

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Section 1: Hero */}
      <section className="bg-navy" style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}>
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div className="text-white">
              <h1 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Premium Cleaning Services Across{' '}
                <span className="text-gold">New York, New Jersey &amp; Connecticut</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Experience the AlphaLux difference &mdash; meticulous attention to detail, trusted professionals,
                and a spotless space every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+16313368565"
                  className="bg-gold text-navy font-bold font-montserrat px-8 py-4 rounded hover:opacity-90 transition-opacity text-center text-lg"
                >
                  (631) 336-8565
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white font-bold font-montserrat px-8 py-4 rounded hover:bg-white hover:text-navy transition-colors text-center text-lg"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
            {/* Right: Form */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gold px-6 py-3">
                <p className="font-montserrat font-bold text-navy text-center">Get Your Free Quote</p>
              </div>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: TrustBar */}
      <TrustBar />

      {/* Section 3: Services Overview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-dark-gray max-w-2xl mx-auto">
              From routine maintenance to specialty cleaning, AlphaLux offers a comprehensive suite of
              professional cleaning services for homes and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.href}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose AlphaLux */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-4">
              Why Clients Choose AlphaLux Cleaning
            </h2>
            <p className="text-dark-gray max-w-2xl mx-auto">
              We set the standard for premium cleaning in the tri-state area. Here is what makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsReasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-navy text-lg mb-2">{reason.title}</h3>
                  <p className="text-dark-gray text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Service Areas */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-4">
              Serving Communities Across the Tri-State Area
            </h2>
            <p className="text-dark-gray max-w-2xl mx-auto">
              AlphaLux Cleaning operates across New York, New Jersey, and Connecticut. Find your city below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(serviceAreas).map(([state, cities]) => (
              <div key={state} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-montserrat font-bold text-gold text-lg mb-4 uppercase tracking-wide">
                  {state === 'NY' ? 'New York' : state === 'NJ' ? 'New Jersey' : 'Connecticut'}
                </h3>
                <ul className="flex flex-col gap-2">
                  {cities.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="text-soft-navy hover:text-gold transition-colors font-medium"
                      >
                        {area.city} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Reviews Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-dark-gray max-w-2xl mx-auto">
              Hundreds of satisfied clients across New York, New Jersey, and Connecticut trust AlphaLux for their cleaning needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {previewReviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                city={review.city}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold font-montserrat px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              Read All Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Gallery Preview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-4">
              See the AlphaLux Difference
            </h2>
            <p className="text-dark-gray max-w-2xl mx-auto">
              Browse photos of our cleaning work across homes and businesses in the tri-state area.
            </p>
          </div>
          {/* Placeholder gallery grid — replace divs with next/image when real photos are available */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 text-sm font-medium"
                role="img"
                aria-label={`Gallery image ${n}`}
              >
                Gallery Image {n}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold font-montserrat px-8 py-4 rounded hover:opacity-90 transition-opacity"
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <CTASection
        heading="Ready for a Spotless Home or Office?"
        subtext="Book your free quote today and experience the AlphaLux difference. Serving New York, New Jersey, and Connecticut."
      />
    </>
  )
}
