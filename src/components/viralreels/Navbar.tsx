import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { ViralReelsLogo } from "./Logo";

const NAV = [
  { href: "#services", en: "Services", ar: "الخدمات" },
  { href: "#portfolio", en: "Portfolio", ar: "الأعمال" },
  { href: "#ugc", en: "UGC", ar: "صناع المحتوى" },
  { href: "#results", en: "Results", ar: "النتائج" },
  { href: "#about", en: "About", ar: "من نحن" },
  { href: "#faq", en: "FAQ", ar: "الأسئلة" },
  { href: "#contact", en: "Contact", ar: "تواصل" },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-ink-0/70 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="shrink-0"><ViralReelsLogo size={32} /></a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-soft/80 transition hover:text-white">
              {t(n)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/5"
            aria-label="Toggle language"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <a href="https://wa.me/201098375423" target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 text-sm">
            {t({ en: "Work With Us", ar: "اشتغل معانا" })}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white lg:hidden" aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-1/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-slate-soft hover:bg-white/5">
                {t(n)}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="rounded-full border border-white/10 px-3 py-1.5 text-xs">
                {lang === "en" ? "AR" : "EN"}
              </button>
              <a href="https://wa.me/201098375423" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary !py-2 !px-4 text-sm">
                {t({ en: "Work With Us", ar: "اشتغل معانا" })}
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
