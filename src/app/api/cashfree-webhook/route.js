import { NextResponse } from 'next/server';

export async function POST(req) {
  const webhookData = await req.json();
  console.log('Received Cashfree webhook:', webhookData);

  // Process the webhook data and update your database accordingly

  return NextResponse.json({ message: 'Webhook received' });
}