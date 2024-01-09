import { sendEmail } from "@/app/actions/actions";
import { useState } from "react";
import { Errors } from "./contact-form.types";

const delay = async () => new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

export const useContactForm = () => {
  const [errors, setErrors] = useState<Errors>({ message: "", senderEmail: "" });

  const handleSendEmail = async (formData: FormData) => {
    await delay();
    const errors = await sendEmail(formData);
    if (errors) setErrors(errors);
  };

  return { handleSendEmail, errors };
};
