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
    <section className="relative w-full bg-[#eef8f8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>How It Works</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            How it <span className="text-[#8fb9c0]">works.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-[#b7d6d9]/80 bg-[#eef8f8] p-8 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#dceff0] text-sm font-semibold text-[#205b86]">
                {s.n}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#205b86]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#486f7d]">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}