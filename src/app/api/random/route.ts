import { NextResponse } from "next/server";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * (5000 - 300 + 1)) + 300;

  return NextResponse.json({ number: randomNumber });
}
