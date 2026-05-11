import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-links";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-[#205b86] text-white shadow-[0_14px_35px_-18px_rgba(32,91,134,0.72)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#205b86] active:translate-y-0 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 print:hidden"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
    </a>
  );
}
