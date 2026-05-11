import SectionBadge from "@/components/ui/section-badge";

const steps = [
  {
    n: "01",
    title: "Join the club",
    copy: "Become a member and get access to events, activities, updates, and the community.",
  },
  {
    n: "02",
    title: "Pick your plan",
    copy: "Choose from monthly meetups, padel, run club, and other social events.",
  },
  {
    n: "03",
    title: "Show up",
    copy: "Come alone or with friends. Meet people, enjoy yourself, and become part of the crew.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#eef8f8] py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <SectionBadge>How It Works</SectionBadge>
          <h2 className="mt-7 text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
            How it <span className="text-[#8fb9c0]">works.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-[#b7d6d9]/80 bg-[#eef8f8] p-6 shadow-sm sm:rounded-3xl sm:p-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#dceff0] text-sm font-semibold text-[#205b86] sm:h-11 sm:w-11">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#205b86] sm:mt-6 sm:text-xl">{s.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-[#486f7d] sm:mt-3 sm:text-sm">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}