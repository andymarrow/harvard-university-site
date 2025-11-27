// lib/constants.js

import { FaTachometerAlt, FaUserPlus, FaUsers, FaCalendarAlt, FaChartBar, FaFlag, FaClipboardCheck } from 'react-icons/fa';

export const systemModules = [
  {
    id: 'dashboard',
    title: 'Dashboard Visualization',
    shortTitle: 'Dashboard',
    icon: FaTachometerAlt,
    description: 'Your command center. The dashboard provides a high-level, at-a-glance overview of key information and activities relevant to your role, with quick links to the most important sections.',
    features: [
      'Customizable widgets for key stats',
      'Visual data through charts and graphs',
      'Upcoming events and news feeds',
      'Quick access to core functions'
    ],
    image: '/images/dashboardsample.jpg' // Suggestion: A sleek image of charts and graphs.
  },
  {
    id: 'user_management',
    title: 'User Management',
    shortTitle: 'Users',
    icon: FaUsers,
    description: 'The foundational module for controlling system access. Define different user roles and permissions to ensure every member has the appropriate level of access, from administrators to general members.',
    features: [
      'Role-based access control (Admin, Leader, Member)',
      'Secure login and authentication',
      'Creation, modification, and deactivation of accounts',
      'Password management and recovery'
    ],
    image: '/images/usermanagmentsample.jpg' // Suggestion: An abstract image of user profiles or network connections.
  },
  {
    id: 'membership_registration',
    title: 'Membership Registration',
    shortTitle: 'Membership',
    icon: FaUserPlus,
    description: 'A seamless and user-friendly interface for new members to join the organization. This module handles the entire registration process, from application to approval and integration.',
    features: [
      'Customizable online registration forms',
      'Application review and approval workflow',
      'Automated welcome emails',
      'Digital membership card generation'
    ],
    image: '/images/membershipsample.jpg' // Suggestion: A welcoming image of a person filling out a form on a laptop.
  },
  {
    id: 'events_achievements',
    title: 'Events & Achievements',
    shortTitle: 'Events',
    icon: FaCalendarAlt,
    description: 'The central hub for all organizational activities. Keep members informed and engaged by managing a comprehensive events calendar and celebrating the milestones and achievements of individuals and groups.',
    features: [
      'Events calendar with online registration',
      'RSVP and attendance tracking',
      'Highlight and record member achievements',
      'Automated event reminders'
    ],
    image: '/images/eventsample.webp' // Suggestion: A vibrant picture of a successful event or conference.
  },
  {
    id: 'attendance',
    title: 'Attendance Tracking',
    shortTitle: 'Attendance',
    icon: FaClipboardCheck,
    description: 'Work in conjunction with the Events module to track member participation. This valuable data provides deep insights into member engagement levels and helps identify the most active participants.',
    features: [
        'Mark attendance for meetings and activities',
        'Generate detailed attendance reports',
        'Points-based system to reward active members',
        'Integration with member profiles'
    ],
    image: '/images/attendance.webp' // Suggestion: A clean image of a checklist or a digital check-in process.
  },
  {
    id: 'plan_report',
    title: 'Plan & Report',
    shortTitle: 'Reports',
    icon: FaChartBar,
    description: 'The analytical powerhouse of the system. This module allows leadership to make data-driven decisions by generating insightful reports on membership, engagement, and other key performance indicators.',
    features: [
      'Reports on membership growth and demographics',
      'Tracking of Key Performance Indicators (KPIs)',
      'Tools for planning future campaigns',
      'Exportable data for analysis'
    ],
    image: '/images/planandreport.jpg' // Suggestion: A professional image of analytics dashboards and pie charts.
  },
  {
    id: 'leagues',
    title: 'Leagues',
    shortTitle: 'Leagues',
    icon: FaFlag,
    description: 'Facilitate engagement within specific interest groups inside the larger organization. Create dedicated spaces for groups like "Women Leagues" and "Youth Leagues" to thrive and organize.',
    features: [
      'Creation and management of leagues',
      'Dedicated sections with news and forums',
      'League-specific events and activities',
      'Member-driven community building'
    ],
    image: '/images/gorups.jpg' // Suggestion: A dynamic image of a focused group, like a youth team or women's committee.
  }
];

export const sampleLeadership = [
  {
    id: 'leader-alemayehu-kasa',
    name: 'Alemayehu kasa',
    role: 'Chairperson, Union 1',
    image: '/images/buisnessman5.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    description: "As the Chairperson for Union 1, Alemayehu kasa provides strategic direction and leadership, ensuring the union's goals align with the broader organizational vision. She has been a dedicated member for over 15 years.",
  },
  {
    id: 'leader-asefa-mulatu',
    name: 'Asefa mulatu',
    role: 'Chairperson, Union 2',
    image: '/images/buisnessman2.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    description: "Asefa mulatu leads Union 2 with a focus on member engagement and community outreach. His efforts have been pivotal in driving membership growth and successful local initiatives.",
  },
  {
    id: 'leader-bontu-debebe',
    name: 'Bontu debebe',
    role: 'Deputy Chairperson, Union 1',
    image: '/images/buisnesswoman2.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
      { platform: 'website', url: '#', icon: 'FaLink' },
    ],
    description: "Supporting the Chairperson of Union 1, Emily White focuses on operational excellence and internal coordination. She plays a key role in organizing major events and managing union activities.",
  },
  {
    id: 'leader-tesfa-aschalew',
    name: 'Tesfa aschalew',
    role: 'Head of Finance Sector',
    image: '/images/buisnessman4.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
    ],
    description: "Tesfa aschalew oversees the financial health of the organization. His expertise ensures fiscal responsibility and strategic allocation of resources to support all unions and initiatives.",
  },
  // You can add more leaders here...
  {
    id: 'leader-aster-kebede',
    name: 'Aster kebede',
    role: 'Deputy Chairperson, Union 2',
    image: '/images/buisnesswoman5.jpg', // IMPORTANT: Use new professional headshots
    socialLinks: [
      { platform: 'linkedin', url: '#', icon: 'FaLinkedinIn' },
       { platform: 'twitter', url: '#', icon: 'FaTwitter' },
    ],
    description: "Aster kebede works alongside the leadership of Union 2, championing youth engagement and heading the development of the Youth League's framework and activities.",
  },
];


// Placeholder data for testimonials - 
// lib/constants.js (Assuming this is where your constants file is)

// Placeholder data for testimonials - Adapted for TrainEx E-learning
export const memberQuotes = [
    {
        id: 1,
        name: "Samson Abebe",
        role: "Chairperson, Union 1",
        testimonial: "This new platform has revolutionized how we operate. The ability to generate reports and track attendance in real-time allows us to make smarter, data-driven decisions for our members.",
        photo: "/images/buisnessman5.jpg", 
    },
    {
        id: 2,
        name: "Asfa Hailu",
        role: "Youth League Member",
        testimonial: "It's so much easier to stay engaged now. I can see all the upcoming youth events on the calendar, RSVP instantly, and connect with other members in our league's dedicated forum. It's fantastic!",
        photo: "/images/buisnessman1.jpg", 
    },
    {
        id: 3,
        name: "Aschalew kebede",
        role: "Deputy Chairperson, Union 2",
        testimonial: "As a leader, communication is key. The centralized dashboard and announcements have streamlined how we connect with our 'families' and ensure everyone is informed and on the same page.",
        photo: "/images/buisnessman2.jpg", 
    },
    {
        id: 4,
        name: "Bontu Asmamaw",
        role: "Finance Sector",
        testimonial: "The planning and reporting module is a game-changer. Tracking membership growth and event engagement helps us allocate our budget more effectively to support the initiatives that matter most.",
        photo: "/images/buisnessman3.jpg", 
    },
    {
        id: 5,
        name: "Selam Alemayehu",
        role: "Women's League Lead",
        testimonial: "Organizing our league-specific events used to be a challenge. With this system, I can create an event, manage registrations, and track attendance all in one place. It saves me so much time.",
        photo: "/images/buisnessman4.jpg", 
    },
     {
        id: 6,
        name: "Samrawit samuel",
        role: "General Member",
        testimonial: "The online membership registration was so simple and welcoming. I filled out the form, received my confirmation, and had access to my new digital member card within minutes. A great first impression!",
        photo: "/images/buisnesswoman5.jpg", 
    },
     {
        id: 7,
        name: "samuel kebede",
        role: "General Member, Family 1",
        testimonial: "I love seeing our achievements highlighted on the platform. It creates a real sense of community and pride in what we accomplish together, from small milestones to major successes.",
        photo: "/images/buisnesswoman1.jpg", 
    },
];


export const latestBlogs = [
  {
    id: 1,
    title: "Navigating East African Airspace: A Pilot's Guide for 2025",
    slug: "navigating-east-african-airspace-2025",
    date: "October 24, 2025",
    readTime: "6 min read",
    category: "Regulations",
    tags: ["Aviation Safety", "Permits", "East Africa", "Flight Planning"],
    imageUrl: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1600&auto=format&fit=crop", 
    // Image: Cockpit view / Pilot hands
    excerpt: "Recent regulatory changes in Ethiopia and Kenya have shifted the landscape for private operators. Here is everything you need to know before filing your flight plan...",
    fullContent: `
## The Shifting Sands of East African Aviation

For operators flying into the Horn of Africa, 2025 brings a new set of operational realities. With the rapid expansion of Addis Ababa Bole International Airport and new noise abatement procedures in Nairobi, flight planning requires more precision than ever.

### The New Permit Protocols

As of Q3 2025, the Ethiopian Civil Aviation Authority (ECAA) has digitized its permit application process. While this speeds up approval times for registered operators, ad-hoc charters may face delays if documentation isn't perfectly formatted. At Krimson, our 24/7 Ops Center has direct integration with the new portal, ensuring our clients' landing permits are cleared in record time.

### Critical Airspace Updates

*   **Addis Ababa (HAAB):** New holding patterns have been established for peak hours (0600-0900 UTC). Private jets are prioritized if slots are booked 24 hours in advance.
*   **Nairobi (HKJK):** Expect stricter slot enforcement during the upcoming trade summit season.
*   **En Route Support:** VHF coverage gaps over northern Kenya have been addressed with new relay stations, improving pilot-controller communication.

### Why Local Expertise Matters

"You can't rely solely on charts when flying this region," says Captain Dawit Lemma, CEO of Krimson Aviation. "Local knowledge—knowing which fuel truck is operational or which handling agent has the fastest VIP clearance—is the difference between a seamless arrival and a 2-hour tarmac delay."

We recommend all operators update their nav databases and consult with our flight support team for the latest NOTAMs before departure.
`,
    likes: 342,
    commentsCount: 12,
    comments: [
      { id: 101, author: "Capt. James Sterling", date: "October 25, 2025", content: "Invaluable update. The slot prioritization at HAAB was a game changer for our last trip." },
      { id: 102, author: "Sarah Jenkins (Dispatcher)", date: "October 26, 2025", content: "Thanks for the heads up on the ECAA portal. Will reach out for support." },
    ]
  },
  {
    id: 2,
    title: "The Rise of Ultra-Long-Range Jets in African Business Travel",
    slug: "ultra-long-range-jets-africa",
    date: "October 15, 2025",
    readTime: "5 min read",
    category: "Trends",
    tags: ["Gulfstream", "Bombardier", "Business Travel", "Fleet"],
    imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600&auto=format&fit=crop",
    // Image: Sleek private jet exterior
    excerpt: "Why the Gulfstream G700 and Global 7500 are becoming the aircraft of choice for African executives connecting directly to New York and Beijing...",
    fullContent: `
## Non-Stop: From Lagos to Los Angeles

The definition of "connectivity" in Africa is changing. Gone are the days of mandatory fuel stops in Europe for trans-continental flights. The arrival of ultra-long-range jets like the **Gulfstream G700** and **Bombardier Global 7500** is reshaping how African business leaders connect with the world.

### Speed Meets Efficiency

These aircraft aren't just about range; they are about time. Capable of flying 7,700 nautical miles non-stop, an executive can depart Johannesburg at dinner and arrive in Hong Kong for a morning meeting, well-rested thanks to lower cabin altitudes and circadian lighting systems.

*   **Top Performer:** The Global 7500 has seen a 40% increase in charter requests within the ECOWAS region.
*   **Infrastructure Needs:** These larger jets require specific ground handling capabilities—heavier tow bars, larger hangars, and high-volume fueling.

### Krimson's Readiness

Krimson Aviation has upgraded its ground support equipment (GSE) at key hubs including Addis Ababa and Lomé to fully service these large-cabin aircraft. "If you fly a G700, you expect G700-level service on the ground," notes our Director of Ground Ops. "We ensure the red carpet is ready, the GPU is compatible, and the catering is five-star, no matter the aircraft size."

For charter inquiries regarding these flagship aircraft, contact our Concierge team today.
`,
    likes: 215,
    commentsCount: 8,
    comments: [
      { id: 201, author: "Michael Chen", date: "October 16, 2025", content: "The G700 is a masterpiece. Good to know you have the GSE to handle it in Addis." },
    ]
  },
  {
    id: 3,
    title: "Top 5 Luxury Safari Lodges with Private Airstrips",
    slug: "luxury-safari-lodges-private-airstrips",
    date: "October 02, 2025",
    readTime: "4 min read",
    category: "Lifestyle",
    tags: ["Travel", "Luxury", "Safari", "Concierge"],
    imageUrl: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1600&auto=format&fit=crop",
    // Image: Safari lodge or savannah landscape
    excerpt: "Experience the ultimate in privacy and convenience. We curate the best lodges in East Africa where you can land your PC-12 directly at your doorstep...",
    fullContent: `
## Bush-to-Bedroom: The Ultimate Convenience

For the discerning traveler, the long drive from an international airport to a safari lodge is a friction point. The solution? Private airstrips. Krimson Koncierge has curated a list of the most exclusive properties in East Africa that allow you to bypass the crowds and land directly in the wild.

### 1. Singita Grumeti (Tanzania)
With its own paved airstrip capable of handling a Cessna Citation, Singita offers seamless access to the Serengeti. Our team can arrange a direct transfer from Kilimanjaro International, clearing customs on the tarmac before a short hop to the lodge.

### 2. Segera Retreat (Kenya)
Nestled in Laikipia, Segera is a haven for conservationists. The airstrip here is perfect for turboprops like the Pilatus PC-12. The arrival experience—sipping champagne while giraffes graze near the runway—is unmatched.

### 3. Bale Mountain Lodge (Ethiopia)
For the adventurous, landing in the highlands of the Bale Mountains offers a glimpse of the rare Ethiopian Wolf. While the strip is gravel, it is well-maintained for STOL (Short Take-Off and Landing) aircraft like the Caravan.

### The Krimson Difference
We don't just file the flight plan; we arrange the entire itinerary. From the moment you step off your Gulfstream in the capital to the moment you land on the dirt strip in the bush, Krimson oversees every logistical detail, ensuring safety and luxury coexist.
`,
    likes: 480,
    commentsCount: 25,
    comments: [
       { id: 301, author: "Elena Rossi", date: "October 03, 2025", content: "Singita is magical. We used Krimson for our transfer last year—flawless service." },
       { id: 302, author: "Krimson Koncierge", date: "October 03, 2025", content: "Thank you, Elena! We look forward to welcoming you back." },
    ]
  },
   {
    id: 4,
    title: "Sustainable Aviation Fuel (SAF): Is Africa Ready?",
    slug: "sustainable-aviation-fuel-africa",
    date: "September 28, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    tags: ["Green Aviation", "Fuel", "Environment", "Future"],
    imageUrl: "https://images.unsplash.com/photo-1520183802803-06f731a2059f?q=80&w=1600&auto=format&fit=crop",
    // Image: Green leaf or clean energy abstract with plane
    excerpt: "The global push for Net Zero 2050 is intensifying. We analyze the current supply chain for SAF in South Africa, Ethiopia, and Nigeria...",
    fullContent: `
## The Green Horizon

Aviation accounts for roughly 2-3% of global CO2 emissions, and the business aviation sector is under immense pressure to lead the decarbonization charge. Sustainable Aviation Fuel (SAF) is the most viable near-term solution, reducing lifecycle emissions by up to 80%. But is the infrastructure in Africa ready to support it?

### The Supply Chain Challenge

Currently, SAF availability in Africa is limited compared to Europe or North America. However, pilot programs in **Johannesburg (OR Tambo)** and plans for a bio-refinery near **Addis Ababa** are promising signs.
Krimson Aviation is actively partnering with fuel suppliers to secure SAF allocations for our eco-conscious clients. We are also offering "Book and Claim" systems, allowing clients to purchase SAF credits even if physical SAF isn't available at their departure airport.

### Krimson's Commitment

"Sustainability isn't a buzzword; it's a license to operate," states our Head of Strategy. "We are auditing our entire ground handling chain—from electric tugs to paperless flight decks—to minimize our carbon footprint."

We invite our partners and clients to join us in this transition. Ask our operations team about carbon offset options for your next flight.
`,
    likes: 189,
    commentsCount: 6,
    comments: [
       { id: 401, author: "Dr. Aris T.", date: "September 29, 2025", content: "Vital topic. Glad to see African aviation engaging with SAF logistics early." },
    ]
  },
  {
    id: 5,
    title: "Medical Evacuation: The Golden Hour in Remote Regions",
    slug: "medevac-golden-hour-remote-africa",
    date: "September 15, 2025",
    readTime: "5 min read",
    category: "Aeromedical",
    tags: ["Safety", "Emergency", "Healthcare", "Logistics"],
    imageUrl: "https://images.unsplash.com/photo-1584036561566-b452b9d28826?q=80&w=1600&auto=format&fit=crop",
    // Image: Ambulance helicopter or medical equipment
    excerpt: "In a medical emergency, every minute counts. A look inside Krimson's aeromedical coordination protocols and our partnership with top hospitals...",
    fullContent: `
## When Time is the Enemy

The "Golden Hour"—the first 60 minutes after a trauma—often determines survival. In the remote mining regions of the DRC or the oil fields of South Sudan, access to this level of care seems impossible. That is where **Krimson Aeromedical** steps in.

### The Bed-to-Bed Promise

We don't just fly planes; we manage the patient's journey.
1.  **Assessment:** Our flight doctors consult with ground medics via satellite link to assess the patient's stability.
2.  **Activation:** Within 90 minutes, a fully equipped King Air or Learjet (configured as an ICU) is airborne.
3.  **Coordination:** While in the air, our team secures ambulance tarmac access and hospital admission in Nairobi, Johannesburg, or Dubai.

### Case Study: Night Extraction
Last month, we successfully coordinated a night extraction from a remote site in the Ogaden region. Despite severe weather, our pilots utilized synthetic vision technology to land safely on an unpaved strip, stabilize the patient, and transport them to a specialist cardiac unit in Addis Ababa—all within 4 hours of the initial call.

Trust is earned in the critical moments. Krimson stands ready 24/7.
`,
    likes: 275,
    commentsCount: 19,
    comments: [
      { id: 201, author: "NGO Safety Director", date: "September 15, 2025", content: "Krimson has been our go-to for medevac coverage for 3 years. Never let us down." },
    ]
  },
  {
    id: 6,
    title: "Behind the Scenes: Managing a Diplomatic Delegation",
    slug: "managing-diplomatic-delegation-logistics",
    date: "September 05, 2025",
    readTime: "8 min read",
    category: "Case Study",
    tags: ["Diplomacy", "VVIP", "Security", "Operations"],
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1600&auto=format&fit=crop",
    // Image: Red carpet arrival / Official convoy
    excerpt: "Coordinating 5 aircraft, 12 armored vehicles, and 150 delegates for the African Union Summit. A masterclass in aviation logistics...",
    fullContent: `
## Precision Protocol

When Heads of State travel, there is no room for error. The logistical ballet required to move a VVIP delegation is immense. During the recent AU Summit in Addis Ababa, Krimson Aviation was tasked with handling the delegation of a G20 nation.

### The Scale of Operations
*   **The Fleet:** One Boeing 777 (Principal), two Gulfstream G650s (Advance Team), and one C-130 Hercules (Equipment/Vehicles).
*   **The Challenge:** Parking saturation at Bole International Airport meant slots were limited to 45 minutes for drop-off.

### The Solution
Our team deployed three specialized units:
1.  **Ramp Supervisors:** Coordinated directly with the Presidential Guard to ensure the red carpet and armored limousines were positioned exactly at the aircraft stairs.
2.  **Permit Team:** Secured diplomatic overflight clearances for 6 countries in under 12 hours.
3.  **Off-Site Parking:** Arranged for the aircraft to ferry to a secondary airport for parking, ensuring the main apron remained clear, then recalled them precisely 3 hours before departure.

"Diplomatic flights are about discretion, security, and timing," explains our VVIP Manager. "We act as the invisible hand that ensures the Principal moves seamlessly from sky to summit."
`,
    likes: 310,
    commentsCount: 9,
    comments: [
      { id: 301, author: "Embassy Attaché", date: "September 06, 2025", content: "The coordination on the tarmac was impressive. Thank you for the professionalism." },
    ]
  },
];


export const countries = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  // Add more countries as needed
];



export const latestPartners = [
  {
    id: 'partner-1',
    name: 'Company A', // Name for alt text/tooltip
    logoUrl: '/images/companieslogo1.png', // Replace with actual logo paths (e.g., in public/logos)
    websiteUrl: '#', // Optional: URL to partner website
  },
  {
    id: 'partner-2',
    name: 'Company B',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-3',
    name: 'Company C',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-4',
    name: 'Company D',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-5',
    name: 'Company E',
    logoUrl: '/images/companieslogo1.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-6',
    name: 'Company F',
    logoUrl: '/images/companieslogo2.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-7',
    name: 'Company G',
    logoUrl: '/images/companieslogo3.png',
    websiteUrl: '#',
  },
  {
    id: 'partner-8',
    name: 'Company H',
    logoUrl: '/images/companieslogo4.png',
    websiteUrl: '#',
  },
  // Add more partners with unique data
];


