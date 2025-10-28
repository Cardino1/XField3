export type OpportunityType = "Jobs" | "Research" | "Open Source" | "Co-Founder";

export interface Opportunity {
  id: number;
  type: OpportunityType;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export const opportunities: Opportunity[] = [
  {
    id: 1,
    type: "Jobs",
    title: "Product Designer",
    organization: "NovaWave",
    description: "Help define the design system for a fast-growing AI collaboration suite.",
    tags: ["Design", "Full-time", "Remote"],
  },
  {
    id: 2,
    type: "Research",
    title: "Neural Interface Fellow",
    organization: "Synapse Lab",
    description: "Join a cross-disciplinary team exploring the boundaries of brain-computer interfaces.",
    tags: ["Neuroscience", "Fellowship"],
  },
  {
    id: 3,
    type: "Open Source",
    title: "Maintainer: Climate Data Viz",
    organization: "Terra Collective",
    description: "Lead the roadmap for an open source toolkit visualizing high-frequency climate data.",
    tags: ["TypeScript", "D3", "Community"],
  },
  {
    id: 4,
    type: "Co-Founder",
    title: "Founding Engineer",
    organization: "SignalForge",
    description: "Looking for a systems engineer to co-create privacy-focused communication tools.",
    tags: ["Equity", "Hardware", "Security"],
  },
  {
    id: 5,
    type: "Jobs",
    title: "Growth Lead",
    organization: "OrbitOps",
    description: "Drive GTM strategy for orbital logistics intelligence.",
    tags: ["GTM", "Aerospace"],
  },
  {
    id: 6,
    type: "Research",
    title: "Materials Science Resident",
    organization: "DeepMatter",
    description: "Experimental research residency focused on quantum materials for energy storage.",
    tags: ["Residency", "Quantum"],
  },
];
