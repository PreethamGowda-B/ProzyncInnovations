/* src/app/api/contact/route.ts */
import { NextResponse } from "next/server";
import { ContactSchema } from "../../../lib/validations";
import { sendEmail, buildContactEmail } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = ContactSchema.safeParse(body);

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
      subject: `[Contact Enquiry] ${d.fullName} — ${d.companyName}`,
      html: buildContactEmail(d),
      replyTo: d.email,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation request successfully received. We'll be in touch shortly.",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "An internal server error occurred. Please try again.";
    console.error("API contact error:", msg);
    return NextResponse.json(
      { success: false, message: msg },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
