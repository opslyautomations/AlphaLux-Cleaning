import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import GHLForm from '@/components/GHLForm'
import ReviewCard from '@/components/ReviewCard'
import { locations } from '@/lib/locations'
import { reviews } from '@/lib/reviews'

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.alphaluxcleaning.com/service-areas/${location.slug}`,
    },
  }
}

const allServices = [
  { title: 'Standard Cleaning', href: '/services/standard-cleaning' },
  { title: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { title: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
  { title: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { title: 'Carpet & Upholstery Cleaning', href: '/services/carpet-upholstery-cleaning' },
  { title: 'Airbnb Cleaning', href: '/services/airbnb-cleaning' },
  { title: 'Vacation Rental Cleaning', href: '/services/vacation-rental-cleaning' },
  { title: 'Post Construction Cleaning', href: '/services/post-construction-cleaning' },
  { title: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
  { title: 'Janitorial Cleaning', href: '/services/janitorial-cleaning' },
]

export default async function LocationPage({ params }) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)

  if (!location) {
    notFound()
  }

  const previewReviews = reviews.slice(0, 3)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AlphaLux Cleaning',
    description: `Premium residential and commercial cleaning services in ${location.city}, ${location.state}.`,
    telephone: '+16313368565',
    email: 'info@alphaluxcleaning.com',
    url: `https://www.alphaluxcleaning.com/service-areas/${location.slug}`,
    areaServed: [
      { '@type': 'City', name: location.city },
    ],
    priceRange: '$$',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you offer cleaning services in ${location.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, AlphaLux Cleaning provides professional residential and commercial cleaning services throughout ${location.city}, ${location.state}. Contact us to book your free quote today.`,
        },
      },
      {
        '@type': 'Question',
        name: `How do I book a cleaning in ${location.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can book your cleaning in ${location.city} by filling out the quote form on this page, calling us at (631) 336-8565, or emailing info@alphaluxcleaning.com. We respond promptly and will confirm your appointment quickly.`,
        },
      },
      {
        '@type': 'Question',
        name: `What cleaning services are available in ${location.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We offer a full range of cleaning services in ${location.city} including standard cleaning, deep cleaning, move-in/move-out cleaning, recurring cleaning, carpet and upholstery cleaning, Airbnb turnover cleaning, post-construction cleaning, commercial cleaning, and janitorial services.`,
        },
      },
    ],
  }

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas/new-york-city' },
    { label: location.city },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section
        className="bg-navy section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">
              {location.h1}
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              {location.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold text-navy font-bold font-montserrat px-8 py-4 rounded hover:opacity-90 transition-opacity text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+16313368565"
                className="border-2 border-white text-white font-bold font-montserrat px-8 py-4 rounded hover:bg-white hover:text-navy transition-colors text-center"
              >
                Call (631) 336-8565
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-4 text-center">
            Cleaning Services Available in {location.city}
          </h2>
          <p className="text-center text-dark-gray mb-10">
            We offer our full range of professional cleaning services throughout {location.city}, {location.state}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-lg p-5 shadow-sm border border-transparent hover:border-gold transition-all flex items-center gap-3"
              >
                <span className="text-gold font-bold text-xl">&#10003;</span>
                <span className="font-medium text-navy">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AlphaLux in This City */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-10 text-center">
            Why {location.city} Residents Choose AlphaLux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.whyUs.map((reason, i) => (
              <div key={i} className="bg-light-gray rounded-lg p-6 border-t-4 border-gold">
                <h3 className="font-montserrat font-bold text-navy text-xl mb-3">{reason.title}</h3>
                <p className="text-dark-gray leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-10 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      {/* Nearby Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-6">
            Nearby Service Areas
          </h2>
          <p className="text-dark-gray mb-8">
            We also serve communities near {location.city}:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {location.nearby.map((city, i) => (
              <Link
                key={i}
                href={location.nearbyLinks[i]}
                className="bg-light-gray border border-gray-200 text-soft-navy hover:border-gold hover:text-gold px-6 py-3 rounded-full font-medium transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-navy text-3xl mb-8">
              Frequently Asked Questions — {location.city}
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm group">
                  <summary className="p-6 cursor-pointer font-montserrat font-semibold text-navy text-lg list-none flex justify-between items-center hover:text-gold transition-colors">
                    {faq.name}
                    <span className="text-gold ml-4 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-dark-gray leading-relaxed border-t border-gray-100 pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-white py-16">
        <div className="container-custom max-w-2xl">
          <h2 className="font-montserrat font-bold text-navy text-2xl text-center mb-2">
            Get a Free Quote in {location.city}
          </h2>
          <p className="text-center text-dark-gray mb-8">
            Fill out the form below and we will get back to you promptly.
          </p>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <GHLForm />
          </div>
        </div>
      </section>

      <CTASection
        heading={`Premium Cleaning in ${location.city}`}
        subtext={`Serving ${location.city} and surrounding areas with the highest standard of residential and commercial cleaning.`}
      />
    </>
  )
}
