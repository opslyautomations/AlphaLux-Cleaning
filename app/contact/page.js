import Breadcrumbs from '@/components/Breadcrumbs'
import GHLForm from '@/components/GHLForm'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Contact Us | AlphaLux Cleaning',
  description:
    'Contact AlphaLux Cleaning to book your free quote. Call (631) 336-8565 or fill out our form. Serving NY, NJ, and CT.',
  openGraph: {
    title: 'Contact AlphaLux Cleaning',
    description: 'Get in touch with AlphaLux Cleaning to book your free quote today.',
    url: 'https://www.alphaluxcleaning.com/contact',
    type: 'website',
    siteName: 'AlphaLux Cleaning',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | AlphaLux Cleaning',
    description: 'Get in touch with AlphaLux Cleaning to book your free quote today.',
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section
        className="bg-navy section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Ready to book your cleaning or have questions? We are here to help. Fill out the form below or
            reach us directly — we respond promptly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <div>
              <h2 className="font-montserrat font-bold text-navy text-2xl mb-6">
                Get Your Free Quote
              </h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <GHLForm />
              </div>
            </div>

            {/* Right: Contact Details */}
            <div>
              <h2 className="font-montserrat font-bold text-navy text-2xl mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.1 2.82 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy mb-1">Phone</h3>
                    <a href="tel:+16313368565" className="text-gold font-semibold text-lg hover:opacity-80 transition-opacity">
                      (631) 336-8565
                    </a>
                    <p className="text-sm text-dark-gray mt-1">Tap to call on mobile</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy mb-1">Email</h3>
                    <a href="mailto:info@alphaluxcleaning.com" className="text-gold font-semibold hover:opacity-80 transition-opacity">
                      info@alphaluxcleaning.com
                    </a>
                    <p className="text-sm text-dark-gray mt-1">We respond within 1 business day</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy mb-2">Business Hours</h3>
                    <div className="space-y-1 text-dark-gray">
                      <p><span className="font-medium">Monday &ndash; Saturday:</span> 7:00 AM &ndash; 7:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy mb-2">Service Area</h3>
                    <div className="space-y-1 text-dark-gray">
                      <p>New York (NYC, Long Island, Upstate)</p>
                      <p>New Jersey (Newark, Trenton)</p>
                      <p>Connecticut (New Haven, Hartford, Danbury)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Reach Out — We Would Love to Help"
        subtext="Whether you need a one-time deep clean or an ongoing cleaning plan, AlphaLux is here to serve you across NY, NJ, and CT."
      />
    </>
  )
}
