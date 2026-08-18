import { useEffect, useRef, useState } from "react";
import SplitReveal from "./SplitReveal";

const STEPS = [
  { number: "01", label: "Submit request" },
  { number: "02", label: "Match location and models" },
  { number: "03", label: "Shoot day" },
  { number: "04", label: "Post-production delivered" },
];

const GRID_PLACEMENT = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-4 lg:row-start-1",
];

function StepCard({ step, index, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-pressed={isActive}
      className={`flex h-[204px] w-full flex-col justify-center gap-8 rounded-[6px] p-8 text-left transition-colors ${GRID_PLACEMENT[index]} ${
        isActive ? "bg-[#181818]" : "border border-[#3e3e3e]"
      }`}
    >
      <p className="w-full text-[42px] leading-[1.2] text-[#3e3e3e]">{step.number}</p>
      <p className="w-full text-2xl leading-[1.2] text-white">{step.label}</p>
    </button>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el || !mq.matches) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -el.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      const step = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
      setActiveStep(step);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="process" ref={wrapperRef} className="relative bg-black lg:h-[400vh]">
      <div className="flex flex-col px-5 py-16 sm:px-10 sm:py-20 lg:sticky lg:top-0 lg:h-screen lg:justify-center lg:px-20 lg:py-0">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:gap-5">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-[#3e3e3e]/40">
            <div
              className="absolute top-0 h-full w-1/4 rounded-full bg-[#ff0f10] transition-all duration-300"
              style={{ left: `${activeStep * 25}%` }}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:grid-rows-2">
            <div className="flex items-center justify-center py-8 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:py-0">
              <SplitReveal
                mode="words"
                triggerOnView
                stagger={0.03}
                text="From request to final image"
                className="block text-center text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[42px]"
              />
            </div>

            {STEPS.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isActive={activeStep === index}
                onSelect={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
