import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  const buttonClassName =
    "inline-flex justify-center rounded-md bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800";

  return (
    <section className="px-5 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white p-8 text-slate-950 shadow-2xl shadow-black/30 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>

          {buttonHref.startsWith("/") ? (
            <Link href={buttonHref} className={buttonClassName}>
              {buttonText}
            </Link>
          ) : (
            <a href={buttonHref} className={buttonClassName}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
