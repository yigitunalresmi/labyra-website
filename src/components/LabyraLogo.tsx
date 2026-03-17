export default function LabyraLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Outer arc — from PDF */}
      <path
        d="M 50 13.33 C 67.49 13.33 82.55 25.69 85.96 42.85 C 89.37 60 80.19 77.18 64.03 83.88 C 47.87 90.57 29.23 84.92 19.51 70.37 C 9.79 55.83 11.7 36.44 24.07 24.07"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Middle arc — from PDF */}
      <path
        d="M 50 23.33 C 64.73 23.33 76.67 35.27 76.67 50 C 76.67 64.73 64.73 76.67 50 76.67 C 35.27 76.67 23.33 64.73 23.33 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Inner arc — from PDF */}
      <path
        d="M 50 33.33 C 59.2 33.33 66.67 40.8 66.67 50 C 66.67 59.2 59.2 66.67 50 66.67 C 40.8 66.67 33.33 59.2 33.33 50"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Gold center dot */}
      <circle cx="50" cy="50" r="3" fill="#C4A882" />
    </svg>
  );
}
