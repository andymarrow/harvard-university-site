// /data/arboretumData.js
import { TreeDeciduous, Wind, Sun, CloudSnow, Map, Clock, Info } from "lucide-react";

export const arbHero = {
  title: "A Living Museum",
  subtitle: "281 acres of landscape designed by Frederick Law Olmsted. A sanctuary for science, nature, and the soul.",
  image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop" // Beautiful tree path
};

export const arbStats = [
  { label: "Living Plants", value: "16,000+" },
  { label: "Acres", value: "281" },
  { label: "Species", value: "2,100+" },
  { label: "Established", value: "1872" },
];

export const seasonalCycle = [
  {
    id: "spring",
    label: "Spring",
    icon: "TreeDeciduous",
    title: "Lilac Sunday",
    desc: "The Arboretum is famous for its lilacs. In May, the collection explodes into color and scent, drawing thousands of visitors.",
    image: "https://plus.unsplash.com/premium_photo-1673799490772-2ea0b711e43b?w=500&auto=format&fit=crop" // Spring flowers
  },
  {
    id: "summer",
    label: "Summer",
    icon: "Sun",
    title: "Canopy Walks",
    desc: "Deep greens and cooling shade. Explore the Linden collection and the towering Hemlock Hill.",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2074&auto=format&fit=crop" // Green forest
  },
  {
    id: "autumn",
    label: "Autumn",
    icon: "Wind",
    title: "Foliage Festival",
    desc: "New England's legendary fall colors come alive. The maples and hickories turn the landscape into a painting.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&auto=format&fit=crop" // Fall leaves
  },
  {
    id: "winter",
    label: "Winter",
    icon: "CloudSnow",
    title: "Winter Solitude",
    desc: "A quiet beauty. The conifers stand out against the snow, and the structure of the deciduous trees is revealed.",
    image: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop" // Winter snow
  }
];

export const collections = [
  {
    title: "The Bonsai Collection",
    desc: "Dwarf potted plants, some over 200 years old, cultivated with care.",
    image: "https://images.unsplash.com/photo-1667305202885-847a0bfa9d7f?w=500&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Hemlock Hill",
    desc: "A dramatic rise of puddingstone and old-growth forest.",
    image: "https://images.unsplash.com/photo-1696536383312-e6c3bff30374?w=500&auto=format&fit=crop",
    size: "standard"
  },
  {
    title: "Explorers Garden",
    desc: "Rare plants collected from expeditions across Asia.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2064&auto=format&fit=crop",
    size: "standard"
  }
];

export const visitorInfo = [
  {
    title: "Open Daily",
    desc: "Sunrise to Sunset. Free admission for everyone, every day.",
    icon: "Clock"
  },
  {
    title: "Getting Here",
    desc: "Located in Jamaica Plain. Take the Orange Line to Forest Hills.",
    icon: "Map"
  },
  {
    title: "Visitor Center",
    desc: "Maps, restrooms, and expert advice at the Hunnewell Building.",
    icon: "Info"
  }
];