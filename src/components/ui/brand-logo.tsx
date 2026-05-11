import { cn } from "@/lib/utils";

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src="/dubai-0-logo-cropped.png"
      alt="Dubai 0% Club"
      className={cn("h-9 w-auto object-contain sm:h-10", className)}
      decoding="async"
    />
  );
}
