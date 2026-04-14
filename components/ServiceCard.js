import Link from 'next/link'

export default function ServiceCard({ icon, title, description, href }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-transparent hover:border-navy transition-all duration-300 flex flex-col h-full group">
      <div className="text-gold mb-4 text-3xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-montserrat font-bold text-navy text-lg mb-3">{title}</h3>
      <p className="text-dark-gray text-sm leading-relaxed flex-grow">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-gold font-semibold hover:text-navy transition-colors text-sm group-hover:gap-2"
      >
        Learn More <span className="ml-1" aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}
