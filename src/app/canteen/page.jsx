"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { 
  FaUser, FaIdCard, FaMapMarkerAlt, FaCalendar, FaPhone, FaHome, 
  FaPiggyBank, FaMoneyCheckAlt, FaVoteYea, FaBuilding, FaUserTie, FaChevronDown 
} from 'react-icons/fa';

const Page = () => {
  const [user, setUser] = useState({
    name: "", fathersName: "", address: "", dob: "", number: "", Aadhaar: "", Canteen: "",
    Address: "", Nominee: "", Residence_Address: "", BankName: "", AccountNo: "", ChequeNo: "",
    Security_Amount: "", gramPanchayatName: "", marital_status: "", voter_id: "", Nominee_Aadhaar: "",
    block: "", branch_manager: "", Residence_status: "", IFSC_CODE: "", user_image: ""
  });

  const [status, setStatus] = useState(null);
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('an error occur');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }

  const handleSendOtp = async () => {
    setIsSendingOtp(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: user.number })
      });

      const data = await response.json();

      if (data.success) {
        setIsOtpSent(true);
        setStatus('OTP sent successfully. Please check your phone.');
      } else {
        setStatus(null);
        setErrorMessage(data.error || 'Failed to send OTP.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error sending OTP. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsVerifyingOtp(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: user.number, otp })
      });

      const data = await response.json();

      if (data.success) {
        setIsOtpVerified(true);
        setStatus('OTP verified successfully.');
      } else {
        setIsOtpVerified(false);
        setErrorMessage(data.error || 'Invalid OTP.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error verifying OTP. Please try again.');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      setErrorMessage('Please verify your phone number before submitting the form.');
      return;
    }

    try {
      const response = await fetch('/api/canteen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      if (response.status === 200) {
        setUser({
          name: "", fathersName: "", address: "", dob: "", number: "", Aadhaar: "", Canteen: "",
          Address: "", Nominee: "", Residence_Address: "", BankName: "", AccountNo: "", ChequeNo: "",
          Security_Amount: "", gramPanchayatName: "", marital_status: "", voter_id: "", Nominee_Aadhaar: "",
          block: "", branch_manager: "", Residence_status: "", IFSC_CODE: "", user_image: ""
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  const formFields = [
    { name: "name", placeholder: "Your Name", icon: FaUser },
    { name: "fathersName", placeholder: "Father's Name", icon: FaUser },
    { name: "dob", placeholder: "Date of Birth", type: "date", icon: FaCalendar },
    { name: "number", placeholder: "Phone Number", icon: FaPhone },
    { name: "Aadhaar", placeholder: "Aadhaar Number", icon: FaIdCard },
    { name: "Address", placeholder: "Address", icon: FaMapMarkerAlt },
    { name: "Nominee", placeholder: "Nominee Name", icon: FaUser },
    { name: "Residence_Address", placeholder: "Residence Address", icon: FaHome },
    { name: "BankName", placeholder: "Bank Name", icon: FaPiggyBank },
    { name: "AccountNo", placeholder: "Account Number", icon: FaMoneyCheckAlt },
    { name: "ChequeNo", placeholder: "Cheque Number", icon: FaMoneyCheckAlt },
    { name: "Security_Amount", placeholder: "Security Amount", icon: FaMoneyCheckAlt },
    { name: "gramPanchayatName", placeholder: "Gram Panchayat Name", icon: FaBuilding },
    { name: "voter_id", placeholder: "Voter ID", icon: FaVoteYea },
    { name: "Nominee_Aadhaar", placeholder: "Nominee Aadhaar", icon: FaIdCard },
    { name: "block", placeholder: "Block", icon: FaBuilding },
    { name: "branch_manager", placeholder: "Branch Manager", icon: FaUserTie },
    { name: "IFSC_CODE", placeholder: "IFSC Code", icon: FaPiggyBank },
  ];

  const dropdownFields = [
    { 
      name: "marital_status", 
      label: "Marital Status", 
      options: [
        { value: "", label: "Select Marital Status" },
        { value: "single", label: "Single" },
        { value: "married", label: "Married" },
        { value: "divorced", label: "Divorced" },
        { value: "widowed", label: "Widowed" }
      ]
    },
    { 
      name: "Residence_status", 
      label: "Residence Status", 
      options: [
        { value: "", label: "Select Residence Status" },
        { value: "owner", label: "Owner" },
        { value: "rented", label: "Rented" }
      ]
    },
    { 
      name: "Canteen", 
      label: "Canteen/Distributor Status", 
      options: [
        { value: "", label: "Select Canteen/Distributor Status" },
        { value: "Canteen", label: "Canteen" },
        { value: "Distributor", label: "Distributor" }
      ]
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden'>
        <div className='bg-green-600 p-6 text-white'>
          <Link href="/">
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
              Back to Home
            </button>
          </Link>
          <h1 className='text-3xl font-extrabold text-center mt-4'>
            Distributor/Annadata Canteen Bazaar Application
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Phone Number and OTP Section */}
          <div className="relative">
            <label htmlFor="number" className="text-sm font-medium text-gray-700 mb-1 block">
              Phone Number
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="number"
                id="number"
                className="block w-full pl-10 pr-3 py-2 sm:text-sm rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                placeholder="Phone Number"
                onChange={handleChange}
                value={user.number}
                disabled={isOtpSent || isOtpVerified}
                required
              />
            </div>
            {!isOtpSent && !isOtpVerified && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                disabled={isSendingOtp || !user.number}
              >
                {isSendingOtp ? 'Sending OTP...' : 'Send OTP'}
              </button>
            )}
            {isOtpSent && !isOtpVerified && (
              <div className="mt-4">
                <label htmlFor="otp" className="text-sm font-medium text-gray-700 mb-1 block">
                  Enter OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  className="block w-full pl-3 pr-3 py-2 sm:text-sm rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                  placeholder="OTP"
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  required
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  disabled={isVerifyingOtp || !otp}
                >
                  {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            )}
            {isOtpVerified && (
              <p className="text-green-600 mt-2">Phone number verified.</p>
            )}
          </div>

          {/* Other Form Fields */}
          {formFields.filter(field => field.name !== 'number').map((field, idx) => (
            <div key={idx} className="relative">
              <label htmlFor={field.name} className="text-sm font-medium text-gray-700 mb-1 block">
                {field.placeholder}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  id={field.name}
                  className="block w-full pl-10 pr-3 py-2 sm:text-sm rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  value={user[field.name]}
                  disabled={!isOtpVerified}
                  required
                />
              </div>
            </div>
          ))}

          {/* Dropdown Fields */}
          {dropdownFields.map((field, idx) => (
            <div key={idx} className="relative col-span-full">
              <label htmlFor={field.name} className="text-sm font-medium text-gray-700 mb-1 block">
                {field.label}
              </label>
              <div className="relative rounded-md shadow-sm">
                <select
                  name={field.name}
                  id={field.name}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md appearance-none bg-gray-50"
                  onChange={handleChange}
                  value={user[field.name]}
                  disabled={!isOtpVerified}
                  required
                >
                  {field.options.map((option, optionIdx) => (
                    <option key={optionIdx} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <FaChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="col-span-full mt-6">
            <button
              className='w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors'
              type='submit'
              disabled={!isOtpVerified}
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {status === 'success' && <p className='text-green-600 text-center mt-4 pb-6'>Form submitted successfully!</p>}
        {status === 'error' && <p className='text-red-600 text-center mt-4 pb-6'>Error submitting the form. Please try again.</p>}
        {errorMessage && <p className='text-red-600 text-center mt-4 pb-6'>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Page;
