import { useParams, Link } from "react-router-dom";
import { getGameById, games } from "@/data/projects";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/lazy-image";
import { ArrowLeft, Play, ExternalLink, Gamepad2, Calendar, Monitor } from "lucide-react";
import { NeonCard } from "@/components/NeonCard";

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id || "");

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Game Not Found</h1>
          <Link to="/#games">
            <Button variant="neonGames">
              <ArrowLeft size={18} />
              Back to <span className="!text-green-500">Games</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherGames = games.filter(g => g.id !== game.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <LazyImage
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        {/* Back Button */}
        <Link to="/#games" className="absolute top-6 left-6 z-10">
          <Button variant="ghost" className="backdrop-blur-sm bg-background/20 hover:bg-background/40">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-neon-games/20 text-neon-games rounded-full border border-neon-games/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-neon-games neon-text-games">
              {game.title}
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              {game.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">About the Game</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {game.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6">Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-neon-games/5 border border-neon-games/20"
                  >
                    <Gamepad2 className="text-neon-games mt-1 flex-shrink-0" size={18} />
                    <span className="font-body text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Trailer Placeholder */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6">Watch Trailer</h2>
              <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-neon-games/30">
                <LazyImage
                  src={game.image}
                  alt="Trailer thumbnail"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-neon-games/20 backdrop-blur-sm flex items-center justify-center border-2 border-neon-games hover:scale-110 transition-transform">
                    <Play className="text-neon-games ml-1" size={36} />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <NeonCard variant="games" className="p-6">
              <h3 className="font-display text-lg font-bold mb-4">Game Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-neon-games" size={18} />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase">Release</p>
                    <p className="font-body font-medium">{game.releaseDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="text-neon-games" size={18} />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase">Platforms</p>
                    <p className="font-body font-medium">{game.platforms.join(", ")}</p>
                  </div>
                </div>
              </div>
            </NeonCard>

            {/* CTA */}
            <div className="space-y-3">
              <Button variant="neonGames" size="lg" className="w-full">
                <ExternalLink size={18} />
                View on Store
              </Button>
              <Button variant="outline" size="lg" className="w-full border-neon-games/30 hover:bg-neon-games/10">
                <ExternalLink size={18} />
                Follow on Instagram
              </Button>
            </div>

            {/* Other Games */}
            <div className="pt-6">
              <h3 className="font-display text-lg font-bold mb-4">More <span className="!text-green-500">Games</span></h3>
              <div className="space-y-4">
                {otherGames.map(g => (
                  <Link key={g.id} to={`/games/${g.id}`}>
                    <div className="flex gap-4 p-3 rounded-lg hover:bg-neon-games/5 transition-colors group">
                      <LazyImage
                        src={g.image}
                        alt={g.title}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-display font-bold group-hover:text-neon-games transition-colors">
                          {g.title}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground">
                          {g.tags.slice(0, 2).join(" • ")}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
