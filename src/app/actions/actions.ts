"use server";

import React from "react";
import { Resend } from "resend";
import { ContactFormEmail } from "../components/contact/contact-form/contact-form-email";
import { validateString } from "../lib/utils";
import { Errors } from "../components/contact/contact-form/contact-form.types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName");
  let errors: Errors = {};

  if (!validateString(senderEmail, 500)) {
    errors = {
      ...errors,
      senderEmail: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    errors = {
      ...errors,
      message: "Invalid message",
    };
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.com",
      to: "8ksiaze8@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    console.log(error);
  }
};
