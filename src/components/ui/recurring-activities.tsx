import SectionBadge from "@/components/ui/section-badge";
import { MapPin, Clock } from "lucide-react";
import { GOOGLE_MAPS_DUBAI_URL, JOIN_EMAIL_URL } from "@/lib/site-links";

const activities = [
  {
    title: "Padel Club",
    when: "Every Tuesday · 7:30 PM",
    where: "Sanddune Padel Club, Al Quoz",
    copy: "A relaxed weekly padel session for members. Play, meet people, and enjoy the evening without overthinking it.",
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1000&q=80",
  },
  {
    title: "Run Club",
    when: "Every Wednesday · 6:00 AM",
    where: "Zero Point Running Track, Kite Beach",
    copy: "A friendly morning run for all levels. Start the day with movement, fresh air, and a few familiar faces.",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=1000&q=80",
  },
];

export default function RecurringActivities() {
  return (
    <section className="relative w-full bg-[#eef8f8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Weekly Activities</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            Weekly activities{" "}
            <span className="text-[#8fb9c0]">you can count on.</span>
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {activities.map((a, i) => (
            <div
              key={a.title}
              className={`grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-[#b7d6d9]/80 bg-[#eef8f8] shadow-sm md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden bg-[#d9ecee]">
                <img src={a.img} alt={a.title} className="h-full min-h-[300px] w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-[#205b86]">{a.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-[#486f7d]">
                  <p className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {a.when}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {a.where}
                  </p>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#486f7d]">{a.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={JOIN_EMAIL_URL}
                    className="inline-flex rounded-full bg-[#205b86] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0"
                  >
                    Register
                  </a>
                  <a
                    href={`${GOOGLE_MAPS_DUBAI_URL}+${encodeURIComponent(a.where)}`}
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
