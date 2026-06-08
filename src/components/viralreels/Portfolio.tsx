import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const CASES = [
  {
    tag: { en: "Fashion", ar: "أزياء" },
    brand: "Gabri's Wear",
    en: { headline: "From 113 → 62.8K followers in 90 days", note: "28 reels, 4 viral hits, 6.2× ROAS on launch drop." },
    ar: { headline: "من 113 إلى 62.8 ألف متابع في 90 يومًا", note: "28 ريل، 4 ضربات فيروسية، 6.2× عائد على الإطلاق." },
    metric: "+55,407",
  },
  {
    tag: { en: "Print & Tech", ar: "طباعة وتقنية" },
    brand: "DTX Digital",
    en: { headline: "2.2K → 44.3K followers, B2B inbound +18×", note: "Storytelling reels turned a printing brand into a creator favorite." },
    ar: { headline: "من 2.2 ألف إلى 44.3 ألف متابع، طلبات B2B +18×", note: "ريلز قصصية حوّلت براند طباعة لمفضّل عند صنّاع المحتوى." },
    metric: "+42,050",
  },
  {
    tag: { en: "F&B", ar: "مطاعم" },
    brand: "TARIOCA",
    en: { headline: "Pre-launch hype → 23.9K loyal followers", note: "Pre-opening content built a queue before the doors opened." },
    ar: { headline: "ضجة قبل الافتتاح → 23.9 ألف متابع مخلص", note: "محتوى ما قبل الافتتاح بنى طابور انتظار قبل فتح الأبواب." },
    metric: "+14,336",
  },
  {
    tag: { en: "SaaS", ar: "برمجيات" },
    brand: "NovaStack",
    en: { headline: "Founder-led reels → 2.4M demo requests", note: "Personal storytelling outperformed paid ads by 3.1×." },
    ar: { headline: "ريلز بصوت المؤسس → 2.4 مليون طلب تجربة", note: "السرد الشخصي تفوّق على الإعلانات المدفوعة بـ 3.1×." },
    metric: "2.4M",
  },
];

export function Portfolio() {
  const { t } = useLang();
  return (
    <section id="portfolio" className="section-pad bg-ink-1/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">{t({ en: "Selected work", ar: "أعمال مختارة" })}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
              {t({ en: "Receipts, not promises.", ar: "نتائج حقيقية. مش وعود." })}
            </h2>
          </div>
          <a href="#contact" className="btn-ghost text-sm">
            {t({ en: "Start your case study", ar: "ابدأ قصتك" })} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.article
              key={c.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-slate-soft/70">
                  {t(c.tag)}
                </span>
                <span className="text-xs text-slate-soft/50">/0{i + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{c.brand}</h3>
              <p className="mt-3 text-lg leading-snug text-white/90">{t({ en: c.en.headline, ar: c.ar.headline })}</p>
              <p className="mt-3 text-sm text-slate-soft/65">{t({ en: c.en.note, ar: c.ar.note })}</p>

              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-soft/50">
                    {t({ en: "Net result", ar: "النتيجة الصافية" })}
                  </div>
                  <div className="text-2xl font-semibold text-gradient-brand">{c.metric}</div>
                </div>
                <ArrowUpRight size={20} className="text-slate-soft/40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-pink" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
