import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ kicker, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
