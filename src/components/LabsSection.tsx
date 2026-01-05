import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";
import { NeonCard } from "@/components/NeonCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";
import { labExperiments } from "@/data/projects";
import LazyImage from "@/components/ui/lazy-image";

export const LabsSection = () => {
  return (
    <SectionWrapper id="labs">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text-labs text-neon-labs !text-purple-500">Labs</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground italic">
            Where ideas level up.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {labExperiments.map((experiment, index) => (
            <Link key={experiment.id} to={`/labs/${experiment.id}`}>
              <div className="pop-in" style={{ animationDelay: `${index * 80}ms` }}>
              <NeonCard
                variant="labs"
                className="overflow-hidden h-full"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <LazyImage
                    src={experiment.image}
                    alt={experiment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-neon-labs/20 text-neon-labs rounded-full border border-neon-labs/50 backdrop-blur-sm flex items-center gap-1">
                      <Zap size={12} />
                      {experiment.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-labs/20 backdrop-blur-sm flex items-center justify-center border border-neon-labs/30 group-hover:scale-110 transition-transform">
                      <experiment.icon className="text-neon-labs" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-neon-labs transition-colors">
                    {experiment.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {experiment.description}
                  </p>
                </div>
                {/* SOON overlay to hide AI-made samples */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full bg-black/20 backdrop-blur-sm shimmer-bg flex items-center justify-center">
                    <span style={{ animationDelay: `${index * 80}ms` }} className="text-6xl md:text-7xl font-black !text-purple-500 opacity-95 pop-in">SOON</span>
                  </div>
                </div>
              </NeonCard>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="neonLabs" size="lg">
            <ExternalLink size={18} />
            Follow Our Experiments
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
