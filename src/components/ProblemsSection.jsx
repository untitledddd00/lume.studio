import dot from "../assets/chaos/dot.svg";
import arrow from "../assets/hero/arrow.svg";
import SplitReveal from "./SplitReveal";
import StaggerReveal from "./StaggerReveal";
import ArrowIconButton from "./ArrowIconButton";

const PROBLEMS = [
  { title: "Location", description: "Finding locations takes days" },
  { title: "Models", description: "Casting models is a hassle" },
  { title: "Time", description: "Post-production eats your time" },
];

function ProblemCard({ title, description }) {
  return (
    <div className="flex flex-col gap-8 rounded-[6px] border border-[#3e3e3e] p-8">
      <img src={dot} alt="" className="size-4" />
      <div className="flex flex-col gap-4">
        <p className="text-2xl text-white">{title}</p>
        <p className="text-xl font-light text-[#c9c9c9]">{description}</p>
      </div>
    </div>
  );
}

function CtaCard() {
  return (
    <div className="relative flex min-h-[185px] items-end justify-end rounded-[6px] bg-[#181818] p-8">
      <div className="flex items-center gap-1.5">
        <a
          href="#contact"
          className="rounded-md bg-[#ff0f10] px-6 py-3 font-medium text-sm text-white whitespace-nowrap"
        >
          book a meeting
        </a>
        <ArrowIconButton arrow={arrow} />
      </div>
    </div>
  );
}

export default function ProblemsSection() {
  return (
    <section className="bg-black px-5 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-[200px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:gap-16">
        <h2 className="text-center text-2xl leading-[1.2] text-white sm:text-3xl lg:text-[42px]">
          <SplitReveal mode="words" triggerOnView stagger={0.025} text="We handle the chaos — you handle the shot" />
        </h2>

        <StaggerReveal className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.15}>
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
          <CtaCard />
        </StaggerReveal>
      </div>
    </section>
  );
}
