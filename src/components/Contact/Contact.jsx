import React, { useContext, useState } from 'react'
import { Form } from "react-router-dom";
import Button from '../Button/Button';
import BgImage from '../../assets/contact-bg.jpg'
import { ThemeContext } from '../../context/ThemeContext';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { darkMode } = useContext(ThemeContext);


    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!formData.name) newErrors.name = "Name is required"
        if (!formData.email) newErrors.email = "email is required"
        if (!formData.message) newErrors.message = "Message is required"
        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors)
            toast.error("Please fill all required fields");
        } else {
            emailjs.send(serviceId, templateId, { name: formData.name, email: formData.email, message: formData.message, }, publicId
            )
                .then(() => {
                    toast.success("Message Sent Successfully!");

                    setErrors({});
                    console.log("Form submitted", formData);
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                })
                .catch((error) => {
                    toast.error("Failed to send message");
                    console.log(error);
                });



            // toast.success("Send Successfully")
            // setErrors({});
            // console.log("Form submitted", formData);
            // setFormData({
            //     name: "",
            //     email: '',
            //     message: '',


            // });

        }




    }







    return (
        <div className='flex justify-center h-screen items-center bg-cover bg-center' style={{ backgroundImage: `url(${BgImage})` }}>
            <form onSubmit={handleFormSubmit} data-aos="zoom-out"
                className={`flex flex-col mt-10 w-full max-w-md gap-3 p-5 rounded-xl shadow-lg
${darkMode
                        ? "bg-zinc-800 text-white"
                        : "bg-zinc-100 text-black"
                    }`}>
                <h1 className={`text-3xl font-bold mx-auto ${darkMode ? "text-white" : "text-zinc-800"
                    }`}>Contact Form</h1>
                <label htmlFor='name' className={`text-xl ${darkMode ? "text-white" : "text-zinc-800"
                    }`}
                >Name</label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    placeholder='Name'
                    className={`rounded-xl pl-2 h-[5vh] focus:outline-none ${darkMode
                        ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                        : "bg-white text-black"
                        }`}
                    value={formData.name}
                    onChange={handleInputChange} />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <label htmlFor='email'>Email</label>
                <input
                    type="text"
                    name='email'
                    id='email'
                    placeholder='Email'
                    className={`rounded-xl pl-2 h-[5vh] focus:outline-none ${darkMode
                        ? "bg-zinc-700 text-white placeholder:text-zinc-400"
                        : "bg-white text-black"
                        }`}
                    value={formData.email}
                    onChange={handleInputChange} />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <label htmlFor='message'>Message</label>
                <textarea
                    type="text"
                    name='message'
                    id='message'
                    rows='4'
                    className={`rounded-xl pl-2 focus:outline-none ${darkMode
                        ? "bg-zinc-700 text-white"
                        : "bg-white text-black"
                        }`}
                    value={formData.message}
                    onChange={handleInputChange} />
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}


                <div className='mx-auto'>
                    <Button content='Submit' type='submit' />
                </div>

            </form>
        </div>

    )
}

export default Contact
