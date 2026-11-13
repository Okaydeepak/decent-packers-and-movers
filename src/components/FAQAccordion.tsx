'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="divide-y divide-[#E2E8F0] rounded-xl border border-[#E2E8F0] bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="relative">
            {/* Red left border accent when open */}
            {isOpen && (
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[#DC2626]" />
            )}

            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors ${
                isOpen ? 'bg-red-50/30' : 'hover:bg-[#F8FAFC]'
              }`}
            >
              <span className={`text-sm font-medium ${isOpen ? 'text-[#DC2626]' : 'text-[#0F172A]'}`}>
                {item.question}
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-[#475569] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 pt-0">
                <p className="text-sm leading-relaxed text-[#475569]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
