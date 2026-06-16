import Link from "next/link";

const footerLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Scorecards", href: "/scorecards" },
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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-sm text-slate-500 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="text-base font-bold text-white">iSolve Automotive</div>
          <p className="mt-3 max-w-2xl leading-7">
            Dealership performance intelligence from lead to net profit,
            connecting every department, rooftop, OEM, and financial statement
            into one clearer operating view.
          </p>
          <p className="mt-5">Copyright 2026 iSolve Automotive.</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3 md:max-w-md md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-semibold text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
