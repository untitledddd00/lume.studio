import iconPhotographers from "../assets/who-its-for/icon-photographers.svg";
import iconBrands from "../assets/who-its-for/icon-brands.svg";
import iconPrivateClients from "../assets/who-its-for/icon-private-clients.svg";
import arrow from "../assets/hero/arrow.svg";
import SplitReveal from "./SplitReveal";
import ArrowIconButton from "./ArrowIconButton";

const CARDS = [
  { icon: iconPhotographers, label: "Photographers and studios" },
  { icon: iconBrands, label: "Brands" },
  { icon: iconPrivateClients, label: "Private clients" },
];

function Card({ icon, label }) {
  return (
    <div className="flex flex-col gap-8">
      <img src={icon} alt="" className="size-8" />
      <div className="flex items-end gap-8">
        <p className="flex-1 text-2xl leading-[1.2] text-white">{label}</p>
        <ArrowIconButton arrow={arrow} label={label} />
      </div>
    </div>
  );
}

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="flex flex-col items-center gap-16 bg-[#181818] px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <h2 className="text-center text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[42px]">
        <SplitReveal mode="words" triggerOnView stagger={0.04} text="Who it's for" />
      </h2>

      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        {CARDS.map((card) => (
          <Card key={card.label} {...card} />
        ))}
      </div>
    </section>
  );
}
