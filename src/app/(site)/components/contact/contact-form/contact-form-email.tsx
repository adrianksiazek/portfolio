import React from "react";
import { Html, Head, Preview, Tailwind, Body, Container, Section, Heading, Text, Hr } from "@react-email/components";

export const ContactFormEmail = ({ message, senderEmail }: { message: string; senderEmail: string }) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your site portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
