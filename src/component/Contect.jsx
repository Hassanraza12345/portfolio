import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import MiniLoader from './MiniLoader';
import { span } from 'framer-motion/client';

export const Contect = () => {
  const [message,setMessage]=useState({
    name: '',
    phone:'',
    email: '',
    message: ''
  })
  const[loader, setLoader]= useState(false)
 // Replace with your actual values
const SERVICE_ID = 'service_puo529b';
const TEMPLATE_ID = 'template_m27oqfl';
const PUBLIC_KEY = '1NI5EMQto4nBGjdQL';

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (message.name !== '' && message.phone !== '' && message.message !== '' && message.email !== '') {
    setLoader(true)
    const templateParams = {
      name: message.name,
      email: message.email,
      phone: message.phone,
      message: message.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        toast.success('Mail send Successfully',)
        setLoader(false)
      }, (err) => {
        toast.error('Failed to send mail');
        setLoader(false)
      });
  } else {
    toast.warning("Please fill out all required fields.");
    setLoader(false)
  }

  
};

  return (
    <div className="relative z-10 w-screen min-h-screen bg-gray-900 text-white px-4 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold border-b-4 inline-block border-blue-400">
          Contact
        </h2>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
          <p className="text-lg max-w-md mx-auto lg:mx-0">
            Let’s build something great together. Reach out through the form!
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md bg-gray-100 text-black rounded-2xl shadow-lg p-6">
          <form className="flex flex-col space-y-4">
            <input 
            type="text" 
            placeholder="Name" 
            className="p-2 rounded-md" 
            value={message.name} 
            onChange={(e)=>  setMessage({ ...message, name: e.target.value })} 
            required
            />
            <input 
            type="tel" 
            placeholder="Whatsapp Number" 
            className="p-2 rounded-md"
            value={message.phone}
            onChange={(e)=> setMessage({ ...message, phone: e.target.value })}
            required
            />
            <input 
            type="email" 
            placeholder="Email" 
            className="p-2 rounded-md"
            value={message.email}
            onChange={(e)=> setMessage({ ...message, email: e.target.value })}
            />
            <textarea 
            placeholder="Message" 
            rows="10" 
            className="p-2 rounded-md" 
            value={message.message}
            onChange={(e)=>setMessage({ ...message, message: e.target.value })}
            required
            />
            <ToastContainer position="top-right" autoClose={3000} />
            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={handleSubmit}
            >
              {loader ? <span><MiniLoader/></span> : "Send Message"}
              
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
