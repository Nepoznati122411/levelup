import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";
import { NeonCard } from "@/components/NeonCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { games } from "@/data/projects";
import LazyImage from "@/components/ui/lazy-image";

export const GamesSection = () => {
  return (
    <SectionWrapper id="games">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="neon-text-games text-neon-games !text-green-500">Games</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground italic">
            We build worlds.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {games.map((game, index) => (
            <Link key={game.id} to={`/games/${game.id}`}>
              <NeonCard
                  variant="games"
                  className="overflow-hidden h-full"
                >
                  <div className="relative">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-neon-games/20 backdrop-blur-sm flex items-center justify-center border-2 border-neon-games">
                      <Play className="text-neon-games ml-1" size={28} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-games transition-colors">
                    {game.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-4">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-neon-games/10 text-neon-games rounded-full border border-neon-games/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* SOON overlay to hide AI-made samples */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full bg-black/20 backdrop-blur-sm shimmer-bg flex items-center justify-center">
                      <span style={{ animationDelay: `${index * 80}ms` }} className="text-6xl md:text-7xl font-black !text-green-500 opacity-95 pop-in">SOON</span>
                    </div>
                  </div>
                </div>
              </div>
              </NeonCard>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="neonGames" size="lg">
            <ExternalLink size={18} />
            View on Instagram
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
