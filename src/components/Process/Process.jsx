import React, { useContext } from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'motion/react'


const Process = () => {
    const { darkMode } = useContext(ThemeContext);

    const renderSteps = steps.map(item => {
        return (
            <motion.div   initial={{opacity: 0, y: item.id % 2 === 0 ? -80 : 80, scale: 0.8}} whileInView={{opacity: 1, y: 0,  scale: 1}} viewport={{ once: false }} transition={{duration: 0.8, delay: item.id * 0.2}}
 key={item.id} className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-50' : ''}`}>
                <span className={`flex justify-center items-center rounded-full w-18 h-18 mx-auto text-8xl outline-[3px] outline-offset-7 outline-dashed ${darkMode ? "outline-white" : "outline-zinc-800"
                    }`}
                >{item.number}</span>


                <div className='flex items-center gap-x-5 mt-10'>
                    <span className='flex rounded-full justify-center items-center h-15 w-15 text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white'>{item.icon}</span>

                    <div className='flex-1'>
                        <h4 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-zinc-800"
                            }`}
                        >{item.title}</h4>
                        <p className={`mt-2 ${darkMode ? "text-zinc-300" : "text-zinc-600"
                            }`}
                        >{item.para}</p>
                    </div>
                </div>
            </motion.div>

        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className=' mr-auto w-fit'>
                    <Heading highlight="Our" heading="Process" />
                </div>

                <div className='flex flex-wrap md:mt-20 mt-10 md:pt-40 gap-y-17'>
                    {renderSteps}
                </div>



            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />

    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />

    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />

    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />

    },

]
