import CTASection from "../components/CTASection";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHero from "../components/PageHero";

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

      <CTASection
        title="Ready to unify dealership performance?"
        description="See how iSolve Automotive can bring every department and report into one clearer operating view."
        buttonText="Request Demo"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
