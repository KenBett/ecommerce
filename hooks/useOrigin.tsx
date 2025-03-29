// @\hooks\useOrigin.tsx
"use client";
import { useState, useEffect } from "react";
export const UseOrigin = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
    useEffect(() => {
      setMounted(true)
    }, []);

    if (!mounted) {
      return ''
    }
    
      return origin;
};
