/* src/app/api/careers/route.ts */
import { NextResponse } from "next/server";
import { TalentNetworkSchema } from "../../../lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = TalentNetworkSchema.safeParse(body);
    
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
    
    console.log("Talent network profile received:", result.data);
    
    return NextResponse.json({
      success: true,
      message: "Application profile added to talent database."
    });
  } catch (error) {
    console.error("API careers error:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
