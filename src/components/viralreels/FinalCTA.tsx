import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ViralReelsMark } from "./Logo";
import type { ReactNode } from "react";

export function FinalCTA() {
  const { t, lang } = useLang();
  const headline: ReactNode = lang === "en"
    ? <>Ready to become <span className="text-gradient-brand">impossible to ignore?</span></>
    : <>جاهز تخلي البراند بتاعك <span className="text-gradient-brand">مستحيل يتنسى؟</span></>;
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2E88]/20 blur-[180px] animate-pulse-glow" />
      </div>
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 flex justify-center"
        >
          <ViralReelsMark size={64} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-[clamp(2.4rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight"
        >
          {headline}
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-slate-soft/70">
          {t({ en: "Tell us about your brand. We'll send a custom plan in 24 hours.", ar: "احكِ لنا عن البراند. هنبعتلك خطة مخصصة خلال 24 ساعة." })}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/201098375423"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-10px_rgba(37,211,102,0.7)] transition hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            {t({ en: "Chat on WhatsApp", ar: "تواصل واتساب" })} <ArrowRight size={16} />
          </a>
          <a href="#portfolio" className="btn-ghost">{t({ en: "See more work", ar: "شاهد المزيد" })}</a>
        </div>
        <div className="mt-5 text-xs text-slate-soft/55">01098375423</div>
      </div>
    </section>
  );
}
