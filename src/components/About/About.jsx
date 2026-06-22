import React, { useContext } from 'react'
import Button from '../Button/Button'
import OnlineGrocery from '../../assets/TakeAway.png'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt } from "react-icons/fa";
import WhyChoose from '../../assets/whychoose.png'
import Mission from '../../assets/mission.jpg'
import Founder from '../../assets/founder.png'
import { ThemeContext } from '../../context/ThemeContext';



const About = () => {
    const { darkMode } = useContext(ThemeContext);

    const leftValue = Values.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7 md:flex-row-reverse md:mt-15 md:mb-15'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className={`${darkMode ? "text-white" : "text-zinc-800"} font-bold text-3xl`}>{item.title}</h3>
                    <p className={`${darkMode ? "text-zinc-300" : "text-zinc-600"} mt-2`}>{item.para}</p>
                </div>
            </div>
        )

    })


    const rightValue = Values.slice(2, 4).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7 md:mt-15 md:mb-15'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div >
                    <h3 className={`${darkMode ? "text-white" : "text-zinc-800"} font-bold text-3xl`}>{item.title}</h3>
                    <p className={`${darkMode ? "text-zinc-300" : "text-zinc-600"} mt-2`}>{item.para}</p>
                </div>
            </div>
        )

    })






    return (
        <>
            <section>
                <div className=' min-h-screen max-w-[1400px] mx-auto px-10 flex items-center md:pt-15 pt-35 md:flex-row flex-col '>

                    {/* Shopping Content  */}
                    <div className='flex-1 ' data-aos="fade-right">
                        <h1 className='md:text-6xl/20 text-5xl/14 font-bold mt-5'>
                            Fresh<span className='text-orange-500'> Groceries</span> Delivered to your Doorstep.
                        </h1>
                        <p className={`${darkMode ? "text-zinc-300" : "text-gray-500"} md:text-lg text-md my-5 max-w-[530px] mt-5 mb-10`}>
                            We provide fresh organic fruits & vegetables,dairy,etc with fast delivery and premium quality.
                        </p>
                        <Button content="Learn Now" />
                    </div>

                    {/* Hero-image  */}
                    <div className='flex-1' data-aos="fade-left">
                        <img src={OnlineGrocery} alt="About Image" />
                    </div>
                </div>
            </section>

            {/* why Choose-us  */}
            <section>
                <div className='max-w-[1400px] mx-auto px-10 py-10'>
                    <Heading highlight="Why" heading="Choose-Us" />

                    <div className='flex md:flex-row flex-col  gap-15 md:gap-5 mt-10'>
                        {/* left-Values  */}
                        <div className='md:min-h-100 gap-15 flex flex-col justify-between ' data-aos="fade-right">
                            {leftValue}
                        </div>
                        <div className='md:flex w-1/2 hidden' data-aos="zoom-in">
                            <img src={WhyChoose} alt="WhyChoose" />
                        </div>
                        {/* Right Value  */}
                        <div className='md:min-h-100 gap-15 flex  flex-col justify-between' data-aos="fade-left">
                            {rightValue}
                        </div>


                    </div>

                </div>
            </section>

            {/* Our Mission  */}

            <section>
                <div className=' max-w-[1400px] mx-auto px-10 py-10'>
                    <Heading highlight="Our" heading="Mission" />
                    <div className='flex md:flex-row flex-col items-center gap-10 mt-10'>
                        {/* left side  */}
                        <div className='w-full md:w-1/2' data-aos="fade-right">
                            <img src={Mission} alt="mission" className='rounded-xl' />
                        </div>
                        {/* right side  */}
                        <div className=' text-center mt-4 font-bold text-4xl' data-aos="fade-left">
                            <h2 className={`${darkMode ? "text-white" : "text-zinc-800"}`} >Our mission is to deliver <span className='text-orange-500'>healthy & fresh groceries</span> at affordable prices.</h2>
                        </div>
                    </div>

                </div>
            </section>

            {/* Stats section  */}

            <section className='bg-orange-500 w-full py-10'>

                <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white' data-aos="fade-up">

                    <div>
                        <h2 className='text-4xl font-bold'>10K+</h2>
                        <p className='mt-2 text-lg'>Happy Customers</p>
                    </div>

                    <div>
                        <h2 className='text-4xl font-bold'>500+</h2>
                        <p className='mt-2 text-lg'>Fresh Products</p>
                    </div>

                    <div>
                        <h2 className='text-4xl font-bold'>50+</h2>
                        <p className='mt-2 text-lg'>Delivery Partners</p>
                    </div>

                    <div>
                        <h2 className='text-4xl font-bold'>24/7</h2>
                        <p className='mt-2 text-lg'>Customer Support</p>
                    </div>

                </div>

            </section>


            {/* Team section  */}

            <section>
                <div className=' max-w-[1400px] mx-auto px-10 py-10'>
                    <Heading highlight="Meet Our" heading="Amazing Team" />
                    <div className='flex md:flex-row flex-col items-center gap-5 mt-10'>
                        {/* left side  */}
                        <div className='flex-1' data-aos="fade-right">
                            <div className=' w-full md:w-[85%]'>
                                <img src={Founder} alt="founder"
                                    className='rounded-2xl w-full h-[300px] object-cover' />
                            </div>
                            <div className='text-center text-xl font-medium'>
                                Mohd. Anas
                            </div>
                            <div className='text-center text-2xl font-bold'>
                                Founder & CEO.
                            </div>
                        </div>
                        {/* right side  */}
                        <div className=' flex-1 text-center mt-2  md:text-left' data-aos="fade-left">
                            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-zinc-800"}`}>
                                Passion Behind <span className='text-orange-500'>Grocify</span>
                            </h2>

                            <p className={`font-medium text-lg leading-9 ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}>At Grocify, our mission is to make fresh and healthy groceries accessible to everyone.
                                Founded with a passion for quality and customer satisfaction, we focus on delivering farm-fresh
                                fruits, vegetables, dairy, and daily essentials right to your doorstep. Our goal is to provide
                                a smooth online shopping experience with fast delivery, premium products, and trusted service that
                                customers can rely on every day.</p>


                        </div>
                    </div>

                </div>
            </section>



            {/* support section  */}


        </>
    )
}

export default About

const Values = [
    {
        id: 1,
        title: "Fresh Products",
        para: "It is a long established fact that a reader will be distracted.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Fast Delivery",
        para: "It is a long established fact that a reader will be distracted.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "24/7 Support",
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

