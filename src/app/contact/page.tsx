'use client';

import { useState, type FormEvent } from 'react';
import { validateName, validatePhone, validateEmail, validateDate, sanitizeInput } from '@/lib/validation';
import { sendInventoryToWhatsApp } from '@/lib/whatsapp';

const moveSizes = [
  '1RK',
  '1BHK',
  '2BHK',
  '3BHK',
  'Office',
  'Vehicle',
] as const;

const inventoryItems = [
  'Refrigerator',
  'Washing Machine',
  'AC Units',
  'TV/Monitor',
  'Sofa Set',
  'Dining Table',
  'Beds',
  'Wardrobes',
  'Kitchen Items',
  'Books/Documents',
  'Two-Wheeler',
  'Car',
] as const;

const branches = [
  {
    city: 'Thane (Head Office)',
    tag: 'Main Hub',
    address: 'Near Majiwada Junction, Eastern Express Highway, Thane West 400601',
    hours: 'Mon–Sun · 8 AM – 9 PM',
    phone: '+91 93765 01262',
  },
  {
    city: 'Bhiwandi (Hub & Storage)',
    tag: 'Warehouse',
    address: 'Mankoli Warehousing Complex, Bhiwandi-Nashik Bypass, Bhiwandi 421302',
    hours: 'Mon–Sun · 24/7 Dispatch',
    phone: '+91 81695 98629',
  },
  {
    city: 'Mumbai & Nearby Operations',
    tag: 'Express Fleet',
    address: 'Covering Western Suburbs, Central Mumbai, Navi Mumbai & Kalyan-Dombivli',
    hours: 'Mon–Sun · 8 AM – 9 PM',
    phone: '+91 93765 01263',
  },
];

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  pickupAddress?: string;
  dropAddress?: string;
  preferredDate?: string;
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [moveSize, setMoveSize] = useState<string>('1BHK');
  const [preferredDate, setPreferredDate] = useState('');
  const [floorNumber, setFloorNumber] = useState('0');
  const [hasLift, setHasLift] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const today = new Date().toISOString().split('T')[0];

  function toggleItem(item: string) {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors: FormErrors = {};

    const nameResult = validateName(sanitizeInput(name));
    if (!nameResult.valid) newErrors.name = nameResult.error;

    const phoneResult = validatePhone(sanitizeInput(phone));
    if (!phoneResult.valid) newErrors.phone = phoneResult.error;

    const emailResult = validateEmail(sanitizeInput(email));
    if (!emailResult.valid) newErrors.email = emailResult.error;

    if (!pickupAddress.trim()) newErrors.pickupAddress = 'Pickup address is required';
    if (!dropAddress.trim()) newErrors.dropAddress = 'Drop address is required';
    if (pickupAddress.trim().toLowerCase() === dropAddress.trim().toLowerCase() && pickupAddress.trim())
      newErrors.dropAddress = 'Pickup and drop addresses cannot be the same';

    if (preferredDate) {
      const dateResult = validateDate(preferredDate);
      if (!dateResult.valid) newErrors.preferredDate = dateResult.error;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    sendInventoryToWhatsApp({
      name: sanitizeInput(name),
      phone: sanitizeInput(phone),
      origin: sanitizeInput(pickupAddress),
      destination: sanitizeInput(dropAddress),
      moveSize,
      date: preferredDate,
      estimate: '',
      items: selectedItems,
      specialInstructions: sanitizeInput(specialInstructions),
      floor: parseInt(floorNumber, 10),
      hasLift,
    });
  }

  const inputClass =
    'w-full rounded-md border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626] transition-colors duration-200';
  const labelClass = 'block text-sm font-medium text-[#0F172A] mb-1.5';
  const errorClass = 'text-xs text-[#DC2626] mt-1';

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6 text-center">
          <h1
            className="font-bold tracking-[-0.03em] text-[#0F172A]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
          >
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]">
            Tell us about your move and we&apos;ll craft a detailed quote
            tailored to your needs.
          </p>
        </div>
      </section>

      {/* ── Detailed Inventory Quote Form ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <div
            className="max-w-3xl mx-auto bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10"
            style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
          >
            <form onSubmit={handleSubmit} noValidate>
              {/* Personal Information */}
              <fieldset>
                <legend className="text-lg font-semibold text-[#0F172A] mb-4">
                  Personal Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Rahul Sharma"
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p className={errorClass}>{errors.phone}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email}</p>
                    )}
                  </div>
                </div>
              </fieldset>

              <hr className="my-8 border-[#E2E8F0]" />

              {/* Move Details */}
              <fieldset>
                <legend className="text-lg font-semibold text-[#0F172A] mb-4">
                  Move Details
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pickupAddress" className={labelClass}>
                      Pickup Address *
                    </label>
                    <input
                      id="pickupAddress"
                      type="text"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      placeholder="Full pickup address"
                      className={inputClass}
                    />
                    {errors.pickupAddress && (
                      <p className={errorClass}>{errors.pickupAddress}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="dropAddress" className={labelClass}>
                      Drop Address *
                    </label>
                    <input
                      id="dropAddress"
                      type="text"
                      value={dropAddress}
                      onChange={(e) => setDropAddress(e.target.value)}
                      placeholder="Full delivery address"
                      className={inputClass}
                    />
                    {errors.dropAddress && (
                      <p className={errorClass}>{errors.dropAddress}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="moveSize" className={labelClass}>
                      Move Size
                    </label>
                    <select
                      id="moveSize"
                      value={moveSize}
                      onChange={(e) => setMoveSize(e.target.value)}
                      className={inputClass}
                    >
                      {moveSizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className={labelClass}>
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={preferredDate}
                      min={today}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={inputClass}
                    />
                    {errors.preferredDate && (
                      <p className={errorClass}>{errors.preferredDate}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="floorNumber" className={labelClass}>
                      Floor Number
                    </label>
                    <input
                      id="floorNumber"
                      type="number"
                      min="0"
                      max="50"
                      value={floorNumber}
                      onChange={(e) => setFloorNumber(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex items-end pb-1">
                    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
                      <span className="text-sm font-medium text-[#0F172A]">
                        Service Lift Available?
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={hasLift}
                        onClick={() => setHasLift(!hasLift)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          hasLift ? 'bg-[#DC2626]' : 'bg-[#E2E8F0]'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            hasLift ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </label>
                  </div>
                </div>
              </fieldset>

              <hr className="my-8 border-[#E2E8F0]" />

              {/* Inventory Checklist */}
              <fieldset>
                <legend className="text-lg font-semibold text-[#0F172A] mb-4">
                  Inventory Checklist
                </legend>
                <p className="text-sm text-[#475569] mb-4">
                  Select items you&apos;re planning to move:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {inventoryItems.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 cursor-pointer text-sm transition-colors duration-200 select-none ${
                        selectedItems.includes(item)
                          ? 'border-[#DC2626] bg-red-50 text-[#DC2626] font-medium'
                          : 'border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item)}
                        onChange={() => toggleItem(item)}
                        className="sr-only"
                      />
                      <span
                        className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center ${
                          selectedItems.includes(item)
                            ? 'bg-[#DC2626] border-[#DC2626]'
                            : 'border-[#CBD5E1]'
                        }`}
                      >
                        {selectedItems.includes(item) && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      {item}
                    </label>
                  ))}
                </div>
              </fieldset>

              <hr className="my-8 border-[#E2E8F0]" />

              {/* Special Instructions */}
              <div>
                <label htmlFor="specialInstructions" className={labelClass}>
                  Special Instructions
                </label>
                <textarea
                  id="specialInstructions"
                  rows={4}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Any specific requirements, fragile items, access restrictions..."
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-[#DC2626] text-white font-semibold px-6 py-3 text-base hover:bg-[#B91C1C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50"
                >
                  Get Detailed Quote
                </button>
                <a
                  href="https://wa.me/919376501262?text=Hello%20Decent%20Packers%20and%20Movers%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20relocation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-md border-2 border-[#DC2626] text-[#DC2626] font-semibold px-6 py-3 text-base hover:bg-red-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Or WhatsApp Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Direct Action Channels ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Reach Us Directly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Phone */}
            <a
              href="tel:9376501262"
              className="flex flex-col items-center text-center bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#DC2626] transition-colors duration-200"
              style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#FEF9C3] flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-[#0F172A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-[#0F172A]">Office Calls</p>
              <p className="text-sm text-[#DC2626] mt-1 font-bold">
                9376501262 / 9376501263
              </p>
              <p className="text-xs text-amber-700 mt-1 font-semibold">
                Warehouse: 8169598629
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919376501262?text=Hello%20Decent%20Packers%20and%20Movers%2C%20I%20need%20a%20moving%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#DC2626] transition-colors duration-200"
              style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#FEF9C3] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="font-semibold text-[#0F172A]">WhatsApp</p>
              <p className="text-sm text-[#DC2626] mt-1 font-bold">
                Instant Chat
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                9376501262
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:decentmoversbwd@gmail.com"
              className="flex flex-col items-center text-center bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#DC2626] transition-colors duration-200"
              style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
            >
              <div className="w-12 h-12 rounded-full bg-[#FEF9C3] flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-[#0F172A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="font-semibold text-[#0F172A]">Email</p>
              <p className="text-xs text-[#DC2626] mt-1 font-semibold break-all">
                decentmoversbwd@gmail.com
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Fast Response
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ── Serviceable Hubs ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <h2
            className="text-center font-semibold text-[#0F172A] mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Our Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6"
                style={{ boxShadow: '0 4px 20px -2px rgba(15,23,42,0.05)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-[#0F172A] text-lg">
                    {branch.city}
                  </h3>
                  {branch.tag && (
                    <span className="inline-flex items-center rounded-full bg-[#FACC15] px-2.5 py-0.5 text-xs font-semibold text-[#0F172A]">
                      {branch.tag}
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-[#475569]">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#DC2626] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{branch.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#DC2626] flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Placeholder */}
          <div className="mt-10 rounded-xl overflow-hidden border border-[#E2E8F0]">
            <div className="bg-[#F1F5F9] flex items-center justify-center h-64 md:h-80">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-[#94A3B8] mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
                <p className="text-[#475569] font-medium">
                  Google Maps Integration
                </p>
                <p className="text-sm text-[#94A3B8] mt-1">
                  Interactive map will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer Info ── */}
      <section className="bg-[#F8FAFC] py-10 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-[77.5rem] px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
            <div className="flex items-center gap-4">
              <span>
                <strong>GST:</strong> 27AAAAA0000A1Z5
              </span>
              <span className="hidden sm:inline text-[#E2E8F0]">|</span>
              <span>
                <strong>Reg:</strong> MH/2018/PM/001234
              </span>
            </div>
            <p>All prices exclusive of applicable GST (18%)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
