export type HomepageProject = {
  slug: string;
  title: string;
  summary: string;
  jumplink: string;
  repolink?: string;
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
  {
    slug: "sortle",
    title: "ABC Sortle",
    summary: "AtCoder Beginner Contest(ABC)の問題を並べ替えるゲーム。",
    jumplink: "https://sortle-six.vercel.app/",
    repolink: "https://github.com/Hyoka7/sortle",
    stacks: [
      "React",
      "Typescript",
      "NextJS",
      "TailwindCSS",
      "Vercel",
      "Github",
    ],
  },
];
