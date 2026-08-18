import photo1 from "../assets/portfolio/portfolio-1.png";
import photo2 from "../assets/portfolio/portfolio-2.png";
import photo3 from "../assets/portfolio/portfolio-3.jpg";
import photo4 from "../assets/portfolio/portfolio-4.jpg";
import photo5 from "../assets/portfolio/portfolio-5.jpg";
import photo6 from "../assets/portfolio/portfolio-6.png";
import SplitReveal from "./SplitReveal";
import RippleImage from "./RippleImage";

const PHOTOS = [photo1, photo2, photo3, photo4, photo5, photo6];

export default function PortfolioGallery() {
  return (
    <section className="flex flex-col items-center gap-10 bg-black py-16 sm:gap-16 sm:py-20 lg:py-24">
      <SplitReveal
        mode="words"
        triggerOnView
        stagger={0.04}
        text="Portfolio / gallery"
        className="block text-center text-lg leading-[1.4] text-[#bebebe]"
      />

      <div className="grid w-full grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-5">
        {PHOTOS.map((src, i) => (
          <RippleImage key={i} src={src} className="relative aspect-square w-full rounded-[6px]" />
        ))}
      </div>
    </section>
  );
}
