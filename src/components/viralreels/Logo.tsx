type Props = { className?: string; size?: number; glow?: boolean };

export function ViralReelsMark({ className, size = 36, glow = true }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`${glow ? "logo-glow" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="vr-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF2E88" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00CFFF" />
        </linearGradient>
        <linearGradient id="vr-shine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#vr-g)" />
      <rect x="2" y="2" width="44" height="22" rx="13" fill="url(#vr-shine)" />
      <path d="M16 15.5v17l14-8.5-14-8.5z" fill="#0A0A0A" />
    </svg>
  );
}

export function ViralReelsLogo({ className, size = 36 }: Props) {
  return (
    <div className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="transition-transform duration-300 group-hover:scale-110">
        <ViralReelsMark size={size} glow />
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight text-white">
        Viral<span className="text-gradient-brand">Reels</span>
      </span>
    </div>
  );
}
