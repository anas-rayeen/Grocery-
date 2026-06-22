import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from '../../context/ThemeContext';

const Footer = () => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <footer className={`py-20 ${
    darkMode ? "bg-zinc-800 text-white" : "bg-zinc-100 text-black"
  }`}>
            <div className=' flex flex-wrap  gap-y-12 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>
                    <p className={`mt-6 max-w-[350px] ${
    darkMode ? "text-zinc-300" : "text-zinc-600"
  }`}
>Bred for a high content of benificial substances. our products are all fresh and healthy. </p>
                    <p className={`mt-6 ${
    darkMode ? "text-zinc-200" : "text-zinc-800"
  }`}
>2026 &copy; All Rights Reseved</p>

                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className={`text-2xl font-bold ${
    darkMode ? "text-white" : "text-zinc-800"
  }`}>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className={`hover:text-orange-500 ${
  darkMode ? "text-zinc-300" : "text-zinc-800"
}`}>About-us</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className={`hover:text-orange-500 ${
  darkMode ? "text-zinc-300" : "text-zinc-800"
}`}>FAQ's</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className={`text-2xl font-bold ${
    darkMode ? "text-white" : "text-zinc-800"
  }`}>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className={`hover:text-orange-500 ${
  darkMode ? "text-zinc-300" : "text-zinc-800"
}`}>support-center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className={`hover:text-orange-500 ${
  darkMode ? "text-zinc-300" : "text-zinc-800"
}`}>Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className={`hover:text-orange-500 ${
  darkMode ? "text-zinc-300" : "text-zinc-800"
}`}>Contact-us</a>
                    </li>
                </ul>

                <div>
                    <h5 className={`text-2xl font-bold ${
    darkMode ? "text-white" : "text-zinc-800"
  }`}>Stay Connected</h5>
                    <p className={`mt-6 ${
    darkMode ? "text-zinc-300" : "text-zinc-600"
  }`}>Questions or Feedback ?<br />We'd love to hear from you.</p>

                    <div className={`flex flex-1 mt-6 rounded-lg ${
    darkMode ? "bg-zinc-700" : "bg-white"
  }`}
>
                        <input type="email" name='email' placeholder='Email Address'autoComplete='off' className={`h-[5vh] pl-5 focus:outline-none ${
    darkMode
      ? "bg-zinc-600 text-white"
      : "bg-white text-black"
  }`}
 />
                        < button className='text-white bg-gradient-to-b from-orange-400 to-orange-500 p-2 text-2xl rounded-r-lg hover:to-orange-600 transition all .3 cursor-pointer '>
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>


            </div>

        </footer>
    )
}

export default Footer;
