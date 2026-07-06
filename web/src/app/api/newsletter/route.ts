/* src/app/api/newsletter/route.ts */
import { NextResponse } from "next/server";
import { NewsletterSchema } from "../../../lib/validations";
import { sendEmail, buildNewsletterEmail } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      name: body.name || "Subscriber",
      email: body.email,
      consent: body.consent !== undefined ? body.consent : true,
    };

    const result = NewsletterSchema.safeParse(payload);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const d = result.data;

    await sendEmail({
      subject: `[Newsletter] New subscriber — ${d.email}`,
      html: buildNewsletterEmail({ name: d.name, email: d.email }),
      replyTo: d.email,
    });

    return NextResponse.json({
      success: true,
      message: "You've been successfully subscribed to Prozync technology updates.",
    });
  } catch (error) {
    console.error("API newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
