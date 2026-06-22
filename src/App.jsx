import React, { useState } from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Contact from './components/Contact/Contact'
import './App.css';
import LogIn from './components/LogIn/LogIn'
import About from './components/About/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from "sonner";
import ProductDetails from './components/ProductDetails/ProductDetails'
import AddToCart from './components/AddToCart/AddToCart';
import Checkout from './components/Checkout/Checkout'
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";



const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);

  const [search, setSearch] = useState("");

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout search={search} setSearch={setSearch} />,
      children: [
        {
          path: "/",
          element: <Home search={search} />,
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seafood',
          element: <SeaFood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
        },
        {
          path: '/cart',
          element: <AddToCart />
        },
        {
          path: '/checkout',
          element: <Checkout />
        },
        {
          path: "/order-success",
          element: <OrderSuccess />
        }


      ]
    },

  ])



  return <><RouterProvider router={router} />
    <Toaster richColors position="top-center" />
  </>

}

export default App
