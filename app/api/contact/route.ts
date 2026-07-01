import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data/site-config";
import { contactFormSchema } from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot field filled in — silently accept without sending, to avoid tipping off bots.
  if (parsed.data.company) {
    return NextResponse.json({ message: "Thank you for your message. It has been received." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — contact form submission was not emailed.");
    return NextResponse.json(
      { message: "The contact form is not fully configured yet. Please email us directly instead." },
      { status: 503 },
    );
  }

  const { name, email, phone, subject, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.name} Website <onboarding@resend.dev>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New contact form message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return NextResponse.json(
      { message: "We could not send your message right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thank you for your message. It has been received." });
}
