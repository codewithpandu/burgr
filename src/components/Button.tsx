import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[12px] font-bold text-base transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const primaryStyles =
  "bg-primary text-on-primary hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0";

const secondaryStyles =
  "bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background";

const yellowStyles =
  "bg-secondary text-on-secondary hover:bg-secondary-hover hover:-translate-y-0.5 active:translate-y-0";

type Variant = "primary" | "secondary" | "yellow";

function variantStyles(variant: Variant) {
  if (variant === "primary") return primaryStyles;
  if (variant === "secondary") return secondaryStyles;
  return yellowStyles;
}

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  href: string;
  variant?: Variant;
  className?: string;
}

interface ButtonButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  href?: undefined;
  variant?: Variant;
  className?: string;
}

export function Button({
  variant = "primary",
  className = "",
  href,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles(variant)} ${className}`}
      {...rest}
    />
  );
}

export function ButtonElement({
  variant = "primary",
  className = "",
  ...props
}: ButtonButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles(variant)} ${className}`}
      {...props}
    />
  );
}
