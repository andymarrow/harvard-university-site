// /data/campusData.js
// REMOVED: import { Map, ... } from "lucide-react";

export const campusHero = {
  title: "A Campus Like No Other",
  subtitle: "From the historic Yard to the innovation of Allston, explore a landscape where history meets the future.",
  video: "/videos/harvard-hero.mp4",
  stats: [
    { label: "Acres", value: "5,000+" },
    { label: "Libraries", value: "70+" },
    { label: "Museums", value: "15" },
    { label: "Residential Houses", value: "12" },
  ]
};

export const campusSections = [
  {
    id: "visit",
    title: "Visit Harvard",
    desc: "Tours, maps, and information for prospective students and tourists.",
    image: "https://plus.unsplash.com/premium_photo-1679916743693-03ea85e16b5c?w=500&auto=format&fit=crop",
    link: "/campus/visit",
    icon: "Map", // <--- CHANGED TO STRING
    color: "bg-orange-500"
  },
  {
    id: "museums",
    title: "Museums & Arts",
    desc: "Home to world-class collections, from ancient artifacts to contemporary art.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop",
    link: "/campus/museums",
    icon: "Landmark", // <--- CHANGED TO STRING
    color: "bg-blue-600"
  },
  {
    id: "athletics",
    title: "Athletics & Recreation",
    desc: "Cheer on the Crimson or stay active in our state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=2070&auto=format&fit=crop",
    link: "/campus/athletics",
    icon: "Trophy", // <--- CHANGED TO STRING
    color: "bg-harvard-crimson"
  },
  {
    id: "arboretum",
    title: "Arnold Arboretum",
    desc: "A 281-acre living museum of trees exploring the science of nature.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop",
    link: "/campus/arboretum",
    icon: "Trees", // <--- CHANGED TO STRING
    color: "bg-green-600"
  }
];

export const eventsPreview = [
  {
    date: "OCT 24",
    title: "Harvard Art Museums at Night",
    location: "32 Quincy Street",
    time: "5:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "OCT 26",
    title: "Crimson Football vs. Princeton",
    location: "Harvard Stadium",
    time: "1:00 PM",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop"
  },
  {
    date: "OCT 28",
    title: "Science & Democracy Lecture",
    location: "Kennedy School",
    time: "6:30 PM",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
  }
];