import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#games", label: "Games" },
  { href: "#digital", label: "Digital" },
  { href: "#labs", label: "Labs" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl md:text-2xl font-bold tracking-wider text-foreground hover:text-neon-digital transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          LEVEL<span className="text-neon-digital">UP</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label === "Games" ? (
                <span className="!text-green-500">{link.label}</span>
              ) : link.label === "Labs" ? (
                <span className="!text-purple-500">{link.label}</span>
              ) : link.label === "Digital" ? (
                <span className="!text-red-500">{link.label}</span>
              ) : (
                link.label
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-digital transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-body text-lg uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              {link.label === "Games" ? (
                <span className="!text-green-500">{link.label}</span>
              ) : link.label === "Labs" ? (
                <span className="!text-purple-500">{link.label}</span>
              ) : link.label === "Digital" ? (
                <span className="!text-red-500">{link.label}</span>
              ) : (
                link.label
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
