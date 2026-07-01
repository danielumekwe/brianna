import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
  phone: z.string().trim().min(1, "Please enter your phone number."),
  subject: z.string().trim().min(1, "Please enter a subject."),
  message: z.string().trim().min(1, "Please enter your message."),
  // Honeypot: real visitors never fill this hidden field in.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
  company: z.string().max(0).optional().or(z.literal("")),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
