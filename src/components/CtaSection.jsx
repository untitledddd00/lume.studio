import ctaBg from "../assets/cta/cta-bg.png";
import arrow from "../assets/hero/arrow.svg";
import SplitReveal from "./SplitReveal";
import ArrowIconButton from "./ArrowIconButton";
import RippleImage from "./RippleImage";

export default function CtaSection() {
  return (
    <section id="contact" className="bg-black px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="relative mx-auto flex min-h-[280px] w-full max-w-[1280px] flex-col justify-between overflow-hidden rounded-[6px] bg-[#010200] p-6 sm:min-h-[360px] sm:p-10 lg:min-h-[450px] lg:p-20">
        <RippleImage src={ctaBg} className="absolute inset-0" />

        <SplitReveal
          mode="words"
          triggerOnView
          stagger={0.03}
          text="Ready to create? Schedule a call right now"
          className="relative block max-w-[451px] text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[42px]"
        />

        <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <a
            href="mailto:lume.studio@gmail.com"
            className="text-lg text-white underline underline-offset-2 sm:text-xl"
          >
            lume.studio@gmail.com
          </a>

          <div className="flex items-center gap-1.5">
            <a
              href="mailto:lume.studio@gmail.com"
              className="rounded-md bg-[#ff0f10] px-6 py-3 font-medium text-sm text-white whitespace-nowrap"
            >
              book a meeting
            </a>
            <ArrowIconButton arrow={arrow} href="mailto:lume.studio@gmail.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
