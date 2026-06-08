import { motion } from "framer-motion";
import { Film, Users, Brain, Camera } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Services() {
  const { t } = useLang();
  const items = [
    {
      icon: Film,
      accent: "from-[#FF2E88] to-[#8B5CF6]",
      en: { t: "Viral Reels Production", d: "Hook-first edits engineered for the algorithm — story, pace, and retention dialed in." },
      ar: { t: "إنتاج الريلز الفيروسية", d: "مونتاج يبدأ بهوك قوي، مبني على القصة والإيقاع والاحتفاظ بالمشاهد." },
    },
    {
      icon: Brain,
      accent: "from-[#8B5CF6] to-[#00CFFF]",
      en: { t: "Content Strategy", d: "Founder-led playbooks: pillars, formats, calendars — a clear path from view to revenue." },
      ar: { t: "استراتيجية المحتوى", d: "خطط محتوى متكاملة: محاور، فورمات، تقويم، ومسار من المشاهدة للمبيعات." },
    },
    {
      icon: Users,
      accent: "from-[#00CFFF] to-[#FF2E88]",
      en: { t: "UGC Content", d: "Vetted creators across MENA & GCC. Real faces, real voices, real conversions." },
      ar: { t: "محتوى صناع المحتوى", d: "صنّاع محتوى مفلترين في الشرق الأوسط والخليج. وجوه حقيقية ومبيعات حقيقية." },
    },
    {
      icon: Camera,
      accent: "from-[#FFD600] to-[#FF2E88]",
      en: { t: "Social Media Content", d: "Always-on content systems: shoot, edit, ship — premium quality, lightning turnaround." },
      ar: { t: "محتوى السوشيال ميديا", d: "نظام محتوى مستمر: تصوير، مونتاج، تسليم — جودة عالية وسرعة لا تُقارن." },
    },
  ];

  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="eyebrow">{t({ en: "What we do", ar: "ماذا نفعل" })}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "Four services. One viral engine.", ar: "أربع خدمات. ماكينة فيروسية واحدة." })}
          </h2>
          <p className="mt-4 text-slate-soft/70">
            {t({
              en: "Every service plugs into the next. Strategy feeds scripts, scripts feed shoots, shoots feed growth.",
              ar: "كل خدمة تكمّل التانية. الاستراتيجية تقود السكريبتس، السكريبتس تقود التصوير، والتصوير يقود النمو.",
            })}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((s, i) => (
            <motion.div
              key={s.en.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="neon-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />
              <div className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.accent} shadow-[0_0_30px_rgba(255,46,136,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{t({ en: s.en.t, ar: s.ar.t })}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft/70">{t({ en: s.en.d, ar: s.ar.d })}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-pink">
                0{i + 1} <span className="h-px w-8 bg-pink/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
