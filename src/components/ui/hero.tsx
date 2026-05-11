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
      className="hero-section relative w-full overflow-hidden bg-[#eef8f8] pb-10 pt-28 sm:pt-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="hero-plus flex h-10 w-10 items-center justify-center rounded-full border border-[#b7d6d9] bg-[#f7fcfc] sm:h-11 sm:w-11">
            <Plus className="h-5 w-5 text-[#205b86]" strokeWidth={2.5} />
          </span>
          <span className="rounded-full border border-[#b7d6d9] bg-[#f7fcfc] px-4 py-2.5 text-sm font-medium text-[#205b86] sm:px-6 sm:py-3">
            Dubai's First 0% Social Club
          </span>
        </div>

        <div className="relative mx-auto mt-8 max-w-[calc(100vw-2rem)] sm:mt-10 sm:max-w-4xl">
          <h1 className="gsap-reveal relative text-balance text-[clamp(1.9rem,8vw,2.25rem)] font-bold leading-[1.08] tracking-tight text-[#205b86] sm:text-5xl md:text-6xl">
            Meet people in Dubai,{" "}
            <span className="text-[#8fb9c0]">without the pressure to drink.</span>
          </h1>
        </div>

        <p className="gsap-reveal mx-auto mt-6 max-w-[calc(100vw-2rem)] text-pretty text-base leading-relaxed text-[#486f7d] sm:max-w-2xl md:text-lg">
          Dubai 0% Club is a friendly social community for people who want to connect, go out, stay
          active, and enjoy the city without alcohol being the main event. Drink anything you like.
          Come as you are.
        </p>

        <div className="gsap-reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={JOIN_EMAIL_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#205b86] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17466d] active:translate-y-0 sm:px-6"
          >
            Join the Club
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9ecee] px-5 py-3 text-sm font-medium text-[#205b86] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7e1e4] active:translate-y-0 sm:px-6"
          >
            Browse Events
          </a>
        </div>

      </div>

      <div className="hero-media-frame relative mt-24 h-[320px] w-full max-w-full overflow-x-clip overflow-y-visible sm:mt-28 sm:h-[380px]">
        <div className="brand-marquee absolute left-0 top-5 flex w-max gap-4 px-4 sm:top-6 sm:gap-6 sm:px-6">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="hero-card relative h-[220px] w-[236px] shrink-0 overflow-hidden rounded-[1.35rem] bg-[#d9ecee] shadow-[0_22px_45px_-30px_rgba(32,91,134,0.42)] sm:h-[280px] sm:w-[300px]"
              data-lift={(i % 4) * 14}
              style={{ "--lift": `${(i % 4) * 14}px` } as CSSProperties}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full rounded-[1.35rem] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
