import SectionBadge from "@/components/ui/section-badge";

const points = ["Alcohol-free socialising", "Beginner-friendly activities", "A welcoming Dubai community"];

export default function Community() {
  return (
    <section className="relative w-full overflow-hidden bg-[#dceff0] py-24">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <SectionBadge>Community</SectionBadge>
        <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
          Come alone. <span className="text-[#8fb9c0]">Leave with plans.</span>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[#486f7d] md:text-lg">
          <p>
            A lot of people move to Dubai, work hard, and still find it difficult to build a real
            social circle. Dubai 0% Club makes that easier.
          </p>
          <p>
            You can come to your first event alone. Many people do. The whole point of the club is
            to make meeting people feel natural, relaxed, and genuinely enjoyable.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {points.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[#b7d6d9] bg-[#eef8f8] px-5 py-2.5 text-sm font-medium text-[#205b86]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
