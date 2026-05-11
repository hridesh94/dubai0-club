import SectionBadge from "@/components/ui/section-badge";
import { Check } from "lucide-react";
import { JOIN_EMAIL_URL } from "@/lib/site-links";

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
    <section className="relative w-full bg-[#dceff0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Membership</SectionBadge>
          <h2 className="mx-auto mt-10 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            More than events.{" "}
            <span className="text-[#8fb9c0]">A community you can actually join.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#486f7d] md:text-lg">
            Membership gives you access to the people, plans, and perks that make Dubai 0% Club feel
            like a proper community — not just another event page.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-2xl border border-[#b7d6d9]/80 bg-[#eef8f8] px-5 py-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#205b86]">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-[#205b86]">{b}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-[#486f7d]">
          The idea is simple: more good plans, more good people, and{" "}
          <span className="text-[#205b86]">fewer nights built around alcohol.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={JOIN_EMAIL_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#205b86] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
}
