import { blogPosts } from '@/lib/blog'

export default function sitemap() {
  const baseUrl = 'https://www.alphaluxcleaning.com'
  const blogSlugs = blogPosts.map((p) => p.slug)
  const services = [
    'standard-cleaning',
    'deep-cleaning',
    'move-in-move-out-cleaning',
    'recurring-cleaning',
    'carpet-upholstery-cleaning',
    'airbnb-cleaning',
    'vacation-rental-cleaning',
    'post-construction-cleaning',
    'commercial-cleaning',
    'janitorial-cleaning',
  ]
  const areas = [
    'new-york-city',
    'long-island',
    'syracuse',
    'rochester',
    'buffalo',
    'newark-nj',
    'trenton-nj',
    'new-haven-ct',
    'hartford-ct',
    'danbury-ct',
  ]
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/reviews`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...services.map((s) => ({ url: `${baseUrl}/services/${s}`, lastModified: new Date() })),
    ...areas.map((a) => ({ url: `${baseUrl}/service-areas/${a}`, lastModified: new Date() })),
    ...blogSlugs.map((s) => ({ url: `${baseUrl}/blog/${s}`, lastModified: new Date() })),
  ]
}
