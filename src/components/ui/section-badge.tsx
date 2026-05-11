import { Plus } from "lucide-react";

export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#f7fcfc] sm:h-11 sm:w-11">
        <Plus className="h-5 w-5 text-[#205b86]" strokeWidth={2.5} />
      </span>
      <span className="rounded-full border border-[#b7d6d9] bg-[#f7fcfc] px-5 py-2.5 text-sm font-medium text-[#205b86] sm:px-6 sm:py-3">
        {children}
      </span>
    </div>
  );
}
