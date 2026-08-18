import { useEffect, useId, useRef } from "react";

export default function RippleImage({ src, alt = "", className = "", intensity = 45 }) {
  const rawId = useId().replace(/:/g, "");
  const filterId = `ripple-${rawId}`;
  const displaceRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tick = () => {
    const target = targetRef.current;
    const current = currentRef.current;
    const next = current + (target - current) * 0.12;
    currentRef.current = next;
    if (displaceRef.current) displaceRef.current.setAttribute("scale", next.toFixed(2));

    if (Math.abs(target - next) > 0.3) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      currentRef.current = target;
      if (displaceRef.current) displaceRef.current.setAttribute("scale", target);
      rafRef.current = null;
    }
  };

  const goTo = (target) => {
    targetRef.current = target;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => goTo(intensity)}
      onMouseLeave={() => goTo(0)}
    >
      <svg width="0" height="0" className="absolute">
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.018" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap
            ref={displaceRef}
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <img
        src={src}
        alt={alt}
        style={{ filter: `url(#${filterId})` }}
        className="size-full scale-[1.08] object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-100"
      />
    </div>
  );
}
