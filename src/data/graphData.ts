export type GraphNode = {
  id: string;
  label: string;
  tier: 0 | 1 | 2;
  parentId: string | null;
  href?: string;
};

export const portfolioData: GraphNode[] = [
  // Root
  { id: "root", label: "About Me", tier: 0, parentId: null },

  // Tier 1 Categories
  { id: "projects", label: "Projects", tier: 1, parentId: "root" },
  { id: "experience", label: "Experience", tier: 1, parentId: "root" },
  { id: "education", label: "Education", tier: 1, parentId: "root" },

  // Tier 2: Projects
  { id: "trippee", label: "Trippee", tier: 2, parentId: "projects", href: "/projects/trippee" },
  { id: "tiny-search-engine", label: "Tiny Search Engine", tier: 2, parentId: "projects", href: "/projects/tiny-search-engine" },
  { id: "personal-website-game", label: "Personal Website Game", tier: 2, parentId: "projects", href: "/projects/personal-website-game" },
  { id: "sodacan", label: "sodacan", tier: 2, parentId: "projects", href: "/projects/sodacan" },
  { id: "pixluv", label: "Pixluv", tier: 2, parentId: "projects", href: "/projects/pixluv" },

  // Tier 2: Experience
  { id: "springmicro", label: "SpringMicro Software", tier: 2, parentId: "experience", href: "/experience/springmicro" },
  { id: "eskay", label: "ESKAY Science", tier: 2, parentId: "experience", href: "/experience/eskay" },
  { id: "mlresearch", label: "ML Research", tier: 2, parentId: "experience", href: "/experience/mlresearch" },
  { id: "dalilab", label: "DALI Lab", tier: 2, parentId: "experience", href: "/experience/dalilab" },

  // Tier 2: Education
  { id: "courses", label: "College Courses", tier: 2, parentId: "education", href: "/education/courses" },
  { id: "honors", label: "Honors & Awards", tier: 2, parentId: "education", href: "/education/honors" },
  { id: "clubs", label: "Clubs & Organizations", tier: 2, parentId: "education", href: "/education/clubs" },
];
