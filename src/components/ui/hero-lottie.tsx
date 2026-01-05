import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface HeroLottieProps {
  className?: string;
}

const HeroLottie: React.FC<HeroLottieProps> = ({ className = "w-6 h-6" }) => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    // try to load a local animation in public/animations/hero.json
    fetch("/animations/hero.json")
      .then((r) => {
        if (!r.ok) throw new Error("no animation");
        return r.json();
      })
      .then((json) => setData(json))
      .catch(() => setData(null));
  }, []);

  if (!data) {
    // fallback: simple SVG pulse
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="white" strokeOpacity="0.9" strokeWidth="1.5">
          <animate attributeName="r" values="6;8;6" dur="1.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.6s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  return <Lottie animationData={data} loop={true} className={className} />;
};

export default HeroLottie;
