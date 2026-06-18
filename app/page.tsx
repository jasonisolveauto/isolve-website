import Link from "next/link";
import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScreenshotShowcase from "./screenshot-showcase";

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

const scaleCards = [
  {
    title: "Single Rooftop",
    text: "Give one store the same operating discipline as a large group: every department, every manager, every report, and every profit driver in one view.",
  },
  {
    title: "Growing Dealer Group",
    text: "Standardize reporting across rooftops while still respecting store-level differences, local leadership, and department accountability.",
  },
  {
    title: "100-Rooftop Multi-OEM Platform",
    text: "Roll up many brands, stores, markets, and operating teams into one executive layer built for comparison, exceptions, and capital decisions.",
  },
];

const scorecardCards = [
  {
    title: "Executive Visibility",
    text: "See enterprise, store, department, and employee performance from one operating view.",
  },
  {
    title: "Manager Coaching",
    text: "Turn scorecard data into practical coaching conversations.",
  },
  {
    title: "Employee Empowerment",
    text: "Give every team member clarity, ownership, recognition, and a path to improve.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

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
              dealership performance intelligence platform powered by
              automation and AI, whether you operate one rooftop or a 100-store
              multi-OEM group.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Request Demo
              </Link>
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

      <section className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mb-8 max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Platform Overview
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              See iSolve Automotive in Action
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Watch how iSolve brings dealership reporting, scorecards, and
              performance visibility into one connected operating view.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/BRz1LJXbEgQ"
                title="iSolve Automotive platform overview video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mb-10 max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for One Rooftop or One Hundred
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              iSolve scales from a single dealership that needs cleaner daily
              visibility to a multi-OEM enterprise group managing many stores,
              markets, brands, statements, and leadership teams.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {scaleCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Performance Scorecards
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Scorecards That Connect the CEO to the Team Member
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              iSolve scorecards connect enterprise leadership, dealership
              managers, and individual employees through one shared view of
              performance, coaching, recognition, and growth.
            </p>
            <Link
              href="/scorecards"
              className="mt-8 inline-flex rounded-md bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              Explore Scorecards
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {scorecardCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.text}
              />
            ))}
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
              <FeatureCard
                key={department.title}
                title={department.title}
                description={department.text}
              />
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

      <ScreenshotShowcase />

      <CTASection
        title="Ready to See Your Dealership Clearly?"
        description="Bring every department, every report, and every performance conversation into one dealership intelligence platform for one rooftop, a growing group, or a 100-store organization."
        buttonText="Request Demo"
        buttonHref="mailto:jbriggs168@gmail.com?subject=iSolve Automotive Demo Request"
      />
      <Footer />
    </main>
  );
}
