const trustItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" fill="#C9A84C"/>
        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Licensed & Insured',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#C9A84C"/>
        <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Satisfaction Guaranteed',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#C9A84C"/>
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="#fff"/>
        <path d="M12 8v1M12 15v1M8 12H7M17 12h-1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Eco-Friendly Products',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#C9A84C"/>
        <circle cx="12" cy="9" r="2.5" fill="#fff"/>
      </svg>
    ),
    label: 'Serving 3 States',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#C9A84C"/>
      </svg>
    ),
    label: '5-Star Rated',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-gray-200 py-4">
      <div className="container-custom">
        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.icon}
              <span className="font-semibold text-navy text-sm md:text-base font-montserrat">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
