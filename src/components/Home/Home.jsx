import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Values/Value'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const Home = ({search}) => {

  const filteredProducts = ProductList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )


  // return (
  //   <div>
  //     <Hero />
  //     <Category /> 
  //     <Value /> 
  //     <Products />
  //     <Discount />
  //     <Process />
  //     <Testimonials />
      
  //   </div>
  // )
  return (
  <div>

    {
      search.length > 0 ? (

        filteredProducts.length > 0 ? (

            // Search Results
            <div className='max-w-[1400px] mx-auto px-10 py-30 grid grid-cols-1 md:grid-cols-4 gap-8'>

              {filteredProducts.map((item) => (
                <Cards
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}

            </div>

          ) : (

            // Product Not Found
            <div className='h-[60vh] flex items-center justify-center'>
              <h1 className='text-4xl font-bold text-zinc-800'>
                Oops! Product Not Found 😔
              </h1>
            </div>

          )

      ) : (

        <>
          <Hero />
          <Category />
          <Value />
          <Products />
          <Discount />
          <Process />
          <Testimonials />
        </>

      )
    }

  </div>
)
}

export default Home;
