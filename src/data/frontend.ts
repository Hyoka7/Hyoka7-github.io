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
    title: "Hyoka7's Homepage",
    summary: "ReactとTypescriptを使用した個人サイトです。",
    jumplink: "https://hyoka7.github.io/Hyoka7-github.io/",
    repolink: "https://github.com/Hyoka7/Hyoka7-github.io",
    stacks: ["React", "Typescript", "Vite", "TailwindCSS", "Github"],
  },
  {
    slug: "sortle",
    title: "ABC Sortle",
    summary: "AtCoder Beginner Contest(ABC)の問題を並べ替えるゲームです。",
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
  {
    slug: "streamlitapp",
    title: "Word2vec & FastText 類似単語検索アプリ",
    summary:"日本語Wikipediaのデータを用いて自分で学習した2モデルを比較するアプリです。Streamlitが無料枠なので開くとアプリが落ちていることが多いかもしれません。モデルサイズが大きすぎてFastTextの未知語予測までは入れられなかった...",
    jumplink: "https://w2v-and-fasttxt-compare.streamlit.app/",
    stacks:[
      "Python",
      "Streamlit",
      "Word2Vec",
      "FastText",
    ]
  }
];
