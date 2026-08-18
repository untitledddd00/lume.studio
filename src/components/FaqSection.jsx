import { useState } from "react";
import plus from "../assets/faq/plus.svg";
import SplitReveal from "./SplitReveal";

const FAQS = [
  {
    question: "How long does setup take?",
    answer:
      "On average, it takes 3–5 business days from your initial request to a confirmed shoot date — depending on location availability and model casting. For urgent projects, we offer expedited planning.",
  },
  {
    question: "Can I use my own location or model?",
    answer:
      "Yes — bring your own location or talent, or choose from ours. We'll build the plan around whatever you already have in place.",
  },
  {
    question: "What's included in post-production?",
    answer:
      "Color correction, retouching, and final export in the formats you need — ready to publish or print, delivered within your agreed turnaround time.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="w-full rounded-[6px] bg-[#181818] p-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <p className="flex-1 text-xl leading-[1.2] text-white">{question}</p>
        <img
          src={plus}
          alt=""
          className={`size-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <p className="overflow-hidden text-base font-light leading-[1.4] text-[#c9c9c9]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="flex flex-col items-center gap-16 bg-black px-5 py-16 sm:px-10 sm:py-20 lg:py-24">
      <h2 className="text-center text-3xl leading-[1.2] text-white sm:text-4xl lg:text-[42px]">
        <SplitReveal mode="chars" triggerOnView stagger={0.05} text="FAQ" />
      </h2>

      <div className="flex w-full max-w-[700px] flex-col gap-5">
        {FAQS.map((faq, index) => (
          <FaqItem
            key={faq.question}
            {...faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}
