const buildTracks = [
  {
    title: "Recruiter-facing proof",
    description:
      "A polished portfolio shell will turn engineering work into something hiring managers can evaluate in minutes.",
  },
  {
    title: "Private application ops",
    description:
      "A lightweight internal tracker will capture companies, outreach, sponsorship signals, and follow-up timing.",
  },
  {
    title: "Measured iteration",
    description:
      "Each layer is being built around funnel metrics so effort can move toward interviews instead of vanity output.",
  },
];

const operatingPrinciples = [
  "Thin Next.js baseline so the stack stays reversible while learning is still cheap.",
  "One deploy path and one CI path before adding data, auth, or automation complexity.",
  "Job-search outcomes first: recruiter trust, application throughput, and sponsorship-positive signals.",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-12">
      <section className="grid gap-10 rounded-[2rem] border border-white/60 bg-white/78 px-6 py-8 shadow-[0_24px_80px_rgba(37,34,27,0.12)] backdrop-blur sm:px-8 lg:grid-cols-[1.5fr_0.9fr] lg:px-10 lg:py-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-amber-300/80 bg-amber-100/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-amber-900">
            Bootstrap baseline
          </div>
          <div className="space-y-5">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-stone-500">
              Venkat job search operating system
            </p>
            <h1 className="max-w-3xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-stone-950 sm:text-6xl">
              A thin technical base for winning sponsorship-friendly interviews faster.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700">
              This repo now holds the first deployable surface for a recruiter-facing
              portfolio and the future private workflow that will track companies,
              outreach, and response quality.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
              href="#roadmap"
            >
              See the next build tracks
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-stone-50/80 px-6 py-3 text-sm font-medium text-stone-700 transition-colors duration-200 hover:border-stone-500 hover:text-stone-950"
              href="#principles"
            >
              Review operating assumptions
            </a>
          </div>
        </div>

        <aside className="grid gap-4 rounded-[1.75rem] bg-stone-950 p-6 text-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
              Stage fit
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              Build only the infrastructure that earns learning now.
            </p>
          </div>
          <div className="grid gap-3 text-sm leading-6 text-stone-300">
            <p>Deployment path: GitHub Pages staging baseline.</p>
            <p>Validation path: lint plus strict TypeScript in CI.</p>
            <p>Next up: portfolio shell, data model, and funnel instrumentation.</p>
          </div>
        </aside>
      </section>

      <section
        id="roadmap"
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {buildTracks.map((track) => (
          <article
            key={track.title}
            className="rounded-[1.75rem] border border-stone-200/80 bg-white/70 p-6 shadow-[0_18px_55px_rgba(76,60,44,0.08)] backdrop-blur"
          >
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone-500">
              Track
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-950">
              {track.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-700">
              {track.description}
            </p>
          </article>
        ))}
      </section>

      <section
        id="principles"
        className="mt-10 rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(135deg,rgba(255,248,235,0.96),rgba(255,255,255,0.88))] p-6 shadow-[0_20px_60px_rgba(120,93,58,0.08)] sm:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-500">
          Operating principles
        </p>
        <div className="mt-6 grid gap-4">
          {operatingPrinciples.map((principle) => (
            <div
              key={principle}
              className="rounded-[1.4rem] border border-white/80 bg-white/85 px-5 py-4 text-base leading-7 text-stone-700 shadow-[0_10px_25px_rgba(77,63,48,0.06)]"
            >
              {principle}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
