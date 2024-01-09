import React from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "../../contact/spinner/spinner";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary mt-8 flex w-40 justify-center" disabled={pending}>
      {pending ? <Spinner /> : "Send message"}
    </button>
  );
};

export default Button;
