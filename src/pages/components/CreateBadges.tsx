import ExternalIcon from "./ExternalIcon";

interface BadgeProps {
  id: string;
  href?: string;
}

export default function CreateBadges({ id, href }: BadgeProps) {
  const normalized = id.toLowerCase().replace(/\s+/g, "").replace(/_/g, "");
  const label =
    {
      typescript: "TypeScript",
      react: "React",
      vite: "Vite",
      tailwindcss: "Tailwind CSS",
      github: "GitHub",
      githubpages: "GitHub Pages",
      x: "X",
    }[normalized] ?? normalized;

  const badgeContent = (
    <>
      <img
        src={`https://cdn.simpleicons.org/${normalized}`}
        alt={`${label} のロゴ`}
        className="h-4 w-4"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      {label}
      {href && <ExternalIcon />}
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs bg-slate-50 text-slate-900 hover:bg-slate-400 transition"
    >
      {badgeContent}
    </a>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs bg-slate-50 text-slate-900">
      {badgeContent}
    </span>
  );
}
