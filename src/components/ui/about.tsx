import SectionBadge from "@/components/ui/section-badge";

export default function About() {
  return (
    <section className="relative w-full bg-[#dceff0] py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl bg-[#d9ecee] shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&q=80"
            alt="Friends socialising"
            className="h-[480px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <div className="flex justify-start">
            <SectionBadge>About the Club</SectionBadge>
          </div>
          <h2 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            No pressure. No awkwardness.{" "}
            <span className="text-[#8fb9c0]">Just good people.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#486f7d] md:text-lg">
            <p>
              Dubai 0% Club is for anyone who enjoys socialising but does not want alcohol to define
              the night.
            </p>
            <p>
              Some members do not drink at all. Some drink less. Some just want a healthier way to
              meet people. Everyone is welcome, as long as they are respectful, open-minded, and
              here to enjoy the community.
            </p>
            <p>
              This is not about being strict. It is about making space for better nights, better
              mornings, and better connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}