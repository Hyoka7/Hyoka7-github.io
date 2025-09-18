import profilePhoto from "../assets/icon.jpg";
import CreateBadges from "./components/CreateBadges";

function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[120px] mx-auto md:mx-0 flex-shrink-0">
      <div className="aspect-square overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
        <img
          src={profilePhoto}
          alt="Hyoka7's Profile Photo"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 relative z-10">
      <h1 className="mb-12 text-center text-4xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <ProfilePhoto />
        <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-5 transition hover:bg-slate-800">
          <h2 className="text-2xl font-bold">hyoka7</h2>
          <p className="mt-2 text-slate-400">
            競技プログラミングが好きです。最近はフロントエンドもちょっとずつ勉強しています。ゆくゆくはバックエンドも触ってみたいです...
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CreateBadges id="x" href="https://x.com/hyokahyk" />
          </div>
        </div>
      </div>
    </section>
  );
}
