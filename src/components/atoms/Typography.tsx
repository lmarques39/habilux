import { type HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const sizeClasses = {
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl",
};

export function Heading({
  as: Tag = "h2",
  size = "3xl",
  className = "",
  children,
  ...props
}: HeadingProps) {
  const isDisplay = Tag === "h1";
  return (
    <Tag
      className={`${isDisplay ? "font-display font-[200] tracking-wide" : "font-bold tracking-tight"} leading-tight ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "xl";
  muted?: boolean;
}

export function Text({
  size = "base",
  muted = false,
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={`leading-relaxed text-${size} ${muted ? "text-stone-500" : "text-stone-700"} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 ${className}`}
    >
      {children}
    </p>
  );
}
