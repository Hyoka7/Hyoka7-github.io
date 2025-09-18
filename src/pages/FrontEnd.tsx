import type { HomepageProject } from "../data/frontend";
import { homepageproject } from "../data/frontend";
import ExternalIcon from "./components/ExternalIcon";
import CreateBadges from "./components/CreateBadges";

function FrontendMainBlock({ p }: { p: HomepageProject }) {
  const InternalLink = p.repolink || p.jumplink;
  const ExternalLink = InternalLink ? !InternalLink.startsWith("/") : false;
  return (
    <section
      id={p.slug}
      className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-800/50 p-6 transition hover:bg-slate-800"
    >
      <h3 className="text-2xl md:text-3xl font-bold relative pe-2">
        {InternalLink ? (
          <a
            href={InternalLink}
            target={ExternalLink ? "_blank" : "_self"}
            rel={ExternalLink ? "noreferrer" : "noopener"}
            className="inline-flex items-center gap-1 hover:underline"
          >
            {p.title}
            {ExternalLink && <ExternalIcon />}
          </a>
        ) : (
          p.title
        )}
        <span
          aria-hidden
          className="block h-[3px] mt-1 bg-gradient-to-r from sky-500 to-transparent"
        />
      </h3>
      <p className="mt-3">{p.summary}</p>
      {(p.period || p.role) && (
        <p className="mt-2 text-sm text-slate-500">
          {[p.period, p.role].filter(Boolean).join("/")}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stacks.map((s) => (
          <CreateBadges key={s} id={s} />
        ))}
      </div>
      {p.memo?.length ? (
        <ul className="mt-4 list-disc pl-6 space-y-1">
          {p.memo.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      ) : null}
      {p.repolink && (
        <p className="mt-4">
          <a
            href={p.repolink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:underline px-2 py-4"
          >
            <span className="z-50">Githubリポジトリを見る</span>
            <ExternalIcon />
          </a>
        </p>
      )}
    </section>
  );
}

export default function Frontend() {
  const homepageprojectKeys = homepageproject.map((p) => ({
    href: `#${p.slug}`,
    label: p.title,
  }));
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr,280px] relative z-10">
        <article>
          <h1 id="projects" className="mb-12 text-center text-4xl font-bold">
            Works
          </h1>
          <div className="space-y-12">
            {homepageproject.map((p) => (
              <FrontendMainBlock key={p.slug} p={p} />
            ))}
          </div>
        </article>
        <aside className="hidden lg-block">
          <nav className="sticky top-24 rounded-xl border border-slate-800 p-4 text-sm">
            <ul className="space-y-1">
              {homepageprojectKeys.map((k) => (
                <li key={k.href}>
                  <a
                    href={k.href}
                    className="block rounded px-3 py-1 hover:bg-slate-800"
                  >
                    {k.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>
    </>
  );
}
