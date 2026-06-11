import { useState, useEffect, useRef } from "react";

/**
 * useFadeUp
 *
 * Returns [ref, isVisible].
 * Attach `ref` to any element; `isVisible` flips true once
 * the element scrolls into the viewport (threshold: 8%).
 *
 * Usage:
 *   const [ref, vis] = useFadeUp();
 *   <div ref={ref} style={{ opacity: vis ? 1 : 0 }}>...</div>
 */
export function useFadeUp(threshold = 0.08) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once; no need to watch after reveal
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
