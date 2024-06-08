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
      className={`w-fit rounded-full p-2 py-1 text-xs leading-none text-black`}
    >
      {text}
    </div>
  );
}

export default Badge;
