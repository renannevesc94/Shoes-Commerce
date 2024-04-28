import { ComponentPropsWithoutRef } from "react";
import { LoadingIcon } from "../Icons";

type ButtonProps = {
  variant: "primary" | "outline";
  isFull?: boolean;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant, isFull, isLoading, ...props }: ButtonProps) => {
  const primary = "bg-primary text-whiteDefault";
  const outline = "";
  return (
    <button
      data-cy="button-login"
      className={`${variant === "primary" ? primary : outline} ${
        isFull ? " w-full h-full " : ""
      }h-11 rounded-lg flex justify-center items-center`}
      {...props}
    >
      {isLoading ? <LoadingIcon /> : children}
    </button>
  );
};
