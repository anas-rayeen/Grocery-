import React from 'react'
import Banner from '../Bannner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Category from '../Category/Category'

const CategoryPage = ({ title, bgImage, categories = [] }) => {

    let filteredItems = categories.includes('All')
        ? ProductList
        : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filteredItems.map(product => {
        return (
            <Cards
                id={product.id}
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
            />
        )
    })

    return (
        <div>
            <Banner title={title} bgImage={bgImage} />

            <div className='max-w-[1400px] mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-8'>
                {renderProduct}
            </div>

        </div>
    )
}

export default CategoryPage