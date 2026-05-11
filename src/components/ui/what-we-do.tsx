import SectionBadge from "@/components/ui/section-badge";
import { Users, Activity, Sunrise, Network } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Social Meetups",
    copy: "Monthly gatherings at great venues around Dubai. Come alone or with friends, meet the crew, and enjoy an easy, welcoming evening.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    icon: Activity,
    title: "Padel Club",
    copy: "Weekly padel sessions for members who want movement, fun, and a relaxed way to connect outside the usual social scene.",
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
  },
  {
    icon: Sunrise,
    title: "Run Club",
    copy: "Early morning community runs for all levels. No pressure to be fast — just show up, move, and start the day well.",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
  },
  {
    icon: Network,
    title: "Member Community",
    copy: "Connect with people from different industries, backgrounds, and nationalities through events, groups, and shared experiences.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-[#eef8f8] py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
            Social plans that make Dubai{" "}
            <span className="text-[#8fb9c0]">feel smaller.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:text-base md:text-lg">
            From rooftop meetups to early morning runs, the club gives members simple ways to show
            up, meet people, and become part of a community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-[#b7d6d9]/80 bg-[#eef8f8] p-5 shadow-sm transition-shadow hover:shadow-md sm:rounded-3xl sm:p-6"
              >
                <div className="overflow-hidden rounded-xl bg-[#d9ecee] sm:rounded-2xl">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[260px]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-start gap-3 sm:mt-6 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#eef8f8] sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 text-[#205b86] sm:h-5 sm:w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#205b86] sm:text-xl">{c.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#486f7d] sm:mt-2 sm:text-sm">{c.copy}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}