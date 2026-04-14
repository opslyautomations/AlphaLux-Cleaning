import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import GHLForm from '@/components/GHLForm'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/services'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.alphaluxcleaning.com/services/${service.slug}`,
    },
  }
}

const serviceIcons = {
  'standard-cleaning': '🏠',
  'deep-cleaning': '✨',
  'move-in-move-out-cleaning': '📦',
  'recurring-cleaning': '🔄',
  'carpet-upholstery-cleaning': '🛋️',
  'airbnb-cleaning': '🏡',
  'vacation-rental-cleaning': '🌴',
  'post-construction-cleaning': '🔨',
  'commercial-cleaning': '🏢',
  'janitorial-cleaning': '🧹',
}

const locationLinks = [
  { city: 'New York City', href: '/service-areas/new-york-city' },
  { city: 'Long Island', href: '/service-areas/long-island' },
  { city: 'Syracuse', href: '/service-areas/syracuse' },
  { city: 'Rochester', href: '/service-areas/rochester' },
  { city: 'Buffalo', href: '/service-areas/buffalo' },
  { city: 'Newark, NJ', href: '/service-areas/newark-nj' },
  { city: 'Trenton, NJ', href: '/service-areas/trenton-nj' },
  { city: 'New Haven, CT', href: '/service-areas/new-haven-ct' },
  { city: 'Hartford, CT', href: '/service-areas/hartford-ct' },
  { city: 'Danbury, CT', href: '/service-areas/danbury-ct' },
]

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServiceData = service.relatedServices
    .map((relSlug) => services.find((s) => s.slug === relSlug))
    .filter(Boolean)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/standard-cleaning' },
    { label: service.title },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }}
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
              {service.h1}
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              {service.description[0]}
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

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6">
            {service.description.map((para, i) => (
              <p key={i} className="text-dark-gray text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-navy text-3xl mb-8">
              What&apos;s Included
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-dark-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-8 text-center">
            The AlphaLux Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-light-gray rounded-lg p-6 border-t-4 border-gold">
                <h3 className="font-montserrat font-bold text-navy text-xl mb-3">{benefit.title}</h3>
                <p className="text-dark-gray leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-navy text-3xl mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm group">
                  <summary className="p-6 cursor-pointer font-montserrat font-semibold text-navy text-lg list-none flex justify-between items-center hover:text-gold transition-colors">
                    {faq.question}
                    <span className="text-gold ml-4 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-dark-gray leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="font-montserrat font-bold text-navy text-3xl mb-8 text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServiceData.map((related) => (
                <ServiceCard
                  key={related.slug}
                  icon={serviceIcons[related.slug] || '✨'}
                  title={related.title}
                  description={related.description[0]}
                  href={`/services/${related.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl mb-8 text-center">
            Service Areas
          </h2>
          <p className="text-center text-dark-gray mb-8">
            We provide {service.title.toLowerCase()} services throughout the tri-state area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locationLinks.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-white border border-gray-200 text-soft-navy hover:border-gold hover:text-gold px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {loc.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <CTASection
        heading={`Book Your ${service.title} Today`}
        subtext="Get a free quote in minutes. Our team is ready to deliver a spotless result every time."
      />
      <section className="bg-light-gray py-16">
        <div className="container-custom max-w-2xl">
          <h2 className="font-montserrat font-bold text-navy text-2xl text-center mb-6">
            Request Your Free Quote
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <GHLForm />
          </div>
        </div>
      </section>
    </>
  )
}
