import { Gamepad2, Smartphone, FlaskConical } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-card/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-wider">
              LEVEL<span className="text-neon-digital">UP</span>
            </span>
            <span className="font-display text-lg text-muted-foreground">Studio</span>
          </div>

          {/* Brand Icons */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-neon-games">
              <Gamepad2 size={20} />
              <span className="font-body text-sm !text-green-500">Games</span>
            </div>
            <div className="flex items-center gap-2 text-neon-digital">
              <Smartphone size={20} />
              <span className="font-body text-sm">Digital</span>
            </div>
            <div className="flex items-center gap-2 text-neon-labs">
              <FlaskConical size={20} />
              <span className="font-body text-sm !text-purple-500">Labs</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-body text-base text-foreground font-medium">
              © {new Date().getFullYear()} LEVELUP Studio. All rights reserved.
            </p>
            <p className="font-body text-sm md:text-base text-foreground font-semibold mt-1">
              Build. Play. Level Up.
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-digital/30 to-transparent" />

        {/* Bottom credits */}
        <div className="mt-6 text-center">
          <p className="font-body text-xs text-muted-foreground/50">
            Crafted with passion in the digital realm
          </p>
        </div>
      </div>
    </footer>
  );
};
