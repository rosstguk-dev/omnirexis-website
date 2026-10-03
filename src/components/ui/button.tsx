import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-tight transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-cta text-pine-fg hover:bg-cta-hover",
        pine: "bg-cta text-pine-fg hover:bg-cta-hover",
        outline:
          "border border-line-strong bg-transparent text-bone hover:bg-ink-3",
        ghost: "text-bone hover:bg-ink-3",
        paper: "bg-bone text-ink hover:bg-bone/90",
        inkOutline:
          "border border-line-on-ink bg-transparent text-bone hover:bg-ink-3",
      },
      size: {
        sm: "h-10 rounded-sm px-4",
        md: "h-11 rounded-md px-5",
        lg: "h-12 rounded-md px-6",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
