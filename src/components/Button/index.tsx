import { ComponentPropsWithoutRef } from "react";
import { LoadingIcon } from "../Icons";

type ButtonProps = {
  variant: "primary" | "outline";
  isLoading: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant, isLoading, ...props }: ButtonProps) => {
  const primary = "bg-primary text-whitep";
  const outline = "";
  return (
    <button
      className={`${
        variant === "primary" ? primary : outline
      } h-11 rounded-3xl flex justify-center items-center`}
      {...props}
    >
      {isLoading ? <LoadingIcon /> : children}
    </button>
  );
};
