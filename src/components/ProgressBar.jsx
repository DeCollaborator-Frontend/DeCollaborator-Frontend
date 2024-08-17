function ProgressBar({ min = 0, max = 100, value = "" }) {
  const width = (value / (max - min)) * 100;

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <div
          className="h-3"
          style={{
            width: `${width}%`,
            borderRadius: "3px",
            backgroundColor:
              width < 30
                ? "rebeccapurple"
                : width >= 30 && width < 59
                  ? "green"
                  : "turquoise",
          }}
        ></div>
      </div>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

export default ProgressBar;
