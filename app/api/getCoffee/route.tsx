import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("coffee_menu").select("*");

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  console.log("Successfully fetched data");
  return NextResponse.json(data, { status: 200 });
}
