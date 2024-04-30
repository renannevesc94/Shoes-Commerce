import { ComponentPropsWithoutRef, forwardRef } from "react";

type CheckboxWithLabelProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const CheckboxWithLabel = forwardRef<HTMLInputElement, CheckboxWithLabelProps>(
  ({ label, ...props }: CheckboxWithLabelProps, ref) => {
    return (
      <label htmlFor={props.id} className="flex items-center justify-items-center gap-1 ">
        <input type="checkbox" {...props} ref={ref} />
        {label}
      </label>
    );
  }
);
