// FIXED: Uses import.meta.glob instead of named imports for logos.
// See HOTFIX_NOTES.md Issue 6 for full explanation.
// To add logos: drop PNG/JPG/WebP/SVG files into src/logos/ — no code changes needed.

import { useEffect, useRef } from "react";

// Vite resolves this glob at build time — zero runtime overhead.
// Handles filenames with spaces, Arabic chars, any Unicode correctly.
const logoModules = import.meta.glob(
  "../../../logos/*.{png,jpg,jpeg,webp,svg}",
  { eager: true }
) as Record<string, { default: string }>;

const LOGO_URLS = Object.values(logoModules).map((m) => m.default);

// Fallback placeholder logos if no files in /src/logos/
const PLACEHOLDER_LOGOS = [
  "Brand A",
  "Brand B",
  "Brand C",
  "Brand D",
  "Brand E",
  "Brand F",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    let x = 0;
    const speed = 0.5;
    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= totalWidth) x = 0;
      track.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const hasLogos = LOGO_URLS.length > 0;

  // Duplicate for seamless loop
  const items = hasLogos
    ? [...LOGO_URLS, ...LOGO_URLS]
    : [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <div className="overflow-hidden w-full py-6 bg-black/20 backdrop-blur-sm border-y border-white/10">
      <div ref={trackRef} className="flex items-center gap-12 will-change-transform">
        {items.map((item, i) =>
          hasLogos ? (
            <img
              key={i}
              src={item as string}
              alt=""
              // Increased to h-20 and removed grayscale classes
              className="h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ) : (
            <span
              key={i}
              className="text-white/40 font-bold text-sm tracking-widest whitespace-nowrap uppercase"
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
}