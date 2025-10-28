export interface Article {
  id: number;
  title: string;
  summary: string;
  publishedAt: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "How frontier labs evaluate moonshot founders",
    summary: "We unpack the frameworks our diligence team uses to vet deep-tech founder-market fit.",
    publishedAt: "October 16, 2023",
  },
  {
    id: 2,
    title: "Inside the XField research residency",
    summary: "A behind-the-scenes look at how we enable research teams to move from lab to market.",
    publishedAt: "October 3, 2023",
  },
  {
    id: 3,
    title: "Playbook: launching open source with enterprise partners",
    summary: "Strategies for building trust with enterprises while scaling an open source community.",
    publishedAt: "September 18, 2023",
  },
];
