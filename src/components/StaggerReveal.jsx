import { Children, useEffect, useRef, useState } from "react";

export default function StaggerReveal({ children, className = "", stagger = 0.12 }) {
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {Children.map(children, (child, i) => (
        <div
          className="transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${i * stagger}s`,
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(28px)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
