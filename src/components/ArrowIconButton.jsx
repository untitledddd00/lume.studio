export default function ArrowIconButton({
  href = "#contact",
  arrow,
  label = "book a meeting",
  className = "size-[41px]",
  iconClassName = "size-5",
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#ff0f10] ${className}`}
    >
      <img
        src={arrow}
        alt=""
        className={`absolute transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0 ${iconClassName}`}
      />
      <img
        src={arrow}
        alt=""
        className={`absolute -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${iconClassName}`}
      />
    </a>
  );
}
