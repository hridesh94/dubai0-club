import { Plus } from "lucide-react";

export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#f7fcfc] sm:h-10 sm:w-10">
        <Plus className="h-3.5 w-3.5 text-[#205b86] sm:h-4 sm:w-4" strokeWidth={2.5} />
      </span>
      <span className="rounded-full border border-[#b7d6d9] bg-[#f7fcfc] px-3.5 py-1.5 text-xs font-medium text-[#205b86] sm:px-5 sm:py-2 sm:text-sm">
        {children}
      </span>
    </div>
  );
}
