import SectionBadge from "@/components/ui/section-badge";
import { Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-links";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#eef8f8] py-14 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <SectionBadge>Contact</SectionBadge>
        <h2 className="mt-7 text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:mt-10 sm:text-4xl md:text-5xl">
          Get in touch <span className="text-[#8fb9c0]">with us.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:text-base md:text-lg">
          Have a question, want to join, or curious about the next event? Reach out and we'll help
          you get started.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href="mailto:dubaizeroclub@gmail.com"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#205b86] px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
          >
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>dubaizeroclub@gmail.com</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#d9ecee] px-5 py-2.5 text-xs font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
