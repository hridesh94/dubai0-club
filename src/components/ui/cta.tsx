import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="join" className="relative w-full bg-white px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] bg-neutral-900 px-8 py-20 text-center text-white shadow-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Ready to meet people <span className="text-white/40">differently?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Join Dubai 0% Club and become part of a social community built around good people,
            better plans, and nights that do not need alcohol to be fun.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Join the Club
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Social meetups. Weekly activities. 0% pressure.
          </p>
        </div>
      </div>
    </section>
  );
}