import Link from "next/link";

type ScreenshotCardProps = {
  title: string;
  description: string;
  imageLabel: string;
  href?: string;
  accent?: "cyan" | "emerald" | "blue" | "amber" | "violet";
  metrics?: {
    label: string;
    value: string;
    trend: string;
  }[];
  bars?: {
    label: string;
    value: string;
    width: "w-5/12" | "w-6/12" | "w-7/12" | "w-8/12" | "w-9/12" | "w-10/12" | "w-11/12";
  }[];
  rows?: {
    label: string;
    value: string;
    status: string;
  }[];
};

const accentStyles = {
  cyan: {
    badge: "bg-cyan-300/10 text-cyan-200",
    value: "text-cyan-300",
    bar: "bg-cyan-300",
    chart: "from-cyan-400/80 to-blue-400/25",
    status: "bg-cyan-300/20 text-cyan-100",
    hover: "hover:border-cyan-300/40",
  },
  emerald: {
    badge: "bg-emerald-300/10 text-emerald-200",
    value: "text-emerald-300",
    bar: "bg-emerald-300",
    chart: "from-emerald-400/80 to-cyan-400/25",
    status: "bg-emerald-300/20 text-emerald-100",
    hover: "hover:border-emerald-300/40",
  },
  blue: {
    badge: "bg-blue-300/10 text-blue-200",
    value: "text-blue-300",
    bar: "bg-blue-300",
    chart: "from-blue-400/80 to-cyan-400/25",
    status: "bg-blue-300/20 text-blue-100",
    hover: "hover:border-blue-300/40",
  },
  amber: {
    badge: "bg-amber-300/10 text-amber-200",
    value: "text-amber-300",
    bar: "bg-amber-300",
    chart: "from-amber-400/80 to-orange-400/25",
    status: "bg-amber-300/20 text-amber-100",
    hover: "hover:border-amber-300/40",
  },
  violet: {
    badge: "bg-violet-300/10 text-violet-200",
    value: "text-violet-300",
    bar: "bg-violet-300",
    chart: "from-violet-400/80 to-blue-400/25",
    status: "bg-violet-300/20 text-violet-100",
    hover: "hover:border-violet-300/40",
  },
};

const defaultMetrics = [
  { label: "Stores", value: "12", trend: "+8%" },
  { label: "Gross", value: "$2.4M", trend: "+11%" },
  { label: "Pace", value: "96%", trend: "On track" },
];

const defaultBars = [
  { label: "Sales", value: "92%", width: "w-11/12" as const },
  { label: "Finance", value: "81%", width: "w-10/12" as const },
  { label: "Service", value: "74%", width: "w-8/12" as const },
];

const defaultRows = [
  { label: "Front gross", value: "$3,218", status: "Above" },
  { label: "Back gross", value: "$2,084", status: "Watch" },
  { label: "Net profit", value: "$412K", status: "Good" },
];

function MockWindow({
  imageLabel,
  accent,
  metrics = defaultMetrics,
  bars = defaultBars,
  rows = defaultRows,
}: {
  imageLabel: string;
  accent: keyof typeof accentStyles;
  metrics?: ScreenshotCardProps["metrics"];
  bars?: ScreenshotCardProps["bars"];
  rows?: ScreenshotCardProps["rows"];
}) {
  const styles = accentStyles[accent];

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <div
          className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}
        >
          {imageLabel}
        </div>
      </div>

      <div className="grid gap-4 p-4">
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {metric.label}
              </div>
              <div className={`mt-2 text-lg font-black ${styles.value}`}>
                {metric.value}
              </div>
              <div className="mt-1 text-[10px] font-semibold text-slate-400">
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-4 flex items-end gap-2">
            {["h-12", "h-20", "h-14", "h-24", "h-16", "h-28"].map(
              (height, index) => (
                <div
                  key={`${height}-${index}`}
                  className={`${height} flex-1 rounded-t bg-gradient-to-t ${styles.chart}`}
                />
              ),
            )}
          </div>
          <div className="grid gap-2">
            {bars.map((bar) => (
              <div key={bar.label} className="flex items-center gap-3">
                <div className="w-20 truncate text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {bar.label}
                </div>
                <div className="h-2 flex-1 rounded-full bg-white/10">
                  <div
                    className={`${bar.width} h-2 rounded-full ${styles.bar}`}
                  />
                </div>
                <div className="w-9 text-right text-[10px] font-semibold text-slate-400">
                  {bar.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.2fr_0.7fr_0.5fr] gap-3 rounded-md bg-white/[0.03] p-3"
            >
              <div className="truncate text-xs font-semibold text-slate-300">
                {row.label}
              </div>
              <div className="truncate text-xs font-bold text-white">
                {row.value}
              </div>
              <div
                className={`truncate rounded-full px-2 py-0.5 text-center text-[10px] font-bold ${styles.status}`}
              >
                {row.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ScreenshotCard({
  title,
  description,
  imageLabel,
  href,
  accent = "cyan",
  metrics,
  bars,
  rows,
}: ScreenshotCardProps) {
  const styles = accentStyles[accent];
  const content = (
    <div
      className={`group h-full rounded-lg border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-black/10 transition ${styles.hover}`}
    >
      <MockWindow
        imageLabel={imageLabel}
        accent={accent}
        metrics={metrics}
        bars={bars}
        rows={rows}
      />

      <div className="px-1 pt-5">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
