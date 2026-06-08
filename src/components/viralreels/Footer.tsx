import { SOCIALS } from "./SocialStrip";
import { useLang } from "@/lib/i18n";
import { ViralReelsLogo } from "./Logo";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/[0.06] bg-ink-1/40 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <ViralReelsLogo size={36} />
          <p className="mt-5 max-w-sm text-sm text-slate-soft/65">
            {t({
              en: "Premium viral content studio. UGC, reels, and AI-powered content systems for the creator-economy era.",
              ar: "ستوديو محتوى فيروسي بريميوم. صنّاع محتوى، ريلز، وأنظمة AI لعصر اقتصاد المحتوى.",
            })}
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-soft/80 transition hover:border-pink/40 hover:text-pink">
                <s.Icon size={15} />
              </a>
            ))}
            <a href="https://wa.me/201098375423" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-soft/80 transition hover:border-[#25D366]/60 hover:text-[#25D366]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-slate-soft/50">{t({ en: "Studio", ar: "الستوديو" })}</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { en: "Services", ar: "الخدمات", href: "#services" },
              { en: "Portfolio", ar: "الأعمال", href: "#portfolio" },
              { en: "UGC", ar: "صناع المحتوى", href: "#ugc" },
              { en: "About", ar: "من نحن", href: "#about" },
            ].map((l) => (
              <li key={l.href}><a href={l.href} className="text-slate-soft/75 hover:text-white">{t(l)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-slate-soft/50">{t({ en: "Legal", ar: "قانوني" })}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-slate-soft/75 hover:text-white">{t({ en: "Privacy", ar: "الخصوصية" })}</a></li>
            <li><a href="#" className="text-slate-soft/75 hover:text-white">{t({ en: "Terms", ar: "الشروط" })}</a></li>
            <li><a href="mailto:viralreelscretors@gmail.com" className="text-slate-soft/75 hover:text-white">viralreelscretors@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/5 px-5 pt-6 text-xs text-slate-soft/50 lg:px-8">
        <div>© {new Date().getFullYear()} ViralReels Studio. {t({ en: "All rights reserved.", ar: "جميع الحقوق محفوظة." })}</div>
        <div>{t({ en: "Crafted for the creator economy.", ar: "صُمم لاقتصاد صنّاع المحتوى." })}</div>
      </div>
    </footer>
  );
}
