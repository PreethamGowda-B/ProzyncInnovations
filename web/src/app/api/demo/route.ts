/* src/app/api/demo/route.ts */
import { NextResponse } from "next/server";
import { DemoBookingSchema } from "../../../lib/validations";
import { sendEmail, buildDemoEmail } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = DemoBookingSchema.safeParse(body);

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
      subject: `[Demo Booking] ${d.name} — ${d.companyName} | ${d.preferredDate} ${d.preferredTime}`,
      html: buildDemoEmail(d),
      replyTo: d.email,
    });

    return NextResponse.json({
      success: true,
      message: "Your demo has been successfully scheduled. We'll confirm your slot shortly.",
    });
  } catch (error) {
    console.error("API demo error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
