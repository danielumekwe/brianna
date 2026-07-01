"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type FormApiResponse = {
  message?: string;
  fieldErrors?: Record<string, string>;
};

export function useFormSubmit<T extends Record<string, string>>(endpoint: string, initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof T, string>>>({});

  function update(field: keyof T, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    setMessage(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: FormApiResponse = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Please try again.");
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors as Partial<Record<keyof T, string>>);
        }
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Thank you — your submission has been received.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return { values, update, submit, status, message, fieldErrors };
}
