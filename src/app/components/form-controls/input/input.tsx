import React from "react";
import { InputProps } from "./input.props";

export const Input = ({ formControlClass, name, placeholder, ...rest }: InputProps) => {
  return (
    <input name={name} placeholder={placeholder} type="text" className={`${formControlClass} form-control`} {...rest} />
  );
};
