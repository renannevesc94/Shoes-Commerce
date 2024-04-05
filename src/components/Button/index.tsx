import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  variant: "primary" | "outline";
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  const primary = "bg-primary text-whitep";
  const outline = "";
  return (
    <button className={`${variant === "primary" ? primary : outline} h-11 rounded-3xl `} {...props}>
      {children}
    </button>
  );
};
