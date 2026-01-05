import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold font-body uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero button - prominent CTA
        hero: "relative bg-transparent border-2 border-neon-digital text-foreground hover:bg-neon-digital/10 hover:shadow-[0_0_30px_hsl(var(--neon-digital)/0.5)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-neon-digital/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 overflow-hidden",
        // Neon variants for each brand
        neonGames: "relative bg-transparent border-2 border-neon-games text-foreground hover:bg-neon-games/10 hover:shadow-[0_0_30px_hsl(var(--neon-games)/0.5)] hover:text-neon-games transition-all",
        neonDigital: "relative bg-transparent border-2 border-neon-digital text-foreground hover:bg-neon-digital/10 hover:shadow-[0_0_30px_hsl(var(--neon-digital)/0.5)] hover:text-neon-digital transition-all",
        neonLabs: "relative bg-transparent border-2 border-neon-labs text-foreground hover:bg-neon-labs/10 hover:shadow-[0_0_30px_hsl(var(--neon-labs)/0.5)] hover:text-neon-labs transition-all",
        // Solid neon variants
        solidGames: "bg-neon-games text-background hover:bg-neon-games/90 hover:shadow-[0_0_30px_hsl(var(--neon-games)/0.5)]",
        solidDigital: "bg-neon-digital text-background hover:bg-neon-digital/90 hover:shadow-[0_0_30px_hsl(var(--neon-digital)/0.5)]",
        solidLabs: "bg-neon-labs text-background hover:bg-neon-labs/90 hover:shadow-[0_0_30px_hsl(var(--neon-labs)/0.5)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onMouseDown, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const handleMouseDown: React.MouseEventHandler = (e) => {
      // ripple only for hero variant
      if (variant === "hero") {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const size = Math.max(rect.width, rect.height) * 0.6;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      }

      onMouseDown && onMouseDown(e);
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onMouseDown={handleMouseDown}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
