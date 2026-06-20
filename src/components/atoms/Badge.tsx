type Variant = "gold" | "dark" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  gold: "bg-gold-400 text-stone-900",
  dark: "bg-stone-900 text-gold-300",
  outline: "border border-gold-400 text-gold-500",
};

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
