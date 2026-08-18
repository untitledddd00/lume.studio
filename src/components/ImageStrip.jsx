import strip1 from "../assets/strip/strip-1.png";
import strip2 from "../assets/strip/strip-2.png";
import strip3 from "../assets/strip/strip-3.png";
import strip4 from "../assets/strip/strip-4.png";
import strip5 from "../assets/strip/strip-5.png";
import strip6 from "../assets/strip/strip-6.png";
import SplitReveal from "./SplitReveal";
import RippleImage from "./RippleImage";

const IMAGES = [strip1, strip2, strip3, strip4, strip5, strip6];

export default function ImageStrip() {
  return (
    <section className="flex flex-col items-center gap-10 bg-black py-16 sm:py-20 lg:gap-16 lg:py-24">
      <SplitReveal
        mode="words"
        triggerOnView
        stagger={0.02}
        text="We take care of the entire shooting process, from the selection of locations and equipment to post-production, allowing you to focus on creating an artistic image rather than wasting time on technical nuances."
        className="block max-w-[620px] px-5 text-center text-base leading-[1.4] text-[#bebebe] sm:text-lg"
      />

      <div className="grid w-full grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-1.5 lg:flex">
        {IMAGES.map((src, i) => (
          <RippleImage key={i} src={src} className="relative aspect-square w-full rounded-[6px] lg:flex-1" />
        ))}
      </div>
    </section>
  );
}
