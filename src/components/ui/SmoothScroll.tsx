import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ duration: 1.2, lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
