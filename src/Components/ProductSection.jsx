
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { useMySearch } from '../Context/SearchContext'

const ProductSection = () => {
    const { searchTerm } = useMySearch()
    const [productsSect, setProductsSect] = useState([])
    const navigate = useNavigate()

    async function fetchData() {
        const response = await axios(
            'https://fakestoreapi.com/products'
        )
        const productsSelection = response.data.slice(0, 8)
        setProductsSect(productsSelection)
    }
    useEffect(() => {
        fetchData()
    }, [])


    const filteredProducts = searchTerm.trim()
        ? productsSect.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        :
        productsSect

    return (
        <div className='w-full py-2 px-5'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>
                    Featured Products
                </h2>
                <Link to="/Products"
                    className='text-blue-600 font-semibold hover:underline'>                
                    View All →
                </Link>
            </div>

            {
                productsSect.length > 0 ? (
                    filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                            {filteredProducts.map((item) => (
                                <div onClick={() => navigate(`/Products/${item.id}`)}
                                    key={item.id}
                                    className='border rounded-xl p-4 shadow-sm hover:shadow-lg transition group cursor-pointer'>
                                    <img src={item.image}
                                        alt={item.title}
                                        className='w-full h-48 object-contain mb-4 aspect-square hover:scale-90 transition-all'
                                    />
                                    <h3 className='text-sm font-semibold line-clamp-2'>
                                        {item.title}
                                    </h3>
                                    <p className='text-lg font-bold mt-2'>
                                        ${item.price}
                                    </p>
                                </div>
                            ))}

                        </div>

                    )
                        :
                        (
                            <div className='text-center py-10'>
                                <h2 className='text-xl font-semibold text-gray-600'>
                                    No products found!
                                </h2>
                                <p className='text-gray-500 mt-2'>
                                    Try searching with another product name.
                                </p>
                            </div>
                        )
                )
                    :
                    (
                        <div className='text-center py-10'>
                            <Loader />
                        </div>
                    )
            }

        </div>
    )
}

export default ProductSection
