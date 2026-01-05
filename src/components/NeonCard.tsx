import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  variant?: "games" | "digital" | "labs";
  className?: string;
  onClick?: () => void;
}

export const NeonCard = ({ children, variant = "digital", className, onClick }: NeonCardProps) => {
  const variantClasses = {
    games: "neon-card neon-card-games",
    digital: "neon-card neon-card-digital",
    labs: "neon-card neon-card-labs",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        variantClasses[variant],
        "group cursor-pointer transform hover:scale-[1.02] transition-all duration-400 card-tilt",
        className
      )}
    >
      {children}
    </div>
  );
};
