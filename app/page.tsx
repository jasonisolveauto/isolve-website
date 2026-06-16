import Link from "next/link";

const lifecycleCards = [
  "Lead Generation",
  "Appointment Set",
  "Appointment Shown",
  "Vehicle Sold",
  "Front-End Gross",
  "Back-End Gross",
  "Service Retention",
  "Parts Performance",
  "Financial Statement",
  "Net Profit",
];

const departments = [
  {
    title: "Sales",
    text: "Track lead sources, appointment activity, show rates, closing percentages, sold units, front-end gross, and manager performance so every opportunity can be tied to real outcome.",
  },
  {
    title: "Finance",
    text: "Monitor back-end gross, product penetration, reserve, chargebacks, funding status, and finance manager trends to protect profit after the vehicle is sold.",
  },
  {
    title: "Service",
    text: "Unify advisor scorecards, hours, inspections, repair order performance, retention, warranty, and customer experience signals before they become margin problems.",
  },
  {
    title: "Parts",
    text: "Measure gross profit, inventory health, obsolescence, fill rate, turns, and department contribution so parts performance is visible alongside the rest of the store.",
  },
  {
    title: "Accounting",
    text: "Connect financial statements, expense control, budgets, variance reporting, trend lines, and month-end performance into a view leaders can act on sooner.",
  },
  {
    title: "Executive Leadership",
    text: "Roll up store, department, group, P&L, and employee performance into one operating view built for faster decisions and clearer accountability.",
  },
];

const chaosItems = [
  "No more chasing PDFs",
  "No more manually rebuilding spreadsheets",
  "No more disconnected department reports",
  "No more waiting until month end to understand performance",
  "One source of truth for every leader",
];

const aiQuestions = [
  "Why did net profit drop this month?",
  "Which lead sources are creating sold units?",
  "Which managers are below front-end gross target?",
  "Which finance products are underperforming?",
  "Which departments are driving expense increases?",
  "Which stores need immediate attention?",
];

const mockups = [
  {
    title: "Sales Dashboard",
    metric: "184",
    label: "Sold units",
    bars: ["w-11/12", "w-8/12", "w-10/12", "w-7/12"],
  },
  {
    title: "Financial Statement View",
    metric: "$412K",
    label: "Net profit",
    bars: ["w-10/12", "w-6/12", "w-9/12", "w-8/12"],
  },
  {
    title: "Advisor Scorecard",
    metric: "91%",
    label: "Retention",
    bars: ["w-8/12", "w-11/12", "w-7/12", "w-9/12"],
  },
  {
    title: "Executive Group Summary",
    metric: "12",
    label: "Stores tracked",
    bars: ["w-9/12", "w-10/12", "w-6/12", "w-11/12"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
            iSolve Automotive
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            <Link href="/platform" className="transition hover:text-white">
              Platform
            </Link>
            <a href="#departments" className="transition hover:text-white">
              Departments
            </a>
            <Link href="/ai" className="transition hover:text-white">
              AI Intelligence
            </Link>
            <Link href="/reporting" className="transition hover:text-white">
              Reporting
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0),rgba(20,184,166,0.08))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_420px] lg:items-center lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Dealership Performance Intelligence
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              One Platform. Every Department. Total Visibility.
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
              iSolve Automotive unifies sales, finance, service, parts,
              accounting, financial statements, and executive reporting into one
              dealership performance intelligence platform powered by automation
              and AI.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Request Demo
              </a>
              <a
                href="#platform"
                className="rounded-md border border-white/15 px-7 py-4 font-semibold text-slate-100 transition hover:border-white/35"
              >
                Explore Platform
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30">
            <div className="rounded-md border border-white/10 bg-slate-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-400">
                    Group Performance
                  </div>
                  <div className="text-2xl font-bold">$1.8M Net Profit</div>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">
                  +14.2%
                </div>
              </div>
              <div className="space-y-3">
                {["Sales", "Finance", "Service", "Parts", "Accounting"].map(
                  (label, index) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs text-slate-400">
                        <span>{label}</span>
                        <span>{[92, 81, 87, 74, 89][index]}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className={[
                            "h-2 rounded-full bg-cyan-300",
                            [
                              "w-11/12",
                              "w-10/12",
                              "w-10/12",
                              "w-8/12",
                              "w-11/12",
                            ][index],
                          ].join(" ")}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            From Lead to Net Profit
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Most dealerships manage performance across disconnected systems,
            spreadsheets, PDFs, emails, and manual reports. iSolve connects the
            entire dealership lifecycle into one operating view.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {lifecycleCards.map((item, index) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-300/40 hover:bg-slate-900"
            >
              <div className="mb-4 text-sm font-bold text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="departments" className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mb-10 max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Every Department in One Operating View
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              iSolve turns department activity into performance intelligence
              leaders can use daily, not just after the month closes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <div
                key={department.title}
                className="rounded-lg border border-white/10 bg-slate-950/70 p-7 shadow-xl shadow-black/10"
              >
                <h3 className="text-2xl font-bold">{department.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {department.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reporting" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Eliminate Reporting Chaos
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Replace scattered files, stale reports, and department-by-
              department interpretation with a unified reporting layer built for
              store leaders, department managers, and ownership groups.
            </p>
          </div>

          <div className="grid gap-3">
            {chaosItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                  OK
                </div>
                <p className="font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="border-y border-cyan-300/10 bg-cyan-300/[0.04]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mb-10 max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ask Better Questions. Get Better Answers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              AI intelligence helps leaders move from reading reports to
              investigating causes, surfacing exceptions, and knowing where to
              focus next.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aiQuestions.map((question) => (
              <div
                key={question}
                className="rounded-lg border border-cyan-300/15 bg-slate-950/70 p-6 text-lg font-semibold leading-7 text-slate-100"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Built for Real Dealership Operators
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Clean operating views for the people who run the store, coach the
            teams, and need the truth quickly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {mockups.map((mockup) => (
            <div
              key={mockup.title}
              className="rounded-lg border border-white/10 bg-slate-900 p-5"
            >
              <div className="rounded-md border border-white/10 bg-slate-950 p-5">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{mockup.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Placeholder dashboard mockup
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-cyan-300">
                      {mockup.metric}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {mockup.label}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  {mockup.bars.map((width, index) => (
                    <div key={`${mockup.title}-${index}`}>
                      <div className="mb-2 flex justify-between text-xs text-slate-500">
                        <span>Metric {index + 1}</span>
                        <span>{[92, 74, 86, 68][index]}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/10">
                        <div
                          className={`${width} h-3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white p-8 text-slate-950 shadow-2xl shadow-black/30 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to See Your Dealership Clearly?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Bring every department, every report, and every performance
                conversation into one dealership intelligence platform.
              </p>
            </div>

            <a
              href="mailto:jbriggs168@gmail.com?subject=iSolve Automotive Demo Request"
              className="inline-flex justify-center rounded-md bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-6">
        Copyright 2026 iSolve Automotive. Dealership performance intelligence from lead
        to net profit.
      </footer>
    </main>
  );
}
