import { SectionWrapper } from "@/components/SectionWrapper";
import { useSound } from "@/hooks/useSound";

const socialLinks = [
  {
    name: "@levelup.games",
    handle: "Games",
    color: "games" as const,
    url: "https://instagram.com/levelup.games",
  },
  {
    name: "@levelup.digital",
    handle: "Digital",
    color: "digital" as const,
    url: "https://instagram.com/levelup.digital",
  },
  {
    name: "@levelup.labs",
    handle: "Labs",
    color: "labs" as const,
    url: "https://instagram.com/levelup.labs",
  },
];

const colorClasses = {
  games: {
    text: "text-neon-games",
    border: "border-neon-games/30 hover:border-neon-games",
    bg: "hover:bg-neon-games/10",
    shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-games)/0.3)]",
    glow: "neon-text-games",
  },
  digital: {
    text: "text-neon-digital",
    border: "border-neon-digital/30 hover:border-neon-digital",
    bg: "hover:bg-neon-digital/10",
    shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-digital)/0.3)]",
    glow: "neon-text-digital",
  },
  labs: {
    text: "text-neon-labs",
    border: "border-neon-labs/30 hover:border-neon-labs",
    bg: "hover:bg-neon-labs/10",
    shadow: "hover:shadow-[0_0_30px_hsl(var(--neon-labs)/0.3)]",
    glow: "neon-text-labs",
  },
};

export const SocialHub = () => {
  const { playClickSound } = useSound();

  return (
    <SectionWrapper className="bg-secondary/20 digital-red">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Join the <span>
            <span className="!text-white">#Level</span>
            <span className="!text-blue-500">UpWorld</span>
          </span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Follow our journey across all platforms and be part of the community.
        </p>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link) => {
            const colors = colorClasses[link.color];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className={`
                  group p-8 rounded-2xl border transition-all duration-300 bg-card/50
                  ${colors.border} ${colors.bg} ${colors.shadow}
                `}
              >
                <div className={`font-display text-lg font-bold mb-2 ${colors.text} group-hover:${colors.glow}`}>
                  {link.handle}
                </div>
                <div className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.name}
                </div>
                
                {/* Animated underline */}
                <div className={`mt-4 h-0.5 w-0 ${colors.text} bg-current mx-auto transition-all duration-300 group-hover:w-full`} />
              </a>
            );
          })}
        </div>

        {/* Hashtag callout */}
        <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-neon-games/10 via-neon-digital/10 to-neon-labs/10 border border-border/50 inline-block">
          <p className="font-body text-lg">
            Share your creations with{" "}
            <span className="font-display font-bold"><span className="!text-white">#Level</span><span className="!text-blue-500">UpWorld</span></span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
