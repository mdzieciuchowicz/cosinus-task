import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { useId } from "react";

const inputVariants = cva(["flex rounded-lg transition-colors duration-300 focus:outline-none"], {
  variants: {
    size: {
      md: "h-10.5 gap-3 px-4",
    },
    variant: {
      outline: [
        "placeholder:text-gray-200 text-gray-400",
        "border-1 border-gray-200 hover:border-gray-300 focus:border-primary disabled:border-gray-300 data-[error]:border-error",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

type InputProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
} & VariantProps<typeof inputVariants> &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, id: _id, label, error, ...rest }, ref) => {
    const generatedId = useId();
    const id = _id ?? generatedId;

    return (
      <div className="flex flex-col">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          ref={ref}
          id={id}
          className={clsx(inputVariants({ size, variant }), className)}
          data-error={error ? true : undefined}
          {...rest}
        />
        {error && <p className="text-error">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, type InputProps };
