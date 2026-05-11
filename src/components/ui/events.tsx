import SectionBadge from "@/components/ui/section-badge";
import { MapPin, Clock } from "lucide-react";
import { GOOGLE_MAPS_DUBAI_URL, JOIN_EMAIL_URL } from "@/lib/site-links";

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
    <section id="events" className="relative w-full bg-[#dceff0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Events</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            Upcoming <span className="text-[#8fb9c0]">events.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#486f7d] md:text-lg">
            Easy social plans, active mornings, and relaxed gatherings across Dubai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div
              key={e.title}
              className="overflow-hidden rounded-3xl border border-[#b7d6d9]/80 bg-[#eef8f8] shadow-sm"
            >
              <div className="overflow-hidden bg-[#d9ecee]">
                <img src={e.img} alt={e.title} className="h-[280px] w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#205b86]">{e.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#486f7d]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" /> {e.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {e.time}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#486f7d]">{e.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={JOIN_EMAIL_URL}
                    className="inline-flex rounded-full bg-[#205b86] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0"
                  >
                    RSVP Now
                  </a>
                  <a
                    href={`${GOOGLE_MAPS_DUBAI_URL}+${encodeURIComponent(e.venue)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-[#d9ecee] px-5 py-2.5 text-sm font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0"
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
