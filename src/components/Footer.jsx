import logo from "../assets/hero/logo.svg";
import arrow from "../assets/hero/arrow.svg";
import ArrowIconButton from "./ArrowIconButton";
import SplitReveal from "./SplitReveal";

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
        className="rounded-md bg-[#ff0f10] px-6 py-3 font-medium text-sm text-white whitespace-nowrap"
      >
        book a meeting
      </a>
      <ArrowIconButton arrow={arrow} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#181818]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:px-20">
        <div className="flex flex-col items-start gap-16">
          <img src={logo} alt="Lume Studio" className="h-8 w-auto shrink-0 sm:h-11" />
          <a href="mailto:lume.studio@gmail.com" className="text-xl text-white">
            <SplitReveal
              mode="chars"
              triggerOnView
              stagger={0.015}
              text="lume.studio@gmail.com"
              tokenClassName="underline underline-offset-2"
            />
          </a>
        </div>

        <nav className="flex flex-col gap-8 font-light text-[#c9c9c9] text-base">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              <SplitReveal mode="chars" triggerOnView stagger={0.02} text={link.label} />
            </a>
          ))}
        </nav>

        <BookMeetingButton />
      </div>

      <div className="flex flex-col gap-2 bg-[#010200] px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-20">
        <p className="font-light text-base text-white">
          <SplitReveal mode="chars" triggerOnView stagger={0.03} text="© 2026" />
        </p>
        <div className="flex gap-8 font-light text-base text-white">
          <p>
            <SplitReveal mode="chars" triggerOnView stagger={0.02} text="privacy policy" />
          </p>
          <p>
            <SplitReveal mode="chars" triggerOnView stagger={0.02} text="terms of use" />
          </p>
        </div>
      </div>
    </footer>
  );
}
