import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data/site-config";
import { newsletterFormSchema } from "@/lib/validation/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterFormSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return NextResponse.json(
      { message: "Please enter a valid email address.", fieldErrors },
      { status: 400 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ message: "Thank you for subscribing." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — newsletter signup was not emailed.");
    return NextResponse.json(
      { message: "Newsletter signup is not fully configured yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.name} Website <onboarding@resend.dev>`,
      to: siteConfig.email,
      replyTo: parsed.data.email,
      subject: "New newsletter signup",
      text: `New newsletter subscriber: ${parsed.data.email}`,
    });
  } catch (error) {
    console.error("Failed to send newsletter signup email", error);
    return NextResponse.json(
      { message: "We could not process your signup right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thank you for subscribing." });
}
