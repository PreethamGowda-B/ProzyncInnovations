/* src/app/api/demo/route.ts */
import { NextResponse } from "next/server";
import { DemoBookingSchema } from "../../../lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = DemoBookingSchema.safeParse(body);
    
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
    
    console.log("Demo booking received:", result.data);
    
    return NextResponse.json({
      success: true,
      message: "Guided walkthrough slot successfully scheduled."
    });
  } catch (error) {
    console.error("API demo error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
