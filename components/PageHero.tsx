type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0),rgba(37,99,235,0.1))]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {eyebrow}
          </div>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
