/* src/app/api/contact/route.ts */
import { NextResponse } from "next/server";
import { ContactSchema } from "../../../lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body against schema
    const result = ContactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: result.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }
    
    // In production: Send email via Resend, log to DB etc.
    console.log("Contact submission received:", result.data);
    
    return NextResponse.json({
      success: true,
      message: "Consultation request successfully received."
    });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred."
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
