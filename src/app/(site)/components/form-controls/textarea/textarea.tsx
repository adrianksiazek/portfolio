import React from "react";
import { TextAreaProps } from "./textarea.props";
import clsx from "clsx";

export const TextArea = ({ formControlClass, placeholder, name, error }: TextAreaProps) => {
  return (
    <>
      <textarea
        name={name}
        className={clsx(`${formControlClass} form-control`, error && "border-rose-500")}
        placeholder={placeholder}
        maxLength={5000}
        rows={4}
      />
      {error && <p className="text-rose-500">{error}</p>}
    </>
  );
};
