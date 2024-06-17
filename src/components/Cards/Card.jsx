function Card({ styles = {}, className = "", children, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`border-1 rounded-xl border  bg-[#171717] p-4 px-6 text-white ${className}`}
      style={{
        borderWidth: "1px",
        borderColor: "rgba(218,165,33, .3)",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
