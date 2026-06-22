import React, { useContext } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button';
import { motion } from 'motion/react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';


const Cards = ({ id,image, name, price }) => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <motion.div className={`bg-zinc-100 p-5 rounded-xl ${darkMode ? "bg-zinc-800 text-white" : "bg-zinc-100 text-black"}`} whileHover={{ y: -10 }} whileTap={{ scale: 1.1 }} transition={{ duration: 0.3, type: 'spring' }}>
            {/* card Icons  */}
            <div className='flex justify-between'>
                <span className={`text-3xl ${
    darkMode ? "text-zinc-500" : "text-zinc-300"
  }`}>
                    <FaHeart />
                </span>
                <button className='text-white bg-gradient-to-b from-orange-400 to-orange-500 text-xl px-4 py-3 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* Card Image  */}

            <div className='w-full h-50 '>
                <img src={image} className='w-full h-full object-contain' />
            </div>

            {/* card content  */}
            <div className='text-center'>
                <motion.h3 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className={`text-2xl font-semibold ${
    darkMode ? "text-white" : "text-zinc-800"
  }`}>{name}</motion.h3>
                <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className={`text-2xl font-bold mt-4 mb-3 ${
    darkMode ? "text-orange-400" : "text-zinc-800"
  }`}>${price.toFixed(2)}</motion.p>
                <Link
                    to={`/product/${id}`}
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                >
            Shop Now
                </Link>
            </div>

        </motion.div>
    )
}

export default Cards;
