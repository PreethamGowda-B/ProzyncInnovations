/* src/app/api/careers/route.ts */
import { NextResponse } from "next/server";
import { TalentNetworkSchema } from "../../../lib/validations";
import { sendEmail, buildCareersEmail } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = TalentNetworkSchema.safeParse(body);

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
      subject: `[Talent Network] New Application — ${d.name}`,
      html: buildCareersEmail({
        name: d.name,
        email: d.email,
        linkedinUrl: d.linkedinUrl ?? undefined,
        portfolioUrl: d.portfolioUrl ?? undefined,
        areasOfInterest: d.areasOfInterest,
        message: d.message ?? undefined,
      }),
      replyTo: d.email,
    });

    return NextResponse.json({
      success: true,
      message: "Your talent profile has been received. We'll be in touch about relevant opportunities.",
    });
  } catch (error) {
    console.error("API careers error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
