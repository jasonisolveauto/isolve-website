import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHero from "../components/PageHero";
import ScreenshotShowcase from "./screenshot-showcase";

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
    title: "One Operating View for One Rooftop or One Hundred",
    description:
      "Connect sales, finance, service, parts, accounting, OEM reporting, and leadership views into a single intelligence layer that scales from one store to a 100-rooftop multi-OEM group.",
    features: [
      {
        title: "Lifecycle Visibility",
        text: "Follow activity from first lead through gross, retention, financial statement, and net profit at the store, market, brand, or group level.",
      },
      {
        title: "Connected Rooftops and Departments",
        text: "Give every leader a consistent view of the metrics that move their department, store, OEM, region, and full organization.",
      },
      {
        title: "Standardized Multi-Store Reporting",
        text: "Reduce manual spreadsheet work with dashboards, scorecards, and trend views that compare rooftops without losing local context.",
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
    title: "Executive Summary and AI Coaching for Fixed Ops",
    description:
      "Unify advisor scorecards, technician execution, repair order performance, retention, inspections, customer experience signals, executive summaries, and AI coaching in one fixed operations view.",
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
        title: "Executive Summary",
        text: "Give managers and leaders a service summary view across advisors, technicians, CSI, ASR, inspections, CP hours per RO, quote utilization, and coaching priorities.",
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
    title: "Financial Statement Transparency for the Whole Store",
    description:
      "Bring dealership financial statements, total store expenses, assets, receivables, contracts in transit, cash in bank, and capital visibility into one transparent operating view.",
    features: [
      {
        title: "Total Financial Transparency",
        text: "Turn dealership financial statements into clear, searchable views that connect gross, expenses, assets, liabilities, and net profit across the store.",
      },
      {
        title: "Capital and Cash Visibility",
        text: "Monitor cash in bank, working capital, receivables, contracts in transit, floorplan exposure, and asset movement without waiting for month-end packets.",
      },
      {
        title: "Total Store Expense Control",
        text: "See total store expenses by department, compare budget to actual, catch variance early, and understand exactly what is pressuring net profit.",
      },
    ],
  },
  executive: {
    eyebrow: "Executive Intelligence",
    title: "See Every Rooftop, OEM, Department, and Trend Clearly",
    description:
      "Roll up single-store or multi-store group performance into a clear executive view for faster decisions, stronger accountability, and scalable operating discipline.",
    features: [
      {
        title: "Store and Group Summary",
        text: "Compare rooftops, OEMs, markets, departments, and key performance signals from one leadership dashboard.",
      },
      {
        title: "Exception Focus",
        text: "Identify the stores, brands, markets, and departments that need attention without digging through every report.",
      },
      {
        title: "Profitability View",
        text: "Tie operational activity to financial outcomes so leadership sees the full performance picture from rooftop to enterprise.",
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
      "Connect with iSolve Automotive to explore how dealership performance intelligence can unify one rooftop, a growing group, or a 100-store multi-OEM platform.",
    features: [
      {
        title: "Platform Walkthrough",
        text: "Review operating views for sales, finance, service, parts, accounting, and leadership across a single store or many rooftops.",
      },
      {
        title: "Reporting Fit",
        text: "Talk through current store, OEM, group, and executive reports, manual workflows, and where visibility breaks down.",
      },
      {
        title: "Next Steps",
        text: "Map a practical path toward cleaner dealership performance intelligence.",
      },
    ],
  },
};

const aiExamples = [
  {
    question: "Why did net profit drop this month?",
    answer:
      "Net profit is down $86K month to date. The biggest drivers are a $6K increase in service policy expense, a $28K decline in used vehicle front-end gross, and $17K higher advertising spend. Finance gross is holding steady, so the immediate coaching focus should be used car desk gross and service expense control.",
    tags: ["Net Profit", "Expense", "Used Cars"],
  },
  {
    question: "Which lead sources are creating sold units?",
    answer:
      "OEM leads produced the most sold units at 42 with a 24.6% close rate. Third-party leads produced 31 sold units but have a lower show rate at 48%. Paid search generated 18 sold units with the highest front-end gross per unit at $3,410.",
    tags: ["Sales", "Lead Source", "Gross"],
  },
  {
    question: "Which managers are below front-end gross target?",
    answer:
      "Two sales managers are below the $3,000 front-end gross target. Store B is averaging $2,640 on new vehicles and Store C is averaging $2,710 on used vehicles. Both stores also show elevated discount-to-MSRP variance over the last 10 days.",
    tags: ["Managers", "Front Gross", "Coaching"],
  },
  {
    question: "Which finance products are underperforming?",
    answer:
      "VSC penetration is 34%, which is 9 points below target. GAP is near target at 41%, but maintenance is underperforming at 18%. The biggest gap is with cash deals and credit union deals, where product presentation appears inconsistent by manager.",
    tags: ["Finance", "Products", "Penetration"],
  },
  {
    question: "Which departments are driving expense increases?",
    answer:
      "Service is responsible for 52% of the month-over-month expense increase, led by policy adjustment and technician overtime. Sales advertising is up 14%, but cost per sold unit remains acceptable. Accounting should review service policy approvals first.",
    tags: ["Service", "Accounting", "Expense"],
  },
  {
    question: "Which stores need immediate attention?",
    answer:
      "Three rooftops are flagged across the group. Store C has low used gross and aging inventory over 60 days. Store F has declining CSI and lower inspection close rate. Store H has rising expenses against flat gross. Store C is the highest priority because profit impact is already visible.",
    tags: ["Executive", "Stores", "Priority"],
  },
];

function AiQuestionAnswerSection() {
  return (
    <section className="border-y border-cyan-300/10 bg-cyan-300/[0.04]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sample Questions and Answers
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            iSolve AI is built for dealership operators who need answers that
            connect activity, gross, expenses, people, and store performance.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {aiExamples.map((example) => (
            <div
              key={example.question}
              className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/10"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {example.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white">
                {example.question}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {example.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceSummaryMetrics = [
  { label: "Advisor ASR", value: "45.0%", status: "Coach" },
  { label: "Inspection", value: "94.0%", status: "Near" },
  { label: "CP Hrs / RO", value: "2.41", status: "Win" },
  { label: "CSI / NPS", value: "96.4", status: "Win" },
];

const serviceTeamRows = [
  {
    name: "Steven B.",
    role: "Advisor",
    focus: "ASR close rate",
    metric: "45%",
    status: "Coach",
  },
  {
    name: "Maria G.",
    role: "Advisor",
    focus: "CSI and reviews",
    metric: "98.2",
    status: "Praise",
  },
  {
    name: "Tech Team A",
    role: "Technicians",
    focus: "MPI completion",
    metric: "94%",
    status: "Near",
  },
  {
    name: "Quick Lane",
    role: "Team",
    focus: "CP hours per RO",
    metric: "1.62",
    status: "Watch",
  },
];

const serviceCoachPrompts = [
  "Summarize fixed operations team performance.",
  "Which advisors need coaching and what should the manager say?",
  "Which technicians need inspection completion coaching?",
  "Create a CSI coaching plan based on current scorecards.",
  "Build a weekly manager action plan.",
];

function ServiceExecutiveSummarySection() {
  return (
    <section className="border-y border-blue-300/10 bg-blue-300/[0.04]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Executive Summary Built Into the App
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The service page connects directly to the way the app organizes
            fixed operations: an executive summary for leaders, scorecards for
            advisors and technicians, and an AI coaching tool that turns the
            numbers into manager action.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
            <div className="rounded-lg border border-white/10 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="rounded-full bg-blue-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-200">
                  Executive Summary
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-400">
                      Fixed Operations
                    </div>
                    <h3 className="mt-1 text-3xl font-black text-white">
                      Service Team Summary
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Advisors, technicians, CSI, inspections, ASR, and CP hours
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-300/10 px-4 py-3 text-right">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Priority
                    </div>
                    <div className="text-2xl font-black text-emerald-300">
                      3 Wins / 2 Coach
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-4">
                  {serviceSummaryMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {metric.label}
                      </div>
                      <div className="mt-2 text-2xl font-black text-blue-300">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold text-slate-400">
                        {metric.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-md border border-white/10">
                  <div className="grid grid-cols-[1fr_0.8fr_1fr_0.6fr_0.6fr] gap-3 bg-blue-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-200">
                    <span>Name</span>
                    <span>Role</span>
                    <span>Focus</span>
                    <span>Metric</span>
                    <span>Status</span>
                  </div>
                  {serviceTeamRows.map((row) => (
                    <div
                      key={`${row.name}-${row.focus}`}
                      className="grid grid-cols-[1fr_0.8fr_1fr_0.6fr_0.6fr] gap-3 border-t border-white/10 px-3 py-3 text-xs"
                    >
                      <span className="font-semibold text-white">{row.name}</span>
                      <span className="text-slate-400">{row.role}</span>
                      <span className="text-slate-300">{row.focus}</span>
                      <span className="font-bold text-white">{row.metric}</span>
                      <span className="rounded-full bg-blue-300/10 px-2 py-0.5 text-center font-bold text-blue-100">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
            <div className="rounded-lg border border-white/10 bg-slate-950 p-5">
              <div className="mb-5">
                <div className="text-sm font-semibold text-slate-400">
                  AI Coaching Tool
                </div>
                <h3 className="mt-1 text-3xl font-black text-white">
                  Fixed Ops AI Coach
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Managers can ask about team priorities, one-on-one talking
                  points, CSI focus, advisor opportunities, technician
                  execution, or a weekly action plan.
                </p>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {serviceCoachPrompts.map((prompt) => (
                  <div
                    key={prompt}
                    className="rounded-md border border-blue-300/20 bg-blue-300/10 px-3 py-2 text-xs font-bold text-blue-100"
                  >
                    {prompt}
                  </div>
                ))}
              </div>

              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-200">
                  Example AI Coach Response
                </div>
                <p className="leading-7 text-slate-300">
                  Start with recognition: CSI and CP hours per RO are strong.
                  The biggest coaching opportunity is ASR close rate. Meet with
                  Steven B. today, review declined maintenance lines, and set a
                  follow-up expectation before the customer leaves. Ask the
                  technician lead to reinforce MPI consistency with the quick
                  lane team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const salespersonMetrics = [
  { label: "Leads", value: "146", detail: "+18 vs goal" },
  { label: "Appt Set", value: "62", detail: "42.5% set rate" },
  { label: "Shown", value: "41", detail: "66.1% show" },
  { label: "Sold", value: "18", detail: "43.9% close" },
];

const leadSourceRows = [
  { source: "OEM", leads: "38", sold: "11", gross: "$3,420" },
  { source: "Phone", leads: "24", sold: "7", gross: "$3,080" },
  { source: "Internet", leads: "61", sold: "9", gross: "$2,640" },
  { source: "Walk-in", leads: "23", sold: "8", gross: "$3,710" },
];

const leadSourcePerformanceRows = [
  {
    source: "Internet Leads",
    totalLeads: "428",
    appointments: "176",
    showRate: "61%",
    soldRate: "18%",
    soldUnits: "77",
    frontGross: "$2,640",
    status: "Coach",
  },
  {
    source: "Showroom Leads",
    totalLeads: "214",
    appointments: "98",
    showRate: "84%",
    soldRate: "31%",
    soldUnits: "66",
    frontGross: "$3,710",
    status: "Win",
  },
  {
    source: "Email Leads",
    totalLeads: "186",
    appointments: "74",
    showRate: "58%",
    soldRate: "15%",
    soldUnits: "28",
    frontGross: "$2,480",
    status: "Watch",
  },
  {
    source: "Website Leads",
    totalLeads: "342",
    appointments: "151",
    showRate: "64%",
    soldRate: "21%",
    soldUnits: "72",
    frontGross: "$2,920",
    status: "Good",
  },
  {
    source: "Phone Leads",
    totalLeads: "129",
    appointments: "68",
    showRate: "76%",
    soldRate: "27%",
    soldUnits: "35",
    frontGross: "$3,080",
    status: "Good",
  },
];

const managerRows = [
  {
    manager: "Jordan K.",
    conversion: "24.8%",
    frontGross: "$3,410",
    inventory: "22 units",
    status: "Lead",
  },
  {
    manager: "Taylor M.",
    conversion: "21.2%",
    frontGross: "$2,940",
    inventory: "18 units",
    status: "Good",
  },
  {
    manager: "Chris R.",
    conversion: "18.4%",
    frontGross: "$2,520",
    inventory: "31 units",
    status: "Coach",
  },
  {
    manager: "Morgan S.",
    conversion: "19.6%",
    frontGross: "$2,780",
    inventory: "27 units",
    status: "Watch",
  },
];

const grossTrendBars = [
  ["Jordan K.", "$3,410", "w-11/12"],
  ["Taylor M.", "$2,940", "w-9/12"],
  ["Morgan S.", "$2,780", "w-8/12"],
  ["Chris R.", "$2,520", "w-7/12"],
];

function SalesScorecardSection() {
  return (
    <section className="border-y border-cyan-300/10 bg-cyan-300/[0.04]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Salesperson and Desk Manager Scorecards
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Sales leaders can see the individual salesperson view and the desk
            manager view together: lead sources, appointment conversion, shown
            rate, sold units, manager accountability, inventory movement, and
            front-end gross trends by manager.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
            <div className="rounded-lg border border-white/10 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                  Salesperson Scorecard
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-400">
                      Sales Consultant
                    </div>
                    <h3 className="mt-1 text-3xl font-black text-white">
                      Riley T.
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Lead activity, appointments, shown traffic, sold units,
                      closing percentage, and front-end gross
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-300/10 px-4 py-3 text-right">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                      Pace
                    </div>
                    <div className="text-2xl font-black text-emerald-300">
                      +4 Units
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-4">
                  {salespersonMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {metric.label}
                      </div>
                      <div className="mt-2 text-2xl font-black text-cyan-300">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold text-slate-400">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-md border border-white/10">
                  <div className="grid grid-cols-[1fr_0.6fr_0.6fr_0.8fr] gap-3 bg-cyan-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-cyan-200">
                    <span>Lead Source</span>
                    <span>Leads</span>
                    <span>Sold</span>
                    <span>FE Gross</span>
                  </div>
                  {leadSourceRows.map((row) => (
                    <div
                      key={row.source}
                      className="grid grid-cols-[1fr_0.6fr_0.6fr_0.8fr] gap-3 border-t border-white/10 px-3 py-3 text-xs"
                    >
                      <span className="font-semibold text-white">
                        {row.source}
                      </span>
                      <span className="text-slate-400">{row.leads}</span>
                      <span className="font-bold text-white">{row.sold}</span>
                      <span className="font-bold text-cyan-200">
                        {row.gross}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                  <div className="text-sm font-bold text-cyan-200">
                    AI Coach Prompt
                  </div>
                  <p className="mt-2 leading-7 text-slate-300">
                    What should I focus on today to improve my appointment show
                    rate, protect front-end gross, and turn more internet leads
                    into sold units?
                  </p>
                  <div className="mt-4 rounded-md border border-white/10 bg-slate-950/70 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      AI Coach Answer
                    </div>
                    <p className="mt-2 leading-7 text-slate-300">
                      Start with internet leads because they are your largest
                      volume source but lowest sold conversion. Call every open
                      lead over 24 hours, confirm appointments with a specific
                      vehicle and time, and ask your desk manager for help on
                      any deal where gross is trending below $2,800. Protect
                      your phone and walk-in process because those sources are
                      producing stronger gross per copy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
            <div className="rounded-lg border border-white/10 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="rounded-full bg-blue-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-200">
                  Desk Manager Scorecard
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6">
                  <div className="text-sm font-semibold text-slate-400">
                    Manager Accountability
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-white">
                    Desk Performance Summary
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Appointment conversion, desk execution, inventory movement,
                    and front-end gross trends by manager
                  </p>
                </div>

                <div className="overflow-hidden rounded-md border border-white/10">
                  <div className="grid grid-cols-[1fr_0.75fr_0.85fr_0.8fr_0.65fr] gap-3 bg-blue-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-200">
                    <span>Manager</span>
                    <span>Close</span>
                    <span>FE Gross</span>
                    <span>Inventory</span>
                    <span>Status</span>
                  </div>
                  {managerRows.map((row) => (
                    <div
                      key={row.manager}
                      className="grid grid-cols-[1fr_0.75fr_0.85fr_0.8fr_0.65fr] gap-3 border-t border-white/10 px-3 py-3 text-xs"
                    >
                      <span className="font-semibold text-white">
                        {row.manager}
                      </span>
                      <span className="text-slate-300">{row.conversion}</span>
                      <span className="font-bold text-white">
                        {row.frontGross}
                      </span>
                      <span className="text-slate-400">{row.inventory}</span>
                      <span className="rounded-full bg-blue-300/10 px-2 py-0.5 text-center font-bold text-blue-100">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-4 text-sm font-bold text-white">
                    Front-End Gross Trend by Manager
                  </div>
                  <div className="grid gap-3">
                    {grossTrendBars.map(([manager, gross, width]) => (
                      <div key={manager}>
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>{manager}</span>
                          <span>{gross}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className={`${width} h-2 rounded-full bg-blue-300`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-md border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
                  <div className="text-sm font-bold text-cyan-200">
                    AI Coach Prompt
                  </div>
                  <p className="mt-2 leading-7 text-slate-300">
                    Which desk managers are below front-end gross target, and
                    which lead sources are producing sold units with the best
                    gross per copy?
                  </p>
                  <div className="mt-4 rounded-md border border-white/10 bg-slate-950/70 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      AI Coach Answer
                    </div>
                    <p className="mt-2 leading-7 text-slate-300">
                      Chris R. is the clearest coaching priority at $2,520
                      front-end gross and an 18.4% close rate. Morgan S. is also
                      below target and should review deal structure on aged
                      inventory. Walk-ins are producing the strongest gross at
                      $3,710 per copy, followed by OEM at $3,420. Internet has
                      the most lead volume but needs tighter appointment
                      confirmation and desk involvement to improve gross.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/20">
          <div className="rounded-lg border border-white/10 bg-slate-950">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                Lead Source Performance
              </div>
            </div>

            <div className="p-5">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-400">
                    Sales Source Scorecard
                  </div>
                  <h3 className="mt-1 text-3xl font-black text-white">
                    Lead Source Performance Summary
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    Compare internet, showroom, email, website, and phone leads
                    by appointment creation, show rate, sold rate, sold units,
                    and front-end gross per copy.
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-300/10 px-4 py-3 text-right">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Best Gross
                  </div>
                  <div className="text-2xl font-black text-emerald-300">
                    Showroom
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-md border border-white/10">
                <div className="min-w-[860px]">
                  <div className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.8fr_0.8fr_0.7fr_0.9fr_0.7fr] gap-3 bg-emerald-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                    <span>Source</span>
                    <span>Leads</span>
                    <span>Appts</span>
                    <span>Show</span>
                    <span>Sold</span>
                    <span>Units</span>
                    <span>FE Gross</span>
                    <span>Status</span>
                  </div>
                  {leadSourcePerformanceRows.map((row) => (
                    <div
                      key={row.source}
                      className="grid grid-cols-[1.4fr_0.7fr_0.9fr_0.8fr_0.8fr_0.7fr_0.9fr_0.7fr] gap-3 border-t border-white/10 px-3 py-3 text-xs"
                    >
                      <span className="font-semibold text-white">
                        {row.source}
                      </span>
                      <span className="text-slate-400">{row.totalLeads}</span>
                      <span className="font-bold text-white">
                        {row.appointments}
                      </span>
                      <span className="text-slate-300">{row.showRate}</span>
                      <span className="text-slate-300">{row.soldRate}</span>
                      <span className="font-bold text-white">
                        {row.soldUnits}
                      </span>
                      <span className="font-bold text-emerald-200">
                        {row.frontGross}
                      </span>
                      <span className="rounded-full bg-emerald-300/10 px-2 py-0.5 text-center font-bold text-emerald-100">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-md border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                <div className="text-sm font-bold text-emerald-200">
                  AI Coach Answer
                </div>
                <p className="mt-2 leading-7 text-slate-300">
                  Showroom and phone leads are converting with the strongest
                  sold rates and front-end gross, so protect those handoffs.
                  Internet and email have the most appointment opportunity but
                  need faster response, stronger confirmation, and earlier desk
                  involvement. Website leads are healthy and should be scaled
                  while monitoring gross per copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const accountingMetrics = [
  {
    label: "Cash in Bank",
    value: "$2.4M",
    detail: "Operating cash across stores, trended daily against working capital needs.",
  },
  {
    label: "Contracts in Transit",
    value: "$684K",
    detail: "Open funded and unfunded deals visible by age, store, lender, and responsible team.",
  },
  {
    label: "Receivables",
    value: "$391K",
    detail: "Track schedules, aging, employee receivables, warranty, rebates, and factory money.",
  },
  {
    label: "Total Assets",
    value: "$18.7M",
    detail: "Understand asset movement across cash, inventory, receivables, equipment, and other balances.",
  },
  {
    label: "Total Store Expenses",
    value: "68.4%",
    detail: "Compare expense load against gross, budget, prior month, and same month last year.",
  },
  {
    label: "Working Capital",
    value: "$5.8M",
    detail: "Keep ownership focused on liquidity, capital position, and balance sheet strength.",
  },
];

const statementFocus = [
  "Transparent dealership financial statements",
  "Cash in bank and working capital clarity",
  "Contracts in transit aging and funding pressure",
  "Receivables schedules that leaders can actually use",
  "Total store expenses by department and account",
  "Assets, liabilities, capital, and net profit in one view",
];

function AccountingTransparencySection() {
  return (
    <section className="border-y border-emerald-300/10 bg-emerald-300/[0.04]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mb-10 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Know the Truth Behind the Statement
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            iSolve helps accounting and ownership move beyond static month-end
            PDFs. Leaders can see where capital is tied up, which schedules need
            attention, how total store expenses are moving, and whether the
            balance sheet supports the operating story.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {accountingMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/10"
              >
                <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                  {metric.label}
                </div>
                <div className="mt-3 text-3xl font-black text-white">
                  {metric.value}
                </div>
                <p className="mt-4 leading-7 text-slate-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/10">
            <h3 className="text-2xl font-bold text-white">
              Financial Statement Focus
            </h3>
            <p className="mt-4 leading-7 text-slate-400">
              Accounting visibility should not stop at net profit. iSolve is
              focused on total transparency: the financial statement, the
              balance sheet, cash, capital, CIT, receivables, assets, and the
              expenses that explain how the store is really performing.
            </p>

            <div className="mt-6 grid gap-3">
              {statementFocus.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3"
                >
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketingRoutePage({ page }: { page: MarketingPageContent }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {page.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.text}
            />
          ))}
        </div>
      </section>

      {page === routePages.platform ? <ScreenshotShowcase /> : null}
      {page === routePages.ai ? <AiQuestionAnswerSection /> : null}
      {page === routePages.sales ? <SalesScorecardSection /> : null}
      {page === routePages.service ? <ServiceExecutiveSummarySection /> : null}
      {page === routePages.accounting ? <AccountingTransparencySection /> : null}

      <CTASection
        title="Ready to unify dealership performance?"
        description="See how iSolve Automotive can bring every department, rooftop, OEM, statement, and report into one clearer operating view."
        buttonText="Request Demo"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
