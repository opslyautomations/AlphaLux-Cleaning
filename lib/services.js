const providerSchema = {
  '@type': 'LocalBusiness',
  name: 'AlphaLux Cleaning',
  telephone: '+16313368565',
  url: 'https://www.alphaluxcleaning.com',
}

const areaServed = [
  { '@type': 'State', name: 'New York' },
  { '@type': 'State', name: 'New Jersey' },
  { '@type': 'State', name: 'Connecticut' },
]

export const services = [
  {
    slug: 'standard-cleaning',
    title: 'Standard Cleaning',
    metaTitle: 'Standard House Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Professional standard cleaning services for homes across NY, NJ, and CT. Consistent, reliable, and thorough — book with AlphaLux today.',
    h1: 'Professional Standard Cleaning Services',
    description: [
      'Our standard cleaning service is the foundation of a clean, healthy home. Designed for regular maintenance, this service covers all the essential areas of your home to keep it consistently fresh and presentable.',
      'Whether you schedule weekly, biweekly, or monthly visits, our trained cleaning professionals arrive on time with all supplies and equipment needed to deliver outstanding results every single visit.',
      'AlphaLux Cleaning serves homeowners and renters across New York, New Jersey, and Connecticut with a premium level of care that goes beyond what standard services typically offer.',
    ],
    included: [
      'Dusting all surfaces, furniture, and fixtures',
      'Vacuuming all carpets and area rugs',
      'Mopping hard floors',
      'Cleaning and sanitizing bathrooms (toilet, sink, shower, tub)',
      'Wiping down kitchen counters, appliances exterior, and sink',
      'Emptying trash and replacing liners',
      'Making beds and fluffing pillows',
      'Cleaning mirrors and glass surfaces',
    ],
    benefits: [
      {
        title: 'Consistent Results',
        description: 'Every visit follows a detailed checklist so your home looks the same level of clean every time.',
      },
      {
        title: 'Flexible Scheduling',
        description: 'Choose weekly, biweekly, or monthly service to fit your lifestyle and budget.',
      },
      {
        title: 'Trusted Professionals',
        description: 'All our cleaners are background-checked, insured, and trained to AlphaLux standards.',
      },
    ],
    faqs: [
      {
        question: 'How often should I get standard cleaning?',
        answer:
          'Most households benefit from biweekly service. Families with children or pets often prefer weekly visits, while individuals in smaller homes may find monthly service sufficient.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer:
          'No. Many of our clients provide access and trust our insured team to clean while they are away. We respect your privacy and security at all times.',
      },
      {
        question: 'What products do you use?',
        answer:
          'We use professional-grade, eco-friendly cleaning products that are safe for children, pets, and the environment. You can also request specific products if needed.',
      },
    ],
    relatedServices: ['deep-cleaning', 'recurring-cleaning', 'carpet-upholstery-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Standard Cleaning',
      description: 'Professional standard residential cleaning service covering all essential areas of the home.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Residential Cleaning',
    },
  },
  {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    metaTitle: 'Professional Deep Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Comprehensive deep cleaning services for homes across NY, NJ, and CT. Top-to-bottom cleaning including grout, behind appliances, and hard-to-reach areas.',
    h1: 'Professional Deep Cleaning Services',
    description: [
      'AlphaLux deep cleaning is a comprehensive top-to-bottom cleaning designed to tackle the areas that standard cleaning doesn\'t reach. Perfect for first-time clients, seasonal cleaning, or homes that need an intensive reset.',
      'Our team spends additional time scrubbing grout lines, cleaning inside cabinets and appliances, removing built-up grime, and restoring every surface to its best possible condition.',
      'Deep cleaning is the ideal starting point before enrolling in recurring maintenance service, ensuring your home is at its cleanest baseline.',
    ],
    included: [
      'Everything in standard cleaning, plus:',
      'Scrubbing grout and tile in bathrooms and kitchen',
      'Cleaning inside oven, microwave, and refrigerator',
      'Wiping inside and outside of all cabinets and drawers',
      'Cleaning behind and underneath furniture and appliances',
      'Washing baseboards, door frames, and window sills',
      'Descaling fixtures and faucets',
      'Deep cleaning showerheads and bathtub drains',
      'Removing built-up grime from all surfaces',
    ],
    benefits: [
      {
        title: 'Total Reset',
        description: 'Restore your home to its absolute best condition with a thorough top-to-bottom treatment.',
      },
      {
        title: 'Healthier Environment',
        description: 'Eliminate dust, allergens, mold, and bacteria from areas that are often overlooked.',
      },
      {
        title: 'Perfect Starting Point',
        description: 'Ideal as a first clean before beginning regular maintenance service with AlphaLux.',
      },
    ],
    faqs: [
      {
        question: 'How long does a deep clean take?',
        answer:
          'Deep cleaning typically takes 2 to 5 hours depending on the size and condition of your home. We provide time estimates after an initial assessment.',
      },
      {
        question: 'How often should I schedule a deep clean?',
        answer:
          'Most clients get a deep clean once or twice a year in addition to regular maintenance cleaning. Some prefer a deep clean each season.',
      },
      {
        question: 'Is deep cleaning more expensive than standard cleaning?',
        answer:
          'Yes, deep cleaning requires more time and labor. However, it is a worthwhile investment that makes subsequent standard cleaning faster and more effective.',
      },
    ],
    relatedServices: ['standard-cleaning', 'move-in-move-out-cleaning', 'post-construction-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Deep Cleaning',
      description: 'Comprehensive top-to-bottom deep cleaning service for homes including grout, appliances, and hard-to-reach areas.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Residential Deep Cleaning',
    },
  },
  {
    slug: 'move-in-move-out-cleaning',
    title: 'Move-In/Move-Out Cleaning',
    metaTitle: 'Move-In & Move-Out Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Professional move-in and move-out cleaning across NY, NJ, and CT. Ensure your deposit back or welcome new tenants to a spotless home.',
    h1: 'Move-In / Move-Out Cleaning Services',
    description: [
      'Moving is stressful enough without worrying about the cleanliness of your old or new space. AlphaLux move-in/move-out cleaning ensures every corner of the property is spotless — whether you are handing keys back or welcoming yourself to a fresh start.',
      'Our move-out cleaning is designed to help tenants secure their full security deposit and leave landlords impressed. Our move-in cleaning gives you peace of mind that your new home is hygienically clean before your furniture arrives.',
      'We serve property owners, tenants, and real estate agents across New York, New Jersey, and Connecticut.',
    ],
    included: [
      'Full deep clean of all rooms',
      'Inside all cabinets, drawers, and closets',
      'Inside oven, microwave, refrigerator',
      'Cleaning all windows, window sills, and tracks',
      'Scrubbing all bathroom and kitchen tile and grout',
      'Wiping all baseboards, doors, and light switches',
      'Vacuuming and mopping all floors',
      'Removing any remaining debris or dust',
    ],
    benefits: [
      {
        title: 'Deposit Protection',
        description: 'Our thorough move-out clean maximizes your chances of getting your full security deposit returned.',
      },
      {
        title: 'Fresh Start',
        description: 'Move into a home you know is truly clean — not just surface-level clean from previous occupants.',
      },
      {
        title: 'Landlord & Agent Approved',
        description: 'We understand the high standards required by landlords and property managers — and we exceed them.',
      },
    ],
    faqs: [
      {
        question: 'Should I book move-in or move-out cleaning?',
        answer:
          'Move-out cleaning is for when you are leaving a property. Move-in cleaning is for when you are entering a new one. Both are essentially the same thorough service — we just coordinate timing with your move.',
      },
      {
        question: 'Do you clean empty properties?',
        answer:
          'Yes, we specialize in cleaning empty properties. In fact, it is easier for us to access all areas when the space is unfurnished.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'We recommend booking at least 3 to 5 days in advance for move-in/move-out cleaning. During peak moving seasons we suggest booking as early as possible.',
      },
    ],
    relatedServices: ['deep-cleaning', 'standard-cleaning', 'post-construction-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Move-In/Move-Out Cleaning',
      description: 'Full detail cleaning service for residential properties during tenant or owner transitions.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Move-In/Move-Out Cleaning',
    },
  },
  {
    slug: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    metaTitle: 'Recurring House Cleaning Plans | AlphaLux Cleaning',
    metaDescription:
      'Set up a recurring cleaning plan with AlphaLux — weekly, biweekly, or monthly. Reliable, consistent cleaning across NY, NJ, and CT.',
    h1: 'Recurring Cleaning Plans for Homes & Offices',
    description: [
      'A consistently clean space requires consistent effort. AlphaLux recurring cleaning plans take the burden off your plate so you can come home or walk into your office knowing it will always be clean.',
      'We offer weekly, biweekly, and monthly scheduling options with the same trusted team visiting each time. Recurring clients receive priority scheduling, discounted rates, and a dedicated point of contact.',
      'Our recurring service covers New York, New Jersey, and Connecticut and can be customized to your specific needs and preferences.',
    ],
    included: [
      'Full standard cleaning on each visit',
      'Consistent team assigned to your property',
      'Priority scheduling and booking',
      'Discounted recurring service rates',
      'Customizable scope based on your preferences',
      'Seasonal deep cleaning add-on options',
    ],
    benefits: [
      {
        title: 'Always-Clean Home',
        description: 'Never come home to a messy house again — your space is consistently maintained to the same high standard.',
      },
      {
        title: 'Save Money',
        description: 'Recurring clients receive discounted rates compared to one-time bookings — the more frequent, the more you save.',
      },
      {
        title: 'Same Trusted Team',
        description: 'We assign the same cleaning professionals to your home so they learn your preferences and your space.',
      },
    ],
    faqs: [
      {
        question: 'Can I change my recurring schedule?',
        answer:
          'Yes. We understand life changes. You can adjust your frequency or skip a visit with appropriate notice. We work with you to find a schedule that fits.',
      },
      {
        question: 'Is there a contract for recurring service?',
        answer:
          'No long-term contracts required. We earn your business each visit. You can pause or cancel recurring service with reasonable notice.',
      },
      {
        question: 'What is the most popular recurring plan?',
        answer:
          'Biweekly cleaning is our most popular option. It keeps homes consistently clean without the frequency of weekly service, making it a great balance of quality and value.',
      },
    ],
    relatedServices: ['standard-cleaning', 'deep-cleaning', 'commercial-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Recurring Cleaning',
      description: 'Scheduled ongoing cleaning plans including weekly, biweekly, and monthly options for homes and businesses.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Recurring Residential Cleaning',
    },
  },
  {
    slug: 'carpet-upholstery-cleaning',
    title: 'Carpet & Upholstery Cleaning',
    metaTitle: 'Carpet & Upholstery Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Professional carpet and upholstery cleaning using hot water extraction across NY, NJ, and CT. Remove stains, odors, and allergens from your home.',
    h1: 'Professional Carpet & Upholstery Cleaning',
    description: [
      'Carpets and upholstered furniture trap dirt, allergens, pet dander, and odors deep within their fibers. Regular vacuuming is not enough to fully clean them. AlphaLux provides professional-grade carpet and upholstery cleaning using hot water extraction to restore your textiles to their best condition.',
      'Our technicians treat stains, remove odors, and extract deep-seated debris leaving your carpets and furniture looking and smelling fresh. We use equipment and solutions that are safe for children and pets.',
      'We serve homes and commercial properties across New York, New Jersey, and Connecticut.',
    ],
    included: [
      'Pre-inspection and treatment of stains',
      'Hot water extraction carpet cleaning',
      'Upholstered furniture and sofa cleaning',
      'Area rug cleaning',
      'Odor neutralization treatment',
      'Pet stain and odor removal',
      'Post-cleaning grooming of carpet fibers',
    ],
    benefits: [
      {
        title: 'Deep Fiber Cleaning',
        description: 'Hot water extraction reaches deep into carpet and upholstery fibers that surface cleaning cannot.',
      },
      {
        title: 'Allergen Reduction',
        description: 'Remove dust mites, pet dander, pollen, and other allergens for a healthier indoor environment.',
      },
      {
        title: 'Extended Textile Life',
        description: 'Regular professional cleaning extends the life of your carpets and furniture, protecting your investment.',
      },
    ],
    faqs: [
      {
        question: 'How long do carpets take to dry after cleaning?',
        answer:
          'Most carpets dry within 4 to 8 hours depending on thickness, humidity, and ventilation. We recommend keeping foot traffic minimal until fully dry.',
      },
      {
        question: 'Can you remove pet stains and odors?',
        answer:
          'Yes. We use enzyme-based treatments specifically designed to neutralize pet urine and odors at the source, not just mask them.',
      },
      {
        question: 'How often should carpets be professionally cleaned?',
        answer:
          'Most carpet manufacturers recommend professional cleaning every 12 to 18 months. Homes with pets or heavy traffic may benefit from cleaning every 6 to 12 months.',
      },
    ],
    relatedServices: ['deep-cleaning', 'standard-cleaning', 'post-construction-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Carpet & Upholstery Cleaning',
      description: 'Professional hot water extraction cleaning for carpets, rugs, and upholstered furniture.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Carpet & Upholstery Cleaning',
    },
  },
  {
    slug: 'airbnb-cleaning',
    title: 'Airbnb Cleaning',
    metaTitle: 'Airbnb Cleaning Services for Hosts | AlphaLux Cleaning',
    metaDescription:
      'Fast, reliable Airbnb turnover cleaning across NY, NJ, and CT. Keep your guests happy and your ratings high with AlphaLux short-term rental cleaning.',
    h1: 'Airbnb & Short-Term Rental Cleaning Services',
    description: [
      'Your Airbnb reviews depend heavily on cleanliness. AlphaLux provides fast, thorough turnover cleaning between guests to ensure every visitor arrives to a spotless, hotel-quality space.',
      'We work around your booking calendar with flexible scheduling, including same-day and next-day turnovers. Our team knows what guests expect and delivers consistently — fresh linens, sanitized surfaces, restocked supplies, and a spotless presentation every time.',
      'We serve Airbnb hosts across New York, New Jersey, and Connecticut, handling everything from studio apartments to large vacation homes.',
    ],
    included: [
      'Full cleaning of all rooms',
      'Changing and staging fresh linens and towels',
      'Restocking guest supplies and amenities',
      'Sanitizing bathrooms and kitchen thoroughly',
      'Washing dishes and resetting kitchen',
      'Checking for and reporting guest damage',
      'Restaging living spaces to guest-ready standard',
      'Trash removal and recycling',
    ],
    benefits: [
      {
        title: 'Higher Guest Ratings',
        description: 'Consistently clean spaces lead to better reviews — and better reviews mean more bookings and higher pricing power.',
      },
      {
        title: 'Flexible Scheduling',
        description: 'We coordinate directly with your booking calendar to ensure turnovers are completed on time between guests.',
      },
      {
        title: 'Host Reporting',
        description: 'We notify you of any damage, missing items, or maintenance issues discovered during the turnover.',
      },
    ],
    faqs: [
      {
        question: 'Can you handle same-day turnovers?',
        answer:
          'Yes, we accommodate same-day turnovers based on availability. We recommend having our team on your regular schedule to guarantee availability.',
      },
      {
        question: 'Do you provide linens?',
        answer:
          'We can work with your existing linens or coordinate linen service. Please discuss your preferred setup when booking.',
      },
      {
        question: 'How do you handle access when I am not there?',
        answer:
          'Most hosts provide a key, keypad code, or lockbox access. We are fully insured and treat your property with the same care we would our own.',
      },
    ],
    relatedServices: ['vacation-rental-cleaning', 'recurring-cleaning', 'standard-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Airbnb Cleaning',
      description: 'Professional turnover cleaning service for Airbnb and short-term rental properties.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Short-Term Rental Cleaning',
    },
  },
  {
    slug: 'vacation-rental-cleaning',
    title: 'Vacation Rental Cleaning',
    metaTitle: 'Vacation Rental Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Expert vacation rental cleaning across NY, NJ, and CT. Professional turnover service for VRBO, vacation homes, and short-term rentals.',
    h1: 'Vacation Rental Cleaning Services',
    description: [
      'Vacation rental properties require a higher standard of presentation than standard residential cleaning. AlphaLux delivers the professional, guest-ready clean that keeps your VRBO, vacation home, or short-term rental earning five-star reviews.',
      'From beachfront properties on Long Island to lakefront retreats upstate, our team understands how to prepare vacation rentals for discerning guests. We handle the full turnover process so you can manage your property remotely with confidence.',
      'We serve vacation rental properties across New York, New Jersey, and Connecticut.',
    ],
    included: [
      'Complete property turnover cleaning',
      'Linen and towel service coordination',
      'Kitchen reset and restocking',
      'Full bathroom sanitization',
      'Outdoor area cleaning (porches, patios)',
      'Inventory check and damage reporting',
      'Welcome staging and presentation setup',
      'Trash and recycling removal',
    ],
    benefits: [
      {
        title: 'Remote Management Friendly',
        description: 'Manage your vacation rental from anywhere — we handle the turnover and keep you informed.',
      },
      {
        title: 'Guest-Ready Standard',
        description: 'We understand the presentation standards that vacation rental guests expect and consistently deliver them.',
      },
      {
        title: 'Comprehensive Reporting',
        description: 'Receive post-cleaning reports noting any issues, damage, or maintenance needs discovered during service.',
      },
    ],
    faqs: [
      {
        question: 'What platforms do you work with?',
        answer:
          'We work with hosts on Airbnb, VRBO, Booking.com, and direct booking websites. We can integrate with your preferred scheduling tools.',
      },
      {
        question: 'Can you handle large vacation properties?',
        answer:
          'Yes, we can accommodate vacation homes of any size by assigning appropriately sized cleaning teams to meet your turnover timeline.',
      },
      {
        question: 'Do you offer seasonal service?',
        answer:
          'Yes, we offer seasonal cleaning packages for vacation properties that have peak and off-peak periods, including thorough seasonal deep cleans.',
      },
    ],
    relatedServices: ['airbnb-cleaning', 'recurring-cleaning', 'deep-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Vacation Rental Cleaning',
      description: 'Professional guest-ready cleaning for vacation rental properties including VRBO and short-term rentals.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Vacation Rental Cleaning',
    },
  },
  {
    slug: 'post-construction-cleaning',
    title: 'Post Construction Cleaning',
    metaTitle: 'Post Construction Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Professional post-construction cleaning across NY, NJ, and CT. Remove dust, debris, and construction residue after renovations or new builds.',
    h1: 'Post Construction Cleaning Services',
    description: [
      'After a renovation or new construction project, your space needs more than a standard clean. Construction dust, debris, adhesive residue, and fine particulate matter settle on every surface and require professional-grade equipment and techniques to properly remove.',
      'AlphaLux post-construction cleaning transforms your newly renovated or built space into a move-in ready environment. We handle everything from rough-out cleaning during construction phases to final detail cleaning before occupancy.',
      'We serve contractors, developers, homeowners, and property managers across New York, New Jersey, and Connecticut.',
    ],
    included: [
      'Removal of construction dust from all surfaces',
      'Cleaning inside cabinets, drawers, and closets',
      'Washing all windows inside and out',
      'Removing paint splatters, adhesive residue, and stickers',
      'Scrubbing all bathroom and kitchen fixtures',
      'Vacuuming and cleaning all floor surfaces',
      'Polishing all hard surfaces and fixtures',
      'Cleaning HVAC vents and light fixtures',
    ],
    benefits: [
      {
        title: 'Move-In Ready',
        description: 'We leave your newly renovated or built space completely clean and ready for occupancy.',
      },
      {
        title: 'Specialized Equipment',
        description: 'Construction cleaning requires industrial vacuums and specialized tools — we bring the right equipment for the job.',
      },
      {
        title: 'Contractor Coordination',
        description: 'We work directly with general contractors and builders to schedule cleaning around project milestones.',
      },
    ],
    faqs: [
      {
        question: 'When should post-construction cleaning be scheduled?',
        answer:
          'Post-construction cleaning should be scheduled after all construction work is fully completed and before any furniture or occupants move in.',
      },
      {
        question: 'How long does post-construction cleaning take?',
        answer:
          'Timing depends on the scope of construction and the size of the space. We provide project-specific estimates after an initial assessment.',
      },
      {
        question: 'Do you clean commercial construction sites?',
        answer:
          'Yes, we handle both residential and commercial post-construction cleaning projects, from home renovations to full commercial build-outs.',
      },
    ],
    relatedServices: ['deep-cleaning', 'move-in-move-out-cleaning', 'commercial-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Post Construction Cleaning',
      description: 'Specialized cleaning service for homes and commercial spaces after renovation or new construction.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Post Construction Cleaning',
    },
  },
  {
    slug: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    metaTitle: 'Commercial Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Professional commercial cleaning for offices, retail, and businesses across NY, NJ, and CT. Reliable, consistent, and customized to your facility.',
    h1: 'Professional Commercial Cleaning Services',
    description: [
      'A clean workplace is essential for employee productivity, client impressions, and overall business reputation. AlphaLux provides comprehensive commercial cleaning services tailored to the specific needs of your facility.',
      'We serve offices, retail stores, medical offices, showrooms, and other commercial properties across New York, New Jersey, and Connecticut. Our commercial cleaning teams are available days, evenings, and weekends to work around your business operations.',
      'Every commercial cleaning program is customized with a detailed service agreement, consistent staffing, and regular quality control check-ins.',
    ],
    included: [
      'Office and workspace cleaning and sanitization',
      'Restroom cleaning and restocking',
      'Kitchen and break room cleaning',
      'Trash removal and recycling',
      'Vacuuming, sweeping, and mopping all floors',
      'Dusting all surfaces, equipment, and fixtures',
      'Window and glass surface cleaning',
      'Lobby and reception area maintenance',
    ],
    benefits: [
      {
        title: 'Customized Service Plans',
        description: 'We build a cleaning program around your facility type, size, hours, and specific requirements.',
      },
      {
        title: 'Professional Presentation',
        description: 'A consistently clean business space creates a positive impression for clients, customers, and employees.',
      },
      {
        title: 'Flexible Scheduling',
        description: 'We clean during off-hours so your business operations are never disrupted.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide cleaning supplies and equipment?',
        answer:
          'Yes, our commercial cleaning teams arrive fully equipped with all necessary supplies and professional-grade cleaning equipment.',
      },
      {
        question: 'Can you clean after business hours?',
        answer:
          'Yes. Most of our commercial clients prefer evening or early morning service to avoid disrupting their business day. We accommodate all schedules.',
      },
      {
        question: 'Do you offer green cleaning options for offices?',
        answer:
          'Yes, we offer eco-friendly commercial cleaning programs using environmentally responsible products upon request.',
      },
    ],
    relatedServices: ['janitorial-cleaning', 'recurring-cleaning', 'post-construction-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Commercial Cleaning',
      description: 'Professional cleaning services for offices, retail spaces, and commercial facilities.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Commercial Cleaning',
    },
  },
  {
    slug: 'janitorial-cleaning',
    title: 'Janitorial Cleaning',
    metaTitle: 'Janitorial Cleaning Services | AlphaLux Cleaning',
    metaDescription:
      'Ongoing janitorial cleaning services for businesses across NY, NJ, and CT. Daily or weekly facility maintenance by trained, reliable professionals.',
    h1: 'Janitorial Cleaning Services for Businesses',
    description: [
      'Janitorial services provide the ongoing daily or weekly facility maintenance that businesses need to maintain a safe, clean, and professional environment. AlphaLux delivers dependable janitorial services with consistent staffing and detailed service programs.',
      'Our janitorial teams are trained in commercial sanitation standards, facility maintenance best practices, and the specific requirements of your industry — whether it is a corporate office, medical office, school, or retail environment.',
      'We serve businesses across New York, New Jersey, and Connecticut with customizable janitorial programs that fit your schedule, budget, and facility requirements.',
    ],
    included: [
      'Daily or nightly restroom cleaning and restocking',
      'Trash collection and removal from all areas',
      'Vacuuming and mopping all floor surfaces',
      'Wiping and sanitizing desks, counters, and common areas',
      'Kitchen and break room cleaning',
      'Lobby, hallway, and reception maintenance',
      'Supply management and restocking',
      'Periodic deep cleaning of high-traffic areas',
    ],
    benefits: [
      {
        title: 'Reliable Daily Service',
        description: 'Consistent staffing means the same trained team maintains your facility every day.',
      },
      {
        title: 'OSHA & Sanitation Standards',
        description: 'Our janitorial teams follow proper sanitation protocols appropriate for your facility type.',
      },
      {
        title: 'Scalable Programs',
        description: 'Whether you have a 500 sq ft suite or a 50,000 sq ft facility, we build a janitorial program to match.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between janitorial and commercial cleaning?',
        answer:
          'Janitorial service typically refers to ongoing daily maintenance — trash, restrooms, floors — while commercial cleaning is a broader term that can include periodic deep cleaning. We offer both.',
      },
      {
        question: 'Do you provide dedicated janitorial staff?',
        answer:
          'Yes, we assign consistent team members to your facility so they become familiar with your layout, procedures, and preferences.',
      },
      {
        question: 'Can we customize the janitorial scope?',
        answer:
          'Absolutely. We work with you to create a detailed scope of work that covers exactly what your facility needs — nothing more, nothing less.',
      },
    ],
    relatedServices: ['commercial-cleaning', 'recurring-cleaning', 'post-construction-cleaning'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Janitorial Cleaning',
      description: 'Ongoing daily and weekly janitorial facility maintenance for offices, retail, and commercial properties.',
      provider: providerSchema,
      areaServed,
      serviceType: 'Janitorial Services',
    },
  },
]
