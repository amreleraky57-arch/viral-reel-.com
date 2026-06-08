import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Heart, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

type Reel = {
  id: string;
  category: { en: string; ar: string };
  title: { en: string; ar: string };
  views: string;
  likes: string;
};

const REELS: Reel[] = [
  { id: "15nzbKejZgZIe0P0RU4v5jZ_2-4f2C_Sv", category: { en: "Viral Reels", ar: "ريلز فيروسية" }, title: { en: "Hook → Story → Sell", ar: "هوك ← قصة ← مبيعات" }, views: "2.4M", likes: "184K" },
  { id: "1YX1-YFXQIxE9FHdxdC3g46c9RKbyiS5t", category: { en: "Restaurant Content", ar: "محتوى مطاعم" }, title: { en: "Drop Day — F&B", ar: "يوم الإطلاق — F&B" }, views: "1.8M", likes: "121K" },
  { id: "1HfMuvcV-pZKFb_LCIvGPH_BYQZnpIZol", category: { en: "UGC Content", ar: "محتوى صناع" }, title: { en: "Creator-led Launch", ar: "إطلاق بصوت الصنّاع" }, views: "1.2M", likes: "98K" },
  { id: "1QzrSdETowqMbKEfw1N0ImEnBy6uFCRzb", category: { en: "Brand Storytelling", ar: "قصص البراند" }, title: { en: "Heritage in Motion", ar: "هوية متحركة" }, views: "964K", likes: "72K" },
  { id: "1cymtnIsZY97L1Yy1JwgDgZNlxTu0Sr6R", category: { en: "Social Media Ads", ar: "إعلانات سوشيال" }, title: { en: "10.4× ROAS Hook", ar: "هوك بعائد 10.4×" }, views: "3.1M", likes: "212K" },
  { id: "1n5qMTt6PVKQgTHu2RtMG6A_n2NGMj97h", category: { en: "Creator Videos", ar: "فيديوهات صنّاع" }, title: { en: "POV: Founder Mode", ar: "POV: مود المؤسس" }, views: "742K", likes: "61K" },
  { id: "1ARpYLbeeZzID3REPQHtwLt7raJ0S8eV8", category: { en: "Viral Reels", ar: "ريلز فيروسية" }, title: { en: "Algorithm Bait", ar: "صيد الخوارزمية" }, views: "2.1M", likes: "156K" },
  { id: "1T4yP-xKggdMoQCpxuvNGO1L9MUjWl5b2", category: { en: "Restaurant Content", ar: "محتوى مطاعم" }, title: { en: "Menu in Motion", ar: "المنيو بالحركة" }, views: "1.5M", likes: "112K" },
  { id: "19TlSjDOXeAvlg7zJlFI88ntSdxW7W-V1", category: { en: "UGC Content", ar: "محتوى صناع" }, title: { en: "Real Voices, Real Sales", ar: "أصوات حقيقية، مبيعات حقيقية" }, views: "896K", likes: "67K" },
  { id: "1MxDNKGrGTtmDotw-nRVV2fbGUgocBUsh", category: { en: "Brand Storytelling", ar: "قصص البراند" }, title: { en: "Founder Story", ar: "قصة المؤسس" }, views: "1.1M", likes: "84K" },
  { id: "1A9mwFsaIyV5vOAQHPuuyVnJw1mLN9dB4", category: { en: "Social Media Ads", ar: "إعلانات سوشيال" }, title: { en: "Scroll-Stopper Ad", ar: "إعلان يوقف السكرول" }, views: "2.7M", likes: "198K" },
  { id: "1abEE6ADnTHK1zCmUeE2IplmgNjBMHpCr", category: { en: "Creator Videos", ar: "فيديوهات صنّاع" }, title: { en: "Day in the Studio", ar: "يوم في الستوديو" }, views: "612K", likes: "48K" },
  { id: "1Bqcffm903fiKJ13nHbmDEwF-BfBf0rtN", category: { en: "Viral Reels", ar: "ريلز فيروسية" }, title: { en: "Cinematic Cutdown", ar: "مونتاج سينمائي" }, views: "1.9M", likes: "142K" },
  { id: "1BlL4qbAAHsCVT7k3jbtMXYOpzhLKbgZm", category: { en: "Restaurant Content", ar: "محتوى مطاعم" }, title: { en: "Sizzle Sells", ar: "السيزل بيبيع" }, views: "1.3M", likes: "104K" },
  { id: "1sQ4N1ONn7UfqhKjMsDDqlGsp8UfZkdg-", category: { en: "Brand Storytelling", ar: "قصص البراند" }, title: { en: "Brand in 30 Seconds", ar: "البراند في 30 ثانية" }, views: "1.0M", likes: "78K" },
  { id: "1eQAmLyHfaBIDcHdy8vbNVyM-6g_W9z9g", category: { en: "UGC Content", ar: "محتوى صناع" }, title: { en: "Authentic Sells", ar: "الأصالة بتبيع" }, views: "854K", likes: "69K" },
];

const CATEGORIES = ["All", "Viral Reels", "Restaurant Content", "UGC Content", "Brand Storytelling", "Social Media Ads", "Creator Videos"] as const;
const CAT_AR: Record<string, string> = {
  All: "الكل",
  "Viral Reels": "ريلز فيروسية",
  "Restaurant Content": "محتوى مطاعم",
  "UGC Content": "محتوى صناع",
  "Brand Storytelling": "قصص البراند",
  "Social Media Ads": "إعلانات سوشيال",
  "Creator Videos": "فيديوهات صنّاع",
};

const thumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w640`;

function ReelCard({ reel, index, onPlay }: { reel: Reel; index: number; onPlay: (r: Reel) => void }) {
  const { t } = useLang();
  const [imgOk, setImgOk] = useState(true);

  return (
    <motion.button
      type="button"
      onClick={() => onPlay(reel)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04 }}
      whileHover={{ scale: 1.025 }}
      className="reel-card group relative aspect-[9/16] w-[72vw] max-w-[320px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-3xl border border-white/10 bg-ink-2 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-shadow hover:shadow-[0_30px_80px_-20px_rgba(255,46,136,0.45)] sm:w-[300px]"
    >
      {/* Thumbnail (preloaded only) */}
      {imgOk ? (
        <img
          src={thumb(reel.id)}
          alt={t(reel.title)}
          loading="lazy"
          decoding="async"
          onError={() => setImgOk(false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E88]/40 via-[#8B5CF6]/30 to-[#00CFFF]/40" />
      )}

      {/* cinematic blurred glow behind */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(255,46,136,0.2), transparent 45%, rgba(0,207,255,0.2))" }} />

      {/* category */}
      <div className="pointer-events-none absolute left-4 top-4 z-10">
        <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
          {t(reel.category)}
        </span>
      </div>

      {/* animated play */}
      <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
        <span className="absolute h-20 w-20 rounded-full bg-white/10 blur-xl transition-all duration-500 group-hover:bg-pink/40 group-hover:blur-2xl" />
        <span className="absolute h-16 w-16 rounded-full border border-white/40 animate-ping opacity-30 group-hover:opacity-60" />
        <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,46,136,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:border-pink/60 group-hover:bg-pink/20">
          <Play size={22} className="translate-x-[1px] fill-white text-white" />
        </div>
      </div>

      {/* metrics */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
        <div className="text-[15px] font-semibold leading-tight text-white">{t(reel.title)}</div>
        <div className="mt-2 flex items-center gap-4 text-[11px] text-white/75">
          <span className="inline-flex items-center gap-1"><Eye size={12} /> {reel.views}</span>
          <span className="inline-flex items-center gap-1"><Heart size={12} className="text-pink" /> {reel.likes}</span>
        </div>
      </div>
    </motion.button>
  );
}

function VideoModal({ reel, onClose }: { reel: Reel | null; onClose: () => void }) {
  const { t } = useLang();
  useEffect(() => {
    if (!reel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [reel, onClose]);

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-xl"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="close"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[9/16] h-[88vh] max-h-[860px] w-auto max-w-[95vw] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_40px_120px_-30px_rgba(255,46,136,0.6)]"
          >
            <iframe
              src={`https://drive.google.com/file/d/${reel.id}/preview`}
              title={t(reel.title)}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CinematicReels() {
  const { t, lang } = useLang();
  const scroller = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Reel | null>(null);

  const filtered = filter === "All" ? REELS : REELS.filter((r) => r.category.en === filter);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const amt = Math.min(el.clientWidth * 0.85, 720) * dir;
    el.scrollBy({ left: amt, behavior: "smooth" });
  };

  return (
    <section id="reels" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[420px] w-[640px] rounded-full bg-[#FF2E88]/12 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[460px] w-[680px] rounded-full bg-[#00CFFF]/10 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">{t({ en: "Reels showcase", ar: "معرض الريلز" })}</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
              {lang === "en" ? (
                <>Stories that <span className="text-gradient-brand">go viral</span> on demand.</>
              ) : (
                <>قصص <span className="text-gradient-brand">فيروسية</span> تُصنع بالطلب.</>
              )}
            </h2>
            <p className="mt-4 text-slate-soft/70">
              {t({
                en: "Tap any reel to open in full screen. No autoplay — cinematic, fast, on-demand.",
                ar: "اضغط على أي ريل ليُفتح بشاشة كاملة. لا تشغيل تلقائي — سينمائي وسريع.",
              })}
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scrollBy(-1)} aria-label="previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="next" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[#FF2E88] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(255,46,136,0.5)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {lang === "ar" ? CAT_AR[c] : c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-0 to-transparent lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-0 to-transparent lg:w-24" />

        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-8 lg:gap-7 lg:px-[max(2rem,calc((100vw-80rem)/2))]"
        >
          {filtered.map((r, i) => (
            <ReelCard key={r.id} reel={r} index={i} onPlay={setActive} />
          ))}
        </div>
      </div>

      <VideoModal reel={active} onClose={() => setActive(null)} />
    </section>
  );
}
