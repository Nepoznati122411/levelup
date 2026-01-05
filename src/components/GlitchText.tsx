import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const GlitchText = ({ text, className, as: Tag = "span" }: GlitchTextProps) => {
  return (
    <Tag 
      className={cn("glitch relative inline-block", className)} 
      data-text={text}
    >
      {text}
    </Tag>
  );
};
