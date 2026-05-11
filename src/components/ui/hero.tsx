import { useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ArrowRight, Plus } from "lucide-react";
import { JOIN_EMAIL_URL } from "@/lib/site-links";

const images = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
  "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=800&q=80",
  "https://images.unsplash.com/photo-1485872299829-c673f5194813?w=800&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { reduceMotion, isDesktop } = context.conditions ?? {};
        const root = heroRef.current;
        if (!root) return;

        const q = gsap.utils.selector(root);

        gsap.set(q(".gsap-reveal"), { autoAlpha: 1, clearProps: "visibility" });

        if (reduceMotion) {
          gsap.set(q(".gsap-reveal"), { y: 0, scale: 1 });
          gsap.set(q(".brand-marquee"), { xPercent: 0 });
          return;
        }

        gsap.defaults({ ease: "power3.out", duration: 0.8 });

        gsap.from(q(".gsap-reveal"), {
          autoAlpha: 0,
          y: 18,
          stagger: 0.08,
          clearProps: "visibility,opacity,transform",
        });

        gsap.to(q(".hero-plus svg"), {
          rotation: 45,
          scale: 0.92,
          duration: 0.7,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          repeatDelay: 3.1,
          transformOrigin: "50% 50%",
        });

        gsap.to(q(".brand-marquee"), {
          xPercent: -50,
          duration: isDesktop ? 34 : 42,
          ease: "none",
          repeat: -1,
        });

        gsap.to(q(".hero-card"), {
          y: (index) => Number.parseFloat(root.querySelectorAll<HTMLElement>(".hero-card")[index]?.dataset.lift ?? "0") - 10,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.18, from: "center" },
        });
      },
      heroRef.current,
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section relative w-full overflow-hidden bg-[#eef8f8] pb-0 pt-24 sm:pt-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="hero-plus flex h-8 w-8 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#f7fcfc] sm:h-10 sm:w-10">
            <Plus className="h-3.5 w-3.5 text-[#205b86] sm:h-4 sm:w-4" strokeWidth={2.5} />
          </span>
          <span className="rounded-full border border-[#b7d6d9] bg-[#f7fcfc] px-3.5 py-1.5 text-xs font-medium text-[#205b86] sm:px-5 sm:py-2">
            Dubai's First 0% Social Club
          </span>
        </div>

        <div className="relative mx-auto mt-5 max-w-[calc(100vw-2rem)] sm:mt-8 sm:max-w-4xl">
          <h1 className="gsap-reveal relative text-balance text-3xl font-bold leading-[1.1] tracking-tight text-[#205b86] sm:text-4xl md:text-5xl">
            Meet people in Dubai,{" "}
            <span className="text-[#8fb9c0]">without the pressure to drink.</span>
          </h1>
        </div>

        <p className="gsap-reveal mx-auto mt-4 max-w-[calc(100vw-2.5rem)] text-pretty text-sm leading-relaxed text-[#486f7d] sm:mt-6 sm:max-w-2xl sm:text-base md:text-lg">
          Dubai 0% Club is a friendly social community for people who want to connect, go out, stay
          active, and enjoy the city without alcohol being the main event. Drink anything you like.
          Come as you are.
        </p>

        <div className="gsap-reveal mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-3">
          <a
            href={JOIN_EMAIL_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#205b86] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:px-5 sm:py-2.5"
          >
            Join the Club
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#d9ecee] px-4 py-2 text-sm font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0 sm:px-5 sm:py-2.5"
          >
            Browse Events
          </a>
        </div>

      </div>

      <div className="hero-media-frame relative mt-8 h-[230px] w-full max-w-full overflow-x-clip overflow-y-visible sm:mt-20 sm:h-[340px]">
        <div className="brand-marquee absolute left-0 top-2 flex w-max gap-3 px-3 sm:top-5 sm:gap-5 sm:px-5">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="hero-card relative h-[175px] w-[185px] shrink-0 overflow-hidden rounded-[1rem] bg-[#d9ecee] shadow-[0_14px_32px_-18px_rgba(32,91,134,0.42)] sm:h-[260px] sm:w-[280px] sm:rounded-[1.35rem]"
              data-lift={(i % 4) * 10}
              style={{ "--lift": `${(i % 4) * 10}px` } as CSSProperties}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full rounded-[inherit] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
