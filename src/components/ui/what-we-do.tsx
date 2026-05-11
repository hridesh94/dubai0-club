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
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="mx-auto mt-10 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            Social plans that make Dubai{" "}
            <span className="text-neutral-300">feel smaller.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            From rooftop meetups to early morning runs, the club gives members simple ways to show
            up, meet people, and become part of a community.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group overflow-hidden rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="overflow-hidden rounded-2xl bg-neutral-100">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white">
                    <Icon className="h-5 w-5 text-neutral-900" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.copy}</p>
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