import SplitReveal from "./SplitReveal";

export default function IntroText() {
  return (
    <section id="about" className="flex justify-center bg-black px-5 py-20 sm:py-32 lg:py-[200px]">
      <SplitReveal
        mode="words"
        triggerOnView
        stagger={0.025}
        text="Create expressive portraits by bringing together the best photographers, models, and studios in one space."
        className="block max-w-[783px] text-center text-2xl leading-[1.2] text-white sm:text-3xl lg:text-[42px]"
      />
    </section>
  );
}
