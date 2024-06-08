function Badge({ className = "", variant = "", colorBg = "", text = "" }) {
  function getBgColor() {
    let bgColor = "";

    switch (variant) {
      case "success":
        bgColor = "#85ff85";
        break;
      case "progress":
        bgColor = "#ffe871";
        break;
    }

    return bgColor;
  }
  return (
    <div
      style={{
        backgroundColor: getBgColor(),
      }}
      className={`w-fit rounded-full px-[.8em] py-[.5em] text-xs font-semibold leading-none text-gray-800`}
    >
      {text}
    </div>
  );
}

export default Badge;
