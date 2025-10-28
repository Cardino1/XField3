import { NextResponse } from "next/server";

const subscribers: string[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!subscribers.includes(email)) {
    subscribers.push(email);
  }

  return NextResponse.json({ email, storedIn: "User" }, { status: 201 });
}
