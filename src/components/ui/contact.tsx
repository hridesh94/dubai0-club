import SectionBadge from "@/components/ui/section-badge";
import { Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-links";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#eef8f8] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionBadge>Contact</SectionBadge>
        <h2 className="mt-10 text-4xl font-bold leading-[1.1] tracking-tight text-[#205b86] md:text-5xl">
          Get in touch <span className="text-[#8fb9c0]">with us.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#486f7d] md:text-lg">
          Have a question, want to join, or curious about the next event? Reach out and we'll help
          you get started.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:dubaizeroclub@gmail.com"
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-[#205b86] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:px-6"
          >
            <Mail className="h-4 w-4" />
            <span className="break-all">dubaizeroclub@gmail.com</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9ecee] px-6 py-3 text-sm font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
