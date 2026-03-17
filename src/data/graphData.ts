export type GraphNode = {
  id: string;
  label: string;
  tier: 0 | 1 | 2;
  parentId: string | null;
  href?: string;
};

export const portfolioData: GraphNode[] = [
  // Root
  { id: "root", label: "Syed Masrur Ahmed", tier: 0, parentId: null },

  // Tier 1 Categories
  { id: "projects", label: "Projects", tier: 1, parentId: "root" },
  { id: "experience", label: "Experience", tier: 1, parentId: "root" },
  { id: "education", label: "Education", tier: 1, parentId: "root" },

  // Tier 2: Projects
  { id: "simreach", label: "SimReach", tier: 2, parentId: "projects", href: "/projects/simreach" },
  { id: "sodacan", label: "sodacan", tier: 2, parentId: "projects", href: "/projects/sodacan" },
  { id: "webcite", label: "WebCite", tier: 2, parentId: "projects", href: "/projects/webcite" },
  { id: "violens", label: "VioLens", tier: 2, parentId: "projects", href: "/projects/violens" },

  // Tier 2: Experience
  { id: "springmicro", label: "SpringMicro Software", tier: 2, parentId: "experience", href: "/experience/springmicro" },
  { id: "eskay", label: "ESKAY Science", tier: 2, parentId: "experience", href: "/experience/eskay" },

  // Tier 2: Education
  { id: "dartmouth", label: "Dartmouth College", tier: 2, parentId: "education", href: "/education/dartmouth" },
  { id: "willes", label: "Willes Little Flower", tier: 2, parentId: "education", href: "/education/willes" },
];
