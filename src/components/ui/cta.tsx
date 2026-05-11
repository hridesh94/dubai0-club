import { ArrowRight } from "lucide-react";
import { JOIN_EMAIL_URL } from "@/lib/site-links";

export default function CTA() {
  return (
    <section id="join" className="relative w-full bg-[#eef8f8] px-4 py-14 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-[#205b86] px-5 py-14 text-center text-white shadow-[0_34px_80px_-44px_rgba(32,91,134,0.72)] sm:rounded-[40px] sm:px-8 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
            Ready to meet people <span className="text-white/45">differently?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            Join Dubai 0% Club and become part of a social community built around good people,
            better plans, and nights that do not need alcohol to be fun.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={JOIN_EMAIL_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#eef8f8] px-6 py-3 text-sm font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9ecee] active:translate-y-0"
            >
              Join the Club
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Social meetups. Weekly activities. 0% pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
