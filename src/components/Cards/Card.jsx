function Card({
  styles = {},
  className = "",
  children,
  onClick,
  borderColor = "neutral",
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border-[1px] border-opacity-30  ${borderColor === "neutral" ? "bg-[#171717]" : ""} ${borderColor === "yellow" ? "border-yellow-400" : ""} p-4 px-6 text-white ${className}`}
      style={{
        // borderWidth: "1px",
        // borderColor: "rgba(218,165,33, .3)",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
