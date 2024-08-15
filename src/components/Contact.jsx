"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Contact = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            if (response.status === 200) {
                setUser({
                    username: "",
                    phone: "",
                    email: "",
                    message: "",
                });
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div id="contact" className="bg-gradient-to-r pt-48 from-blue-100 pb-48 to-blue-200 min-h-screen flex flex-col items-center justify-center p-6 text-white">
            <main className="w-full max-w-4xl bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <Link href="/">
                        <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 mb-7 w-full  transition-colors">Back</button>
                    </Link>
                <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm font-semibold text-gray-600 mb-2">Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your name"
                            value={user.username}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-600 mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={user.phone}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={user.email}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-600 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={user.message}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="6"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-white font-semibold py-2 px-4  transition duration-200"
                    >
                        Submit
                    </button>
                    {status === 'success' && <p className='text-blue-600 text-center mt-4'>Message sent successfully!</p>}
                    {status === 'error' && <p className='text-red-600 text-center mt-4'>Error sending message. Please try again.</p>}
                </form>
            </main>
        </div>
    );
}

export default Contact;
