import { useEffect, useRef, useState } from "react";

export default function SplitReveal({
  text,
  className = "",
  tokenClassName = "",
  mode = "chars",
  stagger = 0.03,
  baseDelay = 0,
  triggerOnView = false,
}) {
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!triggerOnView) {
      const timeout = setTimeout(() => setRevealed(true), 60);
      return () => clearTimeout(timeout);
    }

    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  const tokens = mode === "chars" ? Array.from(text) : text.split(/(\s+)/);

  return (
    <span ref={rootRef} className={className}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return token;
        }
        return (
          <span
            key={i}
            className={`inline-block transition-[transform,filter,opacity] duration-700 ease-out ${tokenClassName}`}
            style={{
              transitionDelay: `${baseDelay + i * stagger}s`,
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(0.4em)",
              filter: revealed ? "blur(0px)" : "blur(10px)",
            }}
          >
            {token}
          </span>
        );
      })}
    </span>
  );
}
