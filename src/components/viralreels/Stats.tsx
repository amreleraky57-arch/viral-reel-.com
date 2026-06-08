import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, mv, to]);

  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v + suffix; }), [rounded, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  const { t } = useLang();
  const items = [
    { value: 2, suffix: "B+", label: { en: "Views generated", ar: "مشاهدة محققة" } },
    { value: 150, suffix: "+", label: { en: "Brands scaled", ar: "براند تم تطويرها" } },
    { value: 10, suffix: "×", label: { en: "Average ROAS", ar: "متوسط ROAS" } },
    { value: 94, suffix: "%", label: { en: "Client retention", ar: "احتفاظ بالعملاء" } },
  ];
  return (
    <section id="results" className="section-pad border-y border-white/[0.05] bg-ink-1/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <div className="text-5xl font-semibold tracking-tight text-gradient-brand sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-slate-soft/65">{t(s.label)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
