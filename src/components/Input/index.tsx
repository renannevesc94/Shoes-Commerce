import { ComponentPropsWithoutRef, forwardRef, useState } from "react";

type InputProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }: InputProps, ref) => {
    const [isInputFocused, setInputFocused] = useState(false);

    return (
      <div className="relative">
        <input
          placeholder={isInputFocused ? "" : label}
          {...props}
          ref={ref}
          className={`rounded-lg border-2 border-gray-100 w-full h-12 focus:outline-none pl-2 ${
            isInputFocused ? "pt-2" : ""
          }`}
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={e => {
            if (!e.target.value) {
              setInputFocused(false);
            }
          }}
        />
        {isInputFocused && (
          <label className="absolute top-1 left-2 text-xs text-gray-500">{label}</label>
        )}
      </div>
    );
  }
);
