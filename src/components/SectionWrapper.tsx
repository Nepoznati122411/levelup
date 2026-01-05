import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative py-20 md:py-32 px-4 md:px-8",
        className,
        "animate-on-scroll",
        isVisible ? "visible pop-in" : ""
      )}
    >
      {children}
    </section>
  );
};
