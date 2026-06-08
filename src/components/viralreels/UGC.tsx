import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

const CREATORS = [
  { name: "Layla H.", niche: "Fashion", country: "UAE", lang: "AR/EN", gender: "F", price: 480, eng: "8.2%", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&q=80" },
  { name: "Omar K.", niche: "Tech", country: "EG", lang: "EN", gender: "M", price: 520, eng: "6.5%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80" },
  { name: "Sara M.", niche: "Food", country: "KSA", lang: "AR", gender: "F", price: 620, eng: "9.1%", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80" },
  { name: "Ahmed Z.", niche: "SaaS", country: "EG", lang: "EN", gender: "M", price: 740, eng: "5.8%", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
  { name: "Nour A.", niche: "Fashion", country: "KSA", lang: "AR/EN", gender: "F", price: 560, eng: "7.4%", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
  { name: "Hassan T.", niche: "Tech", country: "UAE", lang: "EN", gender: "M", price: 690, eng: "6.0%", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&q=80" },
  { name: "Mariam F.", niche: "Food", country: "EG", lang: "AR", gender: "F", price: 410, eng: "10.2%", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80" },
  { name: "Youssef B.", niche: "SaaS", country: "UAE", lang: "EN", gender: "M", price: 880, eng: "5.2%", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&q=80" },
];

const FILTERS = {
  gender: ["All", "M", "F"],
  lang: ["All", "AR", "EN"],
  region: ["All", "EG", "GCC"],
  niche: ["All", "Fashion", "Tech", "Food", "SaaS"],
};

export function UGC() {
  const { t } = useLang();
  const [f, setF] = useState({ gender: "All", lang: "All", region: "All", niche: "All" });

  const filtered = CREATORS.filter((c) => {
    if (f.gender !== "All" && c.gender !== f.gender) return false;
    if (f.lang !== "All" && !c.lang.includes(f.lang)) return false;
    if (f.region !== "All") {
      const isGCC = ["UAE", "KSA"].includes(c.country);
      if (f.region === "GCC" && !isGCC) return false;
      if (f.region === "EG" && c.country !== "EG") return false;
    }
    if (f.niche !== "All" && c.niche !== f.niche) return false;
    return true;
  });

  return (
    <section id="ugc" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow">{t({ en: "UGC Marketplace", ar: "ماركت بليس صناع المحتوى" })}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "Hire creators that actually sell.", ar: "وظّف صنّاع محتوى يبيعون فعلًا." })}
          </h2>
          <p className="mt-4 text-slate-soft/70">
            {t({
              en: "Hand-picked talent across MENA & GCC. Filter by niche, language, region and book in minutes.",
              ar: "نخبة مختارة من الشرق الأوسط والخليج. اختر بالتخصص واللغة والمنطقة واحجز في دقائق.",
            })}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {(Object.keys(FILTERS) as (keyof typeof FILTERS)[]).map((key) => (
            <div key={key} className="glass-card flex items-center gap-1.5 rounded-full p-1">
              {FILTERS[key].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setF((p) => ({ ...p, [key]: opt }))}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    f[key] === opt ? "bg-pink text-white shadow-[0_4px_20px_-6px_rgba(255,46,136,0.6)]" : "text-slate-soft/70 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card group overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-0 via-ink-0/30 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                  {c.niche}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{c.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-cyan"><Heart size={12} /> {c.eng}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-soft/60">
                  <span className="flex items-center gap-1"><MapPin size={11} /> {c.country}</span>
                  <span className="flex items-center gap-1"><Languages size={11} /> {c.lang}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-soft/50">{t({ en: "From", ar: "ابتداءً من" })}</div>
                    <div className="text-sm font-semibold">${c.price}</div>
                  </div>
                  <button className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-pink hover:text-white">
                    {t({ en: "Request", ar: "احجز" })}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
