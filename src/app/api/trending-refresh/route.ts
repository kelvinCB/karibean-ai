import { NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function POST() {
  try {
    const { stdout } = await execFileAsync("node", ["scripts/refresh-trending.mjs"]);

    return NextResponse.json({
      ok: true,
      message: "Trending refresh ejecutado correctamente.",
      output: stdout.trim(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Falló el refresh de Trending.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Usa POST para ejecutar el refresh manual de Trending.",
  });
}
