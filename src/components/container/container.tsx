import clsx from "clsx";
import React from "react";

const Container = ({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx("container mx-auto px-2 md:px-4", className)} {...rest}>
      {children}
    </div>
  );
};

export { Container };
