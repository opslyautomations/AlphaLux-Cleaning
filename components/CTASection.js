import Link from 'next/link'

export default function CTASection({
  heading = 'Ready for a Spotless Space?',
  subtext = 'Book your premium cleaning service today. Serving homes and businesses across New York, New Jersey, and Connecticut.',
}) {
  return (
    <section className="bg-navy section-padding">
      <div className="container-custom text-center">
        <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl mb-4">
          {heading}
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            Call Now: (631) 336-8565
          </a>
        </div>
      </div>
    </section>
  )
}
