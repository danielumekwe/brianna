"use client";

import { Send } from "lucide-react";
import { clsx } from "clsx";
import { useFormSubmit } from "@/lib/hooks/use-form-submit";

type NewsletterFields = {
  email: string;
  company: string;
};

const initialValues: NewsletterFields = { email: "", company: "" };

export function NewsletterForm() {
  const { values, update, submit, status, message, fieldErrors } = useFormSubmit("/api/newsletter", initialValues);

  return (
    <form className="mx-auto mt-6 max-w-xl" onSubmit={submit} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter Email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={message ? "newsletter-status" : undefined}
          className="min-h-12 flex-1 border border-brand-line px-4 focus:outline-none focus:ring-2 focus:ring-brand-green"
        />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="newsletter-company">Company</label>
          <input
            id="newsletter-company"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
          />
        </div>
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-brand-green px-6 text-sm font-bold uppercase text-brand-dark hover:bg-[#17a010] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Subscribe"}
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
      <p
        id="newsletter-status"
        className={clsx("mt-3 min-h-5 text-center text-sm", status === "error" ? "text-red-700" : "text-brand-muted")}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
