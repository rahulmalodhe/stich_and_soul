"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Use native scroll - no smooth scroll library
    // This ensures immediate response with zero delay
    document.documentElement.style.scrollBehavior = "auto";
  }, []);

  return <>{children}</>;
}
