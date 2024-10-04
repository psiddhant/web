import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(req) {
  const { name, address, phoneNumber, quantity, productName, productId } = await req.json();

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db('bookings');
    const collection = database.collection('bookings');

    const result = await collection.insertOne({
      name,
      address,
      phoneNumber,
      quantity,
      productName,
      productId,
      createdAt: new Date()
    });

    return NextResponse.json({ message: 'Booking successful', id: result.insertedId });
  } catch (error) {
    console.error('Error saving booking:', error);
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
  } finally {
    await client.close();
  }
}