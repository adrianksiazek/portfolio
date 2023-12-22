import React from "react";
import { Input } from "../form-controls/input/input";
import { TextArea } from "../form-controls/textarea/textarea";

const ContactForm = () => {
  return (
    <form>
      <div className="flex gap-8">
        <div className="w-1/2">
          <Input formControlClass="w-full" name="name" placeholder="Your name" />
        </div>
        <div className="w-1/2">
          <Input formControlClass="w-full" name="email" placeholder="Your email" />
        </div>
      </div>
      <TextArea name="message" placeholder="Your message" formControlClass="w-full mt-8" />
      <button type="submit" className="btn btn-primary mt-8">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
