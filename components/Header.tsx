import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Sales", href: "/sales" },
  { label: "Finance", href: "/finance" },
  { label: "Service", href: "/service" },
  { label: "Parts", href: "/parts" },
  { label: "Accounting", href: "/accounting" },
  { label: "Executive", href: "/executive" },
  { label: "AI", href: "/ai" },
  { label: "Reporting", href: "/reporting" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
          iSolve Automotive
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <a
            href="https://app.isolveauto.com"
            className="rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/35 hover:text-white"
          >
            Login
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
          >
            Request Demo
          </Link>
        </div>

        <details className="group relative xl:hidden">
          <summary className="list-none rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/35">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-lg border border-white/10 bg-slate-950 p-3 shadow-2xl shadow-black/40">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://app.isolveauto.com"
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Login
              </a>
              <Link
                href="/contact"
                className="mt-2 rounded-md bg-cyan-400 px-3 py-2 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
