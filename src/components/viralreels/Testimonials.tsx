import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const QUOTES = [
  { name: "Karim S.", role: { en: "Founder, Gabri's Wear", ar: "مؤسس، Gabri's Wear" }, en: "We went from invisible to selling out drops. Their reels do what our ads couldn't.", ar: "من علامة غير مرئية إلى نفاد المخزون. الريلز بتاعتهم سوّت اللي الإعلانات ما قدرتش تسوّيه." },
  { name: "Hala R.", role: { en: "Head of Marketing, DTX", ar: "مديرة التسويق، DTX" }, en: "On-time, on-brand, and on-numbers. The only agency that actually moved our pipeline.", ar: "في الوقت، على البراند، وعلى الأرقام. الوكالة الوحيدة اللي فعلًا حركت البايبلاين." },
  { name: "Mohamed A.", role: { en: "CEO, TARIOCA", ar: "مدير TARIOCA" }, en: "They built our hype before we even opened. Day-one was a queue, not a launch.", ar: "بنوا الهايب قبل ما نفتح. أول يوم كان طابور، مش إطلاق." },
  { name: "Lina F.", role: { en: "CMO, NovaStack", ar: "مديرة تسويق NovaStack" }, en: "Their founder-led storytelling outperformed our paid acquisition by 3×.", ar: "السرد بصوت المؤسس تفوّق على الإعلانات المدفوعة بـ 3 أضعاف." },
];

export function Testimonials() {
  const { t } = useLang();
  return (
    <section className="section-pad bg-ink-1/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="eyebrow">{t({ en: "Testimonials", ar: "آراء العملاء" })}</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            {t({ en: "Founders talk. Numbers don't lie.", ar: "المؤسسون يتحدثون. والأرقام لا تكذب." })}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass-card flex flex-col rounded-2xl p-6"
            >
              <div className="flex gap-0.5 text-yellow">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/90">"{t({ en: q.en, ar: q.ar })}"</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold">{q.name}</div>
                <div className="text-xs text-slate-soft/60">{t(q.role)}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
