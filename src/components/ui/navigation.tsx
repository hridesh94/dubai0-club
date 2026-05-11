import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = ["Home", "Members", "Events", "Insights", "Shop", "Join"];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-base font-semibold tracking-tight text-neutral-900">
          Dubai 0% Club
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#join"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 md:inline-flex"
        >
          Join the Club
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-neutral-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-1 border-t border-neutral-200/70 px-6 py-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              {l}
            </a>
          ))}
          <a
            href="#join"
            className="mt-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white"
          >
            Join the Club
          </a>
        </div>
      </div>
    </header>
  );
}