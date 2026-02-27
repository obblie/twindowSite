import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const baseClass =
  "focus-ring inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200";

const variants = {
  primary: "bg-accent text-accent-foreground shadow-soft hover:brightness-110",
  secondary: "border border-border bg-card/75 text-foreground hover:bg-card",
  ghost: "text-foreground/85 hover:bg-card/65"
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button"
}: ButtonProps) {
  const classes = cn(baseClass, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
