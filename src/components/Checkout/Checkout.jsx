import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';

const Checkout = () => {
    const navigate = useNavigate();
    const { darkMode } = useContext(ThemeContext);

    const { cartItems, setCartItems } = useContext(CartContext);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))

    }

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!formData.name) newErrors.name = "Name is required"
        if (!formData.email) newErrors.email = "email is required"
        if (!formData.phone) newErrors.phone = "Phone number is required"
        if (!formData.address) newErrors.address = "Address is required"
        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors)
            toast.error("Please fill all required fields");
            return;
        } else {
            toast.success("Order placed successfully!");
            setErrors({});
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: ""

            });
            setCartItems([]); //cart empty
            setTimeout(() => {
                navigate("/order-success");
            }, 1500);





            console.log('Form submitted', formData)

        }




    }

    return (
        <div className={`max-w-[1400px] mx-auto px-10 py-20 ${darkMode ? "text-white" : "text-black"
            }`}>

            <h1 className={`text-4xl font-bold mb-5 mt-10 ${darkMode ? "text-white" : "text-black"
                }`}>
                CheckOut <span className='text-orange-500'>Details.</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">


                    <div className={`p-6 rounded-xl ${darkMode ? "bg-zinc-800" : "bg-gray-100"
                        }`}>

                        <div className="mb-4">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full mt-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
                                        ? "bg-zinc-700 text-white"
                                        : "bg-white text-black"
                                    }`}
                            />
                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full mt-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
                                    ? "bg-zinc-700 text-white"
                                    : "bg-white text-black"
                                    }`}
                            />
                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full mt-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
                                    ? "bg-zinc-700 text-white"
                                    : "bg-white text-black"
                                    }`}
                            />
                            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                        </div>

                        <div className="mb-4">
                            <label>Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                rows="4"
                                className={`w-full mt-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
                                    ? "bg-zinc-700 text-white"
                                    : "bg-white text-black"
                                    }`}
                            />
                            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
                        </div>


                    </div>


                    {/* Summary */}
                    <div>
                        <div className={`text-center p-6 rounded-xl h-fit sticky top-24 shadow-sm ${darkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-gray-100 text-black"
                            }`}
                        >
                            <h2 className="text-2xl font-bold mb-5">
                                Order <span className='text-orange-500'>Summary.</span>
                            </h2>

                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between mt-3">
                                <span>Tax</span>
                                <span>$5.00</span>
                            </div>

                            <hr className="my-4" />

                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>${(subtotal + 5).toFixed(2)}</span>
                            </div>

                            <button type='submit' className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition">

                                Place Order
                            </button>
                        </div>

                    </div>
                </div>
            </form>

        </div >
    );
};

export default Checkout;