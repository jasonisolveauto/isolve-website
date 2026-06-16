import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iSolve Automotive | Dealership Performance Intelligence",
  description:
    "Unify sales, finance, service, parts, accounting, financial statements, and executive reporting in one dealership performance intelligence platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
