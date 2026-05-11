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
    <section id="members" className="relative w-full overflow-hidden bg-[#eef8f8] py-14 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-6">
        <SectionBadge>Members</SectionBadge>
        <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
          Meet the people{" "}
          <span className="text-[#8fb9c0]">behind the club.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:text-base md:text-lg">
          Dubai 0% Club brings together people from different industries, countries, and walks of
          life — all looking for better ways to connect.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto sm:mt-14">
        <div className="flex gap-4 px-5 pb-2 sm:gap-6 sm:px-6" style={{ width: "max-content" }}>
          {members.map((m, i) => (
            <div key={i} className="shrink-0">
              <div className="relative h-[220px] w-[175px] overflow-hidden rounded-xl bg-[#d9ecee] shadow-sm sm:h-[280px] sm:w-[230px] sm:rounded-2xl">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-2.5 text-left">
                <p className="text-sm font-semibold text-[#205b86]">{m.name}</p>
                <p className="text-xs text-[#668b96]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <a
          href="#members"
          className="inline-flex items-center gap-2 rounded-full bg-[#d9ecee] px-5 py-2.5 text-sm font-medium text-[#205b86] transition-colors hover:bg-[#c7e1e4] sm:px-6 sm:py-3"
        >
          Browse Members
        </a>
      </div>
    </section>
  );
}