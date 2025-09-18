export type HomepageProject = {
  slug: string;
  title: string;
  summary: string;
  jumplink: string;
  repolink: string;
  stacks: string[];
  memo?: string[];
  period?: string;
  role?: string;
  image?: string;
};

export const homepageproject: HomepageProject[] = [
  {
    slug: "portfolio",
    title: "Hyoka7's page",
    summary: "ReactとTypescriptを使用した個人サイト。",
    jumplink: "https://hyoka7.github.io/Hyoka7-github.io/",
    repolink: "https://github.com/Hyoka7/Hyoka7-github.io",
    stacks: ["React", "Typescript", "Vite", "TailwindCSS", "Github"],
  },
];
