import SectionBadge from "@/components/ui/section-badge";

const members = [
  { name: "Aisha", role: "Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Marco", role: "Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Priya", role: "Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" },
  { name: "Yusuf", role: "Consultant", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Lena", role: "Creative", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80" },
  { name: "Karim", role: "Athlete", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Sofia", role: "Founder", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80" },
  { name: "Daniel", role: "Investor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
];

export default function FeaturedMembers() {
  return (
    <section id="members" className="relative w-full overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <SectionBadge>Members</SectionBadge>
        <h2 className="mx-auto mt-10 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
          Meet the people{" "}
          <span className="text-neutral-300">behind the club.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Dubai 0% Club brings together people from different industries, countries, and walks of
          life — all looking for better ways to connect.
        </p>
      </div>

      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex gap-6 px-6" style={{ marginLeft: "-80px", marginRight: "-80px" }}>
          {members.map((m, i) => (
            <div key={i} className="shrink-0">
              <div className="relative h-[280px] w-[230px] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-3 text-left">
                <p className="text-sm font-semibold text-neutral-900">{m.name}</p>
                <p className="text-xs text-neutral-500">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#members"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
        >
          Browse Members
        </a>
      </div>
    </section>
  );
}