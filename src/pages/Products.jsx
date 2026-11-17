
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'
import { useMySearch } from '../Context/SearchContext'

const Products = () => {
  const { searchTerm } = useMySearch()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await axios(
        'https://fakestoreapi.com/products'
      )

      setProducts(response.data)

    } catch (error) {
      console.error('Products fetch failed:', error)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredProducts = searchTerm.trim()
    ? products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : products

  if (loading) return <Loader />

  return (
    <div className='w-full py-6 px-5'>

      {/* Heading */}
      <div className='mb-6'>
        <h2 className='text-2xl font-bold'>
          All Products
        </h2>

        <p className='text-gray-500 text-sm mt-1'>
          Explore our complete collection
        </p>
      </div>
      {
        filteredProducts.length > 0 ? (

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {filteredProducts.map((item) => (
              <div key={item.id}
                onClick={() => navigate(`/Products/${item.id}`)}
                className='border rounded-xl p-4 shadow-sm hover:shadow-lg transition cursor-pointer group'>
                <div className='w-full h-48 mb-4 overflow-hidden'>
                  <img src={item.image} alt={item.title}
                    className='w-full h-full object-contain group-hover:scale-90 transition-all duration-300'
                  />
                </div>
                <h3 className='text-sm font-semibold line-clamp-2'>
                  {item.title}
                </h3>
                <p className='text-lg font-bold mt-2'>
                  ${item.price}
                </p>
                <p className='text-sm text-gray-500 mt-2'>
                  {item.rating.rate.toFixed(1)} {'⭐'.repeat(Math.floor(item.rating.rate))}
                  <span className='ml-1'>
                    ({item.rating.count} reviews)
                  </span>
                </p>
              </div>
            ))}
          </div>
          )
          :
          (
            <div className='text-center py-12'>
              <h2 className='text-xl font-semibold text-gray-600'>
                No products found!
              </h2>
              <p className='text-gray-500 mt-2'>
                Try searching with another product name.
              </p>
            </div>
          )
      }

    </div>
  )
}

export default Products
