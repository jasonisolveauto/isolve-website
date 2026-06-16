import Link from "next/link";
import CTASection from "../../components/CTASection";
import FeatureCard from "../../components/FeatureCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const hierarchy = [
  "Enterprise Scorecards",
  "Store Scorecards",
  "Department Scorecards",
  "Manager Scorecards",
  "Employee Scorecards",
];

const roleScorecards = [
  {
    title: "CEO / Dealer Principal Scorecard",
    description:
      "Enterprise performance, group reporting, net profit, departmental trends, CSI, gross, expenses, and store comparisons.",
  },
  {
    title: "General Manager Scorecard",
    description:
      "Store execution across sales, finance, service, parts, accounting, managers, employees, and profitability.",
  },
  {
    title: "Salesperson Scorecard",
    description:
      "Leads, appointments set, appointments shown, sold units, closing percentage, front-end gross, follow-up, and lead source performance.",
  },
  {
    title: "Desk Manager Scorecard",
    description:
      "Front-end gross, deal structure, appointment conversion, inventory movement, desk performance, and sales team execution.",
  },
  {
    title: "Finance Manager Scorecard",
    description:
      "Back-end gross, product penetration, reserve, funding, chargebacks, compliance, and product presentation.",
  },
  {
    title: "Service Advisor Scorecard",
    description:
      "Inspections, ASR, closing percentage, CP hours per RO, CSI, Google reviews, quote utilization, gross, and retention.",
  },
  {
    title: "Technician Scorecard",
    description:
      "Productivity percentage, efficiency, flag hours, MPI completion, video/photo performance, training, certifications, and quality.",
  },
  {
    title: "Parts Team Scorecard",
    description:
      "Gross profit, fill rate, inventory turns, obsolescence, counter performance, wholesale, and service support.",
  },
];

const empowermentCards = [
  {
    title: "Clarity",
    description:
      "Know exactly what success looks like and where performance stands today.",
  },
  {
    title: "Ownership",
    description:
      "Take control of personal performance instead of waiting for monthly reviews.",
  },
  {
    title: "Recognition",
    description:
      "Top performers become visible and can be recognized for their contribution.",
  },
  {
    title: "Career Development",
    description:
      "Track progress, certifications, training, trends, and growth opportunities.",
  },
  {
    title: "Transparency",
    description: "Everyone works from the same data, goals, and expectations.",
  },
  {
    title: "Confidence",
    description: "Walk into every day knowing what to focus on next.",
  },
];

const coachingCards = [
  {
    title: "Opportunity Detection",
    description: "Identify where performance is below target.",
  },
  {
    title: "Coaching Notes",
    description:
      "Managers can document coaching conversations, commitments, and follow-up actions.",
  },
  {
    title: "Trend Visibility",
    description:
      "See whether the associate is improving, declining, or holding steady.",
  },
  {
    title: "Accountability",
    description:
      "Every conversation starts with the same numbers, same goals, and same expectations.",
  },
];

const leaderCoachQuestions = [
  "What should I coach this advisor on today?",
  "Why is this technician below productivity goal?",
  "Which salespeople have weak appointment show rates?",
  "Which finance managers are missing product penetration?",
  "Which stores need immediate attention?",
  "Who deserves recognition this week?",
];

const teamMemberCoachQuestions = [
  {
    role: "Salesperson",
    question: "Which lead source should I focus on today?",
    answer:
      "Your strongest close rate this month is phone leads at 28%, but your fastest response gap is internet leads over 15 minutes. Start with aged internet follow-up, then protect phone lead response time.",
  },
  {
    role: "Service Advisor",
    question: "What is keeping my ASR close rate below target?",
    answer:
      "Your ASR close rate is 8 points below goal, mostly on declined maintenance lines over $600. Review quote presentation timing and follow up on open inspections before the customer leaves.",
  },
  {
    role: "Finance Manager",
    question: "Which product should I improve this week?",
    answer:
      "VSC penetration is 9 points under target while GAP is on pace. Focus on consistent VSC presentation on credit union and cash deals, where your attach rate is lowest.",
  },
  {
    role: "Technician",
    question: "Why am I below productivity goal?",
    answer:
      "Your productivity is being pulled down by low flag hours on quick-service repair orders. MPI completion is strong, so the next opportunity is converting more inspection findings into approved work.",
  },
  {
    role: "Parts Counter",
    question: "Where am I losing fill-rate performance?",
    answer:
      "Fill rate is strongest on maintenance parts but weaker on special-order collision items. Review open special orders over 7 days and coordinate with service on availability updates.",
  },
  {
    role: "Sales Manager",
    question: "Who needs recognition on my team today?",
    answer:
      "Two salespeople are above appointment show target and front gross target this week. Recognize them in the morning meeting and ask them to share their confirmation process.",
  },
];

const stevenKpis = [
  { label: "ROs", value: "186", detail: "+14 vs target" },
  { label: "Inspection", value: "94%", detail: "MPI completion" },
  { label: "ASR", value: "45%", detail: "Close rate" },
  { label: "CP Hrs / RO", value: "2.41", detail: "+0.80 vs goal" },
];

const stevenRows = [
  { label: "GM CSI", value: "96.4", status: "Above" },
  { label: "Google Reviews", value: "18", status: "Lead" },
  { label: "Quote Utilization", value: "87%", status: "Good" },
  { label: "Retention", value: "72%", status: "Watch" },
];

function AdvisorScorecardExample() {
  return (
    <section className="border-y border-cyan-300/10 bg-cyan-300/[0.04]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Advisor Scorecard Example"
            title="A Real Scorecard Experience, Built for Coaching"
            description="This sample advisor view shows the kind of scorecard experience iSolve can put in the hands of a team member, manager, GM, or dealer principal. Use it as a marketing example without exposing live employee data."
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
            Sample data shown for Steven B.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
          <div className="rounded-lg border border-white/10 bg-slate-950">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <div className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                Advisor Scorecard
              </div>
            </div>

            <div className="p-5">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-400">
                    Service Advisor
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-white">
                    Steven B.
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Month-to-date performance • Sample public view
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-300/10 px-4 py-3 text-right">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Overall
                  </div>
                  <div className="text-2xl font-black text-emerald-300">
                    On Pace
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {stevenKpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {kpi.label}
                    </div>
                    <div className="mt-2 text-2xl font-black text-cyan-300">
                      {kpi.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold text-slate-400">
                      {kpi.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
                <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-4 text-sm font-bold text-white">
                    Coaching Focus
                  </div>
                  <div className="grid gap-3">
                    {[
                      ["ASR presentation", "45%", "w-5/12"],
                      ["Inspection completion", "94%", "w-11/12"],
                      ["Quote utilization", "87%", "w-10/12"],
                      ["Review requests", "72%", "w-9/12"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className={`${width} h-2 rounded-full bg-cyan-300`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  {stevenRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md bg-white/[0.04] p-3"
                    >
                      <div className="truncate text-xs font-semibold text-slate-300">
                        {row.label}
                      </div>
                      <div className="text-xs font-bold text-white">
                        {row.value}
                      </div>
                      <div className="rounded-full bg-cyan-300/10 px-2 py-0.5 text-[10px] font-bold text-cyan-100">
                        {row.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-md border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                <div className="text-sm font-bold text-cyan-200">
                  AI Coach Suggestion
                </div>
                <p className="mt-2 leading-7 text-slate-300">
                  Recognition is warranted for inspection completion and CSI.
                  The next coaching conversation should focus on ASR close rate
                  and quote follow-up on declined maintenance lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-4xl">
      {eyebrow ? (
        <div className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export default function ScorecardsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0),rgba(37,99,235,0.1))]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Performance Scorecards
            </div>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              From CEO to Team Member - Connected in Real Time
            </h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
              Imagine a CEO walking into any dealership, opening one app,
              selecting any store, department, manager, or employee, and
              immediately knowing exactly where performance stands. CSI, gross,
              sales activity, technician productivity, lead performance, finance
              product presentation, KPIs, trends, coaching opportunities, and
              recognition are all available in the palm of their hand.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#scorecard-philosophy"
                className="rounded-md bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Explore Scorecards
              </a>
              <Link
                href="/contact"
                className="rounded-md border border-white/15 px-7 py-4 font-semibold text-slate-100 transition hover:border-white/35"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="scorecard-philosophy" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-8 shadow-2xl shadow-black/20 sm:p-10 lg:p-14">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            One platform. One scorecard philosophy. One source of truth.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Every department may have different metrics, but every team member
            deserves the same clarity: what is expected, where they stand, and
            how to improve.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <SectionHeader
            title="Connected Performance From the Enterprise to the Individual"
            description="Leadership sees the big picture. Managers see the team. Employees see their own opportunity. Everyone works from the same performance truth."
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {hierarchy.map((item, index) => (
              <div key={item} className="relative">
                <div className="h-full rounded-lg border border-white/10 bg-slate-950/80 p-6 text-center shadow-xl shadow-black/10">
                  <div className="mb-4 text-sm font-bold text-cyan-300">
                    Level {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{item}</h3>
                </div>
                {index < hierarchy.length - 1 ? (
                  <div className="hidden lg:block absolute -right-3 top-1/2 h-px w-6 bg-cyan-300/50" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeader title="Scorecards for Every Role That Drives the Dealership" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roleScorecards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.04]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <SectionHeader
            title="Every Team Member Knows Exactly Where They Stand"
            description="Traditional reporting often gives leadership visibility while employees wait for a manager to explain performance after the fact. iSolve changes that. Every associate can see their own scorecard, understand expectations, track progress, and take ownership of improvement."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {empowermentCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeader
          title="The Scorecard Becomes the Coaching Conversation"
          description="A scorecard should not sit in a file or spreadsheet. It should help managers coach, employees improve, and leaders identify where support is needed."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {coachingCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <AdvisorScorecardExample />

      <section className="border-y border-white/10 bg-slate-900/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <SectionHeader
            title="AI Coach"
            description="AI Coach turns scorecard data into practical coaching guidance. Leaders, managers, and team members can ask plain-language questions and receive focused answers based on the associate, department, store, or group."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {leaderCoachQuestions.map((question) => (
              <div
                key={question}
                className="rounded-lg border border-cyan-300/15 bg-slate-950/80 p-6 text-lg font-semibold leading-7 text-slate-100 shadow-xl shadow-black/10"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <SectionHeader
          title="AI Coach for the Team Member"
          description="AI Coach is not only for the CEO, dealer principal, or manager. Salespeople, advisors, finance managers, technicians, and parts teams can use it to understand their own scorecard, ask what to focus on next, and take ownership of improvement."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamMemberCoachQuestions.map((item) => (
            <div
              key={`${item.role}-${item.question}`}
              className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/10"
            >
              <div className="mb-4 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                {item.role}
              </div>
              <h3 className="text-xl font-bold text-white">{item.question}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              title="Walk the Store With the Numbers in Your Hand"
              description="A CEO, dealer principal, GM, or manager can walk into any dealership and immediately understand where the store stands, who needs recognition, who needs coaching, and where profit is being won or lost."
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/20">
            <div className="rounded-md border border-white/10 bg-slate-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-400">
                    Live Scorecard View
                  </div>
                  <div className="text-2xl font-bold">Store Walk Summary</div>
                </div>
                <div className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-200">
                  Today
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  ["Recognition", "3 top performers", "w-11/12"],
                  ["Coaching", "5 opportunities", "w-8/12"],
                  ["Profit risk", "$41K open", "w-7/12"],
                  ["CSI", "94.2 group score", "w-10/12"],
                ].map(([label, value, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs text-slate-400">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className={`${width} h-2 rounded-full bg-cyan-300`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Connect Every Leader, Manager, and Employee"
        description="iSolve Automotive brings performance visibility to the entire dealership, from the executive office to the individual team member."
        buttonText="Request Demo"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
