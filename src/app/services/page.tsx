'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const TABS = [
  'Household Shifting',
  'Office & Corporate',
  'Vehicle Transport',
  'Warehousing & Storage',
] as const;

type TabKey = (typeof TABS)[number];

interface ServiceCard {
  title: string;
  description: string;
  included: string[];
  fleet?: string[];
  images: string[];
}

const SERVICES: Record<TabKey, ServiceCard[]> = {
  'Household Shifting': [
    {
      title: 'Local Household Move',
      description:
        'Within-city residential relocation — fast, careful, and fully managed from doorstep to doorstep.',
      included: [
        '3-layer bubble wrapping for fragile items',
        'Furniture dismantling & reassembly',
        'Heavy appliance handling (AC, fridge, washing machine)',
        'Loading & unloading with trained crew',
      ],
      fleet: ['Tata Ace (small loads)', '14ft Eicher (medium loads)'],
      images: [
        '/images/gallery/IMG-20261023-WA0000.jpg',
        '/images/gallery/IMG-20261023-WA0009.jpg',
      ],
    },
    {
      title: 'Intercity Household Move',
      description:
        'State-to-state moves with dedicated containers and end-to-end tracking for complete peace of mind.',
      included: [
        'Everything in Local Move, plus:',
        'Real-time GPS tracking',
        'Dedicated sealed container',
        'Transit insurance coverage',
        'Doorstep delivery with unpacking',
      ],
      fleet: ['17ft Closed Container', '20ft Closed Container'],
      images: [
        '/images/gallery/IMG-20261023-WA0001.jpg',
        '/images/gallery/IMG-20261023-WA0010.jpg',
      ],
    },
  ],

  'Office & Corporate': [
    {
      title: 'Office Relocation',
      description:
        'IT equipment, modular furniture, and filing systems — relocated with zero downtime and full compliance.',
      included: [
        'IT infrastructure safe-packing (servers, monitors, desktops)',
        'Modular furniture dismantling & reassembly',
        'Filing cabinet & document handling',
        'GST-compliant billing',
        'SLA-backed delivery guarantees',
      ],
      images: ['/images/gallery/IMG-20261023-WA0009.jpg'],
    },
    {
      title: 'Commercial & Industrial',
      description:
        'Warehouse inventory, retail store shifts, and heavy machinery relocation for businesses of every scale.',
      included: [
        'Heavy machinery rigging & transport',
        'Warehouse inventory management',
        'Retail fixture & display relocation',
        'Weekend / off-hour scheduling',
        'Dedicated project manager',
      ],
      images: ['/images/gallery/IMG-20261023-WA0010.jpg'],
    },
  ],

  'Vehicle Transport': [
    {
      title: 'Car Transport',
      description:
        'Your vehicle deserves the same care as you do — enclosed carriers, hydraulic loading, zero-scratch guarantee.',
      included: [
        'Enclosed carrier transport',
        'Hydraulic ramp loading & unloading',
        'Zero-scratch guarantee',
        'Pre- & post-transport inspection report',
        'Door-to-door pickup & delivery',
      ],
      images: [
        '/images/gallery/IMG-20261023-WA0002.jpg',
        '/images/gallery/IMG-20261023-WA0004.jpg',
        '/images/gallery/IMG-20261023-WA0003.jpg',
      ],
    },
    {
      title: 'Two-Wheeler Transport',
      description:
        'Bikes and scooters wrapped, secured, and shipped safely — shared or dedicated carrier options.',
      included: [
        'Full-body foam & stretch wrapping',
        'Handlebar & mirror protection',
        'Shared carrier (budget) or dedicated carrier (express)',
        'Battery disconnect & fluid check',
        'Delivery with unwrapping & inspection',
      ],
      images: [
        '/images/gallery/IMG-20261023-WA0005.jpg',
        '/images/gallery/IMG-20261023-WA0006.jpg',
        '/images/gallery/IMG-20261023-WA0007.jpg',
        '/images/gallery/IMG-20261023-WA0008.jpg',
      ],
    },
  ],

  'Warehousing & Storage': [
    {
      title: 'Short-Term Storage',
      description:
        'Secure warehousing for 1–30 days — ideal for gaps between move-in and move-out dates.',
      included: [
        'CCTV-monitored warehouse facility',
        'Inventory tagging & cataloguing',
        'Pest-free & moisture-controlled environment',
        'Flexible duration (1–30 days)',
        'Easy retrieval with 24h notice',
      ],
      images: [],
    },
    {
      title: 'Long-Term Storage',
      description:
        'Monthly contracts with climate-controlled options for furniture, documents, and valuables.',
      included: [
        'Climate-controlled units available',
        'Monthly or quarterly contracts',
        'Insurance coverage options',
        'Periodic inspection reports',
        'Free pickup & delivery on 6-month plans',
      ],
      images: [],
    },
  ],
};

const PACKING_MATERIALS = [
  {
    icon: '💠',
    title: 'Bubble Wrap & Foam Sheets',
    description: 'Fragile item protection — multi-layer cushioning for glassware, electronics, and ceramics.',
  },
  {
    icon: '📦',
    title: 'Corrugated Boxes',
    description: 'Heavy-duty multi-ply cartons in 5 sizes — tested to hold up to 30 kg each.',
  },
  {
    icon: '🔒',
    title: 'Stretch Film & Tape',
    description: 'Moisture & dust sealing for upholstery, mattresses, and open-top cartons.',
  },
  {
    icon: '🪵',
    title: 'Wooden Crating',
    description: 'Custom-built crates for artwork, glass tabletops, antiques, and irregularly shaped items.',
  },
  {
    icon: '👔',
    title: 'Garment Boxes',
    description: 'Tall wardrobe boxes with hanging rods — your clothes arrive wrinkle-free.',
  },
  {
    icon: '🛡️',
    title: 'Edge Protectors',
    description: 'L-shaped cardboard guards for furniture corners, door frames, and appliance edges.',
  },
];

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('Household Shifting');

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-[77.5rem] px-5 py-20 text-center sm:py-28">
          <h1 className="text-hero text-text-primary">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Comprehensive relocation solutions tailored to every need.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="sticky top-0 z-30 border-b border-border-subtle bg-bg-primary">
        <div className="mx-auto max-w-[77.5rem] px-5">
          <nav className="-mb-px flex gap-1 overflow-x-auto sm:gap-2" aria-label="Service categories">
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-4 py-4 text-sm font-medium transition-all duration-200 sm:text-base ${
                    isActive
                      ? 'border-b-2 border-brand-red font-bold text-text-primary'
                      : 'border-b-2 border-transparent text-text-muted hover:text-text-primary'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="bg-bg-primary">
        <div className="mx-auto max-w-[77.5rem] px-5 py-16 sm:py-20">
          <div
            key={activeTab}
            className="animate-fade-in grid gap-10 md:gap-14"
          >
            {SERVICES[activeTab].map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[12px] border border-border-subtle bg-bg-primary shadow-minimal"
              >
                {/* Image gallery strip */}
                {service.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {service.images.map((src, i) => (
                      <div key={src} className={`relative aspect-[4/3] ${i >= 2 ? 'hidden sm:block' : ''} ${i >= 3 ? 'sm:hidden lg:block' : ''}`}>
                        <Image
                          src={src}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3
                    className="font-semibold text-text-primary"
                    style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
                      What&rsquo;s Included
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fleet Options */}
                  {service.fleet && service.fleet.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Fleet Options
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.fleet.map((f) => (
                          <span
                            key={f}
                            className="rounded-[6px] border border-brand-yellow-border bg-brand-yellow-soft px-3 py-1 text-sm font-medium text-primary"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-[6px] bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-red-hover"
                    >
                      Book This Service
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKING MATERIAL SHOWCASE ─── */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[77.5rem] px-5 py-16 sm:py-20">
          <div className="text-center">
            <h2
              className="font-semibold text-primary"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Our Packing Standards
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Every item is wrapped, boxed, and secured with industry-grade materials — because safe delivery starts with smart packing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKING_MATERIALS.map((mat) => (
              <div
                key={mat.title}
                className="rounded-[12px] border border-subtle bg-primary p-6 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] transition-shadow duration-200 hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden="true">
                  {mat.icon}
                </span>
                <h3 className="mt-3 text-base font-semibold text-primary">
                  {mat.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {mat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
