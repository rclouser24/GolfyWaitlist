import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();

    // Check if email already exists
    const { data: existingEntry, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", normalizedEmail)
      .single();

    if (existingEntry) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Insert new entry
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email: normalizedEmail }]);

    if (insertError) {
      console.error("Error inserting into waitlist:", insertError);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Get updated count
    const { count, error: countError } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    return NextResponse.json(
      {
        message: "Successfully joined the waitlist",
        count: count || 0,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve waitlist count
export async function GET() {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error getting waitlist count:", error);
      return NextResponse.json(
        { error: "Failed to get count" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      count: count || 0,
    });
  } catch (error) {
    console.error("Error reading waitlist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
