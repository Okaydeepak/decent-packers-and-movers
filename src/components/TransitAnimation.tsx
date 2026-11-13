'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  { label: 'Origin', description: 'Pickup from your doorstep' },
  { label: 'Packing', description: 'Scientific 3-layer wrapping' },
  { label: 'Transit', description: 'GPS-tracked closed containers' },
  { label: 'Delivery', description: 'Unpack, setup & cleanup' },
];

export default function TransitAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animate through steps
  useEffect(() => {
    if (!isVisible) return;
    if (activeStep >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [isVisible, activeStep]);

  const truckProgress = isVisible ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
    <div ref={containerRef} className="w-full py-8">
      {/* Desktop: horizontal layout */}
      <div className="hidden sm:block">
        <div className="relative mx-auto max-w-3xl">
          {/* Connecting line (background) */}
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-[#E2E8F0]" />

          {/* Connecting line (progress — red) */}
          <div
            className="absolute top-6 left-[12.5%] h-0.5 bg-[#DC2626] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${truckProgress * 0.75}%` }}
          />

          {/* Animated truck */}
          <div
            className="absolute top-1.5 z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ left: `calc(12.5% + ${truckProgress * 0.75}% - 12px)` }}
          >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <rect x="0" y="4" width="14" height="10" rx="2" fill="#DC2626" />
              <rect x="14" y="7" width="8" height="7" rx="1" fill="#B91C1C" />
              <circle cx="5" cy="16" r="2.5" fill="#0F172A" />
              <circle cx="19" cy="16" r="2.5" fill="#0F172A" />
              <circle cx="5" cy="16" r="1" fill="#E2E8F0" />
              <circle cx="19" cy="16" r="1" fill="#E2E8F0" />
              <rect x="15" y="8" width="4" height="3" rx="0.5" fill="#93C5FD" opacity="0.7" />
            </svg>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, i) => {
              const isActive = isVisible && i <= activeStep;
              return (
                <div key={step.label} className="flex w-1/4 flex-col items-center text-center">
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 ${
                      isActive
                        ? 'border-[#FACC15] bg-[#FACC15] text-[#0F172A] scale-110'
                        : 'border-[#E2E8F0] bg-white text-[#475569]'
                    }`}
                  >
                    {i + 1}
                  </div>
                  {/* Label */}
                  <h4
                    className={`mt-3 text-sm font-semibold transition-colors duration-500 ${
                      isActive ? 'text-[#0F172A]' : 'text-[#475569]'
                    }`}
                  >
                    {step.label}
                  </h4>
                  {/* Description */}
                  <p className="mt-1 text-xs text-[#475569]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: vertical layout */}
      <div className="block sm:hidden">
        <div className="relative ml-6 space-y-6 border-l-2 border-[#E2E8F0] pl-8">
          {/* Progress line */}
          <div
            className="absolute left-[-1px] top-0 w-0.5 bg-[#DC2626] transition-all duration-700"
            style={{ height: `${truckProgress}%` }}
          />

          {steps.map((step, i) => {
            const isActive = isVisible && i <= activeStep;
            return (
              <div key={step.label} className="relative">
                {/* Circle on the line */}
                <div
                  className={`absolute -left-[2.55rem] flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-500 ${
                    isActive
                      ? 'border-[#FACC15] bg-[#FACC15] text-[#0F172A]'
                      : 'border-[#E2E8F0] bg-white text-[#475569]'
                  }`}
                >
                  {i + 1}
                </div>
                <h4 className={`text-sm font-semibold transition-colors ${isActive ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                  {step.label}
                </h4>
                <p className="mt-0.5 text-xs text-[#475569]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
