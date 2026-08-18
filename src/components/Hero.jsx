import heroPhoto from "../assets/hero/hero-photo.png";
import logo from "../assets/hero/logo.svg";
import arrow from "../assets/hero/arrow.svg";
import SplitReveal from "./SplitReveal";
import ArrowIconButton from "./ArrowIconButton";

const NAV_LINKS = [
  { label: "about us", href: "#about" },
  { label: "our process", href: "#process" },
  { label: "who it's for", href: "#who-its-for" },
  { label: "faq", href: "#faq" },
  { label: "contact us", href: "#contact" },
];

function BookMeetingButton() {
  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <a
        href="#contact"
        className="rounded-md bg-[#ff0f10] px-4 py-2.5 font-medium text-white text-xs whitespace-nowrap sm:px-6 sm:py-3 sm:text-sm"
      >
        book a meeting
      </a>
      <ArrowIconButton arrow={arrow} className="size-9 sm:size-[41px]" iconClassName="size-4 sm:size-5" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <img
        src={heroPhoto}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />

      <div className="relative mx-auto flex min-h-[600px] max-w-[1440px] flex-col justify-between gap-16 px-5 py-6 sm:min-h-[750px] sm:px-10 sm:py-8 lg:min-h-[924px] lg:px-20 lg:py-11">
        <div
          className="flex flex-wrap items-center justify-between gap-4 opacity-0"
          style={{ animation: "fade-in-up 0.8s ease-out 0.1s forwards" }}
        >
          <img src={logo} alt="Lume Studio" className="h-8 w-auto shrink-0 sm:h-11" />

          <nav className="hidden items-center gap-8 whitespace-nowrap font-light text-[#c9c9c9] text-base lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <BookMeetingButton />
        </div>

        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end sm:gap-6">
            <SplitReveal
              text="Lume"
              baseDelay={0.1}
              stagger={0.03}
              className="text-6xl leading-[1.1] sm:text-8xl lg:text-[100px] lg:leading-[1.2]"
            />
            <SplitReveal
              text="Studio"
              baseDelay={0.22}
              stagger={0.03}
              className="text-6xl leading-[1.1] sm:text-8xl lg:text-[100px] lg:leading-[1.2]"
            />
          </div>

          <div className="flex max-w-[585px] flex-col gap-4 sm:gap-6">
            <SplitReveal
              mode="words"
              text="A space that brings together professional photographers and studios to create expressive portraits."
              baseDelay={0.55}
              stagger={0.02}
              className="text-lg leading-[1.2] sm:text-2xl"
            />
            <SplitReveal
              mode="words"
              text="We organize the entire shooting process: selection of locations, models, equipment, and post-production — all of it, so you can focus on creativity while we take care of the rest."
              baseDelay={0.85}
              stagger={0.012}
              className="text-[#c9c9c9] text-base leading-[1.4] font-light sm:text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
