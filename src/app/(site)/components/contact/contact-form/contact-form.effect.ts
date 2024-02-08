import { sendEmail } from "@/app/(site)/actions/actions";
import { useState } from "react";
import { Errors } from "./contact-form.types";
import toast from "react-hot-toast";

const delay = async () => new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

export const useContactForm = () => {
  const [errors, setErrors] = useState<Errors>({ message: "", senderEmail: "", global: "" });

  const handleSendEmail = async (formData: FormData) => {
    setErrors({});
    await delay();
    const errors = await sendEmail(formData);
    if (errors) setErrors(errors);
    if (errors?.global) {
      toast.error(errors.global);
    }
  };

  return { handleSendEmail, errors };
};
