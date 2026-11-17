import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'
import { useMyContent } from '../Context/CartContext'

const DetailsPage = () => {
    const { id } = useParams()
    const data = useMyContent()
    
    function cartHandle(){
        data.addToCart(product)
    }

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            setError('')
            const response = await axios(
                `https://fakestoreapi.com/products/${id}`
            )
            setProduct(response.data)
        } catch (error) {
            console.error(error)
            setError('Unable to load product details.')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    if (loading) return <Loader />
    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                {error}
            </div>
        )
    }

    if (!product) return null

    return (
        <div className="w-full px-4 py-8 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 
            md:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="bg-white rounded-2xl p-6 md:p-10 
                shadow-sm border flex items-center justify-center min-h-[75] md:min-h-[112.5]">
                    <img src={product.image}
                        alt={product.title}
                        className="w-full h-64 md:h-[95] object-contain hover:scale-105 transition duration-300"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm uppercase
                     tracking-widest text-gray-500">
                        {product.category}
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl
                     font-bold text-gray-900 leading-tight">
                        {product.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500">
                            {'⭐'.repeat(Math.floor(product.rating.rate))}
                        </span>
                        <span className="text-gray-600 text-sm">
                            {product.rating.rate}
                        </span>
                        <span className="text-gray-400 text-sm">
                            ({product.rating.count} reviews)
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-emerald-700">
                        ${product.price}
                    </h2>

                    <div className="border-t border-gray-200 pt-5 mt-2">
                        <h3 className="font-semibold text-lg mb-2">
                            Product Description
                        </h3>
                        <p className="text-gray-600 leading-7 text-sm md:text-base">
                            {product.description}
                        </p>
                    </div>
                    <button onClick={cartHandle}
                        className="bg-amber-700 hover:bg-amber-800
                         text-white font-semibold py-3 px-6 rounded-xl transition duration-300 mt-4">                   
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage