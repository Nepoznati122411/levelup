import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import digital1 from "@/assets/digital-1.jpg";
import digital2 from "@/assets/digital-2.jpg";
import labs1 from "@/assets/labs-1.jpg";
import labs2 from "@/assets/labs-2.jpg";
import { Cpu, Sparkles, LucideIcon } from "lucide-react";

export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  platforms: string[];
  releaseDate: string;
  trailer?: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  features: string[];
  technologies: string[];
  client?: string;
  year: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  status: string;
  icon: LucideIcon;
  technologies: string[];
  goals: string[];
  updates: { date: string; content: string }[];
}

export const games: Game[] = [
  {
    id: "stellar-assault",
    title: "Stellar Assault",
    description: "Epic space shooter with intense action and stunning visuals",
    longDescription: "Stellar Assault is an adrenaline-pumping space combat experience that puts you in the cockpit of advanced starfighters. Battle through waves of alien invaders, upgrade your arsenal, and become the ultimate defender of the galaxy. Features include dynamic difficulty scaling, co-op multiplayer, and a rich storyline spanning 50+ missions.",
    image: game1,
    tags: ["Action", "Shooter", "Multiplayer"],
    features: [
      "50+ story missions with branching narratives",
      "Online co-op for up to 4 players",
      "15 unique starfighters to unlock and customize",
      "Dynamic soundtrack that adapts to gameplay",
      "Weekly community challenges and leaderboards"
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2024",
  },
  {
    id: "mystic-realms",
    title: "Mystic Realms",
    description: "Explore enchanted forests and battle mythical creatures",
    longDescription: "Mystic Realms invites you to a breathtaking fantasy world where magic flows through every leaf and ancient creatures guard forgotten treasures. Create your hero, master elemental magic, and forge alliances with mythical beings. Your choices shape the fate of the realm in this expansive open-world RPG.",
    image: game2,
    tags: ["RPG", "Adventure", "Fantasy"],
    features: [
      "Open world spanning 100+ square kilometers",
      "Deep character customization with 8 classes",
      "Dynamic weather and day/night cycle",
      "Crafting system with 500+ recipes",
      "Companion system with relationship building"
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    releaseDate: "2023",
  },
  {
    id: "neon-rush",
    title: "Neon Rush",
    description: "High-speed racing through futuristic cityscapes",
    longDescription: "Neon Rush is a high-octane racing experience set in a vibrant cyberpunk future. Tear through neon-lit streets, evade corporate security, and prove yourself as the fastest driver in the underground circuit. Features anti-gravity vehicles, destructible environments, and a pulsing electronic soundtrack.",
    image: game3,
    tags: ["Racing", "Arcade", "Cyberpunk"],
    features: [
      "30+ tracks across 5 mega-cities",
      "Anti-gravity racing mechanics",
      "Vehicle customization with performance upgrades",
      "Story mode with rival progression",
      "Split-screen and online multiplayer"
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2024",
  },
];

export const digitalProducts: DigitalProduct[] = [
  {
    id: "flowstate-app",
    title: "FlowState App",
    description: "Productivity app that adapts to your workflow. AI-powered focus sessions and task management.",
    longDescription: "FlowState is a revolutionary productivity platform that learns your work patterns and optimizes your schedule for peak performance. Using advanced AI, it identifies your most productive hours, minimizes distractions, and creates personalized focus sessions. Integrated with all major calendar and project management tools.",
    image: digital1,
    category: "Mobile App",
    features: [
      "AI-powered schedule optimization",
      "Smart notification management",
      "Focus mode with ambient soundscapes",
      "Progress analytics and insights",
      "Cross-platform sync"
    ],
    technologies: ["React Native", "TensorFlow", "Node.js", "PostgreSQL"],
    client: "Internal Product",
    year: "2024",
  },
  {
    id: "nexgen-portal",
    title: "NexGen Portal",
    description: "Enterprise dashboard with real-time analytics and intuitive data visualization.",
    longDescription: "NexGen Portal is a comprehensive enterprise analytics platform designed for data-driven decision making. It aggregates data from multiple sources, presents insights through stunning visualizations, and enables teams to collaborate on reports. Built for scale, it handles millions of data points with sub-second response times.",
    image: digital2,
    category: "Web Platform",
    features: [
      "Real-time data visualization",
      "Custom dashboard builder",
      "Automated report generation",
      "Role-based access control",
      "API integrations with 50+ services"
    ],
    technologies: ["React", "D3.js", "GraphQL", "AWS"],
    client: "Fortune 500 Client",
    year: "2023",
  },
];

export const labExperiments: LabExperiment[] = [
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    description: "AI-powered generative art that responds to music and emotions in real-time.",
    longDescription: "Neural Canvas is an experimental art installation that creates evolving visual experiences based on audio input and emotional analysis. Using deep learning models trained on thousands of artworks, it generates unique abstract compositions that dance with music and respond to viewer sentiment captured through optional biometric sensors.",
    image: labs1,
    status: "Prototype",
    icon: Cpu,
    technologies: ["Python", "TensorFlow", "WebGL", "Three.js"],
    goals: [
      "Create immersive audiovisual experiences",
      "Explore the intersection of AI and art",
      "Develop real-time emotion recognition",
      "Build accessible creative tools"
    ],
    updates: [
      { date: "2024-01-15", content: "Achieved 60fps rendering for complex scenes" },
      { date: "2024-02-20", content: "Integrated Spotify API for music analysis" },
      { date: "2024-03-10", content: "Beta testing with art galleries" },
    ],
  },
  {
    id: "holotype",
    title: "HoloType",
    description: "Experimental holographic interface concepts for next-gen computing.",
    longDescription: "HoloType explores the future of human-computer interaction through holographic displays and gesture recognition. Our research focuses on creating intuitive 3D interfaces that feel natural and reduce the cognitive load of traditional 2D screens. Currently in the concept phase with working prototypes for specific use cases.",
    image: labs2,
    status: "Concept",
    icon: Sparkles,
    technologies: ["Unity", "Leap Motion", "Custom Hardware", "C++"],
    goals: [
      "Develop gesture-based interaction paradigms",
      "Create affordable holographic display technology",
      "Design intuitive 3D UI/UX patterns",
      "Prototype productivity applications"
    ],
    updates: [
      { date: "2024-01-05", content: "Completed initial gesture recognition prototype" },
      { date: "2024-02-15", content: "Published research paper on 3D UI patterns" },
      { date: "2024-03-25", content: "Partnered with hardware manufacturers" },
    ],
  },
];

export const getGameById = (id: string) => games.find(g => g.id === id);
export const getDigitalProductById = (id: string) => digitalProducts.find(d => d.id === id);
export const getLabExperimentById = (id: string) => labExperiments.find(l => l.id === id);
