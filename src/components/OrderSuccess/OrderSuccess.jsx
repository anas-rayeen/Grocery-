import React, { useContext } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const OrderSuccess = () => {
    const { darkMode } = useContext(ThemeContext);
    
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-40 text-center">

      <h1 className="text-5xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>

      <p className={`mt-4 text-lg ${darkMode ? "text-zinc-300": "text-gray-700"}`}>
        Thank you for your purchase.
      </p>

      <Link
        to="/allproducts"
        className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Continue Shopping
      </Link>

    </div>
  );
};

export default OrderSuccess;