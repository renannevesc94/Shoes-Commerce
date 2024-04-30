import { ComponentPropsWithoutRef } from "react";

type CheckboxWithLabelProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const CheckboxWithLabel = ({ label, ...props }: CheckboxWithLabelProps) => {
  return (
    <label htmlFor={props.id} className="flex items-center justify-items-center gap-1 ">
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
};
