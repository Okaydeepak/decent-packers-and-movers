import Image from 'next/image';

const stats = [
  { value: '10,000+', label: 'Moves Completed' },
  { value: '50+', label: 'Cities Served' },
  { value: '99.2%', label: 'On-Time Rate' },
  { value: '4.8/5', label: 'Client Rating' },
];

const fleetImages = [
  {
    src: '/images/gallery/IMG-20261023-WA0000.jpg',
    alt: 'Loaded truck with household boxes',
    caption: 'Eicher 14ft — Household Moves (up to 2BHK)',
  },
  {
    src: '/images/gallery/IMG-20261023-WA0003.jpg',
    alt: 'Vehicles on flatbed trailer',
    caption: 'Flatbed Trailer — Multi-Vehicle Transport',
  },
  {
    src: '/images/gallery/IMG-20261023-WA0002.jpg',
    alt: 'Porsche loading into car carrier',
    caption: 'Hydraulic Car Carrier — Luxury Vehicles',
  },
  {
    src: '/images/gallery/IMG-20261023-WA0004.jpg',
    alt: 'Mercedes in enclosed carrier',
    caption: 'Enclosed Carrier — Premium Vehicle Transport',
  },
];

const complianceItems = [
  {
    title: 'IBA Approved Standards',
    description:
      'All operations comply with Indian Banks\' Association (IBA) approved packing and moving standards for corporate and institutional relocations.',
  },
  {
    title: 'GST-Compliant Billing',
    description:
      'Transparent GST-inclusive invoicing for every move. Corporate clients receive proper tax invoices for input credit claims.',
  },
  {
    title: 'Comprehensive Insurance',
    description:
      'Every shipment is covered under transit insurance with up to ₹10 lakh coverage. Claims processed within 7-10 business days.',
  },
];

const values = [
  {
    title: 'Safety First',
    description:
      'Every item — from delicate glassware to heavy appliances — is handled with scientific packing methods and trained personnel. Zero-damage is our standard, not a promise.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description:
      'What you see is what you pay. No hidden charges, no last-minute surcharges. Our pricing calculator gives you an honest estimate upfront — confirmed after a free survey.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    description:
      'With GPS-enabled fleet tracking and dedicated logistics coordinators, we maintain a 99.2% on-time delivery record. Your schedule is our schedule.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero / Brand Story ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h1
            className="font-bold tracking-[-0.03em] text-[#0F172A]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
          >
            About Decent Packers and Movers
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-[#475569] text-lg leading-relaxed">
            <p>
              <strong className="text-[#0F172A]">Our Mission:</strong> To
              deliver punctual, safe, and 100% damage-free relocations across Thane, Bhiwandi, Mumbai, and all neighboring regions. Decent Packers and Movers provides scientific multi-layer packaging, enclosed container vehicle haulage, and dedicated warehousing.
            </p>
            <p>
              <strong className="text-[#0F172A]">Headquartered in Thane:</strong> We are centrally located in Thane with dedicated warehouse hubs in Bhiwandi and responsive fleet operations throughout Mumbai, Navi Mumbai, and Kalyan-Dombivli. 
            </p>
            <p>
              With over{' '}
              <strong className="text-[#0F172A]">10,000+</strong> successful moves completed, our commitment remains unmatched: direct coordination with our office lines (
              <a href="tel:9376501262" className="text-[#DC2626] font-bold hover:underline">9376501262</a>,{' '}
              <a href="tel:9376501263" className="text-[#DC2626] font-bold hover:underline">9376501263</a>
              ) and dedicated Warehouse In-charge (
              <a href="tel:8169598629" className="text-[#DC2626] font-bold hover:underline">8169598629</a>
              ).
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="py-14 md:py-16 border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#DC2626] tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm md:text-base text-[#475569]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Our Fleet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetImages.map((img) => (
              <div
                key={img.src}
                className="group rounded-xl overflow-hidden border border-[#E2E8F0] bg-white"
                style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-[#475569] font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Compliance ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Safety &amp; Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0]"
                style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 text-[#DC2626] mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Values ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 border border-[#E2E8F0] text-center hover:border-[#FACC15] hover:border-t-4 transition-all duration-200"
                style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FEF9C3] text-[#DC2626] mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-[#0F172A] text-xl">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
