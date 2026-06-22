import React, { useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';


const Heading = (props) => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <section>
            <div className=' mx-auto w-fit' data-aos="fade-up">
                <h2 className=' md:text-5xl text-[2rem] font-bold'><span className='text-orange-500'>{props.highlight}</span> {props.heading}</h2>
                <div className='w-34 h-1 bg-orange-300 md:mt-4 mt-2 ml-auto'></div>
            </div>

        </section>



    )
}

export default Heading;
