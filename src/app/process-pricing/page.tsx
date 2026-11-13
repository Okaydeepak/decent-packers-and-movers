'use client';

import PricingCalculator from '@/components/PricingCalculator';
import FAQAccordion from '@/components/FAQAccordion';

const steps = [
  {
    number: 1,
    title: 'Free Pre-Move Survey',
    description:
      'In-person or video call assessment of your belongings to plan the perfect move.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Scientific Packing & Labeling',
    description:
      'Barcode tagging, 3-layer bubble wrapping, and customized crating for fragile items.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'GPS-Enabled Transit',
    description:
      'Real-time tracking with closed containers ensures your belongings are always accounted for.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h2.25m0 0V7.5a1.125 1.125 0 011.125-1.125h6.75M8.625 14.25h6.75m0 0v-4.875a1.125 1.125 0 011.125-1.125h2.25l2.625 3.375V14.25h-6"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Unpacking & Setup',
    description:
      'Furniture rearrangement, appliance setup, and debris cleanup — move-in ready.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: 'Is my shipment insured during transit?',
    answer:
      'Yes, every shipment with Decent Packers and Movers is covered under comprehensive transit insurance. This protects your belongings against damage, theft, or loss during the entire transportation process. Coverage details are shared upfront before you confirm your booking.',
  },
  {
    question: 'What happens if items are damaged?',
    answer:
      'We have a structured claims process. Report any damage within 48 hours of delivery with photographic evidence. Our claims team reviews each case and processes compensation promptly. We maintain a 99%+ claim settlement record.',
  },
  {
    question: 'Can I reschedule my moving date?',
    answer:
      'Yes, free rescheduling is available up to 48 hours before your scheduled move date. For changes within 48 hours, a nominal rescheduling fee may apply depending on resource allocation. Contact our office lines at 9376501262 / 9376501263 to arrange alternate dates.',
  },
  {
    question: 'What items are prohibited?',
    answer:
      'Flammable materials, hazardous chemicals, perishable food items, live plants, pets, explosives, and illegal substances cannot be transported. Valuable documents, jewelry, and cash should be carried personally. Our survey team will guide you on item-specific guidelines.',
  },
  {
    question: 'Do you provide packing materials?',
    answer:
      'Yes, all packing materials — bubble wrap, corrugated boxes, stretch film, foam sheets, wooden crating, and garment boxes — are included in your quote. We use industry-grade materials tested for multi-layer protection during transit.',
  },
  {
    question: 'How is the price calculated?',
    answer:
      'Pricing is based on four factors: volume of goods (determined during the pre-move survey), distance between origin and destination, floor level and lift availability, and your chosen packaging tier (Standard or Premium). Use our pricing calculator above for an instant estimate.',
  },
  {
    question: 'Do you offer storage solutions?',
    answer:
      'Yes, we offer both short-term (1-30 days) and long-term warehousing solutions. Our facilities are secure, pest-controlled, and monitored 24/7 with CCTV. Climate-controlled options are available for sensitive items like electronics and artwork.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfers (NEFT/RTGS/IMPS), credit and debit cards, and corporate invoicing for business clients. A token advance confirms your booking, with the balance payable after successful delivery.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 5-7 days in advance for the best slot availability and pricing. Express same-day or next-day services are available at a premium for urgent moves. Peak season (April-June) bookings should be made 10-14 days ahead.',
  },
  {
    question: 'Do you handle international moves?',
    answer:
      'Currently, Decent Packers and Movers operates extensively across Thane, Bhiwandi, Mumbai, Maharashtra, and domestic interstate routes in India. International relocations are in our roadmap.',
  },
];

export default function ProcessPricingPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6 text-center">
          <h1
            className="font-bold tracking-[-0.03em] text-[#0F172A]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
          >
            How It Works &amp; Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]">
            A transparent, step-by-step process — from survey to setup. No
            hidden charges, no surprises.
          </p>
        </div>
      </section>

      {/* ── 4-Step Visual Workflow ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-12 md:mb-16"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Your Move in 4 Simple Steps
          </h2>

          {/* Desktop: horizontal layout */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting red line */}
            <div className="absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-[#DC2626]" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center w-1/4 px-4"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#FACC15] text-[#0F172A] font-bold text-xl shadow-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-5 text-[#DC2626]">{step.icon}</div>

                {/* Title */}
                <h3 className="mt-3 font-semibold text-[#0F172A] text-lg">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#475569] leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical layout */}
          <div className="md:hidden flex flex-col relative">
            {/* Connecting red line (vertical) */}
            <div className="absolute top-8 bottom-8 left-8 w-0.5 bg-[#DC2626]" />

            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-5 ${
                  idx > 0 ? 'mt-10' : ''
                }`}
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#FACC15] text-[#0F172A] font-bold text-xl shadow-sm">
                  {step.number}
                </div>

                <div className="pt-1">
                  {/* Icon */}
                  <div className="text-[#DC2626] mb-2">{step.icon}</div>

                  {/* Title */}
                  <h3 className="font-semibold text-[#0F172A] text-lg">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Calculator ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Estimate Your Move
          </h2>
          <p className="text-center text-[#475569] mb-10 max-w-xl mx-auto">
            Get an instant ballpark estimate. Final pricing confirmed after the
            pre-move survey.
          </p>
          <PricingCalculator />
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#475569] mb-10 max-w-xl mx-auto">
            Everything you need to know about moving with Decent Packers and Movers.
          </p>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#DC2626] py-14 md:py-16">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6 text-center">
          <h2 className="text-white font-bold text-2xl md:text-3xl">
            Still have questions?
          </h2>
          <p className="text-white/90 mt-3 text-lg">
            Talk to our relocation experts in Thane — no obligation, transparent guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-[#DC2626] font-semibold px-8 py-3 text-base hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:9376501262"
              className="inline-flex items-center justify-center rounded-md border-2 border-white text-white font-semibold px-8 py-3 text-base hover:bg-white/10 transition-colors duration-200"
            >
              📞 Office: 9376501262
            </a>
            <a
              href="tel:8169598629"
              className="inline-flex items-center justify-center rounded-md bg-[#FACC15] text-[#0F172A] font-bold px-8 py-3 text-base hover:bg-[#EAB308] transition-colors duration-200"
            >
              Warehouse: 8169598629
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
