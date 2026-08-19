export type TeamPhoto = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Fallback initials shown when no photo is set. */
  initials: string;
  /** Avatar gradient  derived from the logo palette. */
  gradient: string;
  /** Portrait image (see scripts/generate-team-photos.mjs). */
  photo?: TeamPhoto;
  socials?: { label: string; href: string }[];
};

/**
 * The Veyrivo founding team. Cards display gradient monograms (initials)
 * instead of photos. To use headshots later, drop files into
 * public/images/team/ and re-add a `photo: teamPhotos["..."]` reference.
 */
export const team: TeamMember[] = [
  {
    name: "Muhammad Shahid",
    role: "Founder",
    bio: "Founded Veyrivo Technologies to give ambitious businesses the software, AI, and automation they need to grow without the manual work.",
    initials: "MS",
    gradient: "from-primary to-accent",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Email", href: "mailto:veyrivotechnologies@gmail.com" },
    ],
  },
  {
    name: "Zaman Ali",
    role: "CEO",
    bio: "Leads the company vision and client partnerships, ensuring every solution is engineered around real business outcomes.",
    initials: "ZA",
    gradient: "from-accent to-purple",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Email", href: "mailto:veyrivotechnologies@gmail.com" },
    ],
  },
  {
    name: "Muhammad Abiid",
    role: "Co-founder",
    bio: "Co-founded Veyrivo and drives the technical architecture behind our platforms, dashboards, and AI systems.",
    initials: "MA",
    gradient: "from-primary to-focal",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Email", href: "mailto:veyrivotechnologies@gmail.com" },
    ],
  },
  {
    name: "Muhammad Bilal Mirza",
    role: "Full Stack Developer",
    bio: "Full Stack Developer Veyrivo and drives the technical architecture behind our platforms, dashboards, and AI systems.",
    initials: "MB",
    gradient: "from-primary to-focal",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Email", href: "mailto:veyrivotechnologies@gmail.com" },
    ],
  },
];
