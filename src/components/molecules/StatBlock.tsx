interface StatBlockProps {
  value: string;
  label: string;
  detail?: string;
  inverted?: boolean; // true = dark bg (gold value, white label), false = light bg (gold value, dark label)
  className?: string;
}

export default function StatBlock({
  value,
  label,
  detail,
  inverted = false,
  className = "",
}: StatBlockProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-serif text-4xl font-bold text-gold-400 leading-none">
        {value}
      </span>
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          inverted ? "text-white" : "text-stone-900"
        }`}
      >
        {label}
      </span>
      {detail && (
        <span className={`text-xs ${inverted ? "text-stone-500" : "text-stone-400"}`}>
          {detail}
        </span>
      )}
    </div>
  );
}
