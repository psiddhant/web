"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [user, setUser] = useState({
        name: "",
        fathersName: "",
        address: "",
        dob: "",
        number: "",
        Aadhaar: "",
        Canteen:"",
        Address: "",
        Nominee: "",
        Residence_Address: "",
        BankName: "",
        AccountNo: "",
        ChequeNo: "",
        Security_Amount: "",
        gramPanchayatName: "",
        marital_status: "",
        voter_id: "",
        Nominee_Aadhaar: "",
        block: "",
        branch_manager: "",
        Residence_status: "",
        IFSC_CODE: "",
        user_image: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/canteen', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });

            if (response.status === 200) {
                setUser({
                    name: "",
                    fathersName: "",
                    address: "",
                    dob: "",
                    number: "",
                    Aadhaar: "",
                   Canteen:"",
                    Address: "",
                    Nominee: "",
                    Residence_Address: "",
                    BankName: "",
                    AccountNo: "",
                    ChequeNo: "",
                    Security_Amount: "",
                    gramPanchayatName: "",
                    marital_status: "",
                    voter_id: "",
                    Nominee_Aadhaar: "",
                    block: "",
                    branch_manager: "",
                    Residence_status: "",
                    IFSC_CODE: "",
                    user_image: ""
                });
                setStatus('success');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e);
            setStatus('error');
        }
    };

    return (
        <div className='flex pt-24 pb-80 flex-col min-h-screen  overflow-x-hidden overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200 p-8'>
            <div className='flex flex-col items-center mb-8'>
                <h1 className='text-2xl font-extrabold text-gray-800 mb-4'>
                    Distributor/Annadata Canteen Bazaar Application Form
                </h1>
                <p className='text-lg text-gray-600 mb-6'>
                    Please complete the form below to submit your application.
                </p>
            </div>
            <form onSubmit={handleSubmit} className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl'>
            <Link href="/">
                        <button className="bg-blue-700 px-4 w-full  py-2 mb-6 rounded-full text-white hover:bg-blue-800 transition-colors">Back</button>
                    </Link>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
                        <input type="text" name='name' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Enter Your Name' onChange={handleChange} value={user.name} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Father's Name</label>
                        <input type="text" name='fathersName' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Father’s Name' onChange={handleChange} value={user.fathersName} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Date of Birth</label>
                        <input type="date" name='dob' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' onChange={handleChange} value={user.dob} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Number</label>
                        <input type="text" name='number' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Number' onChange={handleChange} value={user.number} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Aadhaar Number</label>
                        <input type="text" name='Aadhaar' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Aadhaar Number' onChange={handleChange} value={user.Aadhaar} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Address</label>
                        <input type="text" name='Address' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Address' onChange={handleChange} value={user.Address} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Nominee Name</label>
                        <input type="text" name='Nominee' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Nominee Name' onChange={handleChange} value={user.Nominee} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Residence Address</label>
                        <input type="text" name='Residence_Address' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Residence Address' onChange={handleChange} value={user.Residence_Address} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Bank Name</label>
                        <input type="text" name='BankName' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Bank Name' onChange={handleChange} value={user.BankName} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Account No</label>
                        <input type="text" name='AccountNo' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Account No' onChange={handleChange} value={user.AccountNo} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Cheque No</label>
                        <input type="text" name='ChequeNo' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Cheque No' onChange={handleChange} value={user.ChequeNo} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Security Amount</label>
                        <input type="text" name='Security_Amount' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Security Amount' onChange={handleChange} value={user.Security_Amount} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Gram Panchayat Name</label>
                        <input type="text" name='gramPanchayatName' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Gram Panchayat Name' onChange={handleChange} value={user.gramPanchayatName} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Marital Status</label>
                        <select name='marital_status' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' onChange={handleChange} value={user.marital_status}>
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Voter ID</label>
                        <input type="text" name='voter_id' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Voter ID' onChange={handleChange} value={user.voter_id} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Nominee Aadhaar</label>
                        <input type="text" name='Nominee_Aadhaar' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Nominee Aadhaar' onChange={handleChange} value={user.Nominee_Aadhaar} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Block</label>
                        <input type="text" name='block' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Block' onChange={handleChange} value={user.block} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Branch Manager</label>
                        <input type="text" name='branch_manager' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='Branch Manager' onChange={handleChange} value={user.branch_manager} />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Residence Status</label>
                        <select name='Residence_status' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' onChange={handleChange} value={user.Residence_status}>
                            <option value="">Select Residence Status</option>
                            <option value="owner">Owner</option>
                            <option value="rented">Rented</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Canteen/Distributor Status</label>
                        <select name='Canteen' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' onChange={handleChange} value={user.Canteen}>
                            <option value="">Select Canteen/Distributor Status</option>
                            <option value="Canteen">Canteen</option>
                            <option value="Distributor">Distributor</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>IFSC Code</label>
                        <input type="text" name='IFSC_CODE' className='w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500' placeholder='IFSC Code' onChange={handleChange} value={user.IFSC_CODE} />
                    </div>
                </div>
                <button className='w-full bg-blue-600 text-white px-6 py-3 rounded-full backdrop-blur-md mt-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' type='submit'>Submit</button>
                {status === 'success' && <p className='text-green-600 text-center mt-4'>Form submitted successfully!</p>}
                {status === 'error' && <p className='text-red-600 text-center mt-4'>Error submitting the form. Please try again.</p>}
            </form>
        </div>
    );
}

export default Page;
