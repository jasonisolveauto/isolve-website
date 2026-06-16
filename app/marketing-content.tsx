import Link from "next/link";

type MarketingPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  features: {
    title: string;
    text: string;
  }[];
};

export const routePages: Record<string, MarketingPageContent> = {
  platform: {
    eyebrow: "Unified Dealership Platform",
    title: "One Operating View for the Entire Dealership",
    description:
      "Connect sales, finance, service, parts, accounting, and leadership reporting into a single performance intelligence layer built for daily decisions.",
    features: [
      {
        title: "Lifecycle Visibility",
        text: "Follow activity from first lead through gross, retention, financial statement, and net profit.",
      },
      {
        title: "Connected Departments",
        text: "Give every leader a consistent view of the metrics that move their department and the store.",
      },
      {
        title: "Automated Reporting",
        text: "Reduce manual spreadsheet work with standardized dashboards, scorecards, and trend views.",
      },
    ],
  },
  sales: {
    eyebrow: "Sales Intelligence",
    title: "Turn Lead Activity Into Sold Units and Gross",
    description:
      "Track the sales process from source to appointment to showroom to sale, with the visibility managers need to coach faster.",
    features: [
      {
        title: "Lead Source Performance",
        text: "See which sources create appointments, shown traffic, sold units, and front-end gross.",
      },
      {
        title: "Manager Accountability",
        text: "Spot performance gaps by team, manager, salesperson, and store before the month gets away.",
      },
      {
        title: "Front-End Gross Trends",
        text: "Monitor deal quality, volume, and margin together instead of managing them in separate reports.",
      },
    ],
  },
  finance: {
    eyebrow: "Finance Intelligence",
    title: "Protect Back-End Gross After Every Sale",
    description:
      "Give finance leaders a clean view of product penetration, reserve, funding, chargebacks, and manager performance.",
    features: [
      {
        title: "Product Penetration",
        text: "Track the products that are driving back-end performance and identify underperforming opportunities.",
      },
      {
        title: "Funding Visibility",
        text: "Keep deal status, delays, and exposure visible without waiting for scattered manual updates.",
      },
      {
        title: "Finance Manager Trends",
        text: "Compare results by manager and store so coaching conversations are grounded in clear data.",
      },
    ],
  },
  service: {
    eyebrow: "Service Intelligence",
    title: "Make the Service Drive Easier to Manage",
    description:
      "Unify advisor scorecards, repair order performance, retention, inspections, and customer experience signals.",
    features: [
      {
        title: "Advisor Scorecards",
        text: "Track advisor performance across the numbers that matter to retention, gross, and customer experience.",
      },
      {
        title: "Retention Tracking",
        text: "See whether customers are staying engaged with the store after the sale and after each visit.",
      },
      {
        title: "Operational Trends",
        text: "Monitor hours, inspections, warranty, and service execution in one consistent operating view.",
      },
    ],
  },
  parts: {
    eyebrow: "Parts Intelligence",
    title: "Understand Parts Performance in Context",
    description:
      "Measure gross profit, inventory health, obsolescence, turns, fill rate, and contribution alongside store performance.",
    features: [
      {
        title: "Inventory Health",
        text: "Keep turns, aging, and obsolescence visible so inventory decisions stay connected to profitability.",
      },
      {
        title: "Gross Profit Trends",
        text: "Understand how parts margin is contributing to the store and where performance is changing.",
      },
      {
        title: "Department Contribution",
        text: "Connect parts performance to service, accounting, and executive reporting without manual rebuilds.",
      },
    ],
  },
  accounting: {
    eyebrow: "Accounting Intelligence",
    title: "Bring Financial Statements Into Daily View",
    description:
      "Connect financial statements, budgets, expenses, variances, and month-end performance into clearer operating visibility.",
    features: [
      {
        title: "Statement Visibility",
        text: "Turn financial statements into searchable, comparable views that leaders can use throughout the month.",
      },
      {
        title: "Expense Control",
        text: "Surface department-level expense movement and variance before it becomes a surprise.",
      },
      {
        title: "Budget and Trend Views",
        text: "Compare current results against budget, prior periods, and store-level expectations.",
      },
    ],
  },
  executive: {
    eyebrow: "Executive Intelligence",
    title: "See Every Store, Department, and Trend Clearly",
    description:
      "Roll up dealership and group performance into a clear executive view for faster decisions and stronger accountability.",
    features: [
      {
        title: "Group Summary",
        text: "Compare stores, departments, and key performance signals from one leadership dashboard.",
      },
      {
        title: "Exception Focus",
        text: "Identify the stores and departments that need attention without digging through every report.",
      },
      {
        title: "Profitability View",
        text: "Tie operational activity to financial outcomes so leadership sees the full performance picture.",
      },
    ],
  },
  ai: {
    eyebrow: "AI Intelligence",
    title: "Ask Better Questions. Get Better Answers.",
    description:
      "Use AI-assisted analysis to investigate performance changes, explain trends, and focus leaders on the next best action.",
    features: [
      {
        title: "Performance Questions",
        text: "Ask why net profit dropped, which stores need attention, or where expense increases are coming from.",
      },
      {
        title: "Operational Context",
        text: "Interpret sales, finance, service, parts, accounting, and executive data together.",
      },
      {
        title: "Actionable Summaries",
        text: "Move from static reports to concise explanations that help leaders act with confidence.",
      },
    ],
  },
  reporting: {
    eyebrow: "Reporting Intelligence",
    title: "Eliminate Reporting Chaos Across the Store",
    description:
      "Replace disconnected PDFs, spreadsheets, emails, and manual report rebuilds with one trusted operating source.",
    features: [
      {
        title: "One Source of Truth",
        text: "Standardize department reporting so every leader works from the same performance view.",
      },
      {
        title: "Less Manual Work",
        text: "Reduce the time spent chasing files, rebuilding spreadsheets, and reconciling report versions.",
      },
      {
        title: "Earlier Visibility",
        text: "Understand performance before month end so teams can respond while there is still time.",
      },
    ],
  },
  contact: {
    eyebrow: "Request a Demo",
    title: "Ready to See Your Dealership Clearly?",
    description:
      "Connect with iSolve Automotive to explore how dealership performance intelligence can unify your store or group reporting.",
    features: [
      {
        title: "Platform Walkthrough",
        text: "Review the operating views for sales, finance, service, parts, accounting, and leadership.",
      },
      {
        title: "Reporting Fit",
        text: "Talk through your current reports, manual workflows, and where visibility breaks down.",
      },
      {
        title: "Next Steps",
        text: "Map a practical path toward cleaner dealership performance intelligence.",
      },
    ],
  },
};

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Departments", href: "/#departments" },
  { label: "AI Intelligence", href: "/ai" },
  { label: "Reporting", href: "/reporting" },
  { label: "Contact", href: "/contact" },
];

export function MarketingRoutePage({ page }: { page: MarketingPageContent }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
            iSolve Automotive
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="https://app.isolveauto.com"
              className="hidden rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/35 hover:text-white sm:inline-flex"
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
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0),rgba(37,99,235,0.1))]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              {page.eyebrow}
            </div>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {page.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Request Demo
              </Link>
              <Link
                href="/"
                className="rounded-md border border-white/15 px-7 py-4 font-semibold text-slate-100 transition hover:border-white/35"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {page.features.map((feature, index) => (
            <div
              key={feature.title}
              className="rounded-lg border border-white/10 bg-slate-900/80 p-7 shadow-xl shadow-black/10 transition hover:border-cyan-300/40"
            >
              <div className="mb-5 text-sm font-bold text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-2xl font-bold">{feature.title}</h2>
              <p className="mt-4 leading-7 text-slate-400">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white p-8 text-slate-950 shadow-2xl shadow-black/30 sm:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to unify dealership performance?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                See how iSolve Automotive can bring every department and report
                into one clearer operating view.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-md bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
