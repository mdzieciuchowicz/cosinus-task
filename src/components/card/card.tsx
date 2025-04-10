import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const cardVariants = cva(["bg-gray-100 border border-gray-150"], {
  variants: {
    size: {
      md: "rounded-xl shadow-md shadow-gray/20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CardProps = VariantProps<typeof cardVariants> & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className, size, ...rest }, ref) => {
  return (
    <div ref={ref} className={clsx(cardVariants({ size }), className)} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export { Card, type CardProps };
