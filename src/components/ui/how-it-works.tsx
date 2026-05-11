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
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionBadge>How It Works</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            How it <span className="text-neutral-300">works.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-sm font-semibold text-neutral-900">
                {s.n}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}