
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LuGrip } from "react-icons/lu";
import Hero from './Hero'
import ProductSection from '../Components/ProductSection';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useState([])
    const [showCategories, setShowCategories] = useState(false)

    async function fetchData() {
        const response = await axios(
            'https://fakestoreapi.com/products'
        )
        setProducts(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const categories = [
        ...new Set(products.map(item => item.category))
    ]

    return (
        <div>
            <div className='flex flex-col gap-2'>
                <Hero />
                <div className="relative w-fit py-5"
                    onMouseEnter={() => setShowCategories(true)}
                    onMouseLeave={() => setShowCategories(false)}>
                    <LuGrip className="cursor-pointer text-2xl" />
                    {showCategories && (
                        <div
                            className="absolute left-full top-0 z-50
                     bg-white shadow-lg rounded-lg p-4 min-w-48">
                            {categories.map((category, index) => (
                                <div key={index}
                                    className="p-2 hover:bg-gray-100 cursor-pointer">
                                    {category}
                                </div>
                            ))}
                        </div>

                    )}
                </div>
            </div>
            <ProductSection />

        </div>
    )
}

export default Home
