import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const PLANS = [
  {
    name: { en: "Starter", ar: "مبتدئ" },
    price: "$1,800",
    period: { en: "/ month", ar: "/ شهريًا" },
    desc: { en: "Launch your reels engine.", ar: "ابدأ ماكينة الريلز بتاعتك." },
    features: [
      { en: "8 viral reels / month", ar: "8 ريلز فيروسية شهريًا" },
      { en: "Hooks + scripts included", ar: "هوكس وسكريبتس مشمولة" },
      { en: "Basic content strategy", ar: "استراتيجية محتوى أساسية" },
      { en: "48h turnaround", ar: "تسليم خلال 48 ساعة" },
    ],
    cta: { en: "Start Starter", ar: "ابدأ" },
    featured: false,
  },
  {
    name: { en: "Growth", ar: "نمو" },
    price: "$3,900",
    period: { en: "/ month", ar: "/ شهريًا" },
    desc: { en: "The plan most brands scale on.", ar: "الخطة اللي أغلب البراندات تتوسع بها." },
    features: [
      { en: "20 reels + 6 UGC pieces", ar: "20 ريل + 6 محتوى صنّاع" },
      { en: "Full content strategy", ar: "استراتيجية محتوى شاملة" },
      { en: "Dedicated editor + strategist", ar: "مونتير واستراتيجي مخصص" },
      { en: "Weekly performance reports", ar: "تقارير أداء أسبوعية" },
      { en: "Priority 24h turnaround", ar: "تسليم خلال 24 ساعة" },
    ],
    cta: { en: "Start Growth", ar: "ابدأ" },
    featured: true,
  },
  {
    name: { en: "Scale", ar: "توسّع" },
    price: { en: "Custom", ar: "حسب الطلب" } as never,
    period: { en: "", ar: "" },
    desc: { en: "Full creator-economy stack.", ar: "منظومة كاملة لاقتصاد صنّاع المحتوى." },
    features: [
      { en: "Unlimited reels & UGC", ar: "ريلز وصنّاع محتوى غير محدودين" },
      { en: "AI content systems setup", ar: "إعداد أنظمة محتوى AI" },
      { en: "Media buying & ROAS optimization", ar: "إعلانات وتحسين ROAS" },
      { en: "Founder-led strategy calls", ar: "جلسات استراتيجية مع المؤسس" },
      { en: "Same-day delivery", ar: "تسليم في نفس اليوم" },
    ],
    cta: { en: "Talk to Founders", ar: "تواصل مع المؤسسين" },
    featured: false,
  },
];

export function Pricing() {
  const { t } = useLang();
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="eyebrow">{t({ en: "Pricing", ar: "الأسعار" })}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "One transparent price. Zero retainer games.", ar: "سعر واحد شفّاف. لا ألاعيب." })}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-8 ${
                p.featured
                  ? "border border-pink/40 bg-gradient-to-b from-pink/[0.08] to-transparent glow-pink"
                  : "glass-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {t({ en: "Most Popular", ar: "الأكثر طلبًا" })}
                </span>
              )}
              <h3 className="text-lg font-semibold">{t(p.name)}</h3>
              <p className="mt-2 text-sm text-slate-soft/60">{t(p.desc)}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tight">{typeof p.price === "string" ? p.price : t(p.price)}</span>
                <span className="text-sm text-slate-soft/60">{t(p.period)}</span>
              </div>
              <a href="#contact" className={`mt-7 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition ${p.featured ? "bg-pink text-white hover:brightness-110" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}>
                {t(p.cta)}
              </a>
              <ul className="mt-7 space-y-3 border-t border-white/10 pt-7">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-soft/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" /> {t(f)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
