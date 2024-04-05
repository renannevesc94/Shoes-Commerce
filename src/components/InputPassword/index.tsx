import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { ClosedEyes, OpenedEyes } from "../Icons/index";

type InputPasswordProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, ...props }: InputPasswordProps, ref) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          placeholder={isInputFocused ? "" : label}
          className={`rounded-lg border-2 border-gray-100 w-full h-12 focus:outline-none pl-2 ${
            isInputFocused ? "pt-2" : ""
          }`}
          onFocus={() => {
            setIsInputFocused(true);
          }}
          onBlur={e => {
            if (!e.target.value) setIsInputFocused(false);
          }}
        />
        {isInputFocused && (
          <label className="absolute top-1 left-2 text-xs text-gray-500">{label}</label>
        )}

        <button
          className="absolute top-1 right-2 text-xs text-gray-500 w-8 h-8"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <OpenedEyes /> : <ClosedEyes />}
        </button>
      </div>
    );
  }
);
