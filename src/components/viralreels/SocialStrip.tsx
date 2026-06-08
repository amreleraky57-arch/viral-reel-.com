import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/reelscretors?igsh=MXZ4ZXVxcGllZjBrbw==",
    handle: "@reelscretors",
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    Icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@viralreels04?is_from_webapp=1&sender_device=pc",
    handle: "@viralreels04",
    color: "from-[#25F4EE] via-[#ffffff] to-[#FE2C55]",
    Icon: TikTokIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1FyYNi7MYP/",
    handle: "ViralReels",
    color: "from-[#1877F2] via-[#4267B2] to-[#0a3d8a]",
    Icon: Facebook,
  },
];

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.53V7.1a4.85 4.85 0 0 1-1.84-.41z"/>
    </svg>
  );
}

export function SocialStrip() {
  const { t } = useLang();
  return (
    <section id="social" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 h-[360px] w-[520px] -translate-y-1/2 rounded-full bg-[#FF2E88]/12 blur-[160px]" />
        <div className="absolute right-1/4 top-1/2 h-[360px] w-[520px] -translate-y-1/2 rounded-full bg-[#00CFFF]/12 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <div className="eyebrow">{t({ en: "Follow the studio", ar: "تابع الستوديو" })}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "Live where attention lives.", ar: "حيث يعيش الانتباه." })}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-soft/70">
            {t({
              en: "Daily reels, behind-the-scenes, and viral case studies — straight from the team.",
              ar: "ريلز يومية، خلف الكواليس، ودراسات حالة فيروسية — مباشرة من الفريق.",
            })}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:border-white/30"
            >
              <div className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />
              <div className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <s.Icon size={22} />
              </div>
              <div className="text-lg font-semibold text-white">{s.name}</div>
              <div className="mt-1 text-sm text-slate-soft/65">{s.handle}</div>
              <div className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-white/60 transition-colors group-hover:text-white">
                {t({ en: "Follow →", ar: "تابع →" })}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
