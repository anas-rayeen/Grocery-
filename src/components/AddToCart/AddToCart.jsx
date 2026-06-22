import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { motion } from 'motion/react'
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';


const AddToCart = () => {

    const { darkMode } = useContext(ThemeContext);

    const navigate = useNavigate();

    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="max-w-[1400px] mx-auto px-10 py-40 text-center">
                <h2 className="text-4xl font-bold">
                    Your Cart is <span className="text-orange-500">Empty 🛒</span>
                </h2>

                <p className={`mt-4 ${darkMode ? "text-zinc-300" : "text-gray-500"
                    }`}
                >
                    Looks like you haven't added any products yet.
                </p>

                <Link
                    to="/allproducts"
                    className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                >
                    Continue Shopping
                </Link>

            </div>
        );
    }




    return (


        <div className="max-w-[1400px] mx-auto px-10 py-20 mt-10">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                {/* Left Side - Cart Items */}
                <div>
                    <div className='text-center mb-3'>
                        <h2 className='font-bold text-2xl'>Your Cart <span className='text-orange-500'>Items.</span></h2>
                        <div className='w-25 h-1 bg-orange-500 md:mt-2 mt-2 mx-auto'></div>
                    </div>
                    {
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row md:items-center items-center gap-5 p-4 rounded-lg shadow-sm mb-4 ${darkMode ? "bg-zinc-800 text-white" : "bg-gray-100"
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-contain mx-auto md:mx-0"
                                />

                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-semibold text-xl">
                                        {item.name}
                                    </h3>
                                    <p>${item.price}</p>
                                </div>

                                <div className={`flex items-center border rounded-xl shadow-sm ${darkMode
                                    ? "bg-zinc-700 border-zinc-600"
                                    : "bg-white border-gray-200"
                                    }`}>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="w-10 h-10 text-lg font-bold hover:bg-orange-100 transition rounded-l-xl"
                                    >
                                        +
                                    </button>

                                    <span className="w-12 text-center font-semibold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="w-10 h-10 text-lg font-bold hover:bg-orange-100 transition rounded-r-xl"
                                    >
                                        -
                                    </button>

                                </div>




                                <p className="font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => removeItem(item.id)}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Remove
                                </motion.button>
                            </div>
                        ))
                    }


                </div>

                {/* Right Side - Summary */}
                <div>
                    <div className={`p-6 rounded-xl h-fit sticky top-24 shadow-sm ${darkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-gray-100"
                        }`}>
                        <h2 className="text-2xl font-bold mb-5">
                            Order Summary
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

                        <button onClick={() => navigate("/checkout")} className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition">

                            Checkout
                        </button>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default AddToCart
