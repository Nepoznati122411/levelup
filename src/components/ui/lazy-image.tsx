import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt, className = "", ...rest }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-all duration-500 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105 blur-sm"}`}
      {...rest}
    />
  );
};

export default LazyImage;
