import React from "react";
import { InputProps } from "./input.props";
import clsx from "clsx";

export const Input = ({ formControlClass, name, error, type, placeholder, ...rest }: InputProps) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        maxLength={500}
        className={clsx(`${formControlClass} form-control`, error && "border-rose-500")}
        {...rest}
      />
      {error && <p className="text-rose-500">{error}</p>}
    </>
  );
};
