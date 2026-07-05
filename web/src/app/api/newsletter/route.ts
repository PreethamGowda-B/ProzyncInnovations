/* src/app/api/newsletter/route.ts */
import { NextResponse } from "next/server";
import { NewsletterSchema } from "../../../lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In our simplified newsletter, we only require email validation if name isn't provided,
    // or validate name and email. Let's make sure it parses nicely.
    // If only email is provided, we can fallback or fill a name.
    const payload = {
      name: body.name || "Subscriber",
      email: body.email,
      consent: body.consent !== undefined ? body.consent : true
    };
    
    const result = NewsletterSchema.safeParse(payload);
    
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
    
    console.log("Newsletter subscription received:", result.data);
    
    return NextResponse.json({
      success: true,
      message: "Subscribed to technology updates successfully."
    });
  } catch (error) {
    console.error("API newsletter error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
