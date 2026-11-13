import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process-pricing', label: 'Process & Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Household Relocation',
  'Office & Corporate Shifting',
  'Car & Bike Transport',
  'Secure Warehousing & Storage',
  'Industrial & Commercial Moving',
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[77.5rem] px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block text-xl font-bold tracking-tight">
              Decent <span className="text-[#DC2626]">Packers & Movers</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Reliable, punctual, and safe relocation services across Thane, Bhiwandi, Mumbai, and all nearby areas.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-amber-300">
              <span className="h-2 w-2 rounded-full bg-[#FACC15] animate-pulse"></span>
              Head Office: Thane, Maharashtra
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Service Areas & Fleet
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-xs text-slate-400">
                <strong className="text-white">Active Zones:</strong> Thane, Bhiwandi, Kalyan, Dombivli, Navi Mumbai, Western & Central Suburbs.
              </p>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact Us Directly
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="text-sm">
                  <div className="text-slate-400 text-xs font-medium">Office Numbers:</div>
                  <a href="tel:9376501262" className="text-white font-semibold hover:text-[#DC2626] block">
                    +91 93765 01262
                  </a>
                  <a href="tel:9376501263" className="text-slate-300 hover:text-[#DC2626] block text-xs mt-0.5">
                    +91 93765 01263
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
                <div className="text-sm">
                  <div className="text-slate-400 text-xs font-medium">Warehouse In-Charge:</div>
                  <a href="tel:8169598629" className="text-amber-300 font-semibold hover:underline block">
                    +91 81695 98629
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:decentmoversbwd@gmail.com" className="text-sm text-slate-300 hover:text-white break-all">
                  decentmoversbwd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xs text-slate-400">
                  Located in Thane, servicing Bhiwandi, Mumbai & across Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[77.5rem] flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row lg:px-6">
          <p>&copy; {new Date().getFullYear()} Decent Packers and Movers. All rights reserved.</p>
          <p>Thane • Bhiwandi • Mumbai Relocation Specialists</p>
        </div>
      </div>
    </footer>
  );
}
