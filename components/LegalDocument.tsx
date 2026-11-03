import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./LegalDocument.module.css";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  sections: LegalSection[];
  children: ReactNode;
};

export default function LegalDocument({
  title,
  sections,
  children,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <a
        href="#policy-content"
        className="sr-only fixed left-4 top-4 z-[60] rounded-md bg-cyan-300 px-4 py-3 font-bold text-slate-950 focus:not-sr-only"
      >
        Skip to policy content
      </a>
      <Header />
      <main id="policy-content" tabIndex={-1}>
        <div className="border-b border-white/10 bg-gradient-to-br from-cyan-950/40 to-slate-950">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-semibold tracking-wide text-cyan-200">
              iSolve Automotive LLC
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-slate-300">
              Effective date: pending publication
            </p>
            <aside
              aria-label="Draft status"
              className="mt-8 max-w-3xl rounded-lg border border-amber-300/30 bg-amber-300/10 px-5 py-4 text-sm leading-6 text-amber-100"
            >
              <p className="font-bold">Draft for review — not yet effective</p>
              <p className="mt-1">
                This version is prepared for publication and is awaiting
                approval. It is not yet the published policy and should not
                be submitted for messaging registration.
              </p>
            </aside>
            <nav
              aria-label="Policy pages"
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-cyan-200"
            >
              <Link
                href="/privacy"
                aria-current={title === "Privacy Policy" ? "page" : undefined}
                className="underline underline-offset-4 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                aria-current={
                  title === "Terms and SMS Terms" ? "page" : undefined
                }
                className="underline underline-offset-4 hover:text-white"
              >
                Terms and SMS Terms
              </Link>
            </nav>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:py-14">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:max-h-[calc(100dvh-8rem)] lg:self-start lg:overflow-y-auto"
          >
            <p className="mb-4 text-sm font-bold text-white">On this page</p>
            <ul className="grid gap-2 text-sm leading-6 text-slate-300">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-sm py-1 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <article className={styles.document} aria-label={title}>
            <div>{children}</div>
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
