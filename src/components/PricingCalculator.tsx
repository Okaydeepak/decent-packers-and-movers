'use client';

import { useState } from 'react';

type MoveType = 'local' | 'domestic';
type PackagingTier = 'Standard' | 'Premium';

interface PricingTierData {
  label: string;
  localRange: string;
  domesticRange: string;
  labor: string;
  truck: string;
}

const pricingTiers: PricingTierData[] = [
  {
    label: '1BHK',
    localRange: '₹7,000 – ₹12,000',
    domesticRange: '₹18,000 – ₹30,000',
    labor: '₹2,000 – ₹3,500',
    truck: '14-ft Closed (Tata 407)',
  },
  {
    label: '2BHK',
    localRange: '₹12,000 – ₹20,000',
    domesticRange: '₹25,000 – ₹50,000',
    labor: '₹3,500 – ₹5,000',
    truck: '17-ft Closed Container',
  },
  {
    label: '3BHK',
    localRange: '₹18,000 – ₹30,000',
    domesticRange: '₹40,000 – ₹75,000',
    labor: '₹5,000 – ₹7,500',
    truck: '19-ft Closed Container',
  },
  {
    label: 'Villa / 4BHK+',
    localRange: '₹30,000 – ₹55,000',
    domesticRange: '₹60,000 – ₹1,20,000',
    labor: '₹7,500 – ₹12,000',
    truck: '22-ft or Multi-Vehicle',
  },
];

export default function PricingCalculator() {
  const [moveType, setMoveType] = useState<MoveType>('local');
  const [packaging, setPackaging] = useState<PackagingTier>('Standard');
  const [floor, setFloor] = useState(0);
  const [hasLift, setHasLift] = useState(true);

  const showSurcharge = !hasLift && floor > 2;

  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] lg:p-8">
      {/* Toggle tabs */}
      <div className="mb-6 flex rounded-lg bg-[#F8FAFC] p-1">
        <button
          onClick={() => setMoveType('local')}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
            moveType === 'local'
              ? 'bg-white text-[#DC2626] shadow-sm'
              : 'text-[#475569] hover:text-[#0F172A]'
          }`}
        >
          Local (Within City)
        </button>
        <button
          onClick={() => setMoveType('domestic')}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
            moveType === 'domestic'
              ? 'bg-white text-[#DC2626] shadow-sm'
              : 'text-[#475569] hover:text-[#0F172A]'
          }`}
        >
          Domestic (Intercity)
        </button>
      </div>

      {/* Pricing cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier) => (
          <div
            key={tier.label}
            className="rounded-lg border border-[#E2E8F0] p-4 transition-shadow hover:shadow-md"
          >
            <h4 className="text-sm font-semibold text-[#0F172A]">{tier.label}</h4>

            <p className="mt-3 text-2xl font-bold tabular-nums text-[#DC2626]">
              {moveType === 'local' ? tier.localRange : tier.domesticRange}
            </p>
            <p className="mt-0.5 text-xs text-[#475569]">Base price range</p>

            <div className="mt-4 space-y-2 border-t border-[#E2E8F0] pt-3">
              <div className="flex justify-between text-xs">
                <span className="text-[#475569]">Labor</span>
                <span className="font-medium tabular-nums text-[#0F172A]">{tier.labor}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#475569]">Truck</span>
                <span className="font-medium text-[#0F172A]">{tier.truck}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Options row */}
      <div className="mt-6 flex flex-col gap-4 rounded-lg bg-[#F8FAFC] p-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Packaging tier */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#0F172A]">Packaging:</span>
          <div className="flex rounded-md bg-white shadow-sm">
            {(['Standard', 'Premium'] as PackagingTier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setPackaging(tier)}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                  packaging === tier
                    ? 'bg-[#DC2626] text-white rounded-md'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
          {packaging === 'Premium' && (
            <span className="text-xs text-[#475569]">+20% for premium materials</span>
          )}
        </div>

        {/* Floor selector + lift toggle */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="floor-select" className="text-sm font-medium text-[#0F172A]">Floor:</label>
            <select
              id="floor-select"
              value={floor}
              onChange={(e) => setFloor(Number(e.target.value))}
              className="rounded-md border border-[#E2E8F0] bg-white px-2 py-1.5 text-sm text-[#0F172A] outline-none focus:border-[#DC2626]"
            >
              {Array.from({ length: 21 }, (_, i) => (
                <option key={i} value={i}>
                  {i === 0 ? 'Ground' : i}
                </option>
              ))}
            </select>
          </div>

          <label className="flex cursor-pointer items-center gap-2">
            <div className="relative">
              <input
                type="checkbox"
                checked={hasLift}
                onChange={(e) => setHasLift(e.target.checked)}
                className="peer sr-only"
              />
              <div className="h-5 w-9 rounded-full bg-[#E2E8F0] transition-colors peer-checked:bg-[#DC2626]" />
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
            </div>
            <span className="text-sm font-medium text-[#0F172A]">Service Lift</span>
          </label>
        </div>
      </div>

      {/* Surcharge note */}
      {showSurcharge && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#EAB308] bg-[#FEF9C3] px-4 py-3">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#EAB308]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm text-[#0F172A]">
            <strong>Floor surcharge:</strong> Floors above 2 without a service lift incur an additional ₹500 – ₹1,500 per floor for manual carry charges.
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <p className="mt-4 text-xs text-[#475569]">
        * All prices are illustrative estimates. Final quote based on an in-person or video survey. GST extra as applicable.
      </p>
    </div>
  );
}
