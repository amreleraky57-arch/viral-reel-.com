import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Eye, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ViralReelsMark } from "./Logo";

export function Hero() {
  const { lang, t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient cinematic glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[720px] w-[1200px] -translate-x-1/2 rounded-full bg-[#FF2E88]/20 blur-[180px] animate-pulse-glow" />
        <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-[#00CFFF]/15 blur-[150px]" />
        <div className="absolute left-0 bottom-0 h-[340px] w-[340px] rounded-full bg-[#8B5CF6]/15 blur-[130px]" />
        {/* light streaks */}
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-pink/30 to-transparent" />
        {/* particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 41) % 100}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <ViralReelsMark size={28} glow />
          <span className="eyebrow">2B+ {t({ en: "Views Generated", ar: "مشاهدة محققة" })}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className={`mx-auto max-w-5xl text-center font-semibold tracking-tight ${
            lang === "ar"
              ? "text-[clamp(2.2rem,6.4vw,5rem)] leading-[1.15]"
              : "text-[clamp(2.6rem,7.2vw,6rem)] leading-[0.98]"
          }`}
        >
          {lang === "en" ? (
            <>
              <span className="block text-white">We create content</span>
              <span className="block text-gradient-brand animate-gradient-x">that gets attention.</span>
            </>
          ) : (
            <>
              <span className="block text-white">محتوى مخصص</span>
              <span className="block text-gradient-brand animate-gradient-x">لزيادة الانتشار.</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base text-slate-soft/80 sm:text-lg"
        >
          {lang === "en"
            ? "Viral-first content systems for brands that want attention, reach, and real engagement."
            : "كابشن، هاشتاجات، تقارير أداء، ومحتوى يساعدك على الانتشار — كل شيء عدا الخجل من الكاميرا."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="https://wa.me/201098375423" target="_blank" rel="noopener noreferrer" className="btn-primary btn-magnetic">
            {t({ en: "Become Our Client", ar: "كن عميلنا" })} <ArrowRight size={16} />
          </a>
          <a href="#reels" className="btn-ghost">
            <Play size={14} /> {t({ en: "Watch the Reels", ar: "شاهد الريلز" })}
          </a>
        </motion.div>

        {/* floating analytics cards */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass-card relative rounded-2xl p-6 lg:p-8"
          >
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                { icon: Eye, label: t({ en: "Avg. Views / Reel", ar: "متوسط المشاهدات" }), value: "1.2M", color: "text-cyan" },
                { icon: TrendingUp, label: t({ en: "Engagement Lift", ar: "نمو التفاعل" }), value: "+412%", color: "text-pink" },
                { icon: Sparkles, label: t({ en: "Brands Scaled", ar: "براندات تم تطويرها" }), value: "150+", color: "text-purple" },
                { icon: Play, label: t({ en: "Reels Shipped", ar: "ريلز تم إنتاجها" }), value: "8,400", color: "text-yellow" },
              ].map((s) => (
                <div key={s.value} className="flex flex-col gap-2">
                  <s.icon size={18} className={s.color} />
                  <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                  <div className="text-xs text-slate-soft/60">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card absolute -left-4 -top-8 hidden rounded-xl px-4 py-3 text-xs glow-pink lg:block"
          >
            <div className="text-slate-soft/60">{t({ en: "Live", ar: "مباشر" })}</div>
            <div className="font-semibold text-pink">+24,801 {t({ en: "new followers / 24h", ar: "متابع / 24س" })}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85 }}
            className="glass-card absolute -right-4 -bottom-8 hidden rounded-xl px-4 py-3 text-xs glow-cyan lg:block"
          >
            <div className="text-slate-soft/60">ROAS</div>
            <div className="font-semibold text-cyan">10.4× {t({ en: "this month", ar: "هذا الشهر" })}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
