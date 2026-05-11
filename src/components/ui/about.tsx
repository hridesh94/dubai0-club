import SectionBadge from "@/components/ui/section-badge";

export default function About() {
  return (
    <section className="relative w-full bg-[#dceff0] py-14 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:gap-12 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-2xl bg-[#d9ecee] shadow-sm sm:rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&q=80"
            alt="Friends socialising"
            className="h-[280px] w-full object-cover sm:h-[480px]"
            loading="lazy"
          />
        </div>
        <div>
          <div className="flex justify-start">
            <SectionBadge>About the Club</SectionBadge>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-8 sm:text-4xl md:text-5xl">
            No pressure. No awkwardness.{" "}
            <span className="text-[#8fb9c0]">Just good people.</span>
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:space-y-4 sm:text-base md:text-lg">
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