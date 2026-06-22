import React, { useContext } from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'


const Hero = () => {
    const { darkMode } = useContext(ThemeContext);

    const navigate = useNavigate();
    return (

        <section>
            <div className=' min-h-screen max-w-[1400px] mx-auto px-10 flex items-center md:pt-25 pt-35 md:flex-row flex-col '>

                {/* Hero Content  */}
                <div className='flex-1 '>
                    <motion.span initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}
                        className='bg-orange-100 text-orange-500 md:text-lg text-md px-5 py-2 rounded-full'>Export Best Quality Fruits & Vegetables.....</motion.span>
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                        className='md:text-7xl/20 text-5xl/14 font-bold mt-5'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Vegetables</span><br />In Your City
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                        className={`md:text-lg text-md my-5 max-w-[530px] mt-5 mb-10 ${darkMode ? "text-zinc-300" : "text-gray-500"
                            }`}
                    >
                        Discover the freshest and most delicious organic produce delivered right to your doorstep.
                    </motion.p>
                    <Button onClick={() => navigate("/allproducts")} content="Shop Now" />
                </div>

                {/* Hero-image  */}
                <div className='flex-1'>
                    <motion.img whileHover={{ scale: 1.1 }}
                        src={Grocery} alt="Hero Image" />
                </div>
            </div>
        </section>

    )
}

export default Hero;
