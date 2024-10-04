import dbConnect from '../../../utils/dbConn'
import { NextResponse } from "next/server";
import Canteen from '../../../model/canteen';

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    await Canteen.create(body);

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