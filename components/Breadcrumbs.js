import Link from 'next/link'

export default function Breadcrumbs({ crumbs }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `https://www.alphaluxcleaning.com${crumb.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-light-gray border-b border-gray-200">
        <div className="container-custom py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-dark-gray">
            {crumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-gray-400" aria-hidden="true">/</span>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-soft-navy hover:text-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium" aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
