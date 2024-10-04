import { NextResponse } from 'next/server';

export async function POST(req) {
  const { orderId, orderAmount, orderCurrency } = await req.json();

  const url = `${process.env.CASHFREE_API_BASE}/orders`;
  const headers = {
    'x-client-id': process.env.NEXT_PUBLIC_CASHFREE_APP_ID,
    'x-client-secret': process.env.CASHFREE_SECRET_KEY,
    'x-api-version': '2022-09-01',
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    order_id: orderId,
    order_amount: orderAmount,
    order_currency: orderCurrency,
    customer_details: {
      customer_id: 'customer_' + Date.now(),
      customer_email: 'customer@example.com',
      customer_phone: '9999999999',
    },
    order_meta: {
      return_url: `${process.env.Return_url}/payment-status?order_id={order_id}`,
      notify_url: `${process.env.Return_url}/api/cashfree-webhook`,
    },
  });

  try {
    console.log('Sending request to Cashfree API:', { url, headers, body });
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    });

    const data = await response.json();
    console.log('Cashfree API response:', data);

    if (!response.ok) {
      console.error('Cashfree API error:', data);
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json({ order: data });
  } catch (error) {
    console.error('Error creating Cashfree order:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}