import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from "../ProductList/ProductList";
import { FaStar } from "react-icons/fa";
import { motion } from 'motion/react'
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from '../../context/ThemeContext';



const ProductDetails = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);


  const { id } = useParams();
  const product = ProductList.find(
    (item) => item.id === Number(id)
  );



  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      item => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
    toast.success(`${product.name} added to cart`);

  };
  // const handleAddToCart = () => {
  //   setCartItems([
  //     ...cartItems,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ]);
  //   toast.success(`${product.name} added to cart`);
  // };


  return (
    <section className="max-w-[1400px] mx-auto px-10 py-30">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div className={`w-full h-[400px] rounded-xl flex items-center justify-center ${darkMode ? "bg-zinc-800" : "bg-gray-100"
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Right */}
        <div>
          <h1 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-zinc-800"
            }`}
          >
            {product.name}
          </h1>

          <p className="text-orange-500 text-3xl font-bold mt-4">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </span>

            <span className={darkMode ? "text-zinc-300" : "text-gray-600"}>
              ({product.rating} Star)
            </span>
            <span className={`ml-2 ${darkMode ? "text-zinc-400" : "text-gray-500"
              }`}>
              ({Math.floor(product.rating * 100)} Reviews)
            </span>
          </div>

          <p className={`mt-6 ${darkMode ? "text-zinc-300" : "text-gray-700"
            }`}
          >
            {product.description}
          </p>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg">
            Add To Cart
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;