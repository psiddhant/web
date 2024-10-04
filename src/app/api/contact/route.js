import dbConnect from "../../../utils/dbConn";
import { NextResponse } from "next/server";
import contact from "../../../model/contact";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    await contact.create(body);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e); // Log the error for debugging purposes
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}