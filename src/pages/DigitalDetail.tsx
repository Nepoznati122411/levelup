import { useParams, Link } from "react-router-dom";
import { getDigitalProductById, digitalProducts } from "@/data/projects";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/lazy-image";
import { ArrowLeft, ExternalLink, Code, Calendar, Building, CheckCircle } from "lucide-react";
import { NeonCard } from "@/components/NeonCard";

const DigitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getDigitalProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/#digital">
            <Button variant="neonDigital">
              <ArrowLeft size={18} />
              Back to <span className="!text-red-500">Digital</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherProducts = digitalProducts.filter(p => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <LazyImage
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        {/* Back Button */}
        <Link to="/#digital" className="absolute top-6 left-6 z-10">
          <Button variant="ghost" className="backdrop-blur-sm bg-background/20 hover:bg-background/40">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-body uppercase tracking-wider bg-neon-digital/20 text-neon-digital rounded-full border border-neon-digital/30 mb-4">
              {product.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-neon-digital neon-text-digital">
              {product.title}
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              {product.description}
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
              <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-neon-digital/5 border border-neon-digital/20"
                  >
                    <CheckCircle className="text-neon-digital mt-0.5 flex-shrink-0" size={18} />
                    <span className="font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6">Preview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-card rounded-xl overflow-hidden border border-neon-digital/30">
                  <LazyImage
                    src={product.image}
                    alt="Screenshot 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video bg-card rounded-xl overflow-hidden border border-neon-digital/30">
                  <LazyImage
                    src={product.image}
                    alt="Screenshot 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <NeonCard variant="digital" className="p-6">
              <h3 className="font-display text-lg font-bold mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-neon-digital" size={18} />
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase">Year</p>
                    <p className="font-body font-medium">{product.year}</p>
                  </div>
                </div>
                {product.client && (
                  <div className="flex items-center gap-3">
                    <Building className="text-neon-digital" size={18} />
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase">Client</p>
                      <p className="font-body font-medium">{product.client}</p>
                    </div>
                  </div>
                )}
              </div>
            </NeonCard>

            {/* Technologies */}
            <NeonCard variant="digital" className="p-6">
              <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Code size={18} className="text-neon-digital" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-body bg-neon-digital/10 text-neon-digital rounded-lg border border-neon-digital/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </NeonCard>

            {/* CTA */}
            <div className="space-y-3">
              <Button variant="neonDigital" size="lg" className="w-full">
                <ExternalLink size={18} />
                View Live Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full border-neon-digital/30 hover:bg-neon-digital/10">
                <ExternalLink size={18} />
                Case Study
              </Button>
            </div>

            {/* Other Products */}
            {otherProducts.length > 0 && (
              <div className="pt-6">
                <h3 className="font-display text-lg font-bold mb-4">More Projects</h3>
                <div className="space-y-4">
                  {otherProducts.map(p => (
                    <Link key={p.id} to={`/digital/${p.id}`}>
                      <div className="flex gap-4 p-3 rounded-lg hover:bg-neon-digital/5 transition-colors group">
                        <LazyImage
                          src={p.image}
                          alt={p.title}
                          className="w-20 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-display font-bold group-hover:text-neon-digital transition-colors">
                            {p.title}
                          </h4>
                          <p className="font-body text-xs text-muted-foreground">
                            {p.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDetail;
