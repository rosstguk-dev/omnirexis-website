import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/brand/symbol.svg"
      alt=""
      width={66}
      height={50}
      className={cn("h-7 w-auto", className)}
    />
  );
}

export function Wordmark({
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <img
      src="/brand/logo.svg"
      alt="Omnirexis"
      width={195}
      height={40}
      className={cn("h-8 w-auto max-w-48 sm:h-9 sm:max-w-56", className)}
    />
  );
}
