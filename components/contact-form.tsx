"use client";

import { Send } from "lucide-react";
import { clsx } from "clsx";
import { useFormSubmit } from "@/lib/hooks/use-form-submit";

type ContactFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string;
};

const initialValues: ContactFields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
};

const fieldClass =
  "w-full border border-brand-line px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green";

export function ContactForm() {
  const { values, update, submit, status, message, fieldErrors } = useFormSubmit("/api/contact", initialValues);

  return (
    <form className="grid gap-4" onSubmit={submit} noValidate>
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-dark" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {fieldErrors.name ? (
          <p id="name-error" className="mt-1 text-sm text-red-700">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-dark" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {fieldErrors.email ? (
          <p id="email-error" className="mt-1 text-sm text-red-700">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-dark" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          className={fieldClass}
        />
        {fieldErrors.phone ? (
          <p id="phone-error" className="mt-1 text-sm text-red-700">
            {fieldErrors.phone}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-dark" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          value={values.subject}
          onChange={(event) => update("subject", event.target.value)}
          aria-invalid={Boolean(fieldErrors.subject)}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          className={fieldClass}
        />
        {fieldErrors.subject ? (
          <p id="subject-error" className="mt-1 text-sm text-red-700">
            {fieldErrors.subject}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-dark" htmlFor="message">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={fieldClass}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-brand-green px-6 py-3 text-sm font-bold uppercase text-brand-dark transition hover:bg-[#17a010] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send"}
        <Send size={16} aria-hidden="true" />
      </button>
      <p
        className={clsx("min-h-6 text-sm", status === "error" ? "text-red-700" : "text-brand-muted")}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
