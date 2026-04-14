import Breadcrumbs from '@/components/Breadcrumbs'
import ReviewCard from '@/components/ReviewCard'
import CTASection from '@/components/CTASection'
import { reviews } from '@/lib/reviews'

export const metadata = {
  title: 'Client Reviews | AlphaLux Cleaning',
  description:
    'Read what our clients across New York, New Jersey, and Connecticut say about AlphaLux Cleaning. Consistently 5-star rated cleaning services.',
  openGraph: {
    title: 'Client Reviews | AlphaLux Cleaning',
    description: 'See what our clients say about AlphaLux Cleaning — 5-star rated across NY, NJ, and CT.',
    url: 'https://www.alphaluxcleaning.com/reviews',
    type: 'website',
    siteName: 'AlphaLux Cleaning',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Reviews | AlphaLux Cleaning',
    description: 'See what our clients say about AlphaLux Cleaning — 5-star rated across NY, NJ, and CT.',
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Reviews' },
]

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AlphaLux Cleaning',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewBody: review.text,
    itemReviewed: { '@type': 'LocalBusiness', name: 'AlphaLux Cleaning' },
  })),
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section
        className="bg-navy section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-6">
            We are proud to serve hundreds of satisfied clients across New York, New Jersey, and Connecticut.
            Here is what they have to say about the AlphaLux experience.
          </p>
          {/* Aggregate Rating Display */}
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-montserrat font-bold">5.0 Average — 8 Reviews</span>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                city={review.city}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Experience 5-Star Cleaning?"
        subtext="Join our hundreds of satisfied clients across New York, New Jersey, and Connecticut. Book your free quote today."
      />
    </>
  )
}
