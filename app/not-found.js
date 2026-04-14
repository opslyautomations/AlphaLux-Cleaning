import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | AlphaLux Cleaning',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-light-gray">
      <h1 className="text-4xl font-bold text-navy font-montserrat mb-4">Page Not Found</h1>
      <p className="text-dark-gray mb-8">
        Looks like this page got a deep clean and disappeared. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="bg-gold text-navy font-semibold px-8 py-3 rounded hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  )
}
