import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About AlphaLux Cleaning | Premium Cleaning Services NY, NJ, CT',
  description:
    'Learn about AlphaLux Cleaning — our story, our mission, and what sets us apart as the premier cleaning service across New York, New Jersey, and Connecticut.',
  openGraph: {
    title: 'About AlphaLux Cleaning',
    description: 'Our story, mission, and what makes AlphaLux the premium cleaning choice across the tri-state area.',
    url: 'https://www.alphaluxcleaning.com/about',
  },
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About' },
]

const differentiators = [
  {
    title: 'Uncompromising Standards',
    description:
      'We developed a proprietary cleaning checklist that ensures every room, every surface, and every detail is addressed on every visit. No shortcuts, no exceptions. Our team is trained to meet and exceed client expectations consistently.',
  },
  {
    title: 'People We Trust',
    description:
      'Every AlphaLux cleaning professional is carefully vetted, background-checked, and trained before entering a client property. We take the trust you place in us seriously and staff accordingly.',
  },
  {
    title: 'Premium Products',
    description:
      'We use professional-grade, eco-friendly cleaning products that are effective, safe for your family and pets, and gentle on the environment. We believe clean spaces should not come at a cost to the planet.',
  },
  {
    title: 'Customer-First Service',
    description:
      'From easy online booking to responsive communication and our satisfaction guarantee, every aspect of the AlphaLux experience is designed around making your life easier and your expectations exceeded.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />

      {/* Section 1: Hero */}
      <section
        className="bg-navy section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1D3A 0%, #1A2E50 100%)' }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat font-extrabold text-4xl md:text-5xl mb-6">
            About <span className="text-gold">AlphaLux Cleaning</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We are not just a cleaning company. We are a team of dedicated professionals who believe that a
            clean space is the foundation of a better life — and we treat every home and business as if it
            were our own.
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg text-dark-gray space-y-6">
              <p className="text-lg leading-relaxed">
                AlphaLux Cleaning was founded with a simple but powerful belief: people deserve a cleaning
                service they can actually trust — one that shows up on time, does what it promises, and
                leaves their space genuinely spotless.
              </p>
              <p className="text-lg leading-relaxed">
                We started serving homeowners across Long Island and New York City before expanding our
                premium cleaning model throughout the tri-state region. Our growth has been driven entirely
                by referrals and repeat clients — proof that the AlphaLux standard speaks for itself.
              </p>
              <p className="text-lg leading-relaxed">
                Today, AlphaLux operates across New York, New Jersey, and Connecticut, serving everything
                from Manhattan apartments and Long Island estates to commercial offices, Airbnb properties,
                and post-construction sites. Through every expansion, we have maintained the same
                uncompromising commitment to quality that built our reputation from day one.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in doing things right — not fast, not cheap, but right. That philosophy guides
                every cleaning we perform, every team member we hire, and every client relationship we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Sets Us Apart */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gold">
                <h3 className="font-montserrat font-bold text-navy text-xl mb-4">{item.title}</h3>
                <p className="text-dark-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mb-8">
              Our Mission
            </h2>
            <div className="bg-navy rounded-lg p-10">
              <p className="font-playfair text-white text-xl md:text-2xl leading-relaxed italic">
                &ldquo;To deliver the most reliable, thorough, and professional cleaning experience in the
                tri-state area — creating clean, healthy, and beautiful spaces that our clients are proud
                to live and work in.&rdquo;
              </p>
              <div className="mt-6 w-16 h-1 bg-gold mx-auto rounded"></div>
              <p className="text-gold font-montserrat font-bold mt-4">AlphaLux Cleaning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <CTASection
        heading="Experience the AlphaLux Difference"
        subtext="Ready to see what premium cleaning looks like? Book your first clean today and discover why clients across NY, NJ, and CT trust AlphaLux."
      />
    </>
  )
}
