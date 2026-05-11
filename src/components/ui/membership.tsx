import SectionBadge from "@/components/ui/section-badge";
import { Check } from "lucide-react";

const benefits = [
  "Member-only events",
  "Weekly padel and run sessions",
  "Access to the member community",
  "Selected venue and partner perks",
  "Event updates and priority access",
  "A friendly network across Dubai",
];

export default function Membership() {
  return (
    <section className="relative w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Membership</SectionBadge>
          <h2 className="mx-auto mt-10 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            More than events.{" "}
            <span className="text-neutral-300">A community you can actually join.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Membership gives you access to the people, plans, and perks that make Dubai 0% Club feel
            like a proper community — not just another event page.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200/70 bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-neutral-900">{b}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-neutral-600">
          The idea is simple: more good plans, more good people, and{" "}
          <span className="text-neutral-900">fewer nights built around alcohol.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
}