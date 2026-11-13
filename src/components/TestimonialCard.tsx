interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${filled ? 'text-[#FACC15]' : 'text-[#E2E8F0]'}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TestimonialCard({
  name,
  location,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 transition-shadow hover:shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      {/* Review */}
      <p className="mt-3 text-sm leading-relaxed text-[#475569]">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8FAFC] text-sm font-semibold text-[#DC2626]">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0F172A]">{name}</p>
          <p className="text-xs text-[#475569]">{location}</p>
        </div>
      </div>
    </div>
  );
}
