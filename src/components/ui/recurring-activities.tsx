import SectionBadge from "@/components/ui/section-badge";
import { MapPin, Clock } from "lucide-react";

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
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>Weekly Activities</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            Weekly activities{" "}
            <span className="text-neutral-300">you can count on.</span>
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {activities.map((a, i) => (
            <div
              key={a.title}
              className={`grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-sm md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden bg-neutral-100">
                <img src={a.img} alt={a.title} className="h-full min-h-[300px] w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-neutral-900">{a.title}</h3>
                <div className="mt-4 space-y-2 text-sm text-neutral-600">
                  <p className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {a.when}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {a.where}
                  </p>
                </div>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">{a.copy}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#join"
                    className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    Register
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