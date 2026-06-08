import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="eyebrow">{t({ en: "About ViralReels", ar: "من نحن" })}</div>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight lg:text-5xl">
            {t({
              en: "Founder-built. Creator-led. Algorithm-obsessed.",
              ar: "بُني بأيدي مؤسّسين. يقوده صنّاع محتوى. ومهووس بالخوارزميات.",
            })}
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-soft/80 lg:col-span-7 lg:text-lg">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {t({
              en: "ViralReels exists because most agencies sell deliverables. We sell outcomes. We're a tight studio of editors, strategists, and creators who lived inside the platforms before they hired us.",
              ar: "نحن موجودون لأن أغلب الوكالات تبيع تسليمات. نحن نبيع نتائج. فريق محكم من مونتيرين واستراتيجيين وصنّاع محتوى عاشوا داخل المنصات قبل أن يُوظَّفوا.",
            })}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            {t({
              en: "Our delivery is faster because our systems are deeper. Our strategy is sharper because we test in public, daily. And our creative wins because we treat retention like religion.",
              ar: "تسليمنا أسرع لأن أنظمتنا أعمق. استراتيجيتنا أحدّ لأننا نختبر يوميًا أمام الجمهور. وإبداعنا يربح لأننا نتعامل مع الاحتفاظ كأنه دين.",
            })}
          </motion.p>
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              { en: "Daily testing", ar: "اختبار يومي" },
              { en: "Retention-first", ar: "الاحتفاظ أولًا" },
              { en: "Founder-led delivery", ar: "تسليم بإشراف المؤسس" },
              { en: "100% on-time", ar: "100% في الموعد" },
            ].map((p, i) => (
              <span key={i} className="glass-card rounded-full px-4 py-2 text-xs font-medium text-white/90">
                {t(p)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
