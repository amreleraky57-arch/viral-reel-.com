import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

const QS = [
  { q: { en: "How fast can we start?", ar: "متى يمكن البدء؟" }, a: { en: "We onboard within 48 hours. First reels live in week one.", ar: "نبدأ خلال 48 ساعة. أول ريلز يُنشر في الأسبوع الأول." } },
  { q: { en: "What exactly do you deliver?", ar: "ما الذي تقدمونه؟" }, a: { en: "Scripts, shooting briefs, full edits, captions, hashtags, and performance reports — everything except the camera shy.", ar: "سكريبتس، خطط تصوير، مونتاج كامل، كابشن، هاشتاجز، وتقارير أداء — كل شيء عدا الخجل من الكاميرا." } },
  { q: { en: "Do you produce Arabic content?", ar: "هل تنتجون محتوى عربي؟" }, a: { en: "Yes. Native Arabic strategists, scriptwriters, and creators across Egypt and the GCC.", ar: "نعم. استراتيجيون وكتّاب وصنّاع محتوى عرب أصليون في مصر والخليج." } },
  { q: { en: "Do you provide UGC?", ar: "هل تقدمون UGC؟" }, a: { en: "Our marketplace has 200+ vetted creators across MENA. Filter, request, ship.", ar: "ماركت بليس فيه أكثر من 200 صانع محتوى مفلتر في المنطقة. فلتر، احجز، انشر." } },
  { q: { en: "How many revisions are included?", ar: "كم عدد المراجعات؟" }, a: { en: "Two free revision rounds per asset. We rarely need them.", ar: "جولتا مراجعة مجانًا لكل أصل. نادرًا ما نحتاجهما." } },
  { q: { en: "Can I use my own footage?", ar: "هل يمكنني استخدام لقطاتي؟" }, a: { en: "Absolutely. We edit, repurpose, and turn raw footage into scroll-stopping reels.", ar: "بالطبع. نحوّل لقطاتك الخام إلى ريلز توقف السكرول." } },
];

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad bg-ink-1/30">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="eyebrow justify-center">FAQ</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "Questions, answered.", ar: "أسئلة بإجابات." })}
          </h2>
        </div>

        <div className="space-y-3">
          {QS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass-card rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                >
                  <span className="font-medium">{t(item.q)}</span>
                  {isOpen ? <Minus size={18} className="text-pink" /> : <Plus size={18} className="text-slate-soft/60" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-soft/75">{t(item.a)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
