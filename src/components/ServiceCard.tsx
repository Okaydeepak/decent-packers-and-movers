import { type ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  ctaText,
  ctaHref,
}: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-[#E2E8F0] bg-white p-6 transition-all duration-200 hover:border-t-4 hover:border-t-[#EAB308] hover:shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#DC2626]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{description}</p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-[#475569]">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#DC2626] transition-colors hover:text-[#B91C1C]"
      >
        {ctaText}
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
