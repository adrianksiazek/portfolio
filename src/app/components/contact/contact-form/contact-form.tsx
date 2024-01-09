import React from "react";
import { Input } from "../../form-controls/input/input";
import { TextArea } from "../../form-controls/textarea/textarea";
import { useContactForm } from "./contact-form.effect";
import Button from "../../form-controls/button/button";

const ContactForm = () => {
  const { handleSendEmail, errors } = useContactForm();

  return (
    <form action={async (formData) => handleSendEmail(formData)}>
      <div className="flex gap-8">
        <div className="w-1/2">
          <Input formControlClass="w-full" name="senderName" type="text" placeholder="Your name" />
        </div>
        <div className="w-1/2">
          <Input
            formControlClass="w-full"
            name="senderEmail"
            type="text"
            placeholder="Your email"
            error={errors.senderEmail}
          />
        </div>
      </div>
      <TextArea name="message" placeholder="Your message" formControlClass="w-full mt-16" error={errors.message} />
      <Button />
    </form>
  );
};

export default ContactForm;
