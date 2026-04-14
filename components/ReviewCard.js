export default function ReviewCard({ name, city, text, rating }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col h-full">
      <div className="flex mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#C9A84C"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <svg
            key={`empty-${i}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#D1D5DB"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-dark-gray text-sm leading-relaxed flex-grow italic">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-semibold text-navy font-montserrat">{name}</p>
        <p className="text-sm text-soft-navy">{city}</p>
      </div>
    </div>
  )
}
