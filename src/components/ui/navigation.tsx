import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/ui/brand-logo";
import { JOIN_EMAIL_URL } from "@/lib/site-links";

const links = [
  { label: "Home", href: "#home" },
  { label: "Members", href: "#members" },
  { label: "Events", href: "#events" },
  { label: "Insights", href: "#faq" },
  { label: "Shop", href: "#join" },
  { label: "Join", href: "#join" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#b7d6d9]/80 bg-[#eef8f8]/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <a href="#home" className="block transition-opacity hover:opacity-80">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[#3f6574] transition-all duration-300 hover:bg-[#d9ecee] hover:text-[#205b86] active:scale-[0.98]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={JOIN_EMAIL_URL}
          className="hidden rounded-full bg-[#205b86] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 md:inline-flex"
        >
          Join the Club
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-[#205b86] transition-colors hover:bg-[#d9ecee] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-1 border-t border-[#b7d6d9]/80 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#3f6574] transition-colors hover:bg-[#d9ecee]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={JOIN_EMAIL_URL}
            className="mt-2 rounded-full bg-[#205b86] px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Join the Club
          </a>
        </div>
      </div>
    </header>
  );
}
