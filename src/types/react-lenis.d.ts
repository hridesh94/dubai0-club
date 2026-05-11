declare module "@studio-freight/react-lenis" {
  import type { ComponentPropsWithoutRef, ReactNode } from "react";

  type LenisOptions = {
    duration?: number;
    lerp?: number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    [key: string]: unknown;
  };

  type ReactLenisProps = ComponentPropsWithoutRef<"div"> & {
    children?: ReactNode;
    root?: boolean;
    options?: LenisOptions;
    autoRaf?: boolean;
    rafPriority?: number;
  };

  export function ReactLenis(props: ReactLenisProps): JSX.Element;
}
