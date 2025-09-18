import { Link } from "react-router-dom";
import ExternalIcon from "./components/ExternalIcon";
import Typewriter from "./components/Typing";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl p-4 relative z-10">
      <div className="pt-20 pb-16">
        <Typewriter text="Welcome to Hyoka7's Homepage!" />
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <a
          href="https://atcoder.jp/users/hyoka7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm bg-slate-50 text-slate-900 hover:bg-slate-400 transition"
        >
          <img
            src="https://cp-logo.vercel.app/atcoder/hyoka7?logo=true"
            alt="AtCoder rating badge for hyoka7"
            className="h-5"
            loading="lazy"
          />
          AtCoder
          <ExternalIcon />
        </a>
        <a
          href="https://codeforces.com/profile/hyoka7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm bg-slate-50 text-slate-900 hover:bg-slate-400 transition"
        >
          <img
            src="https://cp-logo.vercel.app/codeforces/hyoka7?logo=true"
            alt="Codeforces rating badge for hyoka7"
            className="h-5"
            loading="lazy"
          />
          Codeforces
          <ExternalIcon />
        </a>
      </div>

      <div className="mt-16 space-y-8">
        <section>
          <div className="rounded-xl bg-slate-800/50 p-6 transition hover:bg-slate-800">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold">About Me</h2>
              <Link
                to="/aboutme"
                className="text-sm underline hover:no-underline"
              >
                もっと見る→
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-slate-800/50 p-6 transition hover:bg-slate-800">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold">Works</h2>
              <Link
                to="/frontend"
                className="text-sm underline hover:no-underline"
              >
                もっと見る→
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-xl bg-slate-800/50 p-6 transition hover:bg-slate-800">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold">Certifications</h2>
              <Link
                to="/certification"
                className="text-sm underline hover:no-underline"
              >
                もっと見る→
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
