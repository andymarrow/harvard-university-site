// /data/visitData.js
// REMOVED imports

export const visitHero = {
  // ... (same as before)
  title: "Welcome to Cambridge",
  subtitle: "Whether you're a prospective student, a tourist, or a neighbor, our gates are open. Plan your journey to the historic Yard and beyond.",
  image: "https://images.unsplash.com/20/cambridge.JPG?w=500&auto=format&fit=crop"
};

export const tourOptions = [
  {
    id: "walking",
    title: "Guided Walking Tour",
    desc: "Led by current students, this 60-minute tour covers the history, general information, and a personal view of life at Harvard.",
    features: ["Free of charge", "Registration required", "Daily at 10am & 2pm"],
    icon: "Users", // <--- String
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    action: "Book a Spot"
  },
  {
    id: "virtual",
    title: "Virtual Experience",
    desc: "Can't make it to Cambridge? Explore our 360° panoramic tours of residential houses, classrooms, and laboratories from home.",
    features: ["Available 24/7", "VR Headset Compatible", "Self-guided"],
    icon: "Smartphone", // <--- String
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    action: "Start Tour"
  }
];

export const logistics = [
  {
    title: "Public Transport",
    desc: "Take the Red Line to 'Harvard Square'. We are just steps away from the station exit.",
    icon: "Bus", // <--- String
    link: "MBTA Schedule"
  },
  {
    title: "Parking",
    desc: "Limited street parking. We recommend the Smith Campus Center Garage for visitors.",
    icon: "Car", // <--- String
    link: "View Rates"
  },
  {
    title: "Accessibility",
    desc: "Our campus is committed to being accessible to all. View our accessibility map.",
    icon: "Accessibility", // <--- String
    link: "Access Map"
  }
];

export const mapHotspots = [
  // ... (same as before)
  { id: 1, label: "John Harvard Statue", x: "40%", y: "50%" },
  { id: 2, label: "Widener Library", x: "60%", y: "40%" },
  { id: 3, label: "Science Center", x: "30%", y: "30%" },
  { id: 4, label: "Harvard Square", x: "50%", y: "80%" },
];