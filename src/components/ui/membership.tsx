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
    <section className="relative w-full bg-[#dceff0] py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <SectionBadge>Membership</SectionBadge>
          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
            More than events.{" "}
            <span className="text-[#8fb9c0]">A community you can actually join.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:text-base md:text-lg">
            Membership gives you access to the people, plans, and perks that make Dubai 0% Club feel
            like a proper community — not just another event page.
          </p>
        </div>

        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-2.5 sm:mt-12 sm:gap-3 md:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-xl border border-[#b7d6d9]/80 bg-[#eef8f8] px-4 py-3.5 shadow-sm sm:rounded-2xl sm:px-5 sm:py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#205b86] sm:h-8 sm:w-8">
                <Check className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" strokeWidth={3} />
              </span>
              <span className="text-xs font-medium text-[#205b86] sm:text-sm">{b}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#486f7d] sm:mt-10 sm:text-base">
          The idea is simple: more good plans, more good people, and{" "}
          <span className="text-[#205b86]">fewer nights built around alcohol.</span>
        </p>

        <div className="mt-7 flex justify-center sm:mt-8">
          <a
            href={JOIN_EMAIL_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#205b86] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:px-6 sm:py-3"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
}
