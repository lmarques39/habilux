type Variant = "primary" | "dark" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-500 text-white",
  dark: "bg-navy-900 text-blue-300",
  outline: "border border-blue-500 text-blue-500",
};

export default function Badge({
  children,
  variant = "primary",
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
