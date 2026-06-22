import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'motion/react'



const Testimonials = () => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <section>
            <div className='max-w-1400px px-10 mx-auto py-20'>
                <Heading highlight="Customers" heading="Reviews" />

                <div className=' flex justify-end py-5 gap-x-3'>
                    <button className={`custom-prev text-2xl rounded-lg w-11 h-11 flex justify-center items-center
${darkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-zinc-100 text-zinc-800"
                        }
hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white`}>
                        <IoIosArrowBack />
                    </button>
                    <button className={`custom-next text-2xl rounded-lg w-11 h-11 flex justify-center items-center
${darkMode
                            ? "bg-zinc-800 text-white"
                            : "bg-zinc-100 text-zinc-800"
                        }
hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white`}>
                        <IoIosArrowForward />

                    </button>


                </div>


                <Swiper
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev"
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },

                    }}
                    modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <motion.div  whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }} className={`rounded-xl p-8 ${
      darkMode ? "bg-zinc-800" : "bg-zinc-100"
    }`}>
                                    <div className='flex gap-5 items-center'>
                                        <div className='w-16 h-16 rounded-full bg-red-400 outline-2 outline-orange-500 outline-offset-4 overflow-hidden '>
                                            <img src={item.image}
                                                className="w-full h-full object-cover"
                                                alt={item.name} />
                                        </div>
                                        <div>
                                            <h5 className={`text-xl font-bold ${darkMode ? "text-white" : "text-zinc-800"
                                                }`}
                                            >{item.name}</h5>
                                            <p className={`${darkMode ? "text-zinc-300" : "text-zinc-600"
                                                }`}
                                            >{item.profession}</p>
                                            <span className='flex text-xl text-yellow-400 mt-3 gap-1'>
                                                {Array.from({ length: item.rating }, (_, index) => (
                                                    <FaStar key={index} />
                                                )


                                                )}</span>
                                        </div>
                                    </div>

                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className={`${darkMode ? "text-zinc-300" : "text-zinc-600"
                                            }`}
                                        >{item.para}</p>

                                    </div>
                                    </motion.div>

                                </SwiperSlide>


                            )
                        })

                    }

                </Swiper>





            </div>
        </section>
    )
}

export default Testimonials;

const review = [
    {
        id: 1,
        name: 'Emily',
        profession: 'Food Blogger',
        rating: 5,
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, autem?  adipisicing elit. Atque, autem',
        image: Customer1,
    },
    {
        id: 2,
        name: 'Rico',
        profession: 'Artist',
        rating: 3,
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facere?',
        image: Customer2,
    },
    {
        id: 3,
        name: 'Alya Zehra',
        profession: 'Model',
        rating: 5,
        para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, laborum.  amet consectetur adipisicing elit. Officia, laborum. olor sit amet consectetur',
        image: Customer3,
    },
    {
        id: 4,
        name: 'Shizuka',
        profession: 'Fitness Coach',
        rating: 3,
        para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, harum?',
        image: Customer5,
    },
    {
        id: 5,
        name: 'klasen',
        profession: 'Nutritionist',
        rating: 4,
        para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, perspiciatis. amet consectetur adipisicing elit. Officia, laborum. olor sit amet consectetur',
        image: Customer4,
    },
]
