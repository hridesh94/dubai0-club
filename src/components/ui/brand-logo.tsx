import { cn } from "@/lib/utils";

const logoSrc = `${import.meta.env.BASE_URL}dubai-0-logo-cropped.png`;

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Dubai 0% Club"
      className={cn("h-9 w-auto object-contain sm:h-10", className)}
      decoding="async"
    />
  );
}
