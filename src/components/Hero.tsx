import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/GlitchText";
import { useSound } from "@/hooks/useSound";
import { ChevronDown } from "lucide-react";

import HeroLottie from "@/components/ui/hero-lottie";

export const Hero = () => {
  const { playLevelUpSound } = useSound();
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Play sound after a short delay when component mounts
    const timer = setTimeout(() => {
      if (!hasPlayed) {
        playLevelUpSound();
        setHasPlayed(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [playLevelUpSound, hasPlayed]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`#${id}`);
    if (!el) return;
    // scroll smoothly
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // add highlight class briefly
    const node = el as HTMLElement;
    node.classList.add("section-highlight");
    setTimeout(() => node.classList.remove("section-highlight"), 1400);
  };

  const particleRef = useRef<HTMLDivElement | null>(null);

  const triggerBurst = () => {
    const container = particleRef.current;
    if (!container) return;
    const count = 20;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 160; // px
      const dx = Math.round(Math.cos(angle) * distance) + "px";
      const dy = Math.round(Math.sin(angle) * distance) + "px";
      // random brand-ish color
      const hues = [155, 195, 270, 200];
      const hue = hues[Math.floor(Math.random() * hues.length)];
      p.style.setProperty("--dx", dx);
      p.style.setProperty("--dy", dy);
      p.style.background = `hsl(${hue} 90% 60% / 0.95)`;
      container.appendChild(p);
      // remove after animation
      setTimeout(() => p.remove(), 1100);
    }
  };

  // trigger burst after sweep-fill finishes (approx 1.1s)
  useEffect(() => {
    const t = setTimeout(() => triggerBurst(), 1150);
    return () => clearTimeout(t);
  }, []);

  // allow overriding hero video via Vite env var `VITE_HERO_VIDEO`
  // try to resolve a local asset placed at `src/assets/videolevelup.mp4` (or alternate spelling)
  let localVideo: string | null = null;
  try {
    localVideo = new URL("../assets/videolevelup.mp4", import.meta.url).href;
  } catch (e) {
    try {
      localVideo = new URL("../assets/videoleveup.mp4", import.meta.url).href;
    } catch (e) {
      localVideo = null;
    }
  }
  const videoSrc = (import.meta.env.VITE_HERO_VIDEO as string) || localVideo || "/videos/hero.mp4";

  // XP donut removed per user request

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video (uses src/assets/videolevelup.mp4 if available) */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Subtle overlay so text remains readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating cubes removed so video is the sole background */}

      {/* (XP donut removed per request) */}

      {/* Removed decorative overlays so video is the sole background */}

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider mb-2 pop-in no-line-headline">
            <span className="glitch headline-part-level mr-3">LEVEL</span>
            <span className="glitch sweep-fill headline-part-up">UP</span>
          </h1>
          <span className="block font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest neon-text-digital pulse-glow glow">
            STUDIO
          </span>
        </div>

        {/* old hero image removed; video placed behind content */}

        {/* particle container for burst */}
        <div ref={particleRef} className="pointer-events-none absolute inset-0 z-20" />

        <p 
          className="mt-8 font-body text-xl sm:text-2xl md:text-3xl text-muted-foreground tracking-wide animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Build. Play. <span className="text-foreground font-semibold">Level Up.</span>
        </p>

        <div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToAbout}
            className="min-w-[200px]"
          >
              <HeroLottie className="w-6 h-6 mr-3" />
            Explore Our Worlds
          </Button>
        </div>

        {/* (Quick-links removed per request) */}

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-300/60" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-red-400/60" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-green-400/60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-purple-400/60" />
    </section>
  );
};
