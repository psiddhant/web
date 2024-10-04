"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaQrcode, FaCopy, FaCheckCircle, FaRupeeSign } from 'react-icons/fa'
import Navbar from '../../components/Navbar'

const PaymentPage = () => {
  const [copied, setCopied] = useState(false)
  const upiId = '8533093254jav@axl'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          <div className="bg-indigo-600 p-6 text-white">
            <h1 className="text-3xl font-bold text-center">Quick Pay</h1>
            <p className="text-center mt-2 text-indigo-200">Scan QR or use UPI ID</p>
          </div>
          <div className="p-6">
            <div className="bg-gray-100 rounded-xl p-4 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-xl text-sm">
                Scan Me
              </div>
              <Image 
                src="/qrcode.png" 
                alt="Payment QR Code" 
                width={250} 
                height={250} 
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-between mb-6">
              <div className="flex items-center">
                <FaRupeeSign className="text-indigo-600 mr-2" />
                <span className="font-medium text-gray-700">{upiId}</span>
              </div>
              <button 
                onClick={copyToClipboard} 
                className={`px-3 py-1 rounded-md transition-colors ${
                  copied ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {copied ? <FaCheckCircle className="inline mr-1" /> : <FaCopy className="inline mr-1" />}
                {copied ? 'Copied!' : 'Copy UPI'}
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Scan the QR code or copy the UPI ID to make your payment
              </p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Need help with payment?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage