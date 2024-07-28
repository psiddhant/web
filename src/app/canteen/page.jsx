"use client"

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
        <div className='h-screen w-full justify-center items-center text-center pt-20 bg-[#262626]'>
            <section className='w-full items-center text-center content-center'>
                <div className='flex w-full justify-center items-center content-center text-center'>
                    <h1 className='text-xl justify-center flex text-center text-white shadow-lg'>
                        APPLICATION FORM DISTRIBUTOR/ANNDATA CANTEEN BAZAAR
                    </h1>
                </div>
            </section>
            <form onSubmit={handleSubmit}>
                <div className='flex lg:px-52 flex-wrap mt-7 justify-center gap-8'>
                    <div>
                        <input type="text" name='name' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Enter Your Name' onChange={handleChange} value={user.name} />
                    </div>
                    <div>
                        <input type="text" name='fathersName' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Father`s Name' onChange={handleChange} value={user.fathersName} />
                    </div>
                    <div>
                        <input type="date" name='dob' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Date Of Birth' onChange={handleChange} value={user.dob} />
                    </div>
                    <div>
                        <input type="text" name='number' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Number' onChange={handleChange} value={user.number} />
                    </div>
                    <div>
                        <input type="text" name='Aadhaar' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Aadhaar Number' onChange={handleChange} value={user.Aadhaar} />
                    </div>
                    <div>
                        <input type="text" name='Address' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Address' onChange={handleChange} value={user.Address} />
                    </div>
                    <div>
                        <input type="text" name='Nominee' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Nominee Name' onChange={handleChange} value={user.Nominee} />
                    </div>
                    <div>
                        <input type="text" name='Residence_Address' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Residence Address' onChange={handleChange} value={user.Residence_Address} />
                    </div>
                    <div>
                        <input type="text" name='BankName' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Enter Your Bank Name' onChange={handleChange} value={user.BankName} />
                    </div>
                    <div>
                        <input type="text" name='AccountNo' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Account No' onChange={handleChange} value={user.AccountNo} />
                    </div>
                    <div>
                        <input type="text" name='ChequeNo' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Cheque No' onChange={handleChange} value={user.ChequeNo} />
                    </div>
                    <div>
                        <input type="text" name='Security_Amount' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Security Amount' onChange={handleChange} value={user.Security_Amount} />
                    </div>
                    <div>
                        <input type="text" name='gramPanchayatName' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Gram Panchayat Name' onChange={handleChange} value={user.gramPanchayatName} />
                    </div>
                    <div>
                        <select name='marital_status' className='bg-[#737373] px-8 py-3 rounded-full' onChange={handleChange} value={user.marital_status}>
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                   
                    <div>
                        <input type="text" name='voter_id' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Voter ID' onChange={handleChange} value={user.voter_id} />
                    </div>
                    <div>
                        <input type="text" name='Nominee_Aadhaar' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Nominee Aadhaar' onChange={handleChange} value={user.Nominee_Aadhaar} />
                    </div>
                    <div>
                        <input type="text" name='block' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Block' onChange={handleChange} value={user.block} />
                    </div>
                    <div>
                        <input type="text" name='branch_manager' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='Branch Manager' onChange={handleChange} value={user.branch_manager} />
                    </div>
                    <div>
                        <select name='Residence_status' className='bg-[#737373] px-8 py-3 rounded-full' onChange={handleChange} value={user.Residence_status}>
                            <option value="">Select Residence Status</option>
                            <option value="owner">Owner</option>
                            <option value="rented">Rented</option>
                        </select>
                    </div>
                    <div>
                        <select name='Canteen' className='bg-[#737373] px-8 py-3 rounded-full' onChange={handleChange} value={user.Canteen}>
                            <option value="">Select Canteen/Distributor Status</option>
                            <option value="Canteen">Canteen</option>
                            <option value="Distributor">Distributor</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name='IFSC_CODE' className='bg-[#737373] px-8 py-3 rounded-full' placeholder='IFSC CODE' onChange={handleChange} value={user.IFSC_CODE} />
                    </div>
                </div>
                <button className='bg-[#737373] px-8 py-3 rounded-full mt-5' type='submit'>Submit</button>
                {status === 'success' && <p className='text-green-500 mt-3'>Form submitted successfully!</p>}
                {status === 'error' && <p className='text-red-500 mt-3'>Error submitting the form. Please try again.</p>}
            </form>
        </div>
    )
}

export default Page;
