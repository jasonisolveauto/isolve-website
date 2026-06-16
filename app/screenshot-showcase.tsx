import ScreenshotCard from "../components/ScreenshotCard";

const screenshots = [
  {
    title: "Sales Dashboard",
    description:
      "Track leads, appointments, shown rate, sold units, closing percentage, and front-end gross.",
    imageLabel: "Sales",
    accent: "cyan" as const,
    metrics: [
      { label: "Leads", value: "1,248", trend: "+12% vs LM" },
      { label: "Shown", value: "312", trend: "68% show" },
      { label: "Sold", value: "147", trend: "22.4% close" },
    ],
    bars: [
      { label: "Internet", value: "51%", width: "w-6/12" as const },
      { label: "Phone", value: "74%", width: "w-9/12" as const },
      { label: "Walk-in", value: "88%", width: "w-11/12" as const },
    ],
    rows: [
      { label: "Front gross / unit", value: "$3,218", status: "Above" },
      { label: "Appointment set", value: "384", status: "Good" },
      { label: "Manager T.O.", value: "91%", status: "Watch" },
    ],
    href: "/sales",
  },
  {
    title: "Financial Statement View",
    description:
      "Connect departmental performance to gross, expense, and net profit.",
    imageLabel: "Financials",
    accent: "emerald" as const,
    metrics: [
      { label: "Net", value: "$412K", trend: "+9.8% MTD" },
      { label: "Gross", value: "$2.7M", trend: "+6.1%" },
      { label: "Expense", value: "68.4%", trend: "-2.2 pts" },
    ],
    bars: [
      { label: "Sales", value: "94%", width: "w-11/12" as const },
      { label: "Service", value: "83%", width: "w-10/12" as const },
      { label: "Parts", value: "71%", width: "w-8/12" as const },
    ],
    rows: [
      { label: "Front gross", value: "$473K", status: "Good" },
      { label: "Back gross", value: "$306K", status: "Good" },
      { label: "Policy expense", value: "$18.4K", status: "Watch" },
    ],
    href: "/accounting",
  },
  {
    title: "Advisor Scorecard",
    description:
      "Coach inspections, ASR, closing percentage, CP hours per RO, CSI, and review performance.",
    imageLabel: "Service",
    accent: "blue" as const,
    metrics: [
      { label: "ROs", value: "1,086", trend: "+7% MTD" },
      { label: "CP Hrs/RO", value: "1.74", trend: "+0.18" },
      { label: "CSI", value: "94.2", trend: "Top quartile" },
    ],
    bars: [
      { label: "Inspect", value: "89%", width: "w-11/12" as const },
      { label: "ASR Close", value: "62%", width: "w-7/12" as const },
      { label: "Reviews", value: "78%", width: "w-9/12" as const },
    ],
    rows: [
      { label: "Maria G.", value: "$88K GP", status: "Lead" },
      { label: "James R.", value: "1.92 H/RO", status: "Good" },
      { label: "Open ASR", value: "$41K", status: "Coach" },
    ],
    href: "/service",
  },
  {
    title: "Executive Group Summary",
    description:
      "Roll up rooftop, OEM, market, and department performance into one leadership view.",
    imageLabel: "Executive",
    accent: "amber" as const,
    metrics: [
      { label: "Rooftops", value: "12", trend: "3 need attn" },
      { label: "Units", value: "1,482", trend: "+5.4%" },
      { label: "Net", value: "$1.8M", trend: "+14.2%" },
    ],
    bars: [
      { label: "Store A", value: "96%", width: "w-11/12" as const },
      { label: "Store B", value: "82%", width: "w-10/12" as const },
      { label: "Store C", value: "58%", width: "w-7/12" as const },
    ],
    rows: [
      { label: "Top rooftop", value: "North Dallas", status: "Win" },
      { label: "Gross risk", value: "Used Cars", status: "Watch" },
      { label: "Expense spike", value: "Service", status: "Now" },
    ],
    href: "/executive",
  },
  {
    title: "AI Performance Assistant",
    description:
      "Ask operational questions across departments and get clear answers.",
    imageLabel: "AI",
    accent: "violet" as const,
    metrics: [
      { label: "Answers", value: "42", trend: "This week" },
      { label: "Alerts", value: "9", trend: "3 urgent" },
      { label: "Saved", value: "11 hrs", trend: "Reporting" },
    ],
    bars: [
      { label: "Sales", value: "88%", width: "w-11/12" as const },
      { label: "F&I", value: "73%", width: "w-9/12" as const },
      { label: "Ops", value: "65%", width: "w-8/12" as const },
    ],
    rows: [
      { label: "Why did net drop?", value: "Expense + policy", status: "Done" },
      { label: "Low gross managers", value: "4 found", status: "Review" },
      { label: "Stores at risk", value: "3 flagged", status: "Now" },
    ],
    href: "/ai",
  },
];

export default function ScreenshotShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
      <div className="mb-10 max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Built for Real Dealership Operators
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          iSolve is designed around the way dealerships actually run - from
          sales activity to financial statements, service performance, parts
          operations, and executive accountability across one rooftop or many.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((screenshot) => (
          <ScreenshotCard
            key={screenshot.title}
            title={screenshot.title}
            description={screenshot.description}
            imageLabel={screenshot.imageLabel}
            accent={screenshot.accent}
            metrics={screenshot.metrics}
            bars={screenshot.bars}
            rows={screenshot.rows}
            href={screenshot.href}
          />
        ))}
      </div>
    </section>
  );
}
