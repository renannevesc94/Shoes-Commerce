import { ComponentPropsWithoutRef, forwardRef } from "react";
import { LoadingIcon } from "../Icons";

type ButtonProps = {
  variant: "primary" | "outline" | "success";
  isFull?: boolean;
  isLoading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, isFull, isLoading, ...props }: ButtonProps, ref) => {
    const primary = "bg-primary text-whiteDefault";
    const outline = "border-2 border-slate-400 shadow-2xl shadow-slate-700";
    /* const success = "bg-lime-600"; */
    return (
      <button
        ref={ref}
        data-cy="button-login"
        className={`${variant === "primary" ? primary : outline} 
          ${
            isFull ? " w-full h-full  " : ""
          }h-11 rounded-lg flex justify-center items-center font-semibold`}
        {...props}
      >
        {isLoading ? <LoadingIcon /> : children}
      </button>
    );
  }
);
