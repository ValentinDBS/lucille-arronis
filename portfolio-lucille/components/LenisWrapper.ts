// components/LenisWrapper.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return null; // This component doesn't render anything
}
