import Image from "next/image";
import Link from "next/link";
import QuickQuoteCard from "@/components/QuickQuoteCard";
import TransitAnimation from "@/components/TransitAnimation";
import ServiceCard from "@/components/ServiceCard";
import Gallery from "@/components/Gallery";

/* ───────── inline data ───────── */

const trustBadges = [
  { label: "10,000+ Moves Completed" },
  { label: "Thane • Bhiwandi • Mumbai Specialists" },
  { label: "Zero Damage Guarantee" },
  { label: "Direct Phone & WhatsApp Support" },
];

const services = [
  {
    title: "Household Shifting",
    description:
      "Door-to-door residential moves across Thane, Bhiwandi, Mumbai & nationwide with multi-layer bubble & foam wrap.",
    href: "/services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-[#DC2626]"
      >
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 14 15 14 15 21" />
      </svg>
    ),
  },
  {
    title: "Office & Corporate Relocation",
    description:
      "Minimal downtime office moves, server racks, modular desks and complete commercial infrastructure.",
    href: "/services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-[#DC2626]"
      >
        <rect x="2" y="7" width="20" height="14" rx="1" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Vehicle Transport (Car & Bike)",
    description:
      "Enclosed hydraulic container carriers for luxury cars, sedans, and specialized foam-wrapped two-wheeler shipping.",
    href: "/services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-[#DC2626]"
      >
        <path d="M5 17h-2a1 1 0 0 1-1-1v-5l2-5h9l4 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Warehousing & Storage",
    description:
      "Secure short and long-term storage facility supervised directly by our dedicated Warehouse In-charge.",
    href: "/services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-[#DC2626]"
      >
        <path d="M22 8.5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.5" />
        <path d="M1 4.5h22L20 8.5H4L1 4.5z" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
];

const gallerySubset = [
  {
    src: "/images/gallery/IMG-20261023-WA0000.jpg",
    alt: "Loaded truck with boxes",
    caption: "Heavy duty container loaded systematically",
  },
  {
    src: "/images/gallery/IMG-20261023-WA0002.jpg",
    alt: "Porsche loading into car carrier",
    caption: "Porsche Panamera safe hydraulic car carrier transit",
  },
  {
    src: "/images/gallery/IMG-20261023-WA0004.jpg",
    alt: "Mercedes in enclosed carrier",
    caption: "Mercedes Benz secured in dedicated enclosed carrier",
  },
  {
    src: "/images/gallery/IMG-20261023-WA0005.jpg",
    alt: "Wrapped motorcycle for transit",
    caption: "3-layer bubble & foam wrap bike shipping",
  },
  {
    src: "/images/gallery/IMG-20261023-WA0009.jpg",
    alt: "Wrapped furniture near truck",
    caption: "Sofa and premium wooden furniture packing",
  },
  {
    src: "/images/gallery/IMG-20261023-WA0010.jpg",
    alt: "Stacked boxes outside building",
    caption: "Professional inventory stacking in Thane",
  },
];

const testimonials = [
  {
    name: "Sunil Patil",
    city: "Thane West → Bhiwandi",
    rating: 5,
    text: "Decent Packers and Movers moved our entire 2BHK from Thane to Bhiwandi in record time. Zero scratches on our refrigerator and TV. Team was courteous and on-time!",
  },
  {
    name: "Rajesh Kulkarni",
    city: "Bhiwandi → Andheri (Mumbai)",
    rating: 5,
    text: "Shifted our warehouse stock and office furniture to Mumbai. Excellent coordination by their team, very transparent pricing without any surprise add-ons.",
  },
  {
    name: "Dr. Amrita Rao",
    city: "Ghopbunder Road, Thane → Pune",
    rating: 5,
    text: "Transported my Honda City and household goods smoothly. The car was strapped inside the container securely. Highly recommend Decent Packers!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO SECTION WITH CATCHY MOVERS VECTOR ART ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-[#E2E8F0]">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="relative mx-auto flex max-w-[77.5rem] flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center lg:gap-12 lg:py-16">
          {/* Left Column: Heading, Vector Art & Badges */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF9C3] border border-[#FACC15] px-3.5 py-1 text-xs font-bold text-[#0F172A]">
              <span className="flex h-2 w-2 rounded-full bg-[#DC2626]" />
              Thane • Bhiwandi • Mumbai & Nearby Relocation Experts
            </div>

            <h1
              className="font-extrabold tracking-[-0.03em] text-[#0F172A]"
              style={{
                fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)",
                lineHeight: 1.1,
              }}
            >
              Moving, stripped <br />
              <span className="text-[#DC2626]">of the chaos.</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#475569]">
              <strong>Decent Packers and Movers</strong> provides trusted, damage-free household shifting, office moves, vehicle carrier, and warehousing across Thane, Bhiwandi, Mumbai, and all nearby areas.
            </p>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 rounded-lg bg-white border border-[#E2E8F0] shadow-xs px-3 py-2 text-xs">
                <span className="text-[#64748B]">Office Lines:</span>
                <a href="tel:9376501262" className="font-bold text-[#DC2626] hover:underline">
                  9376501262
                </a>
                <span className="text-slate-300">|</span>
                <a href="tel:9376501263" className="font-bold text-[#0F172A] hover:underline">
                  9376501263
                </a>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#FEF9C3] border border-[#FACC15] px-3 py-2 text-xs">
                <span className="text-[#0F172A] font-medium">Warehouse In-charge:</span>
                <a href="tel:8169598629" className="font-bold text-[#0F172A] hover:underline">
                  8169598629
                </a>
              </div>
            </div>

            {/* ─── CATCHY MOVERS VECTOR ART CARD ─── */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                  Live Moving Crew & Fleet In Action
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-ping" />
                  Available Today
                </span>
              </div>

              {/* Responsive Catchy SVG Vector Art */}
              <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-4 text-white">
                <svg
                  viewBox="0 0 680 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <defs>
                    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                    <linearGradient id="truckBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>

                  {/* Skyline / City silhouettes */}
                  <path d="M10 160 L10 110 L30 110 L30 80 L60 80 L60 160 Z" fill="#334155" opacity="0.4" />
                  <path d="M70 160 L70 95 L95 95 L95 160 Z" fill="#334155" opacity="0.3" />
                  <path d="M105 160 L105 70 L135 70 L135 160 Z" fill="#334155" opacity="0.5" />
                  <path d="M540 160 L540 90 L575 90 L575 160 Z" fill="#334155" opacity="0.4" />
                  <path d="M590 160 L590 75 L620 75 L620 160 Z" fill="#334155" opacity="0.5" />
                  <path d="M630 160 L630 105 L665 105 L665 160 Z" fill="#334155" opacity="0.3" />

                  {/* Road */}
                  <rect x="0" y="160" width="680" height="60" fill="url(#roadGrad)" />
                  <line x1="0" y1="188" x2="680" y2="188" stroke="#FACC15" strokeWidth="3" strokeDasharray="16 14" opacity="0.9" />

                  {/* Location indicators */}
                  <circle cx="50" cy="50" r="16" fill="#FACC15" />
                  <text x="50" y="54" fill="#0F172A" fontSize="10" fontWeight="bold" textAnchor="middle">THANE</text>
                  <circle cx="630" cy="50" r="16" fill="#FACC15" />
                  <text x="630" y="54" fill="#0F172A" fontSize="9" fontWeight="bold" textAnchor="middle">MUMBAI</text>
                  <path d="M70 50 Q 340 15 610 50" stroke="#FACC15" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.7" />

                  {/* ─── Vector Moving Truck ─── */}
                  <g transform="translate(180, 50)">
                    {/* Truck Cargo Box */}
                    <rect x="70" y="30" width="220" height="85" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    {/* Decent Packers branding on truck */}
                    <rect x="70" y="30" width="220" height="24" rx="4" fill="#DC2626" />
                    <text x="180" y="46" fill="#FFFFFF" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
                      DECENT PACKERS &amp; MOVERS
                    </text>
                    <text x="180" y="80" fill="#0F172A" fontSize="13" fontWeight="900" textAnchor="middle">
                      THANE • BHIWANDI • MUMBAI
                    </text>
                    <text x="180" y="98" fill="#DC2626" fontSize="10" fontWeight="700" textAnchor="middle">
                      📞 9376501262 / 9376501263
                    </text>

                    {/* Truck Cabin */}
                    <path d="M290 52 L325 52 L345 80 L345 115 L290 115 Z" fill="url(#truckBody)" />
                    {/* Cabin Window */}
                    <path d="M295 58 L320 58 L335 80 L295 80 Z" fill="#93C5FD" opacity="0.9" />
                    {/* Driver figure */}
                    <circle cx="310" cy="72" r="5" fill="#1E293B" />
                    {/* Headlight beam */}
                    <polygon points="345,95 440,80 440,118 345,108" fill="#FEF08A" opacity="0.35" />
                    <circle cx="342" cy="102" r="4" fill="#FEF08A" />

                    {/* Truck Wheels */}
                    <g transform="translate(110, 115)">
                      <circle cx="0" cy="0" r="16" fill="#0F172A" />
                      <circle cx="0" cy="0" r="8" fill="#94A3B8" />
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(150, 115)">
                      <circle cx="0" cy="0" r="16" fill="#0F172A" />
                      <circle cx="0" cy="0" r="8" fill="#94A3B8" />
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(305, 115)">
                      <circle cx="0" cy="0" r="16" fill="#0F172A" />
                      <circle cx="0" cy="0" r="8" fill="#94A3B8" />
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                    </g>
                  </g>

                  {/* ─── Vector Movers (Characters Loading Boxes) ─── */}
                  {/* Mover 1 with Hand Trolley */}
                  <g transform="translate(90, 95)">
                    {/* Trolley */}
                    <line x1="20" y1="20" x2="35" y2="70" stroke="#DC2626" strokeWidth="3" />
                    <line x1="25" y1="70" x2="55" y2="70" stroke="#DC2626" strokeWidth="3" />
                    <circle cx="35" cy="70" r="6" fill="#0F172A" />
                    {/* Box on trolley */}
                    <rect x="30" y="42" width="22" height="24" rx="2" fill="url(#boxGrad)" stroke="#B45309" strokeWidth="1" />
                    <line x1="30" y1="54" x2="52" y2="54" stroke="#78350F" strokeWidth="1" />
                    {/* Person */}
                    <circle cx="12" cy="22" r="6" fill="#FACC15" />
                    <path d="M12 28 L14 48 L8 68" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                    <line x1="14" y1="48" x2="22" y2="68" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                    <path d="M13 34 L22 38 L24 25" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  </g>

                  {/* Mover 2 carrying a box */}
                  <g transform="translate(145, 98)">
                    <circle cx="15" cy="18" r="6" fill="#FACC15" />
                    {/* Body */}
                    <line x1="15" y1="24" x2="16" y2="44" stroke="#DC2626" strokeWidth="3.5" />
                    {/* Legs */}
                    <line x1="16" y1="44" x2="10" y2="66" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                    <line x1="16" y1="44" x2="22" y2="66" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                    {/* Arms carrying box */}
                    <path d="M15 30 L26 34 L32 26" stroke="#FFFFFF" strokeWidth="2.5" />
                    {/* Big Package Box */}
                    <rect x="22" y="22" width="22" height="20" rx="2" fill="url(#boxGrad)" stroke="#B45309" strokeWidth="1" />
                    <text x="33" y="34" fill="#78350F" fontSize="6" fontWeight="bold" textAnchor="middle">FRAGILE</text>
                  </g>

                  {/* Delivery Shield Badge */}
                  <g transform="translate(540, 110)">
                    <rect x="0" y="0" width="110" height="42" rx="6" fill="#0F172A" stroke="#FACC15" strokeWidth="1.5" />
                    <text x="55" y="17" fill="#FACC15" fontSize="9" fontWeight="bold" textAnchor="middle">
                      100% INSURED
                    </text>
                    <text x="55" y="32" fill="#FFFFFF" fontSize="8" fontWeight="600" textAnchor="middle">
                      Zero Damage Moves
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center rounded-full bg-[#FEF9C3] border border-[#FACC15] px-3 py-1 text-xs font-bold text-[#0F172A]"
                >
                  ✓ {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Quote Card */}
          <div className="w-full lg:max-w-md">
            <QuickQuoteCard />
          </div>
        </div>
      </section>

      {/* ─── 2. TRANSIT ANIMATION ─── */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[77.5rem] px-5 py-14 lg:py-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Simple 4-Step Journey
            </span>
            <h2
              className="mt-1 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              How Your Move Flows
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              From free assessment in Thane / Bhiwandi to safe door delivery across Mumbai & beyond.
            </p>
          </div>
          <TransitAnimation />
        </div>
      </section>

      {/* ─── 3. BENTO-GRID SERVICES ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[77.5rem] px-5 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Relocation Services
            </span>
            <h2
              className="mt-1 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Complete Moving Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#475569] mt-2">
              Serving residential families, corporate offices, and vehicle owners with tailored fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((svc) => (
              <ServiceCard
                key={svc.title}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                features={[]}
                ctaText="View Service"
                ctaHref={svc.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. GALLERY PREVIEW ─── */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[77.5rem] px-5 py-16 lg:py-24">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Real On-Site Photography
              </span>
              <h2
                className="mt-1 font-bold tracking-tight text-[#0F172A]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Our Work in Action
              </h2>
              <p className="text-sm text-[#475569]">
                Live snaps of vehicle loading, 3-layer bubble packaging, and container operations.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C]"
            >
              Explore All Services &amp; Fleet →
            </Link>
          </div>

          <Gallery images={gallerySubset} />
        </div>
      </section>

      {/* ─── 5. TESTIMONIALS ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[77.5rem] px-5 py-16 lg:py-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Verified Feedback
            </span>
            <h2
              className="mt-1 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-xs hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-3 flex gap-0.5 text-[#FACC15]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.284-3.957z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-[#475569]">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="border-t border-[#F1F5F9] pt-3">
                  <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                  <p className="text-xs text-[#64748B]">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA BANNER ─── */}
      <section className="bg-[#DC2626]">
        <div className="mx-auto flex max-w-[77.5rem] flex-col items-center gap-6 px-5 py-14 text-center lg:py-18">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
            Direct Booking Lines Active
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Planning Your Move in Thane, Bhiwandi, or Mumbai?
          </h2>
          <p className="max-w-xl text-base text-white/90">
            Contact <strong>Decent Packers and Movers</strong> today for an instant estimate or free pre-move assessment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#DC2626] shadow-sm transition-all hover:bg-slate-100"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:9376501262"
              className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Call Office: 9376501262
            </a>
            <a
              href="https://wa.me/919376501262?text=Hello%20Decent%20Packers%20and%20Movers%2C%20I%20would%20like%20a%20quote%20for%20my%20move."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#FACC15] px-6 py-3 text-sm font-bold text-[#0F172A] transition-all hover:bg-[#EAB308]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
