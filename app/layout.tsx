import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XField",
  description: "Discover the latest opportunities, requests, and news from XField.",
};

const navLinks = [
  { href: "/", label: "Explore" },
  { href: "/news", label: "News" },
  { href: "/get-updates", label: "Get Updates" },
  { href: "/admin", label: "Admin" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-neutral">
      <body className={`${inter.className} h-full text-slate-900`}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">XF</span>
                XField
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/get-updates"
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
              >
                Get Updates
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>&copy; {new Date().getFullYear()} XField. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms</Link>
                <Link href="/admin">Admin</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
