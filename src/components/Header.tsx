'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process-pricing', label: 'Process & Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[77.5rem] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 text-lg sm:text-xl font-bold tracking-tight text-[#0F172A]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DC2626] text-white text-xs font-black shadow-sm">
            DP
          </span>
          <span>
            Decent <span className="font-semibold text-[#DC2626]">Packers & Movers</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#DC2626]'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-[#DC2626]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="text-right text-xs">
            <span className="text-[#64748B] block">Office Line</span>
            <a href="tel:9376501262" className="font-bold text-[#0F172A] hover:text-[#DC2626]">
              +91 93765 01262
            </a>
          </div>
          <a
            href="tel:9376501262"
            className="flex items-center gap-2 rounded-full bg-[#DC2626] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B91C1C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-[#0F172A] transition-all duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-white pt-20 shadow-xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-2 border-b border-[#E2E8F0]">
          <span className="text-xs uppercase tracking-wider text-[#64748B]">Decent Packers & Movers</span>
          <p className="text-xs text-[#0F172A] font-semibold mt-0.5">Thane • Bhiwandi • Mumbai & Nearby</p>
        </div>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`border-b border-[#E2E8F0] px-6 py-4 text-base font-medium transition-colors ${
                isActive
                  ? 'border-l-4 border-l-[#DC2626] bg-red-50/50 text-[#DC2626]'
                  : 'text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="mx-6 mt-6 flex flex-col gap-2.5">
          <a
            href="tel:9376501262"
            className="flex items-center justify-center gap-2 rounded-full bg-[#DC2626] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Office: 9376501262
          </a>
          <a
            href="tel:9376501263"
            className="flex items-center justify-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-4 py-2.5 text-xs font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
          >
            Alt Office: 9376501263
          </a>
          <a
            href="tel:8169598629"
            className="flex items-center justify-center gap-2 rounded-full bg-[#FEF9C3] border border-[#FACC15] px-4 py-2.5 text-xs font-bold text-[#0F172A]"
          >
            Warehouse Incharge: 8169598629
          </a>
        </div>
      </nav>
    </header>
  );
}
