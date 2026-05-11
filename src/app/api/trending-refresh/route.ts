import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message:
      "Placeholder cron endpoint for future daily trending refresh at 6:00 AM America/Santo_Domingo.",
  });
}
