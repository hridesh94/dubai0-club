import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionBadge from "@/components/ui/section-badge";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "Do I have to be sober to join?",
    a: "No. Dubai 0% Club is open to anyone who wants to socialise without alcohol being the focus. Some members do not drink, some drink less, and some simply enjoy alcohol-free events.",
  },
  {
    q: "Can I come alone?",
    a: "Yes. Many members come alone to their first event. The club is designed to make meeting people easier and more natural.",
  },
  {
    q: "What kind of events do you host?",
    a: "We host monthly social meetups, padel sessions, run club mornings, and other community events around Dubai.",
  },
  {
    q: "Do I need to be fit to join the activities?",
    a: "No. The activities are social and beginner-friendly. You can join at your own pace.",
  },
  {
    q: "What does 0% mean?",
    a: "0% means alcohol is not the centre of the experience. You can drink anything you like, as long as you enjoy yourself and respect others.",
  },
  {
    q: "Is this only for Dubai residents?",
    a: "The club is based in Dubai, but anyone in the city who wants to attend events and join the community is welcome.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative w-full bg-[#dceff0] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
            Questions, <span className="text-[#8fb9c0]">answered.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="overflow-hidden rounded-2xl border border-[#b7d6d9]/80 bg-[#eef8f8] shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-[#205b86]">{it.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#eef8f8]">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#205b86]" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-4 w-4 text-[#205b86]" strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#486f7d]">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
