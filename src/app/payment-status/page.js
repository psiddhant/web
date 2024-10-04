'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PaymentStatus() {
  const [status, setStatus] = useState('Processing...');
  const searchParams = useSearchParams();

  useEffect(() => {
    const order_id = searchParams.get('order_id');
    const payment_id = searchParams.get('payment_id');
    
    if (order_id && payment_id) {
      setStatus(`Payment successful! Order ID: ${order_id}, Payment ID: ${payment_id}`);
    } else {
      setStatus('Payment failed or cancelled.');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
        <p>{status}</p>
      </div>
    </div>
  );
}