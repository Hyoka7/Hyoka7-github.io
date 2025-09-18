import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 relative z-10">
      <h1 className="mb-12 text-center text-4xl font-bold">Certifications</h1>
      <div className="mt-6 space-y-4">
        {certifications.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-slate-800 bg-slate-800/50 p-5 transition hover:bg-slate-800"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <span className="text-xs text-slate-400">{c.issuer}</span>
              <span className="text-xs text-slate-400">{c.issuedDate}</span>
            </div>
            {c.memo && <p className="mt-2 text-sm">{c.memo}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
