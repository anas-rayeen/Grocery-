import React, { useContext, useState } from 'react'
import Heading from '../Heading/Heading';
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ThemeContext } from '../../context/ThemeContext';

const Products = () => {

    const { darkMode } = useContext(ThemeContext);

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Meat & SeaFood']
    const [activeTab, setActiveTab] = useState('All')

    let filteredItems = activeTab === 'All'
        ? ProductList : ProductList.filter(item => item.category === activeTab);




    const rendersCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards id={product.id} key={product.id} image={product.image} name={product.name} price={product.price} />
        )



    })

    return (
        <section >
            <div className='max-w-[1400px] mx-auto px-10 py-20' data-aos="zoom-in-up">
                <Heading highlight="Our" heading="Products" />

                {/* tabs  */}
                <div className='flex flex-wrap gap-5 mt-10 justify-center '>
                    {categories.map(category => {
                        return (
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                key={category}
                                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? 'bg-orange-500 text-white' : darkMode
                                    ? "bg-zinc-800 text-white"
                                    : "bg-zinc-100 text-zinc-800"}`}
                    onClick={() => setActiveTab(category)}
                            >
                    {category}
                </motion.button>
                )
                    })}
            </div>

            {/* product listing  */}

            <div className='grid grid-cols-1 md:grid-cols-4 gap-9  mt-20'>
                {rendersCards}
            </div>
            <div className='mt-15 mx-auto w-fit'>
                <Link to="/allproducts" className='text-white bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105
         hover:to-orange-600 transition-all duration-300 cursor-pointer'>View All</Link>
            </div>

        </div>

        </section >
    )
}


export default Products;

