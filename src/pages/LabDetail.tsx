import { useParams, Link } from "react-router-dom";
import { getLabExperimentById, labExperiments } from "@/data/projects";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/ui/lazy-image";
import { ArrowLeft, ExternalLink, Code, Zap, Target, Clock } from "lucide-react";
import { NeonCard } from "@/components/NeonCard";

const LabDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experiment = getLabExperimentById(id || "");

  if (!experiment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Experiment Not Found</h1>
          <Link to="/#labs">
            <Button variant="neonLabs">
              <ArrowLeft size={18} />
              Back to <span className="!text-purple-500">Labs</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = experiment.icon;
  const otherExperiments = labExperiments.filter(e => e.id !== experiment.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <LazyImage
          src={experiment.image}
          alt={experiment.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        {/* Back Button */}
        <Link to="/#labs" className="absolute top-6 left-6 z-10">
          <Button variant="ghost" className="backdrop-blur-sm bg-background/20 hover:bg-background/40">
            <ArrowLeft size={18} />
            Back
          </Button>
        </Link>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-labs/20 backdrop-blur-sm flex items-center justify-center border border-neon-labs/30">
                <IconComponent className="text-neon-labs" size={24} />
              </div>
              <span className="px-3 py-1 text-xs font-body uppercase tracking-wider bg-neon-labs/20 text-neon-labs rounded-full border border-neon-labs/50 flex items-center gap-1">
                <Zap size={12} />
                {experiment.status}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-neon-labs neon-text-labs">
              {experiment.title}
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              {experiment.description}
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
              <h2 className="font-display text-2xl font-bold mb-4">About This Experiment</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {experiment.longDescription}
              </p>
            </section>

            {/* Goals */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="text-neon-labs" size={24} />
                Research Goals
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {experiment.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-neon-labs/5 border border-neon-labs/20"
                  >
                    <span className="font-body text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Updates Timeline */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="text-neon-labs" size={24} />
                Development Updates
              </h2>
              <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-neon-labs/30">
                {experiment.updates.map((update, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-neon-labs/20 border-2 border-neon-labs flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neon-labs" />
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-neon-labs/20">
                      <p className="font-body text-xs text-neon-labs uppercase tracking-wider mb-2">
                        {update.date}
                      </p>
                      <p className="font-body text-muted-foreground">
                        {update.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Demo Placeholder */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-6">Interactive Demo</h2>
              <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-neon-labs/30">
                <LazyImage
                  src={experiment.image}
                  alt="Demo preview"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <IconComponent className="text-neon-labs mb-4 animate-pulse" size={48} />
                  <p className="font-display text-lg font-bold text-neon-labs">Demo Coming Soon</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Interactive prototype in development
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <NeonCard variant="labs" className="p-6">
              <h3 className="font-display text-lg font-bold mb-4">Experiment Status</h3>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-neon-labs/10">
                <Zap className="text-neon-labs" size={24} />
                <div>
                  <p className="font-display font-bold text-neon-labs">{experiment.status}</p>
                  <p className="font-body text-xs text-muted-foreground">
                    Active development
                  </p>
                </div>
              </div>
            </NeonCard>

            {/* Technologies */}
            <NeonCard variant="labs" className="p-6">
              <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Code size={18} className="text-neon-labs" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {experiment.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-body bg-neon-labs/10 text-neon-labs rounded-lg border border-neon-labs/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </NeonCard>

            {/* CTA */}
            <div className="space-y-3">
              <Button variant="neonLabs" size="lg" className="w-full">
                <ExternalLink size={18} />
                Follow Updates
              </Button>
              <Button variant="outline" size="lg" className="w-full border-neon-labs/30 hover:bg-neon-labs/10">
                <ExternalLink size={18} />
                Join Beta
              </Button>
            </div>

            {/* Other Experiments */}
            {otherExperiments.length > 0 && (
              <div className="pt-6">
                <h3 className="font-display text-lg font-bold mb-4">More Experiments</h3>
                <div className="space-y-4">
                  {otherExperiments.map(e => (
                    <Link key={e.id} to={`/labs/${e.id}`}>
                      <div className="flex gap-4 p-3 rounded-lg hover:bg-neon-labs/5 transition-colors group">
                        <LazyImage
                          src={e.image}
                          alt={e.title}
                          className="w-20 h-14 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-display font-bold group-hover:text-neon-labs transition-colors">
                            {e.title}
                          </h4>
                          <p className="font-body text-xs text-muted-foreground">
                            {e.status}
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

export default LabDetail;
