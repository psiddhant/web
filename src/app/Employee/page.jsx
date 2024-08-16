"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [user, setUser] = useState({
        name: "",
        fathersName: "",
        address: "",
        number: "",
        qualification: "",
        dateOfBirth: "",
        occupation: "",
        workExperience: "",
        date: "", // This corresponds to "Today's Date"
        recommendBy: "",
        postName: "",
        workingArea: "",
        gramPanchayatName: ""
    });

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/Applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });

            if (response.status === 200) {
                setUser({
                    name: "",
                    fathersName: "",
                    address: "",
                    number: "",
                    qualification: "",
                    dateOfBirth: "",
                    occupation: "",
                    workExperience: "",
                    date: "",
                    recommendBy: "",
                    postName: "",
                    workingArea: "",
                    gramPanchayatName: ""
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
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col">
            <main className="flex-grow flex items-center justify-center py-12">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
                    <Link href="/">
                        <button className="bg-blue-700 px-4 w-full mb-5 py-2 rounded-lg text-white hover:bg-blue-800 transition-colors">Back</button>
                    </Link>
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Apply for the Job</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: "name", placeholder: "Name" },
                                { name: "fathersName", placeholder: "Father's Name" },
                                { name: "address", placeholder: "Address" },
                                { name: "number", placeholder: "Number" },
                                { name: "qualification", placeholder: "Qualification" },
                                { name: "dateOfBirth", placeholder: "Date Of Birth", type: "date" },
                                { name: "occupation", placeholder: "Occupation" },
                                { name: "workExperience", placeholder: "Work Experience" },
                                { name: "date", placeholder: "Date", type: "date" }, // Fixed name attribute
                                { name: "recommendBy", placeholder: "Recommended By" },
                                { name: "postName", placeholder: "Post Name" },
                                { name: "workingArea", placeholder: "Working Area" },
                                { name: "gramPanchayatName", placeholder: "Gram Panchayat Name" }
                            ].map((field, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <label htmlFor={field.name} className="text-sm font-medium text-gray-700 mb-2">{field.placeholder}</label>
                                    <input
                                        type={field.type || "text"}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={user[field.name]}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <button type="submit" className="bg-blue-600 w-full rounded-full text-white px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Submit
                            </button>
                        </div>
                        {status === 'success' && <p className='text-green-600 text-center mt-4'>Form submitted successfully!</p>}
                        {status === 'error' && <p className='text-red-600 text-center mt-4'>Error submitting the form. Please try again.</p>}
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Page;
