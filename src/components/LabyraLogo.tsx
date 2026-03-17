export default function LabyraLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Outer arc - nearly full circle, gap at ~1 o'clock */}
      <path
        d="M 72 22 A 36 36 0 1 0 66 76"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Middle arc - gap at ~12 o'clock */}
      <path
        d="M 64 28 A 26 26 0 1 0 60 70"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Inner arc - gap at ~11 o'clock */}
      <path
        d="M 56 36 A 16 16 0 1 0 54 63"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Gold center dot */}
      <circle cx="50" cy="50" r="4.5" fill="#C4A882" />
    </svg>
  );
}
