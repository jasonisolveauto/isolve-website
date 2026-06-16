type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/80 p-7 shadow-xl shadow-black/10 transition hover:border-cyan-300/40">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4 leading-7 text-slate-400">{description}</p>
    </div>
  );
}
