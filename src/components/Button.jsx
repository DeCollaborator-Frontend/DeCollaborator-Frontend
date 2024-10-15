import { cn } from "@/lib/utils";

function Button({ variant = "filled", text = "", className = "", children }) {
  return (
    <button
      className={cn(
        `whitespace-nowrap rounded-lg border-2 border-yellow-400 px-[1.65em] py-[1.1em] text-xl leading-4
        ${
          variant === "fill"
            ? "bg-yellow-400 font-bold text-black"
            : variant === "outline"
              ? "text-yellow-400"
              : ""
        } ${className}`,
        className,
      )}
    >
      {text || children}
    </button>
  );
}

export default Button;
