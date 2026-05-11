import SectionBadge from "@/components/ui/section-badge";

export default function Intro() {
  return (
    <section className="relative w-full bg-[#eef8f8] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionBadge>The Idea</SectionBadge>
        <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
          A social club for people who want{" "}
          <span className="text-[#8fb9c0]">something different.</span>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-[#486f7d] md:text-lg">
          <p>
            Going out in Dubai often revolves around drinking. Dubai 0% Club gives you another
            option.
          </p>
          <p>
            We host social events, fitness meetups, padel sessions, run club mornings, and
            community gatherings where the focus is simple: meet good people, have better
            conversations, and enjoy yourself without pressure.
          </p>
          <p>
            You do not have to explain what you drink or why. Anything 0%, soft, sparkling, coffee,
            juice, water — it all counts. The point is connection.
          </p>
        </div>
      </div>
    </section>
  );
}