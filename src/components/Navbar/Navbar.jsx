import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { motion } from 'motion/react'
import { ThemeContext } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";





const Navbar = ({ search, setSearch }) => {

    const { cartItems } = useContext(CartContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate()



    // filter products
    // const filteredProducts = ProductList.filter((item) =>
    //     item.name.toLowerCase().includes(search.toLowerCase())
    // )


    const toggleMenu = () => {
        setShowMenu(!showMenu)

    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);



    }, [])




    return (
        <>
            <header className={` fixed top-0 right-0 left-0 z-50 ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"} ${isScrolled ? "shadow-lg" : ""}`}>
                <nav className=' max-w-[1400px] mx-auto px-5 md:px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
                    {/* logo  */}
                    <Link to="/" data-aos="fade-right" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</Link>

                    {/* desktop menu  */}

                    <ul className='md:flex items-center gap-x-15 hidden ' data-aos="fade-down">
                        <li><NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                    ? "text-orange-500 after:w-full"
                                    : `${darkMode
                                        ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                        : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                    }`
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        </li>
                        <li><NavLink to="/about"
                            className={({ isActive }) =>
                                `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                    ? "text-orange-500 after:w-full"
                                    : `${darkMode
                                        ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                        : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                    }`
                                }`
                            }
                        >About Us
                        </NavLink>
                        </li>
                        <li><NavLink to="/products"
                            className={({ isActive }) =>
                                `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                    ? "text-orange-500 after:w-full"
                                    : `${darkMode
                                        ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                        : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                    }`
                                }`
                            }>Products
                        </NavLink>
                        </li>
                        <li><NavLink to="/contact"
                            className={({ isActive }) =>
                                `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                    ? "text-orange-500 after:w-full"
                                    : `${darkMode
                                        ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                        : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                    }`
                                }`
                            }>Contact-us</NavLink>
                        </li>
                        <li><NavLink to="/login"
                            className={({ isActive }) =>
                                `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                    ? "text-orange-500 after:w-full"
                                    : `${darkMode
                                        ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                        : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                    }`
                                }`
                            }>LogIn</NavLink>
                        </li>
                    </ul>

                    {/* Nav Action  */}
                    <div className='flex items-center gap-x-7 md:gap-x-5' data-aos="fade-left">
                        {/* input field  */}
                        <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden' >
                            <input
                                type="text"
                                placeholder='Search'
                                value={search}
                                // onChange={(e) => setSearch(e.target.value)}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    navigate("/")
                                }}
                                className='flex-1 h-[5vh] px-3 focus:outline-none' />





                            <button className='bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl'>
                                <IoSearch />
                            </button>
                        </div>
                        <a href="#" className={`text-2xl ${darkMode ? "text-white" : "text-zinc-800"}`}>
                            <GoHeartFill />
                        </a>

                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
                            <Link to="/cart" className={`text-2xl ${darkMode ? "text-white" : "text-zinc-800"}`}>
                                <HiShoppingBag />
                            </Link>

                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </motion.div>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-2xl"
                        >
                            {darkMode ? <MdDarkMode /> : <MdLightMode />}
                        </button>

                        {/* Hamburger  */}
                        <a href="#" className={`text-3xl md:hidden ${darkMode ? "text-white" : "text-zinc-800"
                            }`}
                            onClick={toggleMenu}>
                            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                        </a>
                    </div>

                    {/* mobile menu   */}

                    <ul className={`${darkMode
                        ? "bg-zinc-900/90 text-white"
                        : "bg-orange-500/15"
                        } backdrop-blur-xl shadow-xl rounded-xl flex flex-col gap-y-12 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 px-8 py-8 transition-all duration-500 ${showMenu ? "left-1/2" : ""
                        }`}
                    >
                        <li><NavLink to="/" className={({ isActive }) =>
                            `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                ? "text-orange-500 after:w-full"
                                : `${darkMode
                                    ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                    : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                }`
                            }`
                        }>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) =>
                            `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                ? "text-orange-500 after:w-full"
                                : `${darkMode
                                    ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                    : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                }`
                            }`
                        }
                        >About Us</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) =>
                            `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                ? "text-orange-500 after:w-full"
                                : `${darkMode
                                    ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                    : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                }`
                            }`
                        }
                        >Products</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) =>
                            `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                ? "text-orange-500 after:w-full"
                                : `${darkMode
                                    ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                    : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                }`
                            }`
                        }
                        >Contact-us</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive }) =>
                            `relative font-semibold tracking-wider transition-all duration-300 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
    ${isActive
                                ? "text-orange-500 after:w-full"
                                : `${darkMode
                                    ? "text-white hover:text-orange-500 after:w-0 hover:after:w-full"
                                    : "text-zinc-800 hover:text-orange-500 after:w-0 hover:after:w-full"
                                }`
                            }`
                        }
                        >LogIn</NavLink></li>
                        <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden items-center justify-center' >
                            <input type="text"
                                placeholder='Search'
                                className={`flex-1 h-[6vh] px-3 focus:outline-none rounded-l-full
                                     ${darkMode
                                    ? "bg-zinc-800 text-white placeholder:text-zinc-400"
                                    : "bg-white text-black"
                                    }`}

                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                            <button className='bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl'>
                                <IoSearch />
                            </button>
                        </li>
                    </ul>



                </nav>
            </header>


        </>

    )


}

export default Navbar
