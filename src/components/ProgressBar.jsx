function ProgressBar({ min = 0, max = 100, value = "" }) {
  let width = (value / max) * 100;
  if (width >= 100) width = 100;

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <div
          className="h-4"
          style={{
            width: `${width}%`,
            borderRadius: "3px",
            backgroundColor:
              width < 30
                ? "#4b2c76"
                : width >= 30 && width < 59
                  ? "#2a5829"
                  : "#294e58",
          }}
        ></div>
      </div>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

export default ProgressBar;
