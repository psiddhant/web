"use client"
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
        date: "",
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
                body: JSON.stringify({
                    name: user.name,
                    fathersName: user.fathersName,
                    address: user.address,
                    number: user.number,
                    qualification: user.qualification,
                    dateOfBirth: user.dateOfBirth,
                    occupation: user.occupation,
                    workExperience: user.workExperience,
                    date: user.date,
                    recommendBy: user.recommendBy,
                    postName: user.postName,
                    workingArea: user.workingArea,
                    gramPanchayatName: user.gramPanchayatName,
                })
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
        }
    };

    return (
        <div>
            <div className="gradient"></div>
            <div className="upper text-white">
                <nav className="flex px-8 py-4 justify-between w-full">
                    <div className="left bg-[#474747] px-6 py-2 rounded-full bg-opacity-80">
                     <Link href={'/'} >  <button>Back</button>  </Link>
                    </div>
                    <div className="center flex justify-center items-center text-center">
                        <div><h1 className="text-xl">JOB APPLICATION</h1></div>
                    </div>
                </nav>

                <div className="down mx-4 lg:mx-48 my-4">
                    <form onSubmit={handleSubmit} className="min-h-[70vw] bg-[#474747] bg-opacity-50 rounded-lg p-4 lg:p-11">
                        <main className="flex flex-wrap gap-8 lg:gap-10 justify-center">
                            {[
                                { name: "name", placeholder: "Name" },
                                { name: "fathersName", placeholder: "Fathers Name" },
                                { name: "address", placeholder: "Address" },
                                { name: "number", placeholder: "Number" },
                                { name: "qualification", placeholder: "Qualification" },
                                { name: "dateOfBirth", placeholder: "Date Of Birth", type: "date" },
                                { name: "occupation", placeholder: "Occupation" },
                                { name: "workExperience", placeholder: "Work Experience" },
                                { name: "date", placeholder: "Date", type: "date" },
                                { name: "recommendBy", placeholder: "Recommend By" },
                                { name: "postName", placeholder: "Post Name" },
                                { name: "workingArea", placeholder: "Working Area" },
                                { name: "gramPanchayatName", placeholder: "Gram Panchayat Name" }
                            ].map((field, idx) => (
                                <div key={idx} className="w-full md:w-1/2 lg:w-1/3">
                                    <input
                                        type={field.type || "text"}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        value={user[field.name]}
                                        onChange={handleChange}
                                        className="w-full rounded-full input-shadow bg-[#484849] bg-opacity-80 px-4 py-2"
                                    />
                                </div>
                            ))}
                        </main>
                        <div className="flex justify-center items-center mt-10">
                            <button type="submit" className="bg-[#474747] px-6 py-2 rounded-full bg-opacity-80 shadow-lg shadow-black">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
