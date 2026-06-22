import React, { useContext } from 'react'
import Button from '../Button/Button';
import FreshFruits from '../../assets/fresh-fruits.png'
import { ThemeContext } from '../../context/ThemeContext';

const Discount = () => {
    const { darkMode } = useContext(ThemeContext);
    
  return (
    <section className={`bg-no-repeat bg-right bg-contain ${
    darkMode ? "bg-zinc-800" : "bg-zinc-100"
  }`}
 style={{backgroundImage: `url(${FreshFruits})`}} >
        <div className={`md:bg-transparent md:flex-row flex-col flex max-w-[1400px] mx-auto px-10 py-10 ${
    darkMode ? "bg-zinc-800" : "bg-zinc-100"
  }`}>
            <span className='md:text-9xl text-6xl text-orange-500 transform md:-rotate-90 font-bold md:self-center h-fit' data-aos='fade-right'>20%</span>
            <div className='max-w-[700px]' data-aos="fade-left">
                <h3 className={`md:text-7xl text-4xl font-bold ${
    darkMode ? "text-white" : "text-zinc-800"
  }`}>First Order Discount!</h3>
                <p className={`my-6 ${
    darkMode ? "text-zinc-300" : "text-zinc-600"
  }`}>
                    Enjoy an exclusive first order discount on our grocery website
                </p>
                <Button content="Get a Discount!"/>
            </div>

        </div>
    </section>
  )
}

export default Discount;
