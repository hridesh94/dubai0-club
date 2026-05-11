import { Plus, ArrowRight } from "lucide-react";

const stats = [
  { value: "200+", label: "Members" },
  { value: "20+", label: "Nationalities" },
  { value: "Socials, padel, runs & more", label: "" },
];

const images = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
  "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=800&q=80",
  "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white pb-10 pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[35%] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full border border-neutral-200/70"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white">
            <Plus className="h-5 w-5 text-neutral-900" strokeWidth={2.5} />
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900">
            Dubai's First 0% Social Club
          </span>
        </div>

        <h1 className="mx-auto mt-10 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl">
          Meet people in Dubai,{" "}
          <span className="text-neutral-300">without the pressure to drink.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Dubai 0% Club is a friendly social community for people who want to connect, go out, stay
          active, and enjoy the city without alcohol being the main event. Drink anything you like.
          Come as you are.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Join the Club
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Browse Events
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-600">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-semibold text-neutral-900">{s.value}</span>
              {s.label && <span>{s.label}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex gap-6 px-6" style={{ marginLeft: "-80px", marginRight: "-80px" }}>
          {images.map((src, i) => (
            <div
              key={i}
              className="relative h-[280px] w-[300px] shrink-0 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm"
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}