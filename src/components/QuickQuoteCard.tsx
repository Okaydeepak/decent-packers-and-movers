'use client';

import { useState, type FormEvent } from 'react';

interface QuickQuoteCardProps {
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  pickupCity: string;
  dropCity: string;
  moveSize: string;
  moveDate: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  pickupCity?: string;
  dropCity?: string;
  moveSize?: string;
  moveDate?: string;
}

const moveSizes = ['1RK', '1BHK', '2BHK', '3BHK', 'Office', 'Vehicle'];

function getMinDate(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = 'Name is required';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ''))) errors.phone = 'Enter a valid 10-digit Indian mobile number';

  if (!data.pickupCity.trim()) errors.pickupCity = 'Pickup city is required';
  if (!data.dropCity.trim()) errors.dropCity = 'Drop city is required';
  if (!data.moveSize) errors.moveSize = 'Select a move size';

  if (!data.moveDate) errors.moveDate = 'Select a move date';
  else if (data.moveDate < getMinDate()) errors.moveDate = 'Date cannot be in the past';

  return errors;
}

function calculateEstimate(moveSize: string, isIntercity: boolean): { min: number; max: number } {
  const basePrices: Record<string, { min: number; max: number }> = {
    '1RK': { min: 4000, max: 8000 },
    '1BHK': { min: 7000, max: 15000 },
    '2BHK': { min: 12000, max: 25000 },
    '3BHK': { min: 18000, max: 35000 },
    'Office': { min: 25000, max: 60000 },
    'Vehicle': { min: 5000, max: 20000 },
  };

  const base = basePrices[moveSize] || { min: 5000, max: 15000 };
  const multiplier = isIntercity ? 2.5 : 1;

  return {
    min: Math.round(base.min * multiplier),
    max: Math.round(base.max * multiplier),
  };
}

function sendQuoteToWhatsApp(data: FormData, estimate: { min: number; max: number }) {
  const message = `🚚 *Decent Packers & Movers — Move Inquiry*\n` +
    `────────────────────────\n` +
    `*Name:* ${data.name}\n` +
    `*Phone:* ${data.phone}\n` +
    `*From:* ${data.pickupCity}\n` +
    `*To:* ${data.dropCity}\n` +
    `*Move Size:* ${data.moveSize}\n` +
    `*Move Date:* ${data.moveDate}\n` +
    `*Estimated Band:* ₹${estimate.min.toLocaleString('en-IN')} - ₹${estimate.max.toLocaleString('en-IN')}\n` +
    `────────────────────────\n` +
    `_Sent via Decent Packers & Movers Portal_`;

  const url = `https://wa.me/919376501262?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export default function QuickQuoteCard({ className = '' }: QuickQuoteCardProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    pickupCity: '',
    dropCity: '',
    moveSize: '',
    moveDate: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const isIntercity = formData.pickupCity.trim().toLowerCase() !== formData.dropCity.trim().toLowerCase();
    const estimate = calculateEstimate(formData.moveSize, isIntercity);
    sendQuoteToWhatsApp(formData, estimate);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] ${className}`}>
        <div className="border-t-4 border-[#DC2626] rounded-t-xl -mt-6 -mx-6 mb-6 pt-6 px-6" />
        <div className="text-center py-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#0F172A]">Quote Sent to WhatsApp!</h3>
          <p className="mt-2 text-sm text-[#475569]">Our team will respond within 30 minutes.</p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', pickupCity: '', dropCity: '', moveSize: '', moveDate: '' }); }}
            className="mt-4 text-sm font-medium text-[#DC2626] hover:underline"
          >
            Get another quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] ${className}`}>
      {/* Red top accent */}
      <div className="h-1 bg-[#DC2626]" />

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#0F172A]">Get a Free Quote</h3>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/60 outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${errors.name ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
          />
          {errors.name && <p className="mt-1 text-xs text-[#DC2626]">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/60 outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${errors.phone ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-[#DC2626]">{errors.phone}</p>}
        </div>

        {/* Pickup & Drop cities */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="Pickup City"
              value={formData.pickupCity}
              onChange={(e) => handleChange('pickupCity', e.target.value)}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/60 outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${errors.pickupCity ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
            />
            {errors.pickupCity && <p className="mt-1 text-xs text-[#DC2626]">{errors.pickupCity}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Drop City"
              value={formData.dropCity}
              onChange={(e) => handleChange('dropCity', e.target.value)}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#475569]/60 outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${errors.dropCity ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
            />
            {errors.dropCity && <p className="mt-1 text-xs text-[#DC2626]">{errors.dropCity}</p>}
          </div>
        </div>

        {/* Move Size */}
        <div>
          <select
            value={formData.moveSize}
            onChange={(e) => handleChange('moveSize', e.target.value)}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${!formData.moveSize ? 'text-[#475569]/60' : ''} ${errors.moveSize ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
          >
            <option value="" disabled>Move Size</option>
            {moveSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {errors.moveSize && <p className="mt-1 text-xs text-[#DC2626]">{errors.moveSize}</p>}
        </div>

        {/* Move Date */}
        <div>
          <input
            type="date"
            value={formData.moveDate}
            min={getMinDate()}
            onChange={(e) => handleChange('moveDate', e.target.value)}
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition-colors focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] ${!formData.moveDate ? 'text-[#475569]/60' : ''} ${errors.moveDate ? 'border-[#DC2626] bg-red-50/50' : 'border-[#E2E8F0]'}`}
          />
          {errors.moveDate && <p className="mt-1 text-xs text-[#DC2626]">{errors.moveDate}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-[#DC2626] py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B91C1C] active:scale-[0.98]"
        >
          Get Instant Quote
        </button>
      </form>
    </div>
  );
}
