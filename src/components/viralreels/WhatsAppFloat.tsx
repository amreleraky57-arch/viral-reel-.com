import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const WHATSAPP_URL = "https://wa.me/201098375423";
export const WHATSAPP_NUMBER = "201098375423";
export function WhatsAppFloat() {
  const { t, lang } = useLang();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={`group fixed bottom-5 z-[60] inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-all hover:scale-[1.04] hover:shadow-[0_14px_50px_-6px_rgba(37,211,102,0.9)] sm:bottom-6 ${
        lang === "ar" ? "left-5 sm:left-6" : "right-5 sm:right-6"
      }`}
      style={{
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
      }}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 blur-xl opacity-70 animate-pulse" />
      <span className="grid h-6 w-6 place-items-center">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
          <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3c-.9-1.4-1.3-3-1.3-4.6 0-4.5 3.7-8.2 8.4-8.2s8.4 3.7 8.4 8.2-3.7 8.4-8.4 8.4z"/>
        </svg>
      </span>
      <span className="hidden sm:inline">{t({ en: "Chat on WhatsApp", ar: "تواصل واتساب" })}</span>
    </a>
  );
}

export function WhatsAppButton({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  const { t } = useLang();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition hover:scale-[1.03] ${className}`}
      style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
    >
      <MessageCircle size={16} />
      {children ?? t({ en: "Message Us", ar: "راسلنا" })}
    </a>
  );
}
