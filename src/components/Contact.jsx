"use client"
import React, { useState } from 'react'

const Contact = () => {
    const[user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        message: "",
      })
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [status, setStatus] = useState(null);

      function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
              method:'POST',
              headers:{'Content_Type':'application/json'},
              body:JSON.stringify({
                username:user.username,
                phone:user.phone,
                email:user.email,
                message:user.message,
      
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
              username:"",
              phone:"",
              email:"",
              message:""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }


  return (
    <div id='contact' className=' w-full mt-48  text-white flex justify-center items-center text-center'>
        <div className="s"></div>
       <main>
        <div className="top ">
            <h1 className='lg:text-5xl text-3xl'>Contact</h1>
        </div>
        
        <div className="bottom text-white mt-20  mx-auto    p-4">
            <form  onSubmit={handleSubmit}>
                <div  className='mb-3'>
                    <input   onChange={handleChange} type="text" placeholder='Name'  className='bg-[#8F8D8D] pl-3 bg-opacity-50 text-white  w-72  lg:w-96 h-10 border-none rounded-full'  value={user.username}  name='username'/>
                </div>
                <div  className='mb-3'>
                    <input  onChange={handleChange} type="number" placeholder='Phone'  className='bg-[#8F8D8D] pl-3 bg-opacity-50 text-white   w-72  lg:w-96 h-10 border-none rounded-full'  value={user.phone}  name='phone'/>
                </div>
            
                <div  className='mb-3'>
                    
                    <input  onChange={handleChange} type="email" placeholder='Email'  className='bg-[#8F8D8D] pl-3 bg-opacity-50 text-white   w-72  lg:w-96 h-10 border-none rounded-full'  value={user.email}  name='email'/>
                </div>
                <div  className='mb-3'>
                    <textarea  onChange={handleChange} type="text" placeholder='message'  className='bg-[#8F8D8D] pl-3 bg-opacity-50 text-white     w-72  lg:w-96 h-32 border-none rounded-lg'  value={user.message}  name='message'/>
                </div>
                <button type='submit' className='bg-[#8F8D8D] opacity-50   h-10 rounded-full  w-72  lg:w-96 text-white'>SUBMIT</button>
            </form>

        </div>
       </main>
    </div>
  )
}

export default Contact
