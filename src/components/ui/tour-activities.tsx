import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = ["All", "Wildlife", "Relaxation", "Adventure", "Historical"] as const;

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=800&q=80",
];

export default function TourActivities() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      {/* Subtle arc background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[30%] h-[1400px] w-[1400px] -translate-x-1/2 rounded-full border border-neutral-200/70"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Pill badge */}
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white">
            <Plus className="h-5 w-5 text-neutral-900" strokeWidth={2.5} />
          </span>
          <span className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900">
            Our Tour Activities
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-10 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl">
          Whether you seek adventure, culture, or calm we've got the perfect experience{" "}
          <span className="text-neutral-300">for every kind of traveler.</span>
        </h2>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-6 py-3 text-sm font-medium transition-colors",
                active === f
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Images row - extends past edges */}
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