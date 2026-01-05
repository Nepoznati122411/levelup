import { SectionWrapper } from "@/components/SectionWrapper";
import { Gamepad2, Smartphone, FlaskConical, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Games",
    description: "Immersive gaming experiences that push boundaries",
    color: "text-neon-games",
  },
  {
    icon: Smartphone,
    title: "Digital",
    description: "Cutting-edge apps and web experiences",
    color: "text-neon-digital",
  },
  {
    icon: FlaskConical,
    title: "Labs",
    description: "Experimental tech and AI innovations",
    color: "text-neon-labs",
  },
];

const stats = [
  { icon: Zap, value: "50+", label: "Projects Shipped" },
  { icon: Users, value: "1M+", label: "Users Reached" },
  { icon: Globe, value: "20+", label: "Countries" },
];

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-neon-digital neon-text-digital">LEVELUP</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating next-level experiences across <span className="!text-green-500">games</span>, <span className="!text-red-500">digital</span> products, and experimental <span className="!text-purple-500">Labs</span>. 
            We believe in pushing the boundaries of what's possible in the <span className="!text-red-500">digital</span> realm.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border/50 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-games/5 via-neon-digital/5 to-neon-labs/5" />
          <div className="relative">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="font-body text-lg md:text-xl text-center text-muted-foreground italic">
              "To be the creative force that transforms ideas into <span className="!text-red-500">digital</span> experiences 
              that inspire, entertain, and push humanity forward."
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-secondary/50 mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {feature.title === "Digital" ? (
                  <span className="!text-red-500">{feature.title}</span>
                ) : feature.title === "Games" ? (
                  <span className="!text-green-500">{feature.title}</span>
                ) : feature.title === "Labs" ? (
                  <span className="!text-purple-500">{feature.title}</span>
                ) : (
                  feature.title
                )}
              </h3>
              <p className="font-body text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 text-neon-digital" size={24} />
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
