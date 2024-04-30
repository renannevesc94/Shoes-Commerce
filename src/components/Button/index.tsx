import { ComponentPropsWithoutRef, forwardRef } from "react";
import { LoadingIcon } from "../Icons";

type ButtonProps = {
  variant: "primary" | "outline";
  isFull?: boolean;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, isFull, isLoading, ...props }: ButtonProps, ref) => {
    const primary = "bg-primary text-whiteDefault";
    const outline = "";
    return (
      <button
        ref={ref}
        data-cy="button-login"
        className={`${variant === "primary" ? primary : outline} ${
          isFull ? " w-full h-full " : ""
        }h-11 rounded-lg flex justify-center items-center`}
        {...props}
      >
        {isLoading ? <LoadingIcon /> : children}
      </button>
    );
  }
);
