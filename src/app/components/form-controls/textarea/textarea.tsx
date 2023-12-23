import React from "react";
import { TextAreaProps } from "./textarea.props";

export const TextArea = ({ formControlClass, placeholder }: TextAreaProps) => {
  return <textarea className={`${formControlClass} form-control`} placeholder={placeholder} rows={4} />;
};
