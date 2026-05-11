import SectionBadge from "@/components/ui/section-badge";
import { MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Monthly Meetup — Clap DIFC",
    venue: "Clap DIFC",
    time: "6:00 PM – Late",
    copy: "Our monthly meetup at Clap DIFC. Come along, meet the crew, and enjoy a relaxed evening with the community.",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1000&q=80",
  },
  {
    title: "Monthly Meetup — CE LA VIE Sky Bar",
    venue: "CE LA VIE, Address Sky View",
    time: "6:00 PM – Late",
    copy: "Join us for an evening at CE LA VIE Sky Bar with skyline views, good conversation, and even better company.",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1000&q=80",
  },
];

export default function Events() {
  return (
    <section id="events" className="relative w-full bg-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Events</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            Upcoming <span className="text-neutral-300">events.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Easy social plans, active mornings, and relaxed gatherings across Dubai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div
              key={e.title}
              className="overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-sm"
            >
              <div className="overflow-hidden bg-neutral-100">
                <img src={e.img} alt={e.title} className="h-[280px] w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900">{e.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" /> {e.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {e.time}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{e.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#join"
                    className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    RSVP Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}