import React, { useContext } from 'react'
import Heading from '../Heading/Heading';
import FruitsCat from '../../assets/fruits-and-veggies.png';
import DairyCat from '../../assets/dairy-and-eggs.png';
import SeaFoodCat from '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';


const Category = () => {
    const { darkMode } = useContext(ThemeContext);

    const renderCards = category.map(card => {
        return (
            // Cards 
            <div key={card.id} className='flex-1 basis-[300px] ' data-aos="zoom-in-up">
                {/* Card-Image  */}
                <div className=' w-full min-h-[30vh] relative -mb-10 overflow-hidden'>
                    <img src={card.image} className='absolute bottom-0  w-[400px] h-auto object-contain left-1/2 -translate-x-1/2' />
                </div>
                {/* Card-Content  */}
                <div className={`pt-17 p-8 rounded-xl ${darkMode
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-100 text-black"
                    }`}>
                    <h3 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-zinc-800"
                        }`}>{card.title}</h3>
                    <p className={`mt-3 mb-9 ${darkMode ? "text-zinc-300" : "text-zinc-600"
                        }`}
                    >{card.description}</p>
                    <Link to={card.path} className='text-white bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 md:text-lg text-md rounded-lg hover:scale-105
         hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>


        )
    })







    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Shop" heading="by Category" />

                {/* category cards  */}
                <div className='flex flex-wrap gap-10 md:mt-15'>
                    {renderCards}
                </div>
            </div>

        </section>
    )
}


export default Category;

const category = [
    {
        id: 1,
        title: "Fruits & Vegetables",
        description: "Fresh and organic fruits and vegetables for a healthy lifestyle.",
        image: FruitsCat,
        path: '/fruits'

    },
    {
        id: 2,
        title: "Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image: DairyCat,
        path: '/dairy'
    },
    {
        id: 3,
        title: "Meat & SeaFood",
        description: "High-quality, responsibly sourced meat and seafood, choose from freshcuts, marinated options and more.",
        image: SeaFoodCat,
        path: '/seafood'
    },
]
