import { Plus } from "lucide-react";

export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white">
        <Plus className="h-5 w-5 text-neutral-900" strokeWidth={2.5} />
      </span>
      <span className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900">
        {children}
      </span>
    </div>
  );
}