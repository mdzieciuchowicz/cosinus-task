import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const buttonVariants = cva(
  [
    "flex items-center rounded-full transition-colors duration-300 focus:outline-none text-sans group/icon",
    "focus-visible:outline-primary focus-visible:ourline-offset-2 focus-visible:outline-1 focus-visible:outline-offset-gray-600",
  ],
  {
    variants: {
      size: {
        lg: "h-8 md:h-10.5 gap-3 px-4 md:px-8 py-1.5 [--icon-size:1.875rem]",
        md: "h-8 gap-3 px-1.5 md:px-3 py-1 [--icon-size:1.625rem]",
      },
      variant: {
        solid: [
          "bg-primary hover:bg-primary-400 focus:bg-primary-400 active:bg-bg-primary-300 disabled:bg-primary-100",
          "text-gray-100 disabled:text-gray-300",
        ],
      },
    },
    defaultVariants: {
      size: "lg",
      variant: "solid",
    },
  },
);

type ButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  icon?: React.ReactNode;
} & VariantProps<typeof buttonVariants>;


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
(
    { children, className, size, variant, icon, ...rest },
    ref,
  ) => {

    return (
      <button ref={ref} className={clsx(buttonVariants({ size, variant }), className)} {...rest}>
        {children}
        {icon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
