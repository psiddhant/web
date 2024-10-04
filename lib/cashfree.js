// lib/cashfree.js
import axios from 'axios';

export async function initiatePayment({ orderId,  customerName, customerEmail }) {
  const headers = {
    'Content-Type': 'application/json',
    'x-client-id': process.env.CASHFREE_CLIENT_ID,
    'x-client-secret': process.env.CASHFREE_CLIENT_SECRET,
  };

  const data = {
    order_id: orderId,
    order_amount: 1500,
    customer_details: {
      customer_name: customerName,
      customer_email: customerEmail,
    },
    order_currency: 'INR',
    return_url: process.env.Return_url, // URL for payment success
  };

  try {
    const response = await axios.post('https://api.cashfree.com/pg/orders', data, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Failed to initiate payment');
  }
}
