"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Page = () => {
    const [user, setUser] = useState({
        name: "", fathersName: "", address: "", number: "", qualification: "",
        dateOfBirth: "", occupation: "", workExperience: "", date: "",
        recommendBy: "", postName: "", workingArea: "", gramPanchayatName: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

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
                    name: "", fathersName: "", address: "", number: "", qualification: "",
                    dateOfBirth: "", occupation: "", workExperience: "", date: "",
                    recommendBy: "", postName: "", workingArea: "", gramPanchayatName: ""
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

    const formFields = [
        { name: "name", placeholder: "Name", icon: FaUser },
        { name: "fathersName", placeholder: "Father's Name", icon: FaUser },
        { name: "address", placeholder: "Address", icon: FaMapMarkerAlt },
        { name: "number", placeholder: "Phone Number", icon: FaPhone },
        { name: "qualification", placeholder: "Qualification", icon: FaGraduationCap },
        { name: "dateOfBirth", placeholder: "Date Of Birth", type: "date", icon: FaCalendar },
        { name: "occupation", placeholder: "Occupation", icon: FaBriefcase },
        { name: "workExperience", placeholder: "Work Experience", icon: FaBriefcase },
        { name: "date", placeholder: "Application Date", type: "date", icon: FaCalendar },
        { name: "recommendBy", placeholder: "Recommended By", icon: FaUser },
        { name: "postName", placeholder: "Post Name", icon: FaBriefcase },
        { name: "workingArea", placeholder: "Working Area", icon: FaMapMarkerAlt },
        { name: "gramPanchayatName", placeholder: "Gram Panchayat Name", icon: FaMapMarkerAlt }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-10"> {/* Added mt-10 here */} 
                <div className="bg-green-600 p-6">
                    <Link href="/">
                        <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                            Back to Home
                        </button>
                    </Link>
                    <h2 className="mt-4 text-3xl font-extrabold text-white text-center">
                        Job Application Form
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {formFields.map((field, idx) => (
                            <div key={idx} className="relative">
                                <label htmlFor={field.name} className="text-sm font-medium text-gray-700 mb-1 block">
                                    {field.placeholder}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <field.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type={field.type || "text"}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={user[field.name]}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-2 sm:text-sm bg-gray-100 rounded-md focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200 outline-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Submit Application
                        </button>
                    </div>
                    {status === 'success' && <p className='text-green-600 text-center mt-4'>Application submitted successfully!</p>}
                    {status === 'error' && <p className='text-red-600 text-center mt-4'>Error submitting the application. Please try again.</p>}
                </form>
            </div>
        </div>
    );
}

export default Page;
