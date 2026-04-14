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

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        {/* Top: Brand */}
        <div className="mb-12 text-center md:text-left">
          <div className="font-montserrat font-extrabold text-2xl mb-2">
            Alpha<span className="text-gold">Lux</span> Cleaning
          </div>
          <p className="text-gray-400 italic font-playfair text-lg">Premium Cleaning. Spotless Results.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center md:justify-start text-sm text-gray-300">
            <a href="tel:+16313368565" className="hover:text-gold transition-colors">
              Phone: (631) 336-8565
            </a>
            <a href="mailto:info@alphaluxcleaning.com" className="hover:text-gold transition-colors">
              Email: info@alphaluxcleaning.com
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-gold uppercase tracking-wide text-sm mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-montserrat font-bold text-gold uppercase tracking-wide text-sm mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-2">
              {areasLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-bold text-gold uppercase tracking-wide text-sm mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 AlphaLux Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
