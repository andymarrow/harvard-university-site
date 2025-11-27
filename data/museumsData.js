// /data/museumsData.js
import { Clock, MapPin, Ticket } from "lucide-react";

export const museumHero = {
  title: "Where Art Meets Inquiry",
  subtitle: "Home to one of the largest art collections in the country, Harvard Museums invite you to explore 50 centuries of human creativity.",
  image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop" // Museum interior
};

export const featuredCollections = [
  {
    id: 1,
    title: "Ancient Mediterranean",
    desc: "Works from Greece, Rome, Egypt, and the Near East.",
    // Updated: Greek/Roman statue detail
    image: "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?q=80&w=2070&auto=format&fit=crop", 
    size: "large" 
  },
  {
    id: 2,
    title: "European Painting",
    desc: "Masterworks from the Middle Ages to the present.",
    // Kept (or updated to a safe classic portrait style if needed)
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=2067&auto=format&fit=crop", 
    size: "tall" 
  },
  {
    id: 3,
    title: "Asian Art",
    desc: "Jades, ceramics, and bronzes from China, Korea, and Japan.",
    // Updated: Chinese architecture/sculpture detail
    image: "https://plus.unsplash.com/premium_photo-1681398824459-60106cc26475?w=500&auto=format&fit=crop",
    size: "standard"
  },
  {
    id: 4,
    title: "Modern & Contemporary",
    desc: "Challenging conventions and exploring new media.",
    // Updated: Abstract modern art gallery shot
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2018&auto=format&fit=crop",
    size: "standard"
  }
];

export const museumsList = [
  {
    name: "Harvard Art Museums",
    desc: "Comprising the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums under one spectacular glass roof.",
    hours: "Open Daily: 10am – 5pm",
    location: "32 Quincy Street",
    price: "Free Admission",
    // Image: Bright, modern art gallery interior
    image: "https://images.unsplash.com/photo-1742497360018-ee4b76869689?w=500&auto=format&fit=crop"
  },
  {
    name: "Peabody Museum",
    desc: "One of the oldest and largest museums dedicated to anthropology and ethnology.",
    hours: "Open Daily: 9am – 5pm",
    location: "11 Divinity Avenue",
    price: "$15 Adults / Free for Holders",
    // Image: Ancient artifacts/statues (Anthropology vibe)
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop"
  },
  {
    name: "Collection of Historical Instruments",
    desc: "Preserving the history of science and technology through instruments dating back to 1400.",
    hours: "Sun–Fri: 11am – 4pm",
    location: "1 Oxford Street",
    price: "Free Admission",
    // Image: Vintage scientific equipment/microscope
    image: "https://plus.unsplash.com/premium_photo-1664301789946-9d2c3583cfb5?w=500&auto=format&fit=crop"
  }
];

export const currentExhibitions = [
  {
    title: "Future of Color",
    date: "Through Dec 31",
    tag: "Contemporary",
    image: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Prints of the Edo Period",
    date: "Through Nov 15",
    tag: "Historical",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop"
  }
];