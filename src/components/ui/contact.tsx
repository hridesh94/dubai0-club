import SectionBadge from "@/components/ui/section-badge";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionBadge>Contact</SectionBadge>
        <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
          Get in touch <span className="text-neutral-300">with us.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Have a question, want to join, or curious about the next event? Reach out and we'll help
          you get started.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:dubaizeroclub@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4" />
            dubaizeroclub@gmail.com
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}