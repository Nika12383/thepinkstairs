import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "../../../lib/supabase-server"; // go up 2 levels to root/lib

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error } = await supabaseServer
      .from("contact_messages")
      .insert({ name, email, subject, message });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
  
}
