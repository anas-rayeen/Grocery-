import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'
import { ThemeContext } from '../../context/ThemeContext';

const Value = () => {
    const { darkMode } = useContext(ThemeContext);

    const leftValue = Values.slice(0, 2).map(item => {
        return(
            <div key={item.id} className='flex items-center gap-7 md:flex-row-reverse md:mt-15 md:mb-15' data-aos="fade-right">
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-zinc-800"}`}>{item.title}</h3>
                    <p className={`mt-2 ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}>{item.para}</p>
                </div>
            </div>
            )

    })


    const rightValue = Values.slice(2, 4).map(item => {
        return(
            <div key={item.id} className='flex items-center gap-7 md:mt-15 md:mb-15' data-aos="fade-left">
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div >
                    <h3 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-zinc-800"}`}>{item.title}</h3>
                    <p className={`mt-2 ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}>{item.para}</p>
                </div>
            </div>
            )

    })






    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-10'>
                <Heading highlight="Our" heading="Values" />

                <div className='flex md:flex-row flex-col  gap-15 md:gap-5 mt-10' data-aos="fade-right">
                    {/* left-Values  */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between '>
                        {leftValue}
                    </div>
                    <div className='md:flex w-1/2 hidden' data-aos="fade-up">
                        <img src={Basket} alt="Basket" />
                    </div>
                    {/* Right Value  */}
                    <div className='md:min-h-100 gap-15 flex  flex-col justify-between' data-aos="fade-left">
                        {rightValue}
                    </div>


                </div>

            </div>
        </section>
    )
}


export default Value;

const Values = [
    {
        id: 1,
        title: "Trust",
        para: "It is a long established fact that a reader will be distracted.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "It is a long established fact that a reader will be distracted.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        para: "It is a long established fact that a reader will be distracted.",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: "100% Organic",
        para: "It is a long established fact that a reader will be distracted ",
        icon: <FaShieldAlt />
    },

]
