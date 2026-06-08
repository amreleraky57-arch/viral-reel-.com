import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/viralreels/Navbar";
import { Hero } from "@/components/viralreels/Hero";
import { Marquee } from "@/components/viralreels/Marquee";
import { Services } from "@/components/viralreels/Services";
import { Portfolio } from "@/components/viralreels/Portfolio";
import { CinematicReels } from "@/components/viralreels/CinematicReels";
import { UGC } from "@/components/viralreels/UGC";
import { Stats } from "@/components/viralreels/Stats";
import { About } from "@/components/viralreels/About";
import { Testimonials } from "@/components/viralreels/Testimonials";
import { FAQ } from "@/components/viralreels/FAQ";
import { FinalCTA } from "@/components/viralreels/FinalCTA";
import { SocialStrip } from "@/components/viralreels/SocialStrip";
import { WhatsAppFloat } from "@/components/viralreels/WhatsAppFloat";
import { Footer } from "@/components/viralreels/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViralReels — Premium Viral Content & UGC Marketplace" },
      { name: "description", content: "ViralReels is a premium viral content agency, reels editing studio, and UGC marketplace. We build creator-led storytelling for brands ready to dominate." },
      { name: "theme-color", content: "#050505" },
      { name: "keywords", content: "ViralReels, viral content agency, UGC marketplace, reels editing, creator economy, Arabic content agency, short form video, MENA content studio" },
      { property: "og:title", content: "ViralReels — Premium Viral Content & UGC Marketplace" },
      { property: "og:description", content: "Premium reels editing, UGC marketplace, and AI content systems. Storytelling that scales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ViralReels — Premium Viral Content Studio" },
      { name: "twitter:description", content: "Premium reels, UGC, and AI-powered content systems for the creator economy era." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cairo:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

export default function Index() {  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink-0 text-white antialiased">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <CinematicReels />
          <Portfolio />
          <UGC />
          <Stats />
          <About />
          <Testimonials />
          <FAQ />
          <SocialStrip />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

