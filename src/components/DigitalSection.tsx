import { Link } from "react-router-dom";
import { SectionWrapper } from "@/components/SectionWrapper";
import { NeonCard } from "@/components/NeonCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { digitalProducts } from "@/data/projects";
import LazyImage from "@/components/ui/lazy-image";

export const DigitalSection = () => {
  return (
    <SectionWrapper id="digital" className="bg-secondary/20 digital-red">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text-digital text-neon-digital !text-red-500">Digital</span> Products
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground italic">
            <span className="!text-red-500">Digital</span>, leveled up.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {digitalProducts.map((product, index) => (
            <Link key={product.id} to={`/digital/${product.id}`}>
                  <div className="pop-in" style={{ animationDelay: `${index * 80}ms` }}>
                  <NeonCard
                variant="digital"
                className="overflow-hidden flex flex-col md:flex-row h-full"
              >
                  <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                  <span className="font-body text-xs uppercase tracking-wider text-neon-digital mb-2">
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-neon-digital transition-colors">
                    {product.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-6">
                    {product.description}
                  </p>
                  <span className="w-fit flex items-center gap-2 font-body text-sm text-neon-digital group-hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRight size={16} />
                  </span>
                </div>
                {/* SOON overlay to hide AI-made samples */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-full bg-black/20 backdrop-blur-sm shimmer-bg flex items-center justify-center">
                        <span style={{ animationDelay: `${index * 80}ms` }} className="text-6xl md:text-7xl font-black !text-red-500 opacity-95 pop-in">SOON</span>
                  </div>
                </div>
                  </NeonCard>
                  </div>
                </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="neonDigital" size="lg">
            <ExternalLink size={18} />
            See More
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
