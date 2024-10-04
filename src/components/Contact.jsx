"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
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
                setUser({ username: "", phone: "", email: "", message: "" });
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
        <div id="contact" className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden mt-20"> {/* Added mt-20 here */}
                <div className="md:flex">
                    <div className="md:w-1/2 bg-green-600 p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        <div className="flex items-center mb-4">
                            <FaPhone className="mr-2" />
                            <span>+91 7456096813</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="mr-2" />
                            <span>hariyalibazaar7@gmail.com</span>
                        </div>
                        <div className="mt-8">
                            <Link href="/">
                                <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">
                                    Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={user.username}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaPhone className="text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Your phone number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Your email address"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={user.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <FaPaperPlane className="mr-2" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {status === 'success' && <p className='text-green-600 text-center mt-4'>Message sent successfully!</p>}
                        {status === 'error' && <p className='text-red-600 text-center mt-4'>Error sending message. Please try again.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;