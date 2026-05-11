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
    <section className="relative w-full bg-[#eef8f8] py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <SectionBadge>Weekly Activities</SectionBadge>
          <h2 className="mt-7 text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
            Weekly activities{" "}
            <span className="text-[#8fb9c0]">you can count on.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          {activities.map((a) => (
            <div
              key={a.title}
              className="overflow-hidden rounded-2xl border border-[#b7d6d9]/80 bg-[#eef8f8] shadow-sm sm:rounded-3xl md:grid md:grid-cols-2"
            >
              <div className="overflow-hidden bg-[#d9ecee]">
                <img src={a.img} alt={a.title} className="h-[220px] w-full object-cover sm:h-[280px] md:h-full md:min-h-[300px]" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#205b86] sm:text-2xl">{a.title}</h3>
                <div className="mt-3 space-y-1.5 text-xs text-[#486f7d] sm:text-sm">
                  <p className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {a.when}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {a.where}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#486f7d] sm:mt-4 sm:text-base">{a.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                  <a
                    href={JOIN_EMAIL_URL}
                    className="inline-flex rounded-full bg-[#205b86] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Register
                  </a>
                  <a
                    href={`${GOOGLE_MAPS_DUBAI_URL}+${encodeURIComponent(a.where)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-[#d9ecee] px-4 py-2 text-xs font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0 sm:px-5 sm:py-2.5 sm:text-sm"
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
